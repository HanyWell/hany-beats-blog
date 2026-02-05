// types/sanity.ts

// Sanity typy pre schema definície
export interface SanityRule {
  required(): SanityRule
  min(length?: number): SanityRule
  max(length?: number): SanityRule
  regex(pattern: RegExp, message?: string): SanityRule
}

export interface SanityPreviewSelect {
  title: string
  artist?: string
  startTime?: string
  publishedAt?: string
  trackCount?: any[]
}

export interface SanityPrepareOptions {
  title: string
  artist?: string
  startTime?: string
  publishedAt?: string
  trackCount?: any[]
}

export interface Post {
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  publishedAt: string
}

export interface Track {
  artist: string
  title: string
  label?: string
  startTime: string
  spotifyUrl?: string
  bandcampUrl?: string
  youtubeUrl?: string
}

export interface Mix {
  _id: string
  title: string
  slug: {
    current: string
  }
  audioFile: {
    asset: {
      _ref: string
      _type: string
      url: string
    }
  }
  publishedAt: string
  tracklist: Track[]
  notes?: string
}
