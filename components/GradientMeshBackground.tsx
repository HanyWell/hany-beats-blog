'use client'

import { memo } from 'react'

interface GradientMeshBackgroundProps {
  className?: string
}

const GradientMeshBackground = memo(function GradientMeshBackground({ className = '' }: GradientMeshBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated gradient mesh blobs */}
      <div className="absolute inset-0">
        {/* Blob 1 - Top Left */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, transparent 70%)',
            animationDuration: '7s'
          }}
        />
        
        {/* Blob 2 - Top Right */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
            animationDuration: '9s',
            animationDelay: '2s'
          }}
        />
        
        {/* Blob 3 - Bottom */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-25 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(185, 28, 28, 0.5) 0%, transparent 70%)',
            animationDuration: '11s',
            animationDelay: '4s'
          }}
        />
        
        {/* Center accent */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(248, 113, 113, 0.6) 0%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
})

// Add blob animation to globals.css if not present
export default GradientMeshBackground
