import { useRef, useState, useEffect, RefObject, useCallback } from 'react'

export interface AudioPlayerState {
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  isLoading: boolean
  error: string | null
}

export interface UseAudioPlayerReturn extends AudioPlayerState {
  togglePlay: () => void
  seek: (time: number) => void
  skip: (seconds: number) => void
  setVolume: (vol: number) => void
  toggleMute: () => void
  audioRef: RefObject<HTMLAudioElement | null>
}

export function useAudioPlayer(audioSrc: string): UseAudioPlayerReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Create audio element on mount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.preload = 'metadata'
    }
  }, [])

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((err) => {
        setError('Nepodarilo sa prehrat audio')
        console.error('Audio playback error:', err)
      })
    }
  }, [isPlaying])

  // Seek to specific time
  const seek = useCallback((time: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = Math.max(0, Math.min(time, duration))
  }, [duration])

  // Skip forward or backward
  const skip = useCallback((seconds: number) => {
    if (!audioRef.current) return
    const newTime = audioRef.current.currentTime + seconds
    seek(newTime)
  }, [seek])

  // Set volume
  const setVolume = (vol: number) => {
    if (!audioRef.current) return
    const clampedVolume = Math.max(0, Math.min(1, vol))
    audioRef.current.volume = clampedVolume
    setVolumeState(clampedVolume)
    if (clampedVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    if (!audioRef.current) return
    
    if (isMuted) {
      audioRef.current.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoading(false)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handlePlay = () => {
      setIsPlaying(true)
      setError(null)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handleError = () => {
      setError('Chyba pri načítaní audio súboru')
      setIsLoading(false)
      setIsPlaying(false)
    }

    const handleCanPlay = () => {
      setIsLoading(false)
      setError(null)
    }

    // Add event listeners
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)
    audio.addEventListener('canplay', handleCanPlay)

    // Cleanup
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  // Update audio src when it changes and autoplay
  useEffect(() => {
    const audio = audioRef.current
    if (audio && audioSrc) {
      if (audio.src !== audioSrc) {
        console.log('Loading audio src:', audioSrc)
        audio.src = audioSrc
        audio.load()
        // Autoplay when new src is loaded
        audio.play().catch((err) => {
          console.error('Autoplay failed:', err)
          setError('Autoplay zablokovaný prehliadačom. Klikni na play.')
        })
      }
    }
  }, [audioSrc])

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isLoading,
    error,
    togglePlay,
    seek,
    skip,
    setVolume,
    toggleMute,
    audioRef
  }
}
