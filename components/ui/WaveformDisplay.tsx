'use client'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface WaveformDisplayProps {
  currentTime: number
  duration: number
  onSeek: (time: number) => void
  className?: string
}

export default function WaveformDisplay({
  currentTime,
  duration,
  onSeek,
  className = ''
}: WaveformDisplayProps) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  // Generate more realistic waveform with bass-heavy pattern
  const waveformBars = useMemo(() => {
    const barCount = 80
    const seed = 12345 // Fixed seed for consistent waveform
    return Array.from({ length: barCount }, (_, i) => {
      // Create bass-heavy pattern (typical for DnB)
      const normalized = i / barCount
      const bassWave = Math.sin(normalized * Math.PI * 4) * 30
      const midWave = Math.sin(normalized * Math.PI * 8) * 20
      const highWave = Math.sin(normalized * Math.PI * 16) * 15
      const pseudoRandom = ((Math.sin(i + seed) + 1) / 2) * 10 - 5
      
      const height = 50 + bassWave + midWave + highWave + pseudoRandom
      return Math.max(25, Math.min(95, height))
    })
  }, [])

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newTime = percent * duration
    onSeek(newTime)
  }

  return (
    <div
      onClick={handleSeek}
      className={`relative h-24 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm rounded-xl cursor-pointer overflow-hidden group border border-white/5 ${className}`}
    >
      {/* Waveform bars */}
      <div className="absolute inset-0 flex items-end justify-around px-1 pb-1">
        {waveformBars.map((height, i) => {
          const barProgress = (i / waveformBars.length) * 100
          const isPlayed = barProgress <= progress
          
          return (
            <motion.div
              key={i}
              className={`w-full max-w-[4px] rounded-t-sm transition-all duration-200 ${
                isPlayed 
                  ? 'bg-gradient-to-t from-red-600 via-red-500 to-red-400 shadow-[0_0_8px_rgba(239,68,68,0.5)]' 
                  : 'bg-gradient-to-t from-gray-700 to-gray-600 group-hover:from-gray-600 group-hover:to-gray-500'
              }`}
              style={{ height: `${height}%` }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4,
                delay: i * 0.005,
                ease: "easeOut"
              }}
            />
          )
        })}
      </div>

      {/* Playhead with glow */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none z-10"
        style={{ left: `${progress}%` }}
        animate={{ 
          opacity: [0.8, 1, 0.8],
          boxShadow: [
            '0 0 15px rgba(255,255,255,0.8)',
            '0 0 20px rgba(255,255,255,1)',
            '0 0 15px rgba(255,255,255,0.8)'
          ]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Time hover preview */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent" />
      </div>
    </div>
  )
}
