'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FlipCardProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  className?: string
}

export default function FlipCard({ frontContent, backContent, className = '' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`relative ${className}`} style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-full flex flex-col">
            <div className="flex-grow">
              {frontContent}
            </div>
            
            {/* Flip Button - INSIDE content div */}
            <div className="px-6 pb-6">
              <button
                onClick={() => setIsFlipped(true)}
                className="w-full mt-3 py-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 border border-white/10 rounded-lg hover:bg-white/5"
              >
                <span>Flip Card</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col">
            <div className="flex-grow">
              {backContent}
            </div>
            
            {/* Flip Back Button - INSIDE content div */}
            <div className="px-6 pb-6">
              <button
                onClick={() => setIsFlipped(false)}
                className="w-full mt-3 py-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 border border-white/10 rounded-lg hover:bg-white/5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Flip Back</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
