'use client'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Download,
  Loader2
} from 'lucide-react'
import WaveformDisplay from './WaveformDisplay'
import { ANIMATION_DURATIONS } from '@/lib/constants'

interface DJAudioPlayerProps {
  audioSrc: string
  title: string
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  isLoading: boolean
  error: string | null
  togglePlay: () => void
  seek: (time: number) => void
  skip: (seconds: number) => void
  setVolume: (vol: number) => void
  toggleMute: () => void
  className?: string
}

export default function DJAudioPlayer({
  audioSrc,
  title,
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
  className = ''
}: DJAudioPlayerProps) {
  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    if (!isFinite(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATIONS.SMOOTH }}
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 ${className}`}
    >
      {/* Title and time */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Waveform / Progress Bar */}
      <WaveformDisplay
        currentTime={currentTime}
        duration={duration}
        onSeek={seek}
        className="mb-6"
      />

      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        {/* Left controls */}
        <div className="flex items-center gap-2">
          {/* Skip back 10s */}
          <motion.button
            onClick={() => skip(-10)}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Späť 10s"
          >
            <SkipBack className="w-5 h-5" />
          </motion.button>

          {/* Play/Pause */}
          <motion.button
            onClick={togglePlay}
            disabled={isLoading || !!error}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-red-600 hover:bg-red-500 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  exit={{ scale: 0 }}
                  transition={{ rotate: { duration: 1, repeat: Infinity, ease: "linear" } }}
                >
                  <Loader2 className="w-6 h-6" />
                </motion.div>
              ) : isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Pause className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Play className="w-6 h-6 ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Skip forward 10s */}
          <motion.button
            onClick={() => skip(10)}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Vpred 10s"
          >
            <SkipForward className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Volume control - hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              onClick={toggleMute}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </motion.button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-red-500
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:hover:bg-red-400
                [&::-webkit-slider-thumb]:transition-colors"
            />
          </div>

          {/* Download */}
          <motion.a
            href={audioSrc}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            title="Stiahnuť"
          >
            <Download className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
