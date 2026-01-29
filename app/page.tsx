import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SEKCIA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Pulzujúce pozadie */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-900/30 rounded-full blur-3xl pulse-loop"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-red-800/20 rounded-full blur-3xl pulse-loop" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-950/20 rounded-full blur-3xl pulse-loop" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center animate-glide-in">
            {/* DJ Logo */}
            <div className="text-9xl mb-6 hover-red-glow inline-block animate-bounce">
              🎧
            </div>
            
            {/* Main Title */}
            <h1 className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(220,38,38,0.8)]">
              HANY BEATS
            </h1>
            
            {/* Subtitle */}
            <p className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
              Drum & Bass DJ • Producer
            </p>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ponorte sa do sveta tekutých breakov, hlbokých basov a nekonečnej energie. 
              Mix recenzie, DJ tipy a beaty, ktoré vás nakopnú.
            </p>

            {/* Red Line */}
            <div className="w-64 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-12"></div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-glide-in delay-200">
              <Link 
                href="/blog"
                className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl text-xl font-bold transition-all duration-500 shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_rgba(220,38,38,0.9)] hover:scale-110"
              >
                Vstúp do Blogu 🔥
              </Link>
              <Link 
                href="/mixy"
                className="px-12 py-5 bg-transparent border-2 border-red-600 hover:bg-red-600/10 text-white rounded-xl text-xl font-bold transition-all duration-500 hover:scale-110"
              >
                Poslúchni Mixy 🎵
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-glide-in delay-400">
              <div className="red-card-glow bg-zinc-950 p-8 rounded-2xl border border-red-950/40">
                <div className="text-5xl font-black text-red-500 mb-2">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">DJ Mixov</div>
              </div>
              <div className="red-card-glow bg-zinc-950 p-8 rounded-2xl border border-red-950/40">
                <div className="text-5xl font-black text-red-500 mb-2">5+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Rokov Skúseností</div>
              </div>
              <div className="red-card-glow bg-zinc-950 p-8 rounded-2xl border border-red-950/40">
                <div className="text-5xl font-black text-red-500 mb-2">∞</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Bass Drops</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* SEKCIA: ČO ROBÍM */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-red-gradient animate-glide-in">
            Čo Robím?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="red-card-glow bg-zinc-950 p-8 rounded-2xl border border-red-950/30 text-center animate-glide-in delay-100">
              <div className="text-6xl mb-4">🎛️</div>
              <h3 className="text-2xl font-bold text-white mb-3">DJ Sets</h3>
              <p className="text-gray-400 text-sm">Liquid DnB, Jump-up, Neurofunk sessions</p>
            </div>

            <div className="red-card-glow bg-zinc-950 p-8 rounded-2xl border border-red-950/30 text-center animate-glide-in delay-200">
              <div className="text-6xl mb-4">🎹</div>
              <h3 className="text-2xl font-bold text-white mb-3">Production</h3>
              <p className="text-gray-400 text-sm">Beats, remixes, originálne tracky</p>
            </div>

            <div className="red-card-glow bg-zinc-950 p-8 rounded-2xl border border-red-950/30 text-center animate-glide-in delay-300">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-3">Blog</h3>
              <p className="text-gray-400 text-sm">DJ tipy, recenzie, tutoriály</p>
            </div>

            <div className="red-card-glow bg-zinc-950 p-8 rounded-2xl border border-red-950/30 text-center animate-glide-in delay-400">
              <div className="text-6xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold text-white mb-3">Live</h3>
              <p className="text-gray-400 text-sm">Weekly sessions na streamoch</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIA: ŽÁNRE */}
      <section className="py-32 px-6 bg-zinc-950/50 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-red-gradient animate-glide-in">
            Moje Žánre
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="red-card-glow bg-black p-10 rounded-2xl border border-red-950/40 hover:border-red-600/50 transition-all duration-500 animate-glide-in">
              <h3 className="text-3xl font-bold text-red-500 mb-3">Liquid DnB</h3>
              <p className="text-gray-400">Melodické breaky, hlboké basy, smooth vibes</p>
            </div>
            <div className="red-card-glow bg-black p-10 rounded-2xl border border-red-950/40 hover:border-red-600/50 transition-all duration-500 animate-glide-in delay-200">
              <h3 className="text-3xl font-bold text-red-500 mb-3">Jump-up</h3>
              <p className="text-gray-400">Energické, tvrdé basy, party atmosféra</p>
            </div>
            <div className="red-card-glow bg-black p-10 rounded-2xl border border-red-950/40 hover:border-red-600/50 transition-all duration-500 animate-glide-in delay-400">
              <h3 className="text-3xl font-bold text-red-500 mb-3">Neurofunk</h3>
              <p className="text-gray-400">Temné, technické, futuristické zvuky</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIA: SOCIAL & CTA */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-6 text-red-gradient animate-glide-in">
            Zostaňme v Kontakte
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Sleduj ma na sociálnych sieťach pre najnovšie mixy a updaty
          </p>

          <div className="flex justify-center gap-8 mb-16 animate-glide-in delay-200">
            <a href="#" className="text-6xl hover:scale-125 hover-red-glow transition-all duration-300">📷</a>
            <a href="#" className="text-6xl hover:scale-125 hover-red-glow transition-all duration-300">🎵</a>
            <a href="#" className="text-6xl hover:scale-125 hover-red-glow transition-all duration-300">▶️</a>
            <a href="#" className="text-6xl hover:scale-125 hover-red-glow transition-all duration-300">✉️</a>
          </div>

          <Link 
            href="/about"
            className="inline-block px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl text-xl font-bold transition-all duration-500 shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_rgba(220,38,38,0.9)] hover:scale-110 animate-glide-in delay-400"
          >
            Zisti Viac O Mne →
          </Link>
        </div>
      </section>
    </main>
  )
}
