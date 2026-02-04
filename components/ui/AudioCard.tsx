'use client'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import BaseCard from '@/components/ui/BaseCard'
import { sharedTransitions } from '@/lib/animationVariants'
import { AudioCardProps } from '@/types/components'

export default function AudioCard({ 
  title, 
  audioSrc, 
  description = "Tento mix sa prehráva z priečinka public/mixy ako WAV súbor.",
  index = 0,
  className = ""
}: AudioCardProps) {
  return (
    <BaseCard 
      index={index}
      className={`space-y-4 max-w-xl ${className}`}
    >
      <motion.div
        className="text-2xl font-semibold text-white"
        whileHover={{ 
          color: theme.colors.primary[600],
          textShadow: `0 0 20px ${theme.colors.glow.red}`,
          transition: sharedTransitions.hover
        }}
      >
        {title}
      </motion.div>

      <motion.div
        className="relative group"
        whileHover={{ scale: 1.02 }}
        transition={sharedTransitions.hover}
      >
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: `0 0 20px ${theme.colors.glow.redSubtle}`,
            border: `1px solid ${theme.colors.primary[600]}40`
          }}
        />
        
        <audio
          controls
          className="w-full relative z-10"
          src={audioSrc}
        >
          Tvoj prehliadač nepodporuje prehrávanie audia.
        </audio>
      </motion.div>

      <motion.p 
        className="text-gray-400 text-sm"
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </BaseCard>
  )
}
