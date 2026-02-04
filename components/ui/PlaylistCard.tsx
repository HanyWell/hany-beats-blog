import { motion, AnimatePresence } from 'framer-motion'
import { theme } from '@/lib/theme'
import { contentVariants, arrowVariants, emojiVariants } from '@/lib/animationVariants'
import { PlaylistCardProps } from '@/types/components'

export default function PlaylistCard({
  id,
  title,
  description,
  emoji,
  isSpotify = false,
  spotifyId,
  isMultiple = false,
  playlists = [],
  isOpen,
  onToggle,
  index
}: PlaylistCardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: index * 0.08
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`
        group relative overflow-hidden rounded-2xl border transition-all duration-500
        ${isOpen 
          ? 'bg-gray-900/90 border-red-500/50 shadow-2xl shadow-red-500/20' 
          : 'bg-gray-900/50 border-gray-800 hover:border-red-500/30 hover:bg-gray-900/70'
        }
      `}
      style={{
        boxShadow: isOpen ? theme.shadows.redCard : 'none'
      }}
    >
      {/* Clickable header */}
      <motion.button
        onClick={onToggle}
        className="w-full p-4 sm:p-6 md:p-8 text-left flex items-center justify-between gap-3 sm:gap-4 md:gap-6 transition-all duration-300"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Emoji icon */}
          <motion.div
            variants={emojiVariants}
            animate={isOpen ? "expanded" : "collapsed"}
            className="text-3xl sm:text-4xl md:text-5xl transition-all duration-500"
          >
            {emoji}
          </motion.div>
          
          {/* Text */}
          <div>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 transition-colors duration-300"
              animate={{ 
                color: isOpen ? theme.colors.primary[500] : '#ffffff'
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Arrow icon */}
        <motion.div
          variants={arrowVariants}
          animate={isOpen ? "expanded" : "collapsed"}
          className="text-2xl md:text-3xl transition-transform duration-500 text-red-400 flex-shrink-0"
        >
          ▼
        </motion.div>
      </motion.button>

      {/* Expandable content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              {/* Separator line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-6" />
              
              {/* SPOTIFY PLAYER */}
              {isSpotify && spotifyId && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-full rounded-xl overflow-hidden border border-green-500/30 shadow-2xl hover:border-green-500/50 transition-colors">
                    <iframe 
                      src={`https://open.spotify.com/embed/playlist/${spotifyId}?utm_source=generator&theme=0`}
                      width="100%" 
                      height="380" 
                      frameBorder="0" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                      title={title}
                      className="w-full"
                    />
                  </div>
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    Prehráva sa priamo zo Spotify – <a 
                      href={`https://open.spotify.com/playlist/${spotifyId}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-400 hover:underline transition-colors"
                    >
                      otvor v Spotify app
                    </a> pre plný zoznam
                  </p>
                </motion.div>
              )}

              {/* MULTIPLE YOUTUBE PLAYLISTS */}
              {isMultiple && playlists.length > 0 && (
                <div className="space-y-8">
                  {playlists.map((subPlaylist, idx) => (
                    <motion.div
                      key={subPlaylist.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold text-red-400 mb-4">
                        {subPlaylist.subtitle}
                      </h3>
                      <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                        <iframe
                          src={`https://www.youtube.com/embed/videoseries?list=${subPlaylist.id}&autoplay=0&controls=1`}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          title={subPlaylist.subtitle}
                          className="w-full h-full"
                        />
                      </div>
                      {idx < playlists.length - 1 && (
                        <div className="w-full h-px bg-gray-800 mt-8"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* SINGLE YOUTUBE PLAYLIST */}
              {!isSpotify && !isMultiple && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/videoseries?list=${id}&autoplay=0&controls=1`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title={title}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    Prehráva sa priamo z YouTube – môžeš preskakovať tracky v ovládacích prvkoch.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect (len keď je otvorený) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        />
      )}
    </motion.div>
  )
}
