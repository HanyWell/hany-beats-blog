'use client'
import { Track } from '@/types/sanity'
import { ExternalLink, Music, Youtube } from 'lucide-react'

interface TracklistSectionProps {
  tracks: Track[]
  notes?: string
  onTrackClick?: (time: number) => void
  currentTime?: number
}

export default function TracklistSection({ tracks, notes, onTrackClick, currentTime = 0 }: TracklistSectionProps) {
  const formatTime = (time: string) => {
    return time.startsWith('0') ? time.substring(1) : time
  }

  // Convert MM:SS to seconds
  const timeToSeconds = (time: string): number => {
    const [min, sec] = time.split(':').map(Number)
    return min * 60 + sec
  }

  // Check if track is currently playing
  const isTrackActive = (trackStartTime: string, nextTrackStartTime?: string): boolean => {
    const startSeconds = timeToSeconds(trackStartTime)
    const endSeconds = nextTrackStartTime ? timeToSeconds(nextTrackStartTime) : Infinity
    return currentTime >= startSeconds && currentTime < endSeconds
  }

  const getPlatformIcon = (url: string, platform: string) => {
    const iconClass = "w-4 h-4 hover:text-red-400 transition-colors"
    
    switch (platform) {
      case 'spotify':
        return (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="Spotify"
          >
            <Music />
          </a>
        )
      case 'youtube':
        return (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="YouTube"
          >
            <Youtube />
          </a>
        )
      case 'bandcamp':
        return (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="Bandcamp"
          >
            <ExternalLink />
          </a>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* DJ Notes */}
      {notes && (
        <section className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 className="text-lg font-semibold mb-3 text-red-500">DJ Poznámky</h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{notes}</p>
        </section>
      )}

      {/* Tracklist */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-red-500">Tracklist</h3>
        <div className="space-y-2">
          {tracks.map((track, index) => {
            const isActive = isTrackActive(track.startTime, tracks[index + 1]?.startTime)
            
            return (
              <div 
                key={index}
                className={`bg-gray-900/30 rounded-lg p-4 border transition-all ${
                  isActive 
                    ? 'border-red-500 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.3)]' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onTrackClick?.(timeToSeconds(track.startTime))}
                        className={`font-mono text-sm transition-colors ${
                          isActive 
                            ? 'text-red-400 font-bold' 
                            : 'text-red-500 hover:text-red-400 cursor-pointer'
                        }`}
                        title="Preskočiť na tento track"
                      >
                        {formatTime(track.startTime)}
                      </button>
                      <div className="flex-1">
                        <p className={`font-medium truncate ${
                          isActive ? 'text-white font-semibold' : 'text-white'
                        }`}>
                          {track.artist} - {track.title}
                        </p>
                        {track.label && (
                          <p className="text-sm text-gray-400">{track.label}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform Links */}
                  <div className="flex items-center gap-2 ml-4">
                    {track.spotifyUrl && getPlatformIcon(track.spotifyUrl, 'spotify')}
                    {track.bandcampUrl && getPlatformIcon(track.bandcampUrl, 'bandcamp')}
                    {track.youtubeUrl && getPlatformIcon(track.youtubeUrl, 'youtube')}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
