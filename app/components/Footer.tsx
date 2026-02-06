import Link from 'next/link'
import { FaSoundcloud, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import { socials } from '@/config/socials'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-red-500/20 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Mobile: Stack → Desktop: Grid */}
        <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-3">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-2xl sm:text-3xl" aria-hidden="true">🎧</span>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Hany Beats
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Drum & Bass DJ Blog<br />
              Mix recenzie, tipy a beaty
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Navigácia</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-red-400 transition-colors inline-block min-h-[44px] flex items-center justify-center md:justify-start"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-red-400 transition-colors inline-block min-h-[44px] flex items-center justify-center md:justify-start"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-400 transition-colors inline-block min-h-[44px] flex items-center justify-center md:justify-start"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social - Touch-friendly */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Socials</h3>
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
              <a
                href={socials.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-400/50 active:scale-95"
                title="SoundCloud"
                aria-label="Sleduj ma na SoundCloud"
              >
                <FaSoundcloud />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 text-pink-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-400/50 active:scale-95"
                title="Instagram"
                aria-label="Sleduj ma na Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-400/50 active:scale-95"
                title="Facebook"
                aria-label="Sleduj ma na Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-400/50 active:scale-95"
                title="YouTube"
                aria-label="Sleduj ma na YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          © {currentYear} Hany Beats. Všetky práva vyhradené. 🎶
        </div>
      </div>
    </footer>
  )
}
