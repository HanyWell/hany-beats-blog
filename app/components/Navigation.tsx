'use client'

import Link from 'next/link'
import { useState } from 'react'
import PillNav from '@/components/ui/PillNav'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Mixy', href: '/mixy' },
    { label: 'Playlisty', href: '/playlisty' },
  ]
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/60">
      {/* horný pruh, drží sa hore pri scrollovaní */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo vľavo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            {/* DJ ikona – pri hover sa zväčší */}
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
              🎧
            </span>
            {/* názov Hany Beats s červeným gradientom, ako na landing page */}
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,113,113,0.6)]">
              Hany Beats
            </span>
          </Link>

          {/* Desktop menu - PillNav */}
          <div className="hidden md:flex items-center gap-8">
            <PillNav items={navItems} className="mr-4" />

            {/* hlavné červené tlačidlo – rovnaký vibe ako ostatné CTA */}
            <Link
              href="/about"
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105"
            >
              About
            </Link>
          </div>

          {/* Hamburger menu tlačidlo - viditeľné len na mobiloch */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobilné menu - slide down panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="bg-black/95 backdrop-blur-md border-t border-red-900/60">
          <div className="px-6 py-4 space-y-3">
            {/* Mobilné menu položky */}
            <Link
              href="/"
              className="block text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/blog"
              className="block text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 py-2"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>

            <Link
              href="/mixy"
              className="block text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 py-2"
              onClick={closeMobileMenu}
            >
              Mixy
            </Link>

            <Link
              href="/playlisty"
              className="block text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 py-2"
              onClick={closeMobileMenu}
            >
              Playlisty
            </Link>

            {/* About tlačidlo - plná šírka na mobiloch */}
            <Link
              href="/about"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105 mt-4"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
