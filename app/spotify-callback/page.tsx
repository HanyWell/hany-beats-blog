'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { exchangeCodeForToken } from '@/lib/spotify-auth'

function CallbackHandler() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [error, setError] = useState<string | null>(() => {
    const authError = searchParams.get('error')
    if (authError) return `Spotify odmietol prístup: ${authError}`
    if (!searchParams.get('code')) return 'Chýba autorizačný kód'
    return null
  })

  useEffect(() => {
    const code = searchParams.get('code')
    if (!code) return

    exchangeCodeForToken(code)
      .then(() => {
        router.push('/')
      })
      .catch((err) => {
        setError(err.message || 'Nepodarilo sa získať token')
      })
  }, [searchParams, router])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-4 p-8">
          <p className="text-red-400 text-lg">{error}</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-400 rounded-full text-black font-bold transition-colors"
          >
            Späť na hlavnú stránku
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-gray-400">Pripájanie k Spotify...</p>
      </div>
    </div>
  )
}

export default function SpotifyCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CallbackHandler />
    </Suspense>
  )
}
