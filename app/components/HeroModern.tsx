'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Effects - optimalizované pre mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/5 to-black" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-red-600/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-red-700/30 rounded-full blur-3xl animate-bounce" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 -z-5" />

      {/* Main Content - Mobile-First */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Hero Title - Mobile: 32px → Tablet: 48px → Desktop: 80px */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HANY{' '}
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            BEATS
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="w-24 sm:w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6 sm:mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Subtitle - Mobile-First Typography */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 sm:mb-4 font-semibold px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Drum & Bass • Nočné príbehy v beatoch
        </motion.p>

        {/* Description - Mobile optimalizované */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Toto nie je promo stránka. Je to denník človeka, ktorý padal, vracal sa
          a vždy skončil pri hudbe. Ak hľadáš len playlist, si na zlom mieste.
          Ak hľadáš iskru, ktorá ťa nakopne začať…{' '}
          <span className="text-red-400 font-semibold">vitaj v mojom svete.</span>
        </motion.p>

        {/* CTA Buttons - Touch-Friendly (min 44px height) */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-24 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            href="/blog"
            className="group relative min-h-[44px] px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] overflow-hidden active:scale-95"
            aria-label="Vstúpiť do blogu"
          >
            <span className="relative z-10 flex items-center justify-center">Vstúpiť do blogu 🔥</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>

          <Link
            href="/playlisty"
            className="min-h-[44px] px-8 sm:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-red-500/50 hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="Počuť môj svet - playlisty"
          >
            Počuť môj svet 🎧
          </Link>
        </motion.div>

        {/* Stats - Mobile Stack → Desktop Grid */}
        <motion.div
          className="border-t border-white/10 pt-8 sm:pt-16 grid grid-cols-3 gap-4 sm:gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">50+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">DJ Mixov</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">15+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">Rokov</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">∞</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">Bass Drops</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden na malých mobiloch */}
      <motion.div
        className="hidden sm:block absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-red-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
