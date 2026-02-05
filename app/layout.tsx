// app/layout.tsx
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SpotifyPlayer from './components/SpotifyPlayer'
import { AudioProvider } from '@/contexts/AudioContext'
import GlobalAudioPlayer from '@/components/GlobalAudioPlayer'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300','400','500','600','700'],
})

export const metadata: Metadata = {
  title: 'Hany Beats - Drum & Bass DJ & Producer',
  description: 'Drum & Bass DJ a producent. Liquid, Jump-up, Deep a Neurofunk beats. Mixy, playlisty a DJ cesta. Objav svet DnB hudby.',
  keywords: ['Drum & Bass', 'DnB', 'DJ', 'producer', 'Liquid', 'Jump-up', 'Neurofunk', 'Hany Beats', 'electronic music', 'DJ mixes', 'Slovensko'],
  authors: [{ name: 'Hany Beats' }],
  creator: 'Hany Beats',
  publisher: 'Hany Beats',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hanybeats.sk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hany Beats - Drum & Bass DJ & Producer',
    description: 'Drum & Bass DJ a producent. Liquid, Jump-up, Deep a Neurofunk beats. Mixy, playlisty a DJ cesta.',
    type: 'website',
    locale: 'sk_SK',
    siteName: 'Hany Beats',
    url: 'https://hanybeats.sk',
    images: [
      {
        url: '/UBG.jpg',
        width: 1200,
        height: 630,
        alt: 'Hany Beats - Drum & Bass DJ & Producer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hany Beats - Drum & Bass DJ & Producer',
    description: 'Drum & Bass DJ a producent. Liquid, Jump-up, Deep a Neurofunk beats.',
    images: ['/UBG.jpg'],
    creator: '@hanybeats',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="sk" suppressHydrationWarning className={poppins.variable} style={{ colorScheme: 'dark' }}>
        <head>
          <meta name="color-scheme" content="dark" />
        </head>
        <body className="bg-black text-white font-poppins antialiased relative">
          <AudioProvider>
            <div className="relative z-10">
              <Navigation />
              {children}
              <Footer />
            </div>

            <div className="h-20"></div>
            <SpotifyPlayer />
            <GlobalAudioPlayer />
          </AudioProvider>
        </body>
      </html>
    </>
  )
}
