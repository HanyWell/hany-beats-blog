'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Music, Heart, User, Bell } from 'lucide-react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Dashboard', href: '/', icon: Home },
    { label: 'Blog', href: '/blog', icon: BookOpen },
    { label: 'Mixy', href: '/mixy', icon: Music },
    { label: 'Playlisty', href: '/playlisty', icon: Heart },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      {/* Desktop & Mobile Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo - Enhanced with glow */}
          <Link href="/" className="flex items-center gap-3 group min-h-[44px]" aria-label="Hany Beats – Domov" onClick={closeMobileMenu}>
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-red-500/50">
              <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <div className="absolute inset-0 rounded-xl bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="hidden sm:block text-lg font-bold text-white group-hover:text-red-400 transition-colors">
              Hany Beats
            </span>
          </Link>

          {/* Desktop Navigation Tabs - Enhanced */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-5 lg:px-6 py-2.5 flex items-center gap-2 font-medium transition-all duration-300 min-h-[44px] rounded-full
                    ${isActive
                      ? 'text-white bg-red-600 shadow-lg shadow-red-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }
                  `}
                  onClick={closeMobileMenu}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm lg:text-base">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Side - Notifications + Avatar */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Notifications - Enhanced */}
            <button
              className="relative p-2.5 text-gray-400 hover:text-white transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Notifikácie - máte nové upozornenia"
            >
              <Bell className="w-5 h-5" aria-hidden="true" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
            </button>

            {/* Avatar - Enhanced with glow */}
            <Link
              href="/about"
              className="relative group"
              aria-label="O mne - Hany Beats profil"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-red-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/30">
                <Image
                  src="/img/ja.jpg"
                  alt="Hany Beats profilová fotka"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Mobile Hamburger - Touch-friendly */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center min-w-[44px] min-h-[44px] space-y-1.5 group"
            aria-label={isMobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Touch-friendly items */}
      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="bg-[#0a0e27] border-t border-white/5">
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 min-h-[48px] text-base
                    ${isActive
                      ? 'bg-red-500/10 text-red-400'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white active:bg-white/10'
                    }
                  `}
                  onClick={closeMobileMenu}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}

            {/* Profile Link - Touch-friendly */}
            <Link
              href="/about"
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-400 hover:bg-white/5 hover:text-white active:bg-white/10 transition-colors duration-200 mt-4 border-t border-white/5 min-h-[48px] text-base"
              onClick={closeMobileMenu}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
