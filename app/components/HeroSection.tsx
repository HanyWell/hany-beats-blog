'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { socials } from '@/config/socials'
import { memo } from 'react'
import TrueFocus from '@/components/ui/TrueFocus'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { BREAKPOINTS, VISUAL_VALUES, ANIMATION_DURATIONS, SIZES } from '@/lib/constants'

const HeroSection = memo(function HeroSection() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE}px)`)
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent" aria-labelledby="hero-title">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h1 id="hero-title" className={`${isMobile ? SIZES.HERO_MOBILE_TEXT : SIZES.HERO_DESKTOP_TEXT} font-black mb-6`}>
          <TrueFocus 
            sentence="HANY BEATS"
            manualMode={false}
            blurAmount={VISUAL_VALUES.BLUR_AMOUNT}
            borderColor="#dc2626"
            animationDuration={ANIMATION_DURATIONS.WORD_ANIMATION}
            pauseBetweenAnimations={ANIMATION_DURATIONS.WORD_PAUSE}
            wordColors={['#ffffff', '#dc2626']} // HANY - biela, BEATS - červená
            responsive={true}
            touchEnabled={true}
            performanceMode={'auto'}
            mobileProps={{
              blurAmount: VISUAL_VALUES.BLUR_MOBILE,
              animationDuration: ANIMATION_DURATIONS.FAST,
              fontSize: 'inherit', // Zdedí z h1 text size
              layout: 'horizontal'
            }}
            className="block"
            onWordChange={(index, word) => {
              console.log(`Active word: ${word} (${index})`)
            }}
          />
        </h1>
        <p className="text-2xl text-white mb-12">
          DJ & Producer • Drum & Bass Enthusiast
        </p>
        <Link 
          href="/blog" 
          className="px-10 py-4 bg-red-600 text-white font-bold rounded-full focus:outline-none focus:ring-4 focus:ring-red-500/50 transition-all"
          aria-label="Preskúmať blog o Drum & Bass hudbe a DJ ceste"
        >
          Preskúmať Blog
        </Link>
      </div>
    </section>
  )
})

export default HeroSection
