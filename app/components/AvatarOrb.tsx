'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, MouseEvent } from 'react'

interface AvatarOrbProps {
  imageSrc: string
  glowColor: string
  onClick: () => void
}

export default function AvatarOrb({ imageSrc, glowColor, onClick }: AvatarOrbProps) {
  const [tiltAngles, setTiltAngles] = useState({ angleX: 0, angleY: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Only enable 3D tilt on desktop (pointer device)
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const angleX = (y - centerY) / 15  // Tilt up/down
    const angleY = (centerX - x) / 15  // Tilt left/right

    setTiltAngles({ angleX, angleY })
  }

  const handleMouseLeave = () => {
    setTiltAngles({ angleX: 0, angleY: 0 })
  }

  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Floating animation - subtle drift
      animate={{
        y: [0, -10, 0],
        rotateZ: [0, 2, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* 3D perspective container */}
      <div
        className="relative w-32 h-32 md:w-48 md:h-48 transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tiltAngles.angleX}deg) rotateY(${tiltAngles.angleY}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Glass Border Glow Layer */}
        <div
          className="absolute -inset-2 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${glowColor}40 0%, transparent 70%)`
          }}
        />

        {/* Avatar Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <Image
            src={imageSrc}
            alt="Avatar"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Inner Glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${glowColor}30 0%, transparent 60%)`
            }}
          />
        </div>

        {/* Outer Ring Glow */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 60px ${glowColor}60, 0 0 100px ${glowColor}30`
          }}
        />
      </div>
    </motion.div>
  )
}
