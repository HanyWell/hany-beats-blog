'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { getAccessToken, refreshAccessToken, clearTokens } from '@/lib/spotify-auth'
import { spotifyConfig } from '@/config/spotify'

interface UseSpotifyPlayerReturn {
  isReady: boolean
  isPlaying: boolean
  currentTrack: {
    name: string
    artist: string
    albumArt: string
  } | null
  position: number
  duration: number
  deviceId: string | null
  play: (contextUri?: string) => Promise<void>
  pause: () => Promise<void>
  resume: () => Promise<void>
  next: () => Promise<void>
  prev: () => Promise<void>
  seek: (ms: number) => Promise<void>
  setVolume: (value: number) => Promise<void>
  error: string | null
  disconnect: () => void
}

async function getValidToken(): Promise<string> {
  const token = getAccessToken()
  if (token) return token

  try {
    return await refreshAccessToken()
  } catch {
    clearTokens()
    throw new Error('Session expired')
  }
}

export function useSpotifyPlayer(): UseSpotifyPlayerReturn {
  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<UseSpotifyPlayerReturn['currentTrack']>(null)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)
  const [deviceId, setDeviceId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const playerRef = useRef<SpotifyPlayerInstance | null>(null)
  const positionInterval = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearPositionInterval = useCallback(() => {
    if (positionInterval.current) {
      clearInterval(positionInterval.current)
      positionInterval.current = null
    }
  }, [])

  const startPositionTracking = useCallback(() => {
    clearPositionInterval()
    positionInterval.current = setInterval(() => {
      setPosition((prev) => prev + 1000)
    }, 1000)
  }, [clearPositionInterval])

  useEffect(() => {
    let mounted = true

    function loadScript(): Promise<void> {
      return new Promise((resolve) => {
        if (window.Spotify) {
          resolve()
          return
        }
        const existing = document.getElementById('spotify-sdk')
        if (existing) {
          window.onSpotifyWebPlaybackSDKReady = () => resolve()
          return
        }
        const script = document.createElement('script')
        script.id = 'spotify-sdk'
        script.src = 'https://sdk.scdn.co/spotify-player.js'
        script.async = true
        window.onSpotifyWebPlaybackSDKReady = () => resolve()
        document.body.appendChild(script)
      })
    }

    async function initPlayer() {
      try {
        await loadScript()
        if (!mounted) return

        const player = new window.Spotify.Player({
          name: 'Hany Beats',
          getOAuthToken: async (cb) => {
            try {
              const token = await getValidToken()
              cb(token)
            } catch {
              if (mounted) setError('Session expired — please reconnect')
            }
          },
          volume: 0.8,
        })

        player.addListener('ready', ({ device_id }) => {
          if (!mounted) return
          setDeviceId(device_id)
          setIsReady(true)
          setError(null)
        })

        player.addListener('not_ready', () => {
          if (!mounted) return
          setIsReady(false)
        })

        player.addListener('player_state_changed', (state) => {
          if (!mounted || !state) return

          const track = state.track_window.current_track
          setCurrentTrack({
            name: track.name,
            artist: track.artists.map((a) => a.name).join(', '),
            albumArt: track.album.images[0]?.url || '',
          })
          setPosition(state.position)
          setDuration(state.duration)
          setIsPlaying(!state.paused)

          if (state.paused) {
            clearPositionInterval()
          } else {
            startPositionTracking()
          }
        })

        player.addListener('initialization_error', ({ message }) => {
          if (mounted) setError(`Init error: ${message}`)
        })

        player.addListener('authentication_error', ({ message }) => {
          if (mounted) setError(`Auth error: ${message}`)
        })

        player.addListener('account_error', ({ message }) => {
          if (mounted) setError(`Account error: ${message}. Spotify Premium is required.`)
        })

        const connected = await player.connect()
        if (!connected && mounted) {
          setError('Failed to connect to Spotify')
        }

        playerRef.current = player
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err.message : 'Failed to initialize player')
      }
    }

    initPlayer()

    return () => {
      mounted = false
      clearPositionInterval()
      playerRef.current?.disconnect()
    }
  }, [clearPositionInterval, startPositionTracking])

  const play = useCallback(async (contextUri?: string) => {
    const id = deviceId
    if (!id) return

    const token = await getValidToken()
    const uri = contextUri || `spotify:playlist:${spotifyConfig.mainPlaylist.id}`

    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ context_uri: uri }),
    })
  }, [deviceId])

  const pause = useCallback(async () => {
    await playerRef.current?.pause()
  }, [])

  const resume = useCallback(async () => {
    await playerRef.current?.resume()
  }, [])

  const next = useCallback(async () => {
    await playerRef.current?.nextTrack()
  }, [])

  const prev = useCallback(async () => {
    await playerRef.current?.previousTrack()
  }, [])

  const seek = useCallback(async (ms: number) => {
    await playerRef.current?.seek(ms)
  }, [])

  const setVolumeLevel = useCallback(async (value: number) => {
    await playerRef.current?.setVolume(value)
  }, [])

  const disconnect = useCallback(() => {
    clearPositionInterval()
    playerRef.current?.disconnect()
    playerRef.current = null
    setIsReady(false)
    setIsPlaying(false)
    setCurrentTrack(null)
    setDeviceId(null)
  }, [clearPositionInterval])

  return {
    isReady,
    isPlaying,
    currentTrack,
    position,
    duration,
    deviceId,
    play,
    pause,
    resume,
    next,
    prev,
    seek,
    setVolume: setVolumeLevel,
    error,
    disconnect,
  }
}
