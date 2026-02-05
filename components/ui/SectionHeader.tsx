'use client'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  emoji?: string
  className?: string
  variant?: 'hero' | 'section' | 'playlist'
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  emoji, 
  className = "",
  variant = 'section'
}: SectionHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
        staggerChildren: 0.1
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.2
      }
    }
  }

  const emojiVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.3
      }
    }
  }

  const renderHeroHeader = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`text-center mb-20 relative ${className}`}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="w-96 h-96 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Animated emoji/icon */}
      {emoji && (
        <div className="relative inline-block mb-8">
          <motion.div
            variants={emojiVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity
              }}
              className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-50"
            />
            
            {/* Main icon container */}
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full border-4 border-red-500/30 flex items-center justify-center shadow-2xl">
              {/* Animated inner glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
                className="absolute inset-2 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full"
              />
              
              {/* Emoji */}
              <motion.span
                animate={{
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="text-6xl relative z-10"
              >
                {emoji}
              </motion.span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Animated gradient title */}
      <motion.h1
        variants={titleVariants}
        className="relative inline-block mb-6"
      >
        <motion.span
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity
          }}
          style={{
            backgroundSize: '200% auto'
          }}
        >
          {title}
        </motion.span>
        
        {/* Glowing underline */}
        <motion.div
          animate={{
            scaleX: [0.8, 1, 0.8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        />
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Floating particles */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-0 left-1/4 w-2 h-2 bg-red-500 rounded-full"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        className="absolute top-10 right-1/4 w-3 h-3 bg-pink-500 rounded-full"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-1/3 w-2 h-2 bg-purple-500 rounded-full"
      />
    </motion.div>
  )

  const renderSectionHeader = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`text-center mb-12 ${className}`}
    >
      {/* Background glow */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="absolute inset-0 bg-red-900/20 blur-3xl rounded-full -top-24 -left-24 w-96 h-96"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1
          }}
          className="absolute inset-0 bg-red-800/10 blur-3xl rounded-full -bottom-24 -right-24 w-96 h-96"
        />
        
        <div className="relative z-10 text-center">
          <motion.h1
            variants={titleVariants}
            className="text-6xl font-black italic tracking-tighter bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
            style={{
              filter: `drop-shadow(0 0 30px ${theme.colors.glow.red})`
            }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              variants={subtitleVariants}
              className="text-gray-400 mt-4 text-lg font-medium uppercase tracking-[0.2em]"
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Red line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6"
            style={{ transformOrigin: 'center' }}
          />
        </div>
      </div>
    </motion.div>
  )

  const renderPlaylistHeader = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`text-center mb-20 relative ${className}`}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="w-96 h-96 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Animated headphones icon */}
      {emoji && (
        <div className="relative inline-block mb-8">
          <motion.div
            variants={emojiVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity
              }}
              className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-50"
            />
            
            {/* Main icon container */}
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full border-4 border-red-500/30 flex items-center justify-center shadow-2xl">
              {/* Animated inner glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
                className="absolute inset-2 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full"
              />
              
              {/* Headphones emoji/icon */}
              <motion.span
                animate={{
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="text-6xl relative z-10"
              >
                {emoji}
              </motion.span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Animated gradient title */}
      <motion.h1
        variants={titleVariants}
        className="relative inline-block mb-6"
      >
        <motion.span
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity
          }}
          style={{
            backgroundSize: '200% auto'
          }}
        >
          {title}
        </motion.span>
        
        {/* Glowing underline */}
        <motion.div
          animate={{
            scaleX: [0.8, 1, 0.8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        />
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Floating particles */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-0 left-1/4 w-2 h-2 bg-red-500 rounded-full"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        className="absolute top-10 right-1/4 w-3 h-3 bg-pink-500 rounded-full"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-1/3 w-2 h-2 bg-purple-500 rounded-full"
      />
    </motion.div>
  )

  switch (variant) {
    case 'hero':
      return renderHeroHeader()
    case 'playlist':
      return renderPlaylistHeader()
    default:
      return renderSectionHeader()
  }
}
