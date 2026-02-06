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
    <nav className="sticky top-0 z-50 bg-[#0a0e27]/95 backdrop-blur-xl border-b border-white/5">
      {/* Desktop & Mobile Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo - Touch-friendly */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-h-[44px]" onClick={closeMobileMenu}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </Link>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-4 lg:px-6 py-3 flex items-center gap-2 font-medium transition-all duration-200 min-h-[44px]
                    ${isActive
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                  onClick={closeMobileMenu}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm lg:text-base">{item.label}</span>
                  {/* Bottom border indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Side - Notifications + Avatar */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Notifications - Touch-friendly */}
            <button
              className="relative p-2 text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Notifikácie"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Avatar - Touch-friendly */}
            <Link
              href="/about"
              className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-gray-700 hover:border-red-500 transition-colors"
              aria-label="Profil"
            >
              <Image
                src="/img/ja.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </Link>
          </div>

          {/* Mobile Hamburger - Touch-friendly */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center min-w-[44px] min-h-[44px] space-y-1.5 group"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Touch-friendly items */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
      }`}>
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
                      ? 'bg-blue-500/10 text-blue-400'
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
