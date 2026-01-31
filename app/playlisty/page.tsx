'use client'
import { useState } from 'react'

export default function PlaylistyPage() {
  const [openPlaylist, setOpenPlaylist] = useState<string | null>(null)

  const playlists = [
    // ========== SPOTIFY PLAYLISTY ==========
  {
    id: "spotify-laska",
    title: "Láska na prvé počutie (Spotify)",
    description: "Môj životný playlist - 204 trackov, ktoré ma definujú.",
    emoji: "💚",
    isSpotify: true,
    spotifyId: "0L3onXgk79GjldZukrykKw"
  },
    // 1. LÁSKA NA PRVÉ POČUTIE - PRVÝ!
    {
      id: "PLKLrcicEIhGFXTwoA8XEbX6VmbAwUUHIA",
      title: "Láska na prvé počutie",
      description: "Môj životný playlist - tracky, ktoré ma definujú.",
      emoji: "❤️‍🔥"
    },
    // 2. DRUM & BASS AND LIQUID
    {
      id: "PLKLrcicEIhGGXe_13SM6xo9yaPt4E2pwt",
      title: "Drum & Bass and Liquid",
      description: "Moje DnB tracky.",
      emoji: "🎵"
    },
    // 3. DEEP DnB
    {
      id: "PLKLrcicEIhGHcSUnqiYc8Pzj7QPukNvct",
      title: "Deep DnB",
      description: "Hlboký bass.",
      emoji: "🌊"
    },
    // 4. NEURO, PLECHY, HARDY
    {
      id: "PLKLrcicEIhGHX0mQa_lfOvy3VowsmUu63",
      title: "Neuro, plechy, hardy",
      description: "Tvrdšie tracky.",
      emoji: "⚡"
    },
    // 5. RAP, HIP-HOP
    {
      id: "PLKLrcicEIhGGvN-Kphwuy_MCLdNfFXJiB",
      title: "Rap, Hip-Hop",
      description: "Najlepšie beaty a texty.",
      emoji: "🎤"
    },
    // 6. DEEP, PROGRESSIVE & ELECTRO-HOUSE - ŠPECIÁLNA (2 playlisty)
    {
      id: "house-special",
      title: "Deep, Progressive & Electro-House",
      description: "Kompletná house kolekcia - od deep po electro.",
      emoji: "🏠",
      isMultiple: true,
      playlists: [
        {
          id: "PLKLrcicEIhGFgzMg_TAZz8GqDpcTS-ZvS",
          subtitle: "Deep & Progressive House"
        },
        {
          id: "PLKLrcicEIhGGKZcAlQXin2LpJmqNWipPK",
          subtitle: "House & Electro-House"
        }
      ]
    },
    // 7. GYTARI A BUBNY
    {
      id: "PLKLrcicEIhGF1ZHzaGKHvOEMPaI2Dd0dr",
      title: "Gytari a Bubny",
      description: "Rockové a gitarové tracky.",
      emoji: "🎸"
    },
    // 8. CHILL
    {
      id: "PLKLrcicEIhGGihGstZTJ2QUQpu3wWV_LT",
      title: "Chill",
      description: "Na relax a oddych.",
      emoji: "🌅"
    },
  ]

  const togglePlaylist = (id: string) => {
    setOpenPlaylist(openPlaylist === id ? null : id)
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-8 py-20">
        
      {/* MAGICKÝ HEADER */}
<div className="text-center mb-20 relative">
  {/* Animated background glow */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-96 h-96 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
  </div>

  {/* Custom animated headphones icon */}
  <div className="relative inline-block mb-8 animate-float">
    <div className="relative">
      {/* Outer glow ring */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-spin-slow"></div>
      
      {/* Main icon container */}
      <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full border-4 border-red-500/30 flex items-center justify-center shadow-2xl">
        {/* Animated inner glow */}
        <div className="absolute inset-2 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
        
        {/* Headphones emoji/icon */}
        <span className="text-6xl relative z-10 animate-bounce-slow">🎧</span>
      </div>
    </div>
  </div>

  {/* Animated gradient title */}
  <h1 className="relative inline-block mb-6">
    <span className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
      Playlisty
    </span>
    
    {/* Glowing underline */}
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
  </h1>

  {/* Subtitle */}
  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in">
    Moje YouTube playlisty – hudba, ktorú <span className="text-red-400 font-semibold">žijem</span> a <span className="text-pink-400 font-semibold">budujem</span>.
  </p>

  {/* Floating particles */}
  <div className="absolute top-0 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-float-particle-1"></div>
  <div className="absolute top-10 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-float-particle-2"></div>
  <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-float-particle-3"></div>
</div>
         

        {/* Playlisty */}
        <div className="space-y-6">
          {playlists.map((playlist, index) => {
            const isOpen = openPlaylist === playlist.id
            
            return (
              <div
                key={playlist.id}
                className={`
                  group relative overflow-hidden rounded-2xl border transition-all duration-500
                  ${isOpen 
                    ? 'bg-gray-900/90 border-red-500/50 shadow-2xl shadow-red-500/20' 
                    : 'bg-gray-900/50 border-gray-800 hover:border-red-500/30 hover:bg-gray-900/70'
                  }
                  animate-fade-in-up
                `}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                
                {/* Klikateľný header */}
                <button
                  onClick={() => togglePlaylist(playlist.id)}
                  className="w-full p-8 text-left flex items-center justify-between gap-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    {/* Emoji ikona */}
                    <div className={`
                      text-5xl transition-all duration-500
                      ${isOpen ? 'scale-110 rotate-12' : 'group-hover:scale-110'}
                    `}>
                      {playlist.emoji}
                    </div>
                    
                    {/* Text */}
                    <div>
                      <h2 className={`
                        text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300
                        ${isOpen ? 'text-red-400' : 'text-white group-hover:text-red-400'}
                      `}>
                        {playlist.title}
                      </h2>
                      <p className="text-gray-400 text-sm md:text-base">
                        {playlist.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow icon */}
                  <div className={`
                    text-3xl transition-transform duration-500 text-red-400
                    ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}
                  `}>
                    ▼
                  </div>
                </button>

                {/* Expandable content */}
<div
  className={`
    transition-all duration-500 ease-in-out overflow-hidden
    ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}
  `}
>
  <div className="px-8 pb-8">
    {/* Separator line */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-6"></div>
    
    {/* SPOTIFY PLAYER */}
    {playlist.isSpotify ? (
      <div>
        <div className="w-full rounded-xl overflow-hidden border border-green-500/30 shadow-2xl hover:border-green-500/50 transition-colors">
          <iframe 
            src={`https://open.spotify.com/embed/playlist/${playlist.spotifyId}?utm_source=generator&theme=0`}
            width="100%" 
            height="380" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title={playlist.title}
            className="w-full"
          />
        </div>
        <p className="mt-4 text-xs text-gray-500 text-center">
          Prehráva sa priamo zo Spotify – <a href={`https://open.spotify.com/playlist/${playlist.spotifyId}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">otvor v Spotify app</a> pre plný zoznam
        </p>
      </div>
    ) : playlist.isMultiple ? (
      // MULTIPLE YOUTUBE PLAYLISTS (House sekcia)
      <div className="space-y-8">
        {playlist.playlists?.map((subPlaylist, idx) => (
          <div key={subPlaylist.id}>
            <h3 className="text-xl font-semibold text-red-400 mb-4">
              {subPlaylist.subtitle}
            </h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${subPlaylist.id}&autoplay=0&controls=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={subPlaylist.subtitle}
                className="w-full h-full"
              />
            </div>
            {idx < playlist.playlists.length - 1 && (
              <div className="w-full h-px bg-gray-800 mt-8"></div>
            )}
          </div>
        ))}
      </div>
    ) : (
      // SINGLE YOUTUBE PLAYLIST
      <div>
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}&autoplay=0&controls=1`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={playlist.title}
            className="w-full h-full"
          />
        </div>
        <p className="mt-4 text-xs text-gray-500 text-center">
          Prehráva sa priamo z YouTube – môžeš preskakovať tracky v ovládacích prvkoch.
        </p>
      </div>
    )}
  </div>
</div>


                {/* Glow efekt (len keď je otvorený) */}
                {isOpen && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
