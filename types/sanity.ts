// types/sanity.ts
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

export interface Mix {
  title: string
  soundcloudUrl?: string
  coverImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
}
