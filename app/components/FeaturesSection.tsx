'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { createMotionProps } from '../../lib/motion'
import { SPACING_VALUES, VISUAL_VALUES, ANIMATION_DURATIONS, DELAYS, SIZES } from '@/lib/constants'

const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section className={`py-${SPACING_VALUES.SECTION_VERTICAL} px-6 relative overflow-hidden`} aria-labelledby="features-title">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          id="features-title"
          className={`${SIZES.SECTION_TITLE} font-black text-center mb-20 text-white`}
          {...createMotionProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: ANIMATION_DURATIONS.SMOOTH }
          })}
        >
          Čo tu nájdeš
        </motion.h2>
        
        {/* Grid 2x2 - Glassmorphism cards */}
        <div className="grid md:grid-cols-2 gap-6" role="list">
          
          {/* DJ SETS - DISABLED */}
          <motion.div
            className="relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden opacity-50 cursor-not-allowed"
            initial={{ opacity: 0, y: VISUAL_VALUES.TRANSLATE_Y_INITIAL }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: DELAYS.CONTENT_DELAY, duration: ANIMATION_DURATIONS.FAST }}
            title="Coming Soon - Pripravujeme pre teba!"
            role="listitem"
            aria-label="DJ Sets - pripravuje sa"
          >
            {/* Disabled overlay */}
            <div className="absolute inset-0 bg-black/30 z-20" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="text-6xl mb-4" aria-hidden="true">🎛️</div>
              <div className="text-xs text-gray-600 font-bold mb-2 uppercase tracking-widest">(01)</div>
              <h3 className="text-3xl font-black text-white mb-3">
                DJ Sets
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Moja DnB selekcia prevažne také rezkejšie tempo 😅 ale aj deep setiky a kľudnejšie tempo
              </p>
              <span className="inline-block mt-3 text-xs text-red-500 font-semibold animate-pulse">
                Coming Soon 🚧
              </span>
            </div>
          </motion.div>

          {/* PRODUCTION - DISABLED */}
          <motion.div
            className="relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden opacity-50 cursor-not-allowed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            title="Coming Soon - Pripravujeme pre teba!"
            role="listitem"
            aria-label="Production - pripravuje sa"
          >
            {/* Disabled overlay */}
            <div className="absolute inset-0 bg-black/30 z-20" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="text-6xl mb-4" aria-hidden="true">🎹</div>
              <div className="text-xs text-gray-600 font-bold mb-2 uppercase tracking-widest">(02)</div>
              <h3 className="text-3xl font-black text-white mb-3">
                Production
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Beats, remixes, originálne tracky
              </p>
              <span className="inline-block mt-3 text-xs text-red-500 font-semibold animate-pulse">
                Coming Soon 🚧
              </span>
            </div>
          </motion.div>

          {/* BLOG - ACTIVE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            role="listitem"
          >
            <Link 
              href="/blog"
              className="group relative p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-2xl transition-all duration-500 hover:bg-white/10 block h-full focus:outline-none focus:ring-4 focus:ring-red-500/50"
              aria-label="Prečítať blog o DJ ceste a tipoch"
            >
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">📝</div>
                <div className="text-xs text-gray-600 font-bold mb-2 uppercase tracking-widest">(03)</div>
                <h3 className="text-3xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">
                  Blog
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Moja DJ cesta, motivačné :D, nejaké tipy - triky
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* PLAYLISTS - ACTIVE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            role="listitem"
          >
            <Link 
              href="/playlisty"
              className="group relative p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-2xl transition-all duration-500 hover:bg-white/10 block h-full focus:outline-none focus:ring-4 focus:ring-red-500/50"
              aria-label="Počúvať Drum & Bass playlisty"
            >
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">❤️‍🔥</div>
                <div className="text-xs text-gray-600 font-bold mb-2 uppercase tracking-widest">(04)</div>
                <h3 className="text-3xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">
                  Playlists
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Playlisty ktoré žijem a zároveň budujem
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
})

export default FeaturesSection
