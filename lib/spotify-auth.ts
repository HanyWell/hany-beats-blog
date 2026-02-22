import { SPOTIFY_OAUTH } from '@/config/spotify'

const VERIFIER_KEY = 'spotify_pkce_verifier'
const TOKEN_KEY = 'spotify_tokens'

interface TokenData {
  access_token: string
  refresh_token: string
  expires_at: number
}

function generateRandomString(length: number): string {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  const values = crypto.getRandomValues(new Uint8Array(length))
  return Array.from(values, (v) => possible[v % possible.length]).join('')
}

async function sha256(plain: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder()
  return crypto.subtle.digest('SHA-256', encoder.encode(plain))
}

function base64urlEncode(buffer: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export async function getSpotifyAuthUrl(): Promise<string> {
  const verifier = generateRandomString(128)
  sessionStorage.setItem(VERIFIER_KEY, verifier)

  const challenge = base64urlEncode(await sha256(verifier))

  const params = new URLSearchParams({
    client_id: SPOTIFY_OAUTH.clientId,
    response_type: 'code',
    redirect_uri: SPOTIFY_OAUTH.redirectUri,
    scope: SPOTIFY_OAUTH.scopes.join(' '),
    code_challenge_method: 'S256',
    code_challenge: challenge,
  })

  return `https://accounts.spotify.com/authorize?${params.toString()}`
}

export async function exchangeCodeForToken(code: string): Promise<void> {
  const verifier = sessionStorage.getItem(VERIFIER_KEY)
  if (!verifier) throw new Error('Missing PKCE verifier')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: SPOTIFY_OAUTH.clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: SPOTIFY_OAUTH.redirectUri,
      code_verifier: verifier,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error_description || 'Token exchange failed')
  }

  const data = await response.json()
  saveTokens(data)
  sessionStorage.removeItem(VERIFIER_KEY)
}

export async function refreshAccessToken(): Promise<string> {
  const stored = localStorage.getItem(TOKEN_KEY)
  if (!stored) throw new Error('No tokens stored')

  const tokens: TokenData = JSON.parse(stored)

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: SPOTIFY_OAUTH.clientId,
      grant_type: 'refresh_token',
      refresh_token: tokens.refresh_token,
    }),
  })

  if (!response.ok) {
    clearTokens()
    throw new Error('Token refresh failed')
  }

  const data = await response.json()
  saveTokens({
    ...data,
    refresh_token: data.refresh_token || tokens.refresh_token,
  })

  return data.access_token
}

function saveTokens(data: { access_token: string; refresh_token: string; expires_in: number }) {
  const tokenData: TokenData = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Date.now() + data.expires_in * 1000,
  }
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenData))
}

export function getAccessToken(): string | null {
  const stored = localStorage.getItem(TOKEN_KEY)
  if (!stored) return null

  const tokens: TokenData = JSON.parse(stored)
  if (Date.now() >= tokens.expires_at - 60_000) return null // expired or about to expire

  return tokens.access_token
}

export function getRefreshToken(): string | null {
  const stored = localStorage.getItem(TOKEN_KEY)
  if (!stored) return null
  return JSON.parse(stored).refresh_token
}

export function isAuthenticated(): boolean {
  return localStorage.getItem(TOKEN_KEY) !== null
}

export function clearTokens(): void {
  localStorage.removeItem(TOKEN_KEY)
}
