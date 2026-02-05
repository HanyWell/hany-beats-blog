'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ExpandablePersonaProps {
  symbolType: 'uchiha' | 'kyuubi'
  children: React.ReactNode
  side: 'left' | 'right'
}

export default function ExpandablePersona({ symbolType, children, side }: ExpandablePersonaProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => setIsExpanded(true)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsExpanded(true)
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          // Symbol State (Sealed)
          <motion.div
            key="symbol"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="flex items-center justify-center h-[700px] cursor-pointer group"
            onClick={handleExpand}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`Otvoriť ${symbolType === 'uchiha' ? 'DJ' : 'Developer'} profil`}
            aria-expanded={isExpanded}
          >
            <div className="relative">
              {symbolType === 'uchiha' ? (
                // Uchiha Symbol (Red theme) - TVOJ OBRÁZOK
                <motion.div
                  className="w-80 h-80 relative cursor-pointer group"
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                  onClick={handleExpand}
                  onKeyDown={handleKeyDown}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-red-500/30 rounded-full blur-3xl animate-pulse" />
                  
                  {/* Symbol Image */}
                  <motion.div
                    className="relative w-full h-full flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <Image
                      src="/img/223951.jpg"
                      alt="Uchiha Clan Symbol"
                      width={320}
                      height={320}
                      className="object-contain drop-shadow-[0_0_30px_rgba(239,68,68,0.7)]"
                      priority
                    />
                  </motion.div>
                  
                  {/* Hover text */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    aria-hidden="true"
                  >
                    <p className="text-red-400 font-bold text-xl">
                      Klikni pre Reveal 👈
                    </p>
                  </motion.div>
                </motion.div>
              ) : (
                // Kyuubi Seal Symbol (Orange theme) - TVOJ OBRÁZOK
                <motion.div
                  className="w-80 h-80 relative cursor-pointer group"
                  whileHover={{ scale: 1.12, rotate: -5 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                  onClick={handleExpand}
                  onKeyDown={handleKeyDown}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
                  
                  {/* Symbol Image */}
                  <motion.div
                    className="relative w-full h-full flex items-center justify-center"
                    animate={{ 
                      rotate: [0, -360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <Image
                      src="/img/steven-shea-kyuubi-seal.jpg"
                      alt="Nine-Tails Seal Symbol"
                      width={320}
                      height={320}
                      className="object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.7)]"
                      priority
                    />
                  </motion.div>
                  
                  {/* Hover text */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    aria-hidden="true"
                  >
                    <p className="text-orange-400 font-bold text-xl">
                      👉 Klikni pre Reveal
                    </p>
                  </motion.div>
                </motion.div>
              )}

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {[
                  { left: 20, top: 25 },
                  { left: 80, top: 15 },
                  { left: 50, top: 70 },
                  { left: 10, top: 85 },
                  { left: 90, top: 40 },
                  { left: 60, top: 55 }
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1.5 h-1.5 rounded-full ${
                      symbolType === 'uchiha' ? 'bg-red-500' : 'bg-orange-500'
                    }`}
                    style={{
                      left: `${pos.left}%`,
                      top: `${pos.top}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          // Expanded State (Persona Card)
          <motion.div
            key="persona"
            initial={{ scale: 0.3, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.3, opacity: 0, rotateY: -90 }}
            transition={{ 
              duration: 0.7, 
              type: 'spring', 
              stiffness: 100 
            }}
            className="h-[700px]"
            role="region"
            aria-label={`${symbolType === 'uchiha' ? 'DJ' : 'Developer'} profil`}
          >
            {children}
            
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className={`absolute top-4 ${side === 'left' ? 'right-4' : 'left-4'} px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                symbolType === 'uchiha'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                  : 'bg-orange-500/20 text-orange-400 border border-orange-500/30 hover:bg-orange-500/30'
              }`}
              aria-label="Zatvoriť profil a vrátiť symbol"
            >
              ← Seal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
