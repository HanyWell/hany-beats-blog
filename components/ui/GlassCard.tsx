import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'red' | 'cyan' | 'purple'
  intensity?: 'low' | 'medium' | 'high'
  hoverable?: boolean
}

const glowColors = {
  red: 'from-red-400/20 to-red-500/20',
  cyan: 'from-cyan-400/20 to-cyan-500/20',
  purple: 'from-purple-400/20 to-purple-500/20'
}

const intensityLevels = {
  low: 'opacity-20 group-hover:opacity-40',
  medium: 'opacity-30 group-hover:opacity-60',
  high: 'opacity-40 group-hover:opacity-75'
}

/**
 * Professional Glassmorphism Card Component
 * Features: Multi-layer blur, border glow, inner highlights
 */
export default function GlassCard({
  children,
  className = '',
  glowColor = 'red',
  intensity = 'medium',
  hoverable = true
}: GlassCardProps) {
  return (
    <div className={cn('relative group', hoverable && 'transition-all duration-500')}>
      {/* Outer Glow Border */}
      <div
        className={cn(
          'absolute -inset-0.5 bg-gradient-to-r rounded-3xl blur opacity-0 transition duration-1000',
          glowColors[glowColor],
          intensityLevels[intensity]
        )}
        aria-hidden="true"
      />

      {/* Glass Card Container */}
      <div className={cn(
        'relative',
        'bg-black/40 backdrop-blur-xl',
        'border border-white/20',
        'rounded-3xl',
        'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
        hoverable && 'group-hover:border-white/30',
        'transition-all duration-300',
        className
      )}>
        {/* Inner Top Highlight */}
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
