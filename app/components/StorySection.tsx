'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'
import Link from 'next/link'
import GlassCard from '@/components/ui/GlassCard'

const StorySection = memo(function StorySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden" aria-labelledby="story-title">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/3 to-transparent -z-10" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard glowColor="red" intensity="low" className="p-6 sm:p-10 md:p-12">
            
            {/* Intro */}
            <div className="text-center mb-10">
              <h2 id="story-title" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Čo je vlastne <span className="text-red-400">Hany Beats</span>?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                Moja vizitka. Webového developera a DJ-a v jednom.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
              
              {/* Left - Why */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-2xl">🎧</span> Prečo DJing?
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Ten pocit, keď stojíš za pultom a vidíš ľudí pod pódiom, ako sa bavia... 
                  To sa nedá opísať. Proste to musíš zažiť.
                </p>
                <p className="text-gray-400 text-sm">
                  15+ rokov pri bubnoch a basoch. A stále ma to baví rovnako.
                </p>
              </div>

              {/* Right - What */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-2xl">🔥</span> Čo tu nájdeš?
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">→</span>
                    <span><strong className="text-white">Moje mixy</strong> — 100+ setov, od liquidu po neurofunk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">→</span>
                    <span><strong className="text-white">Playlisty</strong> — hudba, ktorú ja počúvam, bez náhodných algoritmov</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">→</span>
                    <span><strong className="text-white">Blog</strong> — príbehy, tipy a občas aj kecy do vetra</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote / Motto */}
            <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent border-l-4 border-red-500 pl-6 py-5 mb-10 rounded-r-xl">
              <p className="text-white text-lg sm:text-xl font-bold">
                &ldquo;Hany Beats je miesto, kde spoznáš moju osobu cez playlisty, 
                kde nájdeš motiváciu pokračovať a nevzdať to.&rdquo;
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/mixy"
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Počúvaj Mixy 🎧
              </Link>
              <Link 
                href="/playlisty"
                className="px-8 py-3 border-2 border-white/20 hover:border-red-400/50 text-white hover:text-red-400 font-bold rounded-full text-center transition-all duration-300"
              >
                Objavuj Playlisty
              </Link>
            </div>

          </GlassCard>
        </motion.div>

      </div>
    </section>
  )
})

export default StorySection
