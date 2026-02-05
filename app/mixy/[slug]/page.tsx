'use client'
import { useState, useEffect } from 'react'
import { getMixBySlug } from '../../lib/mixes'
import { Mix } from '@/types/sanity'
import { notFound } from 'next/navigation'
import TracklistSection from '../../components/TracklistSection'
import Link from 'next/link'
import { ArrowLeft, Play } from 'lucide-react'
import { useAudio } from '@/contexts/AudioContext'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function MixDetailPage({ params }: PageProps) {
  const [mix, setMix] = useState<Mix | null>(null)
  const { setCurrentTrack, currentTrack, getCurrentTime, seek } = useAudio()
  const [currentTime, setCurrentTime] = useState(0)

  // Poll for current time when this mix is playing
  useEffect(() => {
    if (currentTrack?.id === mix?._id) {
      const interval = setInterval(() => {
        setCurrentTime(getCurrentTime())
      }, 100)
      return () => clearInterval(interval)
    }
  }, [currentTrack, mix, getCurrentTime])

  useEffect(() => {
    async function loadMix() {
      const { slug } = await params
      const mixData = await getMixBySlug(slug)
      if (!mixData) {
        notFound()
      }
      setMix(mixData)
    }
    loadMix()
  }, [params])

  if (!mix) {
    return (
      <main className='min-h-screen bg-black text-white px-8 py-16'>
        <div className='animate-pulse'>Načítavam mix...</div>
      </main>
    )
  }

  const handlePlayClick = () => {
    if (mix.audioFile) {
      console.log('Setting current track:', mix._id, mix.title, mix.audioFile.asset.url)
      setCurrentTrack({
        id: mix._id,
        title: mix.title,
        audioSrc: mix.audioFile.asset.url,
        slug: mix.slug.current
      })
    } else {
      console.log('No audio file available')
    }
  }

  const handleTrackClick = (time: number) => {
    // First ensure this mix is playing
    if (currentTrack?.id !== mix._id) {
      handlePlayClick()
      // Wait a bit for audio to load, then seek
      setTimeout(() => seek(time), 500)
    } else {
      seek(time)
    }
  }

  return (
    <main className='min-h-screen bg-black text-white px-8 py-16'>
      <Link href='/mixy' className='inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors'>
        <ArrowLeft className='w-4 h-4' />
        Späť na mixy
      </Link>

      <div className='max-w-4xl'>
        <h1 className='text-4xl font-bold mb-4'>{mix.title}</h1>
        <p className='text-gray-400 mb-8'>
          {new Date(mix.publishedAt).toLocaleDateString('sk', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        {mix.audioFile && (
          <section className='mb-12'>
            <button
              onClick={handlePlayClick}
              className='w-full bg-red-600 hover:bg-red-500 text-white px-8 py-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] font-semibold text-lg'
            >
              <Play className='w-6 h-6' />
              {currentTrack?.id === mix._id ? 'Prehrávanie...' : 'Prehrať mix'}
            </button>
          </section>
        )}

        {mix.tracklist && mix.tracklist.length > 0 && (
          <TracklistSection 
            tracks={mix.tracklist} 
            notes={mix.notes}
            onTrackClick={handleTrackClick}
            currentTime={currentTime}
          />
        )}
      </div>
    </main>
  )
}