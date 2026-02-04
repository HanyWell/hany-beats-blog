'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const GenreSection = memo(function GenreSection() {
  return (
    <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden" aria-labelledby="genre-title">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          id="genre-title"
          className="text-5xl md:text-6xl font-black text-center mb-20 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Môj DnB Style
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6" role="list">
          {/* LIQUID */}
          <motion.div 
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-500 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-red-500/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            role="listitem"
            tabIndex={0}
          >
            <div className="text-xs text-gray-600 font-bold mb-3 uppercase tracking-widest">(01)</div>
            <h3 className="text-2xl font-black text-red-500 mb-3">
              Liquid
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Melodické breaky, focus, smooth vibes, spev, klavír
            </p>
          </motion.div>

          {/* JUMP-UP & DEEP */}
          <motion.div 
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-500 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-red-500/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            role="listitem"
            tabIndex={0}
          >
            <div className="text-xs text-gray-600 font-bold mb-3 uppercase tracking-widest">(02)</div>
            <h3 className="text-2xl font-black text-red-500 mb-3">
              Jump-up & Deep
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Energické, tvrdé basy, party atmosféra, riadne petardy!!! Rap do toho... pffuuu
            </p>
          </motion.div>

          {/* NEUROFUNK */}
          <motion.div 
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-500 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-red-500/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            role="listitem"
            tabIndex={0}
          >
            <div className="text-xs text-gray-600 font-bold mb-3 uppercase tracking-widest">(03)</div>
            <h3 className="text-2xl font-black text-red-500 mb-3">
              Neurofunk
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Temné, technické, futuristické zvuky, riadna plecharina a diktovačka!!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default GenreSection
