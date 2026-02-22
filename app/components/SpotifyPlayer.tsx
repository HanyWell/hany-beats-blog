'use client'

import { useState, useEffect, useCallback } from 'react'
import { spotifyConfig } from '@/config/spotify'
import { getSpotifyAuthUrl, isAuthenticated, clearTokens } from '@/lib/spotify-auth'
import { useSpotifyPlayer } from '@/hooks/useSpotifyPlayer'
import ErrorBoundary from './ErrorBoundary'

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function SDKPlayer({ onDisconnect }: { onDisconnect: () => void }) {
  const {
    isReady,
    isPlaying,
    currentTrack,
    position,
    duration,
    play,
    pause,
    resume,
    next,
    prev,
    seek,
    error,
    disconnect,
  } = useSpotifyPlayer()

  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (isReady && !hasStarted) {
      play().then(() => setHasStarted(true)).catch(() => {})
    }
  }, [isReady, hasStarted, play])

  const handleDisconnect = useCallback(() => {
    disconnect()
    clearTokens()
    onDisconnect()
  }, [disconnect, onDisconnect])

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!duration) return
      const rect = e.currentTarget.getBoundingClientRect()
      const ratio = (e.clientX - rect.left) / rect.width
      seek(Math.floor(ratio * duration))
    },
    [duration, seek]
  )

  if (error) {
    return (
      <div className="space-y-3">
        <p className="text-red-400 text-xs text-center">{error}</p>
        <button
          onClick={handleDisconnect}
          className="w-full py-2 text-xs text-gray-400 hover:text-white transition-colors"
        >
          Odpojiť a skúsiť znova
        </button>
      </div>
    )
  }

  if (!isReady) {
    return (
      <div className="flex flex-col items-center gap-3 py-8">
        <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-xs">Pripájanie k Spotify...</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {/* Track info */}
      {currentTrack ? (
        <div className="flex items-center gap-3">
          {currentTrack.albumArt && (
            <img
              src={currentTrack.albumArt}
              alt={currentTrack.name}
              className="w-12 h-12 rounded-lg flex-shrink-0"
            />
          )}
          <div className="min-w-0 flex-1">
            <p className="text-white text-sm font-medium truncate">{currentTrack.name}</p>
            <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-400 text-xs text-center">Waiting for track...</p>
      )}

      {/* Progress bar */}
      <div className="space-y-1">
        <div
          className="h-1.5 bg-gray-700 rounded-full cursor-pointer group"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-green-500 rounded-full transition-all group-hover:bg-green-400"
            style={{ width: duration ? `${(position / duration) * 100}%` : '0%' }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-500">
          <span>{formatTime(position)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="text-gray-400 hover:text-white transition-colors text-lg"
          title="Predchádzajúca"
        >
          ⏮
        </button>
        <button
          onClick={isPlaying ? pause : resume}
          className="w-10 h-10 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center text-black text-lg transition-colors"
          title={isPlaying ? 'Pauza' : 'Prehrať'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button
          onClick={next}
          className="text-gray-400 hover:text-white transition-colors text-lg"
          title="Ďalšia"
        >
          ⏭
        </button>
      </div>

      {/* Disconnect */}
      <button
        onClick={handleDisconnect}
        className="w-full py-1.5 text-[10px] text-gray-500 hover:text-gray-300 transition-colors"
      >
        Odpojiť Spotify
      </button>
    </div>
  )
}

function UnauthenticatedView() {
  const [loading, setLoading] = useState(false)

  const handleConnect = async () => {
    setLoading(true)
    try {
      const url = await getSpotifyAuthUrl()
      window.location.href = url
    } catch {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      <button
        onClick={handleConnect}
        disabled={loading}
        className="w-full py-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 rounded-xl text-black font-bold text-sm transition-colors"
      >
        {loading ? 'Presmerovanie...' : 'Pripojiť Spotify Premium'}
      </button>

      <p className="text-[10px] text-gray-500 text-center">
        Pre plné prehrávanie skladieb je potrebný Premium účet
      </p>

      {/* Iframe fallback */}
      <ErrorBoundary>
        <iframe
          src={`${spotifyConfig.mainPlaylist.embedUrl}?utm_source=generator&theme=0`}
          width="100%"
          height="280"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
          title={`${spotifyConfig.mainPlaylist.title} - Spotify Playlist`}
        />
      </ErrorBoundary>

      <p className="text-[10px] text-gray-400 text-center">
        Embed prehráva len 30s ukážky. <a href={spotifyConfig.mainPlaylist.directUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Otvor v Spotify app</a>
      </p>
    </div>
  )
}

export default function SpotifyPlayer() {
  const [showSpotify, setShowSpotify] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    setAuthenticated(isAuthenticated())
  }, [])

  const handleDisconnect = useCallback(() => {
    setAuthenticated(false)
  }, [])

  return (
    <>
      {/* Spotify button */}
      <button
        onClick={() => setShowSpotify(!showSpotify)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 hover:scale-110 group"
        title={showSpotify ? "Zavrieť Spotify" : "Otvoriť Spotify"}
      >
        {showSpotify ? '✕' : '🎵'}
        <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping"></div>
      </button>

      {/* Spotify Player */}
      <div className={`
        fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40
        w-[calc(100vw-2rem)] md:w-96
        bg-black/95 backdrop-blur-lg border border-green-500/30 rounded-2xl shadow-2xl transition-all duration-500
        ${showSpotify ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
      `}>
        <div className="p-3 md:p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">💚</span>
              <h3 className="text-xs md:text-sm font-bold text-white truncate">{spotifyConfig.mainPlaylist.title}</h3>
            </div>
            <button
              onClick={() => setShowSpotify(false)}
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              ✕
            </button>
          </div>

          {authenticated ? (
            <SDKPlayer onDisconnect={handleDisconnect} />
          ) : (
            <UnauthenticatedView />
          )}
        </div>
      </div>

      <div className="h-20"></div>
    </>
  )
}
