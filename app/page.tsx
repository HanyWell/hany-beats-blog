'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black/30 text-white overflow-hidden">


      
      {/* HERO SECTION - MOBILE OPTIMIZED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Static Background */}
<div 
  className="absolute inset-0 bg-cover bg-center -z-30"
  style={{
    backgroundImage: 'url(/UBG.jpg)',
    opacity: 0.3
  }}
/>



        
        {/* Animated gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 -z-25"></div>

        
        {/* Floating particles */}
<div className="absolute inset-0 -z-20">
  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-float-particle-1"></div>
  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-float-particle-2"></div>
  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-float-particle-3"></div>
  <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-red-600 rounded-full animate-float-particle-1" style={{animationDelay: '1s'}}></div>
</div>


        {/* Red glow effect */}
<div className="absolute inset-0 -z-20">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
</div>


        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          {/* Main title - MOBILE FRIENDLY */}
          <div className="mb-6 md:mb-8 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white mb-2 tracking-tight leading-tight">
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.1s'}}>H</span>
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.15s'}}>A</span>
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>N</span>
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.25s'}}>Y</span>
              <span className="inline-block mx-2 sm:mx-4"></span>
              <span className="inline-block animate-fade-in-up text-red-500" style={{animationDelay: '0.3s'}}>B</span>
              <span className="inline-block animate-fade-in-up text-red-500" style={{animationDelay: '0.35s'}}>E</span>
              <span className="inline-block animate-fade-in-up text-red-500" style={{animationDelay: '0.4s'}}>A</span>
              <span className="inline-block animate-fade-in-up text-red-500" style={{animationDelay: '0.45s'}}>T</span>
              <span className="inline-block animate-fade-in-up text-red-500" style={{animationDelay: '0.5s'}}>S</span>
            </h1>
            {/* Animated underline */}
            <div className="w-48 sm:w-64 h-1 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 md:mb-4 font-bold animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Drum & Bass • Nočné príbehy v beatoch
          </p>
          
          <p className="text-base sm:text-lg text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            Toto nie je promo stránka. Je to denník človeka, ktorý padal, vracal sa
            a vždy skončil pri hudbe. Ak hľadáš len playlist, si na zlom mieste.
            Ak hľadáš iskru, ktorá ťa nakopne začať… <span className="text-red-400 font-semibold">vitaj v mojom svete.</span>
          </p>

          {/* CTAs - MOBILE STACKED */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-16 md:mb-20 animate-fade-in-up px-4" style={{animationDelay: '0.8s'}}>
            <Link href="/blog" className="group px-8 md:px-10 py-3 md:py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105 relative overflow-hidden text-center">
              <span className="relative z-10">Vstúpiť do blogu 🔥</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
            <Link href="/playlisty" className="group px-8 md:px-10 py-3 md:py-4 border-2 border-red-500 text-red-400 hover:bg-red-600/20 font-bold rounded-full transition-all duration-300 hover:border-red-400 hover:scale-105 text-center">
              Počuť môj svet 🎧
            </Link>
          </div>

          {/* Stats - MOBILE 3 COLUMNS SMALLER */}
          <div className="border-t border-gray-800 pt-12 md:pt-16 grid grid-cols-3 gap-4 md:gap-12 animate-fade-in-up px-4" style={{animationDelay: '0.9s'}}>
            <div className="group cursor-default">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-1 md:mb-2 group-hover:text-red-500 transition-all duration-500 group-hover:scale-110">
                50+
              </div>
              <div className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">DJ Mixov</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-1 md:mb-2 group-hover:text-red-500 transition-all duration-500 group-hover:scale-110">
                15+
              </div>
              <div className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">Rokov</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-1 md:mb-2 group-hover:text-red-500 transition-all duration-500 group-hover:scale-110">
                ∞
              </div>
              <div className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">Bass Drops</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ČO TU NÁJDEŠ - UPGRADED */}
      <section className="py-32 px-6 relative overflow-hidden">
       
        
      
          {/* ZMENENÝ RIADOK - pridaný -z-30 a znížená opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 -z-30"></div>
        

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-7xl font-black text-center mb-24 text-white animate-fade-in-up">
            Čo tu nájdeš
          </h2>
          
          {/* Grid 2x2 */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* DJ SETS */}
            <div 
              className="group relative p-12 bg-gradient-to-br from-zinc-950/30 to-black/20 backdrop-blur-sm border border-gray-900 rounded-2xl transition-all duration-500 overflow-hidden animate-fade-in-up opacity-70"
              style={{animationDelay: '0.1s'}}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">🎛️</div>
                <div className="text-sm text-gray-600 font-bold mb-3">(01)</div>
                <h3 className="text-4xl font-black text-white mb-4 group-hover:text-red-400 transition-colors">
                  DJ Sets
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Moja DnB selekcia prevažne takú rezkejšie tempo ale aj deep setiky
                </p>
                <span className="inline-block mt-4 text-sm text-red-500/70 font-semibold">
                  Coming Soon 🚧
                </span>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* PRODUCTION */}
            <div 
             className="group relative p-12 bg-gradient-to-br from-zinc-950/30 to-black/20 backdrop-blur-sm border border-gray-900 rounded-2xl transition-all duration-500 overflow-hidden animate-fade-in-up opacity-70"
              style={{animationDelay: '0.2s'}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/5 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6">🎹</div>
                <div className="text-sm text-gray-600 font-bold mb-3">(02)</div>
                <h3 className="text-4xl font-black text-white mb-4">
                  Production
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Beats, remixes, originálne tracky
                </p>
                <span className="inline-block mt-4 text-sm text-red-500/70 font-semibold">
                  Coming Soon 🚧
                </span>
              </div>
            </div>

            {/* BLOG */}
            <Link 
              href="/blog"
              className="group relative p-12 bg-gradient-to-br from-zinc-950/30 to-black/20 backdrop-blur-sm border border-gray-900 hover:border-red-900/60 rounded-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-fade-in-up"
              style={{animationDelay: '0.3s'}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">📝</div>
                <div className="text-sm text-gray-600 font-bold mb-3">(03)</div>
                <h3 className="text-4xl font-black text-white mb-4 group-hover:text-red-400 transition-colors">
                  Blog
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Moja DJ cesta, motivačné :D, nejaké tipy - triky
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

            {/* PLAYLISTS */}
            <Link 
              href="/playlisty"
              className="group relative p-12 bg-gradient-to-br from-zinc-950/30 to-black/20 backdrop-blur-sm border border-gray-900 hover:border-red-900/60 rounded-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-fade-in-up"
              style={{animationDelay: '0.4s'}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">❤️‍🔥</div>
                <div className="text-sm text-gray-600 font-bold mb-3">(04)</div>
                <h3 className="text-4xl font-black text-white mb-4 group-hover:text-red-400 transition-colors">
                  Playlists
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Playlisty ktoré žijem a zároveň budujem
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

          </div>
        </div>
      </section>

      {/* ŽÁNRE - UPGRADED */}\n      <section className="py-32 px-6 border-t border-gray-900 relative overflow-hidden">
       {/* Animated glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-7xl font-black text-center mb-24 text-white animate-fade-in-up">
            Môj DnB Style
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* LIQUID */}
            <div className="group p-10 border border-gray-800 hover:border-red-800 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] bg-black/20 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-sm text-gray-600 font-bold mb-4">(01)</div>
              <h3 className="text-3xl font-black text-red-500 mb-4 group-hover:text-red-400 transition-colors group-hover:scale-105 inline-block">
                Liquid
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Melodické breaky, focus, smooth vibes, spev, klavír
              </p>
            </div>

            {/* JUMP-UP & DEEP */}
            <div className="group p-10 border border-gray-800 hover:border-red-800 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] bg-black/20 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-sm text-gray-600 font-bold mb-4">(02)</div>
              <h3 className="text-3xl font-black text-red-500 mb-4 group-hover:text-red-400 transition-colors group-hover:scale-105 inline-block">
                Jump-up & Deep
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Energické, tvrdé basy, party atmosféra, riadne petardy!!! Rap do toho... pffuuu
              </p>
            </div>

            {/* NEUROFUNK */}
            <div className="group p-10 border border-gray-800 hover:border-red-800 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] bg-black/20 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-sm text-gray-600 font-bold mb-4">(03)</div>
              <h3 className="text-3xl font-black text-red-500 mb-4 group-hover:text-red-400 transition-colors group-hover:scale-105 inline-block">
                Neurofunk
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Temné, technické, futuristické zvuky, riadna plecharina a diktovačka!!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT - UPGRADED */}\n      <section className="py-32 px-6 border-t border-gray-900 relative overflow-hidden">
        {/* Background glow */}
<div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black -z-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-12 text-white animate-fade-in-up">
            Zostaňme v Kontakte
          </h2>
          
          {/* Social icons */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <a href="https://www.instagram.com/_hany_well_/" target="_blank" rel="noopener noreferrer" className="group w-20 h-20 border-2 border-gray-800 rounded-full flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 transition-all text-4xl hover:scale-110 relative overflow-hidden">
              <span className="relative z-10">📷</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a href="https://on.soundcloud.com/ec63S8v1qUqan9cIQq" target="_blank" rel="noopener noreferrer" className="group w-20 h-20 border-2 border-gray-800 rounded-full flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 transition-all text-4xl hover:scale-110 relative overflow-hidden">
              <span className="relative z-10">🎵</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a href="https://www.youtube.com/@TheDJHany" target="_blank" rel="noopener noreferrer" className="group w-20 h-20 border-2 border-gray-800 rounded-full flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 transition-all text-4xl hover:scale-110 relative overflow-hidden">
              <span className="relative z-10">▶️</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          {/* CTA button */}
          <Link href="/about" className="group inline-block px-12 py-5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <span className="relative z-10">Zisti Viac O Mne →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </section>
    </main>
  )
}
