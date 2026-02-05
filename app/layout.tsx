// app/layout.tsx
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SpotifyPlayer from './components/SpotifyPlayer'
import { AudioProvider } from '@/contexts/AudioContext'
import GlobalAudioPlayer from '@/components/GlobalAudioPlayer'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300','400','500','600','700'],
})

export const metadata: Metadata = {
  title: 'Hany Beats - Drum & Bass DJ & Producer',
  description: 'Drum & Bass DJ a producent. Liquid, Jump-up, Deep a Neurofunk beats. Mixy, playlisty a DJ cesta. Objav svet DnB hudby.',
  keywords: ['Drum & Bass', 'DnB', 'DJ', 'producer', 'Liquid', 'Jump-up', 'Neurofunk', 'Hany Beats', 'electronic music', 'DJ mixes', 'Slovensko'],
          <body className="bg-black text-white font-poppins antialiased relative">
            <AudioProvider>
              <div className="relative z-10">
                <Navigation />
                {children}
                <Footer />
              </div>

              <div className="h-20"></div>
              <SpotifyPlayer />
              <GlobalAudioPlayer />
            </AudioProvider>
          </body>
  
          
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
=======
        <body className="bg-black text-white font-poppins antialiased relative">
          <AudioProvider>
            <div className="relative z-10">
              <Navigation />
              {children}
              <Footer />
>>>>>>> refs/rewritten/copilot-worktree-2026-02-04T08-54-41
            </div>
            
            <div className="h-20"></div>
            <SpotifyPlayer />
            <GlobalAudioPlayer />
          </AudioProvider>
        </body>
      </html>
    </>
  )
}
