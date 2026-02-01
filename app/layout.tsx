'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import FloatingLines from './components/FloatingLines'
import { useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300','400','500','600','700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSpotify, setShowSpotify] = useState(false)

  return (
    <>
      <html lang="sk" suppressHydrationWarning className={poppins.variable}>
        <body className="bg-gray-900 text-white font-poppins antialiased relative">
  
  {/* FloatingLines - z-0, dostáva mouse eventy */}
  <div className="fixed inset-0 z-0 overflow-hidden">
    <FloatingLines
      linesGradient={["#4a0404","#990000","#ff1a1a","#1a0000"]}
      animationSpeed={2}
      interactive={true}
      bendRadius={15}
      bendStrength={-2}
      mouseDamping={0.02}
      parallax={true}
      parallaxStrength={0.2}
      mixBlendMode="screen"
    />
  </div>

  {/* Content wrapper - PREPÚŠŤA mouse eventy */}
  <div className="relative z-10 pointer-events-none">
    {/* Navigation - len interaktívne prvky fungujú */}
    <div className="pointer-events-auto">
      <Navigation />
    </div>
    
    {/* Children - len interaktívne prvky fungujú */}
    <div className="pointer-events-auto">
      {children}
    </div>
    
    {/* Footer - len interaktívne prvky fungujú */}
    <div className="pointer-events-auto">
      <Footer />
    </div>
  </div>
  
          
          {/* Spotify button */}
          <button
            onClick={() => setShowSpotify(!showSpotify)}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 hover:scale-110 group"
            title={showSpotify ? "Zavrieť Spotify" : "Otvoriť Spotify"}
          >
            {showSpotify ? '✕' : '🎵'}
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping"></div>
          </button>

          {/* Spotify Player */}
          <div className={`
            fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 
            w-[calc(100vw-2rem)] md:w-96 
            bg-black/95 backdrop-blur-lg border border-green-500/30 rounded-2xl shadow-2xl transition-all duration-500
            ${showSpotify ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
          `}>
            <div className="p-3 md:p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">💚</span>
                  <h3 className="text-xs md:text-sm font-bold text-white truncate">Láska na prvé počutie</h3>
                </div>
                <button 
                  onClick={() => setShowSpotify(false)}
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                >
                  ✕
                </button>
              </div>
              
              <iframe 
                src="https://open.spotify.com/embed/playlist/0L3onXgk79GjldZukrykKw?utm_source=generator&theme=0" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="rounded-xl"
                title="Láska na prvé počutie - Spotify Playlist"
              />
              
              <p className="mt-3 text-[10px] md:text-xs text-gray-400 text-center">
                Klikni na track alebo <a href="https://open.spotify.com/playlist/0L3onXgk79GjldZukrykKw" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">otvor v Spotify app</a>
              </p>
            </div>
          </div>
          
          <div className="h-20"></div>
        </body>
      </html>
    </>
  )
}
