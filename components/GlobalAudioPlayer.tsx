'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useAudio } from '@/contexts/AudioContext'
import { X, Maximize2, ExternalLink, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'

const DJAudioPlayer = dynamic(() => import('@/components/ui/DJAudioPlayer'), {
  ssr: false
})

export default function GlobalAudioPlayer() {
  const { currentTrack, clearTrack, updateTime, updateIsPlaying, registerControls } = useAudio()
  const [isExpanded, setIsExpanded] = useState(false)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  
  const { isPlaying, currentTime, duration, volume, isMuted, isLoading, error, togglePlay, seek, skip, setVolume, toggleMute } = useAudioPlayer(
    currentTrack?.audioSrc || ''
  )

  // Register controls with context
  useEffect(() => {
    registerControls({ seek, togglePlay })
  }, [seek, togglePlay, registerControls])

  // Update time continuously
  useEffect(() => {
    updateTime(currentTime, duration)
  }, [currentTime, duration, updateTime])

  // Sync isPlaying state with context
  useEffect(() => {
    updateIsPlaying(isPlaying)
  }, [isPlaying, updateIsPlaying])

  if (!currentTrack) return null

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-red-500/30 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Mini player header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold truncate">{currentTrack.title}</h4>
                {currentTrack.artist && (
                  <p className="text-gray-400 text-sm truncate">{currentTrack.artist}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Expand/Collapse */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title={isExpanded ? 'Minimalizovať' : 'Rozbaliť'}
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Link to mix detail */}
              {currentTrack.slug && (
                <Link
                  href={`/mixy/${currentTrack.slug}`}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Otvoriť detail"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}

              {/* Close */}
              <button
                onClick={clearTrack}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                title="Zavrieť"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Expanded player */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <DJAudioPlayer
                  audioSrc={currentTrack.audioSrc}
                  title={currentTrack.title}
                  isPlaying={isPlaying}
                  currentTime={currentTime}
                  duration={duration}
                  volume={volume}
                  isMuted={isMuted}
                  isLoading={isLoading}
                  error={error}
                  togglePlay={togglePlay}
                  seek={seek}
                  skip={skip}
                  setVolume={setVolume}
                  toggleMute={toggleMute}
                  className="border-0 bg-transparent p-0"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mini player controls (when collapsed) */}
          {!isExpanded && (
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 text-white hover:text-red-400 transition-colors flex-shrink-0"
                title={isPlaying ? 'Pozastaviť' : 'Prehrať'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const percent = (e.clientX - rect.left) / rect.width
                seek(percent * duration)
              }}>
                <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>

              {/* Volume control */}
              <div className="relative flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  className="p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  title={isMuted ? 'Zapnúť zvuk' : 'Stlmiť'}
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 100 }}
                      exit={{ opacity: 0, width: 0 }}
                      onMouseLeave={() => setShowVolumeSlider(false)}
                      className="overflow-hidden"
                    >
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={isMuted ? 0 : volume * 100}
                        onChange={(e) => setVolume(Number(e.target.value) / 100)}
                        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:bg-red-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
