import Link from 'next/link'
import { FaSoundcloud, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-950 border-t border-red-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎧</span>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
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
              <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-red-400 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Socials</h3>
            <div className="flex gap-4">
              <a 
                href="https://on.soundcloud.com/ec63S8v1qUqan9cIQq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-400/50"
                title="SoundCloud"
              >
                <FaSoundcloud />
              </a>
              <a 
                href="https://www.instagram.com/_hany_well_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 text-pink-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-400/50"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/HanyWellik/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-400/50"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.youtube.com/@TheDJHany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-400/50"
                title="YouTube"
              >
                <FaYoutube />
              </a>
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
