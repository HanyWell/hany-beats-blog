'use client'

import { memo } from 'react'

interface GeometricBackgroundProps {
  className?: string
}

const GeometricBackground = memo(function GeometricBackground({ className = '' }: GeometricBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Diagonal stripes pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(220, 38, 38, 0.5) 35px,
            rgba(220, 38, 38, 0.5) 70px
          )`
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Animated red glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Geometric shapes */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="geometric" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="2" fill="#dc2626" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="#dc2626" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="#dc2626" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric)" />
      </svg>
    </div>
  )
})

export default GeometricBackground
