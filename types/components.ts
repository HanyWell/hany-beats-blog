import { ReactNode, CSSProperties } from 'react'

// Základné props pre karty
export interface BaseCardProps {
  children: ReactNode
  className?: string
  index?: number
  isHoverable?: boolean
  style?: CSSProperties
}

// Props pre sociálne ikony
export interface SocialIconProps {
  href: string
  icon: string
  label: string
  className?: string
}

// Props pre TrueFocus komponenty
export interface FocusBracketsProps {
  borderColor?: string
  isMobile?: boolean
  animationDuration?: number
  isActive?: boolean
}

export interface WordDisplayProps {
  words: string[]
  activeIndex: number
  wordColors?: string[]
  blurAmount: number
  animationDuration: number
  isMobile?: boolean
  onWordClick?: (index: number) => void
  onWordHover?: (index: number) => void
}

// Props pre touch navigáciu
export interface TouchNavigationProps {
  onWordChange: (index: number) => void
  words: string[]
  currentIndex: number
  longPressTimeout?: number
  swipeThreshold?: number
  swipeTimeLimit?: number
}

// Props pre word animácie
export interface WordAnimationProps {
  words: string[]
  currentIndex: number
  animationDuration: number
  pauseBetweenAnimations: number
  manualMode?: boolean
  onWordChange?: (index: number, word: string) => void
}

// Props pre playlist karty
export interface SubPlaylist {
  id: string
  subtitle: string
}

export interface PlaylistCardProps {
  id: string
  title: string
  description: string
  emoji: string
  isSpotify?: boolean
  spotifyId?: string
  isMultiple?: boolean
  playlists?: SubPlaylist[]
  isOpen: boolean
  onToggle: () => void
  index: number
}

// Props pre audio karty
export interface AudioCardProps {
  title: string
  audioSrc: string
  description?: string
  index?: number
  className?: string
}

// Props pre DJ Audio Player
export interface DJAudioPlayerProps {
  audioSrc: string
  title: string
  onTimeUpdate?: (currentTime: number) => void
  className?: string
}

// Props pre Waveform Display
export interface WaveformDisplayProps {
  currentTime: number
  duration: number
  onSeek: (time: number) => void
  className?: string
}

// Props pre blog karty
export interface SanityImageSource {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

export interface BlogCardProps {
  post: {
    _id: string
    title: string
    slug: { current: string }
    mainImage?: SanityImageSource
    excerpt?: string
    _publishedAt: string
  }
  index: number
  sanityClient?: any // Sanity client injektovaný zvonku - ponechané ako any pre hybridný prístup
}

// Props pre TrueFocus komponent
export interface TrueFocusProps {
  sentence: string
  manualMode?: boolean
  blurAmount?: number
  borderColor?: string
  animationDuration?: number
  pauseBetweenAnimations?: number
  className?: string
  wordColors?: string[]
  responsive?: boolean
  touchEnabled?: boolean
  performanceMode?: ResponsiveMode
  mobileProps?: MobileProps
  onWordChange?: (index: number, word: string) => void
}

// Props pre performance detection
export type PerformanceMode = 'high' | 'low'
export type ResponsiveMode = 'auto' | 'high' | 'low'

export interface MobileProps {
  blurAmount?: number
  animationDuration?: number
  fontSize?: string
  layout?: 'horizontal' | 'vertical'
}
