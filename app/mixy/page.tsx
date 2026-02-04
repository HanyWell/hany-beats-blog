// app/mixy/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { getAllMixes } from '../lib/mixes'
import { Mix } from '@/types/sanity'
import Link from 'next/link'
import { Play, Music } from 'lucide-react'
import { useAudio } from '@/contexts/AudioContext'

export default function MixyPage() {
  const [mixes, setMixes] = useState<Mix[]>([])
  const { setCurrentTrack, currentTrack } = useAudio()

  useEffect(() => {
    async function loadMixes() {
      const data = await getAllMixes()
      setMixes(data)
    }
    loadMixes()
  }, [])

  const handlePlayClick = (mix: Mix) => {
    if (mix.audioFile) {
      setCurrentTrack({
        id: mix._id,
        title: mix.title,
        audioSrc: mix.audioFile.asset.url,
        slug: mix.slug.current
      })
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Moje Mixy</h1>
      
      {mixes.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Načítavam mixy...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mixes.map((mix) => (
            <div 
              key={mix._id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <Music className="w-8 h-8 text-red-500" />
                {currentTrack?.id === mix._id && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Hrá
                  </div>
                )}
              </div>

              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{mix.title}</h2>
              <p className="text-gray-400 text-sm mb-4">
                {new Date(mix.publishedAt).toLocaleDateString('sk', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>

              {mix.tracklist && mix.tracklist.length > 0 && (
                <p className="text-gray-500 text-sm mb-4">
                  {mix.tracklist.length} trackov
                </p>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => handlePlayClick(mix)}
                  disabled={!mix.audioFile}
                  className="flex-1 bg-red-600 hover:bg-red-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Prehrať
                </button>
                
                <Link 
                  href={`/mixy/${mix.slug.current}`}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
