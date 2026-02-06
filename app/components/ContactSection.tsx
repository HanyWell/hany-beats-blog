'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { socials } from '@/config/socials'
import { memo } from 'react'
import SocialIcon from '@/components/ui/SocialIcon'
import { SPACING_VALUES, ANIMATION_DURATIONS, DELAYS, SIZES } from '@/lib/constants'

const ContactSection = memo(function ContactSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden" aria-labelledby="contact-title">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent -z-10" aria-hidden="true" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title - Mobile-First Typography */}
        <motion.h2
          id="contact-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-12 sm:mb-16 md:mb-20 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_DURATIONS.SMOOTH }}
        >
          Zostaňme v Kontakte
        </motion.h2>

        {/* Social icons - Touch-friendly */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: DELAYS.CONTENT_DELAY, duration: ANIMATION_DURATIONS.SMOOTH }}
          role="list"
          aria-label="Sociálne siete"
        >
        <SocialIcon
          href={socials.instagram}
          icon="📷"
          label="Instagram profil Hany Beats"
        />
        <SocialIcon
          href={socials.soundcloud}
          icon="🎵"
          label="SoundCloud profil Hany Beats"
        />
        <SocialIcon
          href={socials.youtube}
          icon="▶️"
          label="YouTube kanál Hany Beats"
        />
        </motion.div>

        {/* CTA button - Touch-friendly */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: DELAYS.HOVER_DELAY, duration: ANIMATION_DURATIONS.SMOOTH }}
        >
          <Link
            href="/about"
            className="group inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-red-500/50 min-h-[44px] active:scale-95"
            aria-label="Zistiť viac o Hany Beats - DJ a producent"
          >
            <span className="relative z-10">Zisti Viac O Mne →</span>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
})

export default ContactSection
