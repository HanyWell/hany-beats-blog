import Image from 'next/image'
import { FaFacebook, FaSoundcloud, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa'
import { socials } from '@/config/socials'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <div className="max-w-md mx-auto">
            {/* FOTO */}
            <div className="mb-6">
              <Image
                src="/img/ja.jpg"
                alt="Martin Hany DJ"
                width={200}
                height={200}
                className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-3xl object-cover border-4 border-red-600/50 shadow-2xl hover:scale-105 transition-all duration-300"
              />
            </div>
            
            {/* TEXT */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">O mne</h2>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto">
              Volám sa Martin, ale svet DJingu ma pozná ako <span className="text-red-400 font-semibold">Hany</span>. 
              Pochádzam z malého mestečka Krásno nad Kysucou. 
              DJing sa venujem s prestávkami už viac ako 15 rokov – <span className="text-red-400">milujem hudbu</span>.
            </p>
            
            {/* SOCIÁLKY */}
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href={socials.facebook} 
                target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 bg-red-600/20 hover:bg-red-500 text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/50"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href={socials.soundcloud} 
                target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 bg-orange-500/80 hover:bg-orange-400 text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-400/50"
                title="SoundCloud"
              >
                <FaSoundcloud />
              </a>
              <a 
                href={socials.instagram} 
                target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 shadow-lg"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href={socials.email}
                
                className="w-14 h-14 bg-blue-500/80 hover:bg-blue-400 text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-400/50"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href={socials.youtube} 
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
      </div>
    </main>
  )
}
