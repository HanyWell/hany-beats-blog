import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center px-4 relative z-10">
        {/* Animated headphones icon */}
        <div className="text-8xl mb-8 animate-bounce">
          🎧
        </div>
        
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          Hany Beats
        </h1>
        
        <p className="text-2xl text-gray-300 mb-4 animate-fade-in-delay">
          Môj osobný DJ Blog
        </p>
        
        <p className="text-gray-400 mb-12 max-w-md mx-auto animate-fade-in-delay-2">
          Mix recenzie, DJ tipy a Drum and Bass 🎵
        </p>
        
        <Link 
          href="/blog"
          className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-purple-500/50 hover:scale-105 animate-fade-in-delay-3"
        >
          Vstúp do Blogu →
        </Link>

        {/* DJ stats/badges */}
        <div className="mt-16 flex justify-center gap-8 text-sm">
          <div className="text-center animate-fade-in-delay-4">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-purple-400 font-bold">50+ Mixov</div>
          </div>
          <div className="text-center animate-fade-in-delay-5">
            <div className="text-3xl mb-2">💿</div>
            <div className="text-pink-400 font-bold">DJ Specialist</div>
          </div>
          <div className="text-center animate-fade-in-delay-6">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-blue-400 font-bold">Fresh Beats</div>
          </div>
        </div>
      </div>
    </main>
  )
}
