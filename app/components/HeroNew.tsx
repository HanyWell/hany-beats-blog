'use client'

import Link from 'next/link'
import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import ElectricBorder from '@/components/ElectricBorder'
import AvatarOrb from './AvatarOrb'
import ProfileCardModal from './ProfileCardModal'

const HeroNew = memo(function HeroNew() {
  const [activeModal, setActiveModal] = useState<'dj' | 'dev' | null>(null)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">

        {/* Main Hero Card with Electric Border */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ElectricBorder
            color="#f87171"
            speed={0.5}
            chaos={0.15}
            borderRadius={32}
            className="bg-black/60 backdrop-blur-xl"
          >
            <div className="p-6 sm:p-10 md:p-12">

              {/* Top Section - Avatars + Intro */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-10">

                {/* Avatars Container */}
                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-center">
                    <AvatarOrb
                      imageSrc="/img/223951.jpg"
                      glowColor="#f87171"
                      onClick={() => setActiveModal('dj')}
                    />
                    <p className="mt-3 text-sm text-red-400 font-bold">🎧 DJ</p>
                  </div>

                  <div className="text-3xl text-gray-600 font-black">+</div>

                  <div className="text-center">
                    <AvatarOrb
                      imageSrc="/img/steven-shea-kyuubi-seal.jpg"
                      glowColor="#22d3ee"
                      onClick={() => setActiveModal('dev')}
                    />
                    <p className="mt-3 text-sm text-cyan-400 font-bold">💻 Dev</p>
                  </div>
                </div>

                {/* Intro Text */}
                <div className="text-center lg:text-left flex-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
                    Hany <span className="text-red-400">Beats</span>
                  </h1>
                  <p className="text-gray-400 text-base sm:text-lg max-w-xl">
                    Moja vizitka. Webový developer a DJ v jednom.
                    Klikni na avatar a zisti viac.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-10" />

              {/* Story Content */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">

                {/* Left - Why */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">🎧</span> Prečo DJing?
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Ten pocit, keď stojíš za pultom a vidíš ľudí pod pódiom, ako sa bavia...
                    To sa nedá opísať. Proste to musíš zažiť.
                  </p>
                  <p className="text-gray-500 text-sm">
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
                      <span><strong className="text-white">Playlisty</strong> — hudba, ktorú ja počúvam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">→</span>
                      <span><strong className="text-white">Blog</strong> — príbehy, tipy a občas aj kecy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent border-l-4 border-red-500 pl-6 py-5 mb-10 rounded-r-xl">
                <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                  &ldquo;Hany Beats je miesto, kde spoznáš moju osobu cez playlisty,
                  kde nájdeš motiváciu pokračovať a nevzdať to.&rdquo;
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/mixy"
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-105 active:scale-95"
                >
                  Počúvaj Mixy 🎧
                </Link>
                <Link
                  href="/playlisty"
                  className="px-8 py-3 border-2 border-white/20 hover:border-red-400/50 text-white hover:text-red-400 font-bold rounded-full text-center transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Objavuj Playlisty
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-3 border-2 border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 font-bold rounded-full text-center transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Čítaj Blog
                </Link>
              </div>

            </div>
          </ElectricBorder>
        </motion.div>

      </div>

      {/* Profile Card Modals */}
      <ProfileCardModal
        isOpen={activeModal === 'dj'}
        onClose={() => setActiveModal(null)}
        type="dj"
      />
      <ProfileCardModal
        isOpen={activeModal === 'dev'}
        onClose={() => setActiveModal(null)}
        type="dev"
      />
    </section>
  )
})

export default HeroNew
