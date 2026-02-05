'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface AvatarOrbProps {
  imageSrc: string
  glowColor: string
  onClick: () => void
}

export default function AvatarOrb({ imageSrc, glowColor, onClick }: AvatarOrbProps) {
  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shadow/dark state by default */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
        <Image
          src={imageSrc}
          alt="Avatar"
          fill
          className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
        
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
          style={{
            background: `radial-gradient(circle, ${glowColor}80 0%, transparent 70%)`,
            transform: 'scale(1.5)'
          }}
        />
      </div>
      
      {/* Outer ring glow */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `0 0 40px ${glowColor}`,
        }}
      />
    </motion.div>
  )
}
