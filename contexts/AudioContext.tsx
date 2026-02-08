'use client'
import { createContext, useContext, useState, ReactNode, useRef, useCallback } from 'react'

interface Track {
  id: string
  title: string
  audioSrc: string
  artist?: string
  slug?: string
}

interface AudioContextType {
  currentTrack: Track | null
  isPlaying: boolean
  getCurrentTime: () => number
  getDuration: () => number
  setCurrentTrack: (track: Track) => void
  clearTrack: () => void
  registerControls: (controls: { seek: (time: number) => void; togglePlay: () => void }) => void
  seek: (time: number) => void
  togglePlay: () => void
  updateTime: (time: number, dur: number) => void
  updateIsPlaying: (playing: boolean) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const currentTimeRef = useRef(0)
  const durationRef = useRef(0)
  const audioControlsRef = useRef<{ seek: (time: number) => void; togglePlay: () => void } | null>(null)

  const handleSetTrack = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const clearTrack = () => {
    setCurrentTrack(null)
    setIsPlaying(false)
    currentTimeRef.current = 0
    durationRef.current = 0
  }

  const updateTime = useCallback((time: number, dur: number) => {
    currentTimeRef.current = time
    durationRef.current = dur
  }, [])

  const updateIsPlaying = useCallback((playing: boolean) => {
    setIsPlaying(playing)
  }, [])

  const seek = useCallback((time: number) => {
    audioControlsRef.current?.seek(time)
  }, [])

  const togglePlay = useCallback(() => {
    audioControlsRef.current?.togglePlay()
  }, [])

  const registerControls = useCallback((controls: { seek: (time: number) => void; togglePlay: () => void }) => {
    audioControlsRef.current = controls
  }, [])

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        getCurrentTime: () => currentTimeRef.current,
        getDuration: () => durationRef.current,
        setCurrentTrack: handleSetTrack,
        clearTrack,
        seek,
        togglePlay,
        updateTime,
        updateIsPlaying,
        registerControls
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}
