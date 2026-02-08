'use client'
import dynamic from 'next/dynamic'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'

const DJAudioPlayer = dynamic(() => import('./DJAudioPlayer'), {
  ssr: false,
  loading: () => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-20 bg-gray-700 rounded mb-4"></div>
      <div className="h-12 bg-gray-700 rounded"></div>
    </div>
  )
})

interface DJAudioPlayerWrapperProps {
  audioSrc: string
  title: string
  className?: string
}

export default function DJAudioPlayerWrapper({ audioSrc, title, className }: DJAudioPlayerWrapperProps) {
  const playerState = useAudioPlayer(audioSrc)

  return (
    <DJAudioPlayer
      audioSrc={audioSrc}
      title={title}
      isPlaying={playerState.isPlaying}
      currentTime={playerState.currentTime}
      duration={playerState.duration}
      volume={playerState.volume}
      isMuted={playerState.isMuted}
      isLoading={playerState.isLoading}
      error={playerState.error}
      togglePlay={playerState.togglePlay}
      seek={playerState.seek}
      skip={playerState.skip}
      setVolume={playerState.setVolume}
      toggleMute={playerState.toggleMute}
      className={className}
    />
  )
}
