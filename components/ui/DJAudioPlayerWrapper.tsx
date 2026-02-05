'use client'
import dynamic from 'next/dynamic'

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
  onTimeUpdate?: (currentTime: number) => void
  className?: string
}

export default function DJAudioPlayerWrapper(props: DJAudioPlayerWrapperProps) {
  return <DJAudioPlayer {...props} />
}
