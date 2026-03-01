'use client'

import Link from 'next/link'
import Image from 'next/image'
import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { Disc3, Code2 } from 'lucide-react'
import FlipCard from '@/components/ui/FlipCard'
import SkillBadge from '@/components/ui/SkillBadge'
import Timeline from '@/components/ui/Timeline'
import ExpandablePersona from '@/components/ui/ExpandablePersona'
import PixelTransition from '@/components/PixelTransition'
import PixelCard from '@/components/PixelCard'
import ElectricBorder from '@/components/ElectricBorder'
import ProfileCard from '@/components/ProfileCard'
import AvatarOrb from './AvatarOrb'
import ProfileCardModal from './ProfileCardModal'
import GlassCard from '@/components/ui/GlassCard'

const HeroSection = memo(function HeroSection() {
  const [activeModal, setActiveModal] = useState<'dj' | 'dev' | null>(null)
  
  const djTimeline = [
    { year: '2010-2013', title: 'ZaÄŤiatky', description: 'Learning curve, prvĂ© mixy' },
    { year: '2013-2018', title: 'Peak Era', description: 'Active mixing, events, vinyl sets' },
    { year: '2018-2021', title: 'Pauza', description: '2-3 roky break time', isPause: true },
    { year: '2021-2026', title: 'NĂˇvrat', description: 'Hany Beats born, 100+ mixov' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Desktop: Avatar Orbs - Enhanced spacing & colors */}
        <div className="hidden lg:flex justify-center items-center gap-16 mb-24 min-h-[480px]">
          <AvatarOrb
            imageSrc="/img/223951.jpg"
            glowColor="#f87171"
            onClick={() => setActiveModal('dj')}
          />
          <AvatarOrb
            imageSrc="/img/steven-shea-kyuubi-seal.jpg"
            glowColor="#22d3ee"
            onClick={() => setActiveModal('dev')}
          />
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

        {/* OLD Desktop: Side by Side - DISABLED */}
        <div className="hidden" style={{display: 'none'}}>
          
          {/* LEFT SIDE - DJ PERSONA */}
          <ExpandablePersona symbolType="uchiha" side="left">
            <FlipCard
              className="h-full"
              frontContent={
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full bg-gradient-to-br from-black/80 via-red-950/20 to-black/80 backdrop-blur-md rounded-2xl p-6 flex flex-col">
                      {/* Avatar with Vinyl Border Animation */}
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        {/* Rotating Vinyl Border */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                          <Disc3 className="w-full h-full text-red-500/30" />
                        </motion.div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur-xl opacity-50" />
                        
                        {/* Photo */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-500/50">
                          <Image src="/img/ja.jpg" alt="Hany Well" fill className="object-cover" priority />
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-black text-white mb-1">đźŽ§ Hany Well</h2>
                        <p className="text-red-400 font-semibold text-sm">DJ â€˘ Producer â€˘ Vinyl Lover</p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-400 text-xs leading-relaxed mb-4 text-center">
                        Drum & Bass je mĂ´j Ĺľivot. Od roku 2010 v scĂ©ne, 
                        vraciam sa s ÄŤerstvou energiou a stovkami mixov.
                      </p>

                      {/* Quick Facts - PixelCards */}
                      <div className="grid grid-cols-2 gap-3 mb-4 flex-grow">
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đź’ż</div>
                            <div className="text-xs text-gray-300 font-medium">Vinyl DJ</div>
                          </div>
                        </ElectricBorder>
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đźŽĽ</div>
                            <div className="text-xs text-gray-300 font-medium">Stovky</div>
                            <div className="text-xs text-gray-400">playlistov</div>
                          </div>
                        </ElectricBorder>
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đźŽ§</div>
                            <div className="text-xs text-gray-300 font-medium">10K+</div>
                            <div className="text-xs text-gray-400">Plays</div>
                          </div>
                        </ElectricBorder>
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đź”Ą</div>
                            <div className="text-xs text-gray-300 font-medium">100+</div>
                            <div className="text-xs text-gray-400">Mixov</div>
                          </div>
                        </ElectricBorder>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-2">
                        <Link 
                          href="/mixy"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full font-semibold transition-all text-center text-xs"
                        >
                          Mixy
                        </Link>
                        <Link 
                          href="/playlisty"
                          className="flex-1 px-4 py-2 border-2 border-red-500 text-red-400 hover:bg-red-600/10 rounded-full font-semibold transition-all text-center text-xs"
                        >
                          Playlisty
                        </Link>
                      </div>
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full bg-gradient-to-br from-black/80 via-red-950/20 to-black/80 backdrop-blur-md rounded-2xl p-6 flex flex-col">
                      {/* Avatar with Vinyl Border Animation */}
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        {/* Rotating Vinyl Border */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                          <Disc3 className="w-full h-full text-red-500/30" />
                        </motion.div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur-xl opacity-50" />
                        
                        {/* Photo */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-500/50">
                          <Image src="/img/ja.jpg" alt="Hany Well" fill className="object-cover" priority />
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-black text-white mb-1">đźŽ§ Hany Well</h2>
                        <p className="text-red-400 font-semibold text-sm">DJ â€˘ Producer â€˘ Vinyl Lover</p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-400 text-xs leading-relaxed mb-4 text-center">
                        Drum & Bass je mĂ´j Ĺľivot. Od roku 2010 v scĂ©ne, 
                        vraciam sa s ÄŤerstvou energiou a stovkami mixov.
                      </p>

                      {/* Quick Facts - PixelCards */}
                      <div className="grid grid-cols-2 gap-3 mb-4 flex-grow">
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đź’ż</div>
                            <div className="text-xs text-gray-300 font-medium">Vinyl DJ</div>
                          </div>
                        </ElectricBorder>
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đźŽĽ</div>
                            <div className="text-xs text-gray-300 font-medium">Stovky</div>
                            <div className="text-xs text-gray-400">playlistov</div>
                          </div>
                        </ElectricBorder>
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đźŽ§</div>
                            <div className="text-xs text-gray-300 font-medium">10K+</div>
                            <div className="text-xs text-gray-400">Plays</div>
                          </div>
                        </ElectricBorder>
                        <ElectricBorder color="#dc2626" speed={0.3} chaos={0.13}  style={{ borderRadius: 12 }}>
                          <div className="px-3 py-3 bg-black/40 text-center h-full flex flex-col items-center justify-center">
                            <div className="text-2xl mb-1">đź”Ą</div>
                            <div className="text-xs text-gray-300 font-medium">100+</div>
                            <div className="text-xs text-gray-400">Mixov</div>
                          </div>
                        </ElectricBorder>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-2">
                        <Link 
                          href="/mixy"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full font-semibold transition-all text-center text-xs"
                        >
                          Mixy
                        </Link>
                        <Link 
                          href="/playlisty"
                          className="flex-1 px-4 py-2 border-2 border-red-500 text-red-400 hover:bg-red-600/10 rounded-full font-semibold transition-all text-center text-xs"
                        >
                          Playlisty
                        </Link>
                      </div>
                    </div>
                  }
                  gridSize={20}
                  pixelColor="#dc2626"
                  once={true}
                  animationStepDuration={0.5}
                />
              }
              backContent={
                <div className="bg-gradient-to-br from-black/80 via-red-950/20 to-black/80 backdrop-blur-md border border-red-500/20 rounded-2xl p-6 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>đź“…</span>
                    <span>Timeline</span>
                  </h3>
                  
                  <div className="flex-grow">
                    <Timeline events={djTimeline} />
                  </div>
                  
                  <div className="mt-auto pt-3 border-t border-white/5">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
                      <span>đźŽµ</span>
                      <span>Ĺ˝Ăˇnre:</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {['Liquid', 'Deep', 'Neurofunk', 'HARD', 'UpTempo'].map(genre => (
                        <span key={genre} className="px-2 py-0.5 bg-red-500/20 text-red-300 text-xs rounded-full border border-red-500/30">
                          {genre}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">đź“Ť Bratislava, SK</p>
                  </div>
                </div>
              }
            />
          </ExpandablePersona>

          {/* RIGHT SIDE - DEVELOPER PERSONA */}
          <ExpandablePersona symbolType="kyuubi" side="right">
            <FlipCard
              className="h-full"
              frontContent={
                <PixelTransition
                  firstContent={
                    <div className="bg-gradient-to-br from-black/80 via-orange-950/20 to-black/80 backdrop-blur-md border border-orange-500/20 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[500px]">
                      {/* Avatar with Code Brackets */}
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        {/* Rotating Code Brackets */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <Code2 className="w-full h-full text-orange-500/30" />
                        </motion.div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-xl opacity-50" />
                        
                        {/* Photo */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/50">
                          <Image src="/img/ja.jpg" alt="Some Mahony" fill className="object-cover" />
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-black text-white mb-1">đź’» Some Mahony</h2>
                        <p className="text-orange-400 font-semibold text-sm">Full-Stack Developer</p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-400 text-xs leading-relaxed mb-4 text-center max-w-xs">
                        PretvĂˇranie nĂˇpadov na ĹľivĂ©, interaktĂ­vne weby. 
                        Ĺ pecializĂˇcia na modernĂ© frameworky a UX dizajn.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex gap-2 w-full max-w-xs">
                        <Link 
                          href="/blog"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white rounded-full font-semibold transition-all text-center text-xs"
                        >
                          Blog
                        </Link>
                        <Link 
                          href="/about"
                          className="flex-1 px-4 py-2 border-2 border-orange-500 text-orange-400 hover:bg-orange-600/10 rounded-full font-semibold transition-all text-center text-xs"
                        >
                          About
                        </Link>
                      </div>
                    </div>
                  }
                  secondContent={
                    <div className="bg-gradient-to-br from-black/80 via-orange-950/20 to-black/80 backdrop-blur-md border border-orange-500/20 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[500px]">
                      {/* Avatar with Code Brackets */}
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        {/* Rotating Code Brackets */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <Code2 className="w-full h-full text-orange-500/30" />
                        </motion.div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-xl opacity-50" />
                        
                        {/* Photo */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/50">
                          <Image src="/img/ja.jpg" alt="Some Mahony" fill className="object-cover" />
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-black text-white mb-1">đź’» Some Mahony</h2>
                        <p className="text-orange-400 font-semibold text-sm">Full-Stack Developer</p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-400 text-xs leading-relaxed mb-4 text-center max-w-xs">
                        PretvĂˇranie nĂˇpadov na ĹľivĂ©, interaktĂ­vne weby. 
                        Ĺ pecializĂˇcia na modernĂ© frameworky a UX dizajn.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex gap-2 w-full max-w-xs">
                        <Link 
                          href="/blog"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white rounded-full font-semibold transition-all text-center text-xs"
                        >
                          Blog
                        </Link>
                        <Link 
                          href="/about"
                          className="flex-1 px-4 py-2 border-2 border-orange-500 text-orange-400 hover:bg-orange-600/10 rounded-full font-semibold transition-all text-center text-xs"
                        >
                          About
                        </Link>
                      </div>
                    </div>
                  }
                  gridSize={20}
                  pixelColor="#ea580c"
                  once={true}
                  animationStepDuration={0.5}
                />
              }
              backContent={
                <div className="bg-gradient-to-br from-black/80 via-orange-950/20 to-black/80 backdrop-blur-md border border-orange-500/20 rounded-2xl p-6 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>đź’ˇ</span>
                    <span>Filozofia kĂłdu</span>
                  </h3>
                  
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">
                    <span className="text-orange-400 font-semibold">"KaĹľdĂ˝ pixel mĂˇ zmysel."</span><br/>
                    Programovanie nie je len o funkÄŤnosti - je to umenie vytvĂˇrania 
                    bezproblĂ©movĂ˝ch skĂşsenostĂ­, kde design stretĂˇva vĂ˝kon.
                  </p>

                  <div className="space-y-2.5 flex-grow">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2.5 border border-white/5">
                      <h4 className="text-xs font-semibold text-orange-400 mb-1.5 flex items-center gap-1">
                        <span>đźŽŻ</span>
                        <span>PrincĂ­py</span>
                      </h4>
                      <ul className="text-xs text-gray-400 space-y-0.5">
                        <li>â€˘ Clean Code & Best Practices</li>
                        <li>â€˘ Performance First Approach</li>
                        <li>â€˘ Responsive & Accessible Design</li>
                        <li>â€˘ Continuous Learning & Innovation</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2.5 border border-white/5">
                      <h4 className="text-xs font-semibold text-orange-400 mb-1.5 flex items-center gap-1">
                        <span>đźš€</span>
                        <span>AktuĂˇlny Focus</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {['Next.js 16', 'Sanity CMS', 'Framer Motion', 'Three.js'].map(tech => (
                          <span key={tech} className="px-2 py-0.5 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-3 border-t border-white/5">
                    <p className="text-xs text-gray-500 text-center italic">
                      "Code is poetry written in logic" đź§™â€Ťâ™‚ď¸Ź
                    </p>
                  </div>
                </div>
              }
            />
          </ExpandablePersona>
        </div>

        {/* Mobile: Glass Cards */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {/* DJ Glass Card */}
            <GlassCard glowColor="red" intensity="medium" className="p-8">
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-2xl opacity-60" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-400/50">
                  <Image src="/img/ja.jpg" alt="Hany Well" fill className="object-cover" priority />
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-white mb-2">🎧 Hany Well</h2>
                <p className="text-red-400 text-base font-bold tracking-wide">DJ • Producer • Vinyl Lover</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                  <div className="text-xl font-black text-red-400">10K+</div>
                  <div className="text-xs text-gray-500">Plays</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                  <div className="text-xl font-black text-red-400">100+</div>
                  <div className="text-xs text-gray-500">Mixov</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                  <div className="text-xl font-black text-red-400">300+</div>
                  <div className="text-xs text-gray-500">Followers</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link href="/mixy" className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white rounded-full font-bold text-sm text-center transition-all duration-300 shadow-lg">
                  Mixy
                </Link>
                <Link href="/playlisty" className="flex-1 px-6 py-3 border-2 border-red-400/50 text-red-400 hover:bg-red-500/10 rounded-full font-bold text-sm text-center transition-all duration-300">
                  Playlisty
                </Link>
              </div>
            </GlassCard>

            {/* Dev Glass Card - Cyan theme */}
            <GlassCard glowColor="cyan" intensity="medium" className="p-8">
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full blur-2xl opacity-60" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/50">
                  <Image src="/img/ja.jpg" alt="Some Mahony" fill className="object-cover" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-white mb-2">💻 Some Mahony</h2>
                <p className="text-cyan-400 text-base font-bold tracking-wide">Front-End Developer</p>
              </div>

              <div className="space-y-3 mb-6">
                <SkillBadge name="Next.js" level={90} color="cyan" />
                <SkillBadge name="React" level={90} color="blue" />
                <SkillBadge name="TypeScript" level={85} color="blue" />
              </div>

              <div className="flex gap-3">
                <Link href="/blog" className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-full font-bold text-sm text-center transition-all duration-300 shadow-lg">
                  Blog
                </Link>
                <Link href="/about" className="flex-1 px-6 py-3 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-bold text-sm text-center transition-all duration-300">
                  About
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </section>
  )
})

export default HeroSection

