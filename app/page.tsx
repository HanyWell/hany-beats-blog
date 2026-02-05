'use client'
import { lazy, Suspense } from 'react'
import HeroSection from './components/HeroSection'
import LightPillar from '@/components/LightPillar'
const FeaturesSection = lazy(() => import('./components/FeaturesSection'))
const GenreSection = lazy(() => import('./components/GenreSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

function LoadingFallback() {
  return (
    <div className="min-h-96 flex items-center justify-center bg-black">
      <div className="animate-pulse text-red-500 text-xl">Načítavam...</div>
    </div>
  )
}

function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-4 focus:ring-red-500/50"
    >
      Preskočiť na hlavný obsah
    </a>
  )
}


export default function HomePage() {
  return (
    <>
      <SkipNavigation />
      {/* LightPillar background - outside overflow container */}
      <div className="fixed inset-0 -z-10" style={{ width: '100vw', height: '100vh' }}>
        <LightPillar
          topColor="#dc2626"
          bottomColor="#0891b2"
          intensity={1.9}
          rotationSpeed={0.7}
          interactive={false}
          glowAmount={0.001}
          pillarWidth={2}
          pillarHeight={0.75}
          noiseIntensity={0}
          pillarRotation={65}
        />
      </div>
      
      <main id="main-content" className="min-h-screen text-white">
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <GenreSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>
    </>
  )
}
