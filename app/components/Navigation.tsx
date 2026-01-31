import Link from 'next/link'  // Link na klikanie medzi stránkami

export default function Navigation() { // hlavný Navigation komponent
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/60">
      {/* horný pruh, drží sa hore pri scrollovaní */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo vľavo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* DJ ikona – pri hover sa zväčší */}
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
              🎧
            </span>
            {/* názov Hany Beats s červeným gradientom, ako na landing page */}
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,113,113,0.6)]">
              Hany Beats
            </span>
          </Link>

          {/* Menu vpravo */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* sivý text, pri hover červený */}
            <Link
              href="/"
              className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              href="/blog"
              className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200"
            >
              Blog
            </Link>

            <Link
              href="/mixy"
              className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200"
            >
              Mixy
            </Link>

            <Link
              href="/playlisty"
              className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200"
            >
              Playlisty
            </Link>

            {/* hlavné červené tlačidlo – rovnaký vibe ako ostatné CTA */}
            <Link
              href="/about"
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
