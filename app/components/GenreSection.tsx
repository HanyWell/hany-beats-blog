'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const GenreSection = memo(function GenreSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden" aria-labelledby="genre-title">
      {/* Background glow - menší na mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-red-600/5 rounded-full blur-3xl -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title - Mobile-First Typography */}
        <motion.h2
          id="genre-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 md:mb-20 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Môj DnB Style
        </motion.h2>

        {/* Grid - Mobile: Stack → Tablet: 2 cols → Desktop: 3 cols */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 md:grid-cols-3" role="list">
          {/* LIQUID */}
          <motion.div
            className="p-6 sm:p-7 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-500 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-red-500/50 min-h-[140px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            role="listitem"
            tabIndex={0}
          >
            <div className="text-xs text-gray-600 font-bold mb-2 sm:mb-3 uppercase tracking-widest">(01)</div>
            <h3 className="text-xl sm:text-2xl font-black text-red-500 mb-2 sm:mb-3">
              Liquid
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Melodické breaky, focus, smooth vibes, spev, klavír
            </p>
          </motion.div>

          {/* JUMP-UP & DEEP */}
          <motion.div
            className="p-6 sm:p-7 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-500 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-red-500/50 min-h-[140px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            role="listitem"
            tabIndex={0}
          >
            <div className="text-xs text-gray-600 font-bold mb-2 sm:mb-3 uppercase tracking-widest">(02)</div>
            <h3 className="text-xl sm:text-2xl font-black text-red-500 mb-2 sm:mb-3">
              Jump-up & Deep
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Energické, tvrdé basy, party atmosféra, riadne petardy!!! Rap do toho... pffuuu
            </p>
          </motion.div>

          {/* NEUROFUNK - Full width na mobile ak 3 itemy */}
          <motion.div
            className="p-6 sm:p-7 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-500 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-red-500/50 min-h-[140px] sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            role="listitem"
            tabIndex={0}
          >
            <div className="text-xs text-gray-600 font-bold mb-2 sm:mb-3 uppercase tracking-widest">(03)</div>
            <h3 className="text-xl sm:text-2xl font-black text-red-500 mb-2 sm:mb-3">
              Neurofunk
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Temné, technické, futuristické zvuky, riadna plecharina a diktovačka!!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default GenreSection
