export const spotifyConfig = {
  mainPlaylist: {
    id: '0L3onXgk79GjldZukrykKw',
    title: 'Láska na prvé počutie',
    embedUrl: 'https://open.spotify.com/embed/playlist/0L3onXgk79GjldZukrykKw',
    directUrl: 'https://open.spotify.com/playlist/0L3onXgk79GjldZukrykKw'
  }
} as const

export const SPOTIFY_BASE_URLS = {
  embed: 'https://open.spotify.com/embed/playlist',
  direct: 'https://open.spotify.com/playlist'
} as const

export const SPOTIFY_OAUTH = {
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '',
  redirectUri: typeof window !== 'undefined'
    ? `${window.location.origin}/spotify-callback`
    : '',
  scopes: [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-read-playback-state'
  ]
} as const
