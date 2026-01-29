import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-6">🎧</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            O Hany Beats
          </h1>
          <p className="text-gray-400 text-lg">
            Drum & Bass DJ | Producer | Music Lover
          </p>
        </div>

        {/* Story */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-6">🎵 Moja DJ Cesta</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Ahoj! Som Hany, DJ a producent zameraný na Drum & Bass a tech house.
              Moja hudobná cesta začala pred X rokmi, keď som prvýkrát počul...
            </p>
            <p>
              Na tomto blogu zdieľam svoje skúsenosti, recenzie mixov, 
              technické tipy a všetko, čo ma v DJingu baví.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-6">🔊 Čo robím</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎛️</span>
              <div>
                <h3 className="text-white font-semibold mb-2">DJ Sets</h3>
                <p className="text-gray-400 text-sm">
                  Liquid DnB, Jump-up, Neurofunk
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎹</span>
              <div>
                <h3 className="text-white font-semibold mb-2">Production</h3>
                <p className="text-gray-400 text-sm">
                  Beats, remixes, originál tracky
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-3xl">📝</span>
              <div>
                <h3 className="text-white font-semibold mb-2">Blog</h3>
                <p className="text-gray-400 text-sm">
                  DJ tipy, recenzie, tutoriály
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎤</span>
              <div>
                <h3 className="text-white font-semibold mb-2">Live Streams</h3>
                <p className="text-gray-400 text-sm">
                  Weekly sessions na Twitch/YouTube
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-4">📬 Kontakt</h2>
          <p className="text-gray-400 mb-6">
            Máš otázku alebo feedback? Ozvem sa!
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://instagram.com/hanybeats" 
              target="_blank"
              className="text-3xl hover:scale-110 transition-transform"
            >
              📷
            </a>
            <a 
              href="https://soundcloud.com/hanybeats" 
              target="_blank"
              className="text-3xl hover:scale-110 transition-transform"
            >
              🎵
            </a>
            <a 
              href="mailto:hany@example.com"
              className="text-3xl hover:scale-110 transition-transform"
            >
              ✉️
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
          >
            Prečítaj Blog →
          </Link>
        </div>
      </div>
    </main>
  )
}
