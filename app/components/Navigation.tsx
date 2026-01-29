import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-3xl group-hover:scale-110 transition-transform">🎧</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hany Beats
            </span>
          </Link>

          {/* Menu items */}
          <div className="flex items-center gap-8">
            <Link 
              href="/"
              className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/blog"
              className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
