import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-950 border-t border-purple-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎧</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hany Beats
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Drum & Bass DJ Blog<br />
              Mix recenzie, tipy a beaty
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigácia</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:scale-110 transition-transform">🎵</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📸</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">💿</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {currentYear} Hany Beats. Všetky práva vyhradené. 🎶
        </div>
      </div>
    </footer>
  )
}
