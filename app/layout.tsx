'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
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
        <body className="bg-gray-900 text-white font-poppins antialiased">
          <Navigation />
          {children}
          <Footer />
          
          {/* TOGGLE BUTTON pre Spotify Player */}
          <button
            onClick={() => setShowSpotify(!showSpotify)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 group"
            title={showSpotify ? "Zavrieť Spotify" : "Otvoriť Spotify"}
          >
            {showSpotify ? '✕' : '🎵'}
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping"></div>
          </button>
          
          {/* SPOTIFY PLAYER - zobrazí sa len po kliknutí */}
          <div className={`
            fixed bottom-24 right-6 z-40 w-96 bg-black/95 backdrop-blur-lg border border-green-500/30 rounded-2xl shadow-2xl transition-all duration-500
            ${showSpotify ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
          `}>
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💚</span>
                  <h3 className="text-sm font-bold text-white">Láska na prvé počutie</h3>
                </div>
                <button 
                  onClick={() => setShowSpotify(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              {/* Spotify Embed - TALL MODE (380px) */}
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
              
              {/* Info text */}
              <p className="mt-3 text-xs text-gray-400 text-center">
                Klikni na track alebo <a href="https://open.spotify.com/playlist/0L3onXgk79GjldZukrykKw" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">otvor v Spotify app</a> pre všetky tracky
              </p>
            </div>
          </div>
          
          {/* Padding pre footer */}
          <div className="h-20"></div>
        </body>
      </html>
    </>
  )
}
