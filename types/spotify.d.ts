// Spotify Web Playback SDK type declarations

interface SpotifyTrack {
  uri: string
  id: string
  type: string
  media_type: string
  name: string
  is_playable: boolean
  album: {
    uri: string
    name: string
    images: { url: string; height: number; width: number }[]
  }
  artists: { uri: string; name: string }[]
}

interface SpotifyState {
  context: {
    uri: string
    metadata: Record<string, string>
  }
  disallows: {
    pausing: boolean
    peeking_next: boolean
    peeking_prev: boolean
    resuming: boolean
    seeking: boolean
    skipping_next: boolean
    skipping_prev: boolean
  }
  paused: boolean
  position: number
  duration: number
  repeat_mode: number
  shuffle: boolean
  track_window: {
    current_track: SpotifyTrack
    previous_tracks: SpotifyTrack[]
    next_tracks: SpotifyTrack[]
  }
}

interface SpotifyPlayerOptions {
  name: string
  getOAuthToken: (cb: (token: string) => void) => void
  volume?: number
}

interface SpotifyPlayerInstance {
  connect(): Promise<boolean>
  disconnect(): void
  addListener(event: 'ready', cb: (data: { device_id: string }) => void): void
  addListener(event: 'not_ready', cb: (data: { device_id: string }) => void): void
  addListener(event: 'player_state_changed', cb: (state: SpotifyState | null) => void): void
  addListener(event: 'initialization_error', cb: (data: { message: string }) => void): void
  addListener(event: 'authentication_error', cb: (data: { message: string }) => void): void
  addListener(event: 'account_error', cb: (data: { message: string }) => void): void
  removeListener(event: string): void
  getCurrentState(): Promise<SpotifyState | null>
  setName(name: string): Promise<void>
  getVolume(): Promise<number>
  setVolume(volume: number): Promise<void>
  pause(): Promise<void>
  resume(): Promise<void>
  togglePlay(): Promise<void>
  seek(position_ms: number): Promise<void>
  previousTrack(): Promise<void>
  nextTrack(): Promise<void>
}

interface Window {
  Spotify: {
    Player: new (options: SpotifyPlayerOptions) => SpotifyPlayerInstance
  }
  onSpotifyWebPlaybackSDKReady: () => void
}
