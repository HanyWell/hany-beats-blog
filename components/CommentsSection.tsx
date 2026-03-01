'use client'

import { useState, memo, useCallback, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { createMotionProps } from '@/lib/motion'
import { ANIMATION_DURATIONS, DELAYS } from '@/lib/constants'

// ---- Types ----
interface Comment {
  id: string
  author: string
  text: string
  timestamp: number
  likes: number
}

interface CommentsState {
  comments: Comment[]
  likedCommentIds: string[]
}

interface CommentsSectionProps {
  pageId: string
}

// ---- localStorage helpers ----
function getStorageKey(pageId: string) {
  return `hany-beats-comments-${pageId}`
}

function loadCommentsState(pageId: string): CommentsState {
  if (typeof window === 'undefined') return { comments: [], likedCommentIds: [] }
  try {
    const stored = localStorage.getItem(getStorageKey(pageId))
    if (!stored) return { comments: [], likedCommentIds: [] }
    const parsed = JSON.parse(stored) as CommentsState
    parsed.comments.sort((a, b) => b.timestamp - a.timestamp)
    return parsed
  } catch {
    return { comments: [], likedCommentIds: [] }
  }
}

function saveCommentsState(pageId: string, state: CommentsState): void {
  try {
    localStorage.setItem(getStorageKey(pageId), JSON.stringify(state))
  } catch {
    // localStorage full or unavailable
  }
}

function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('sk-SK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

// ---- CommentCard ----
interface CommentCardProps {
  comment: Comment
  isLiked: boolean
  onLike: (id: string) => void
  index: number
}

const CommentCard = memo(function CommentCard({ comment, isLiked, onLike, index }: CommentCardProps) {
  return (
    <motion.article
      layout
      {...createMotionProps({
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
        transition: { duration: ANIMATION_DURATIONS.FAST, delay: Math.min(index * DELAYS.CARD_STAGGER, 0.8) },
      })}
      className={cn(
        'p-4 sm:p-5',
        'bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl',
        'transition-all duration-300',
        'hover:bg-white/[0.07] hover:border-white/15'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <span className="text-sm sm:text-base font-bold text-white">
          {comment.author}
        </span>
        <time
          className="text-xs text-gray-500"
          dateTime={new Date(comment.timestamp).toISOString()}
        >
          {formatDate(comment.timestamp)}
        </time>
      </div>

      {/* Text */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 whitespace-pre-wrap break-words">
        {comment.text}
      </p>

      {/* Like button */}
      <div className="flex justify-end">
        <motion.button
          onClick={() => onLike(comment.id)}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-full',
            'transition-all duration-300',
            'min-h-[44px] min-w-[44px] justify-center',
            'focus:outline-none focus:ring-4 focus:ring-red-500/50',
            isLiked
              ? 'text-red-500 bg-red-500/10 border border-red-500/30'
              : 'text-gray-500 hover:text-red-400 bg-white/5 border border-white/10 hover:border-red-500/20'
          )}
          whileTap={{ scale: 0.9 }}
          aria-label={isLiked ? 'Odobrať srdce' : 'Dať srdce'}
          aria-pressed={isLiked}
        >
          <Heart className={cn('w-4 h-4', isLiked && 'fill-red-500')} />
          {comment.likes > 0 && (
            <span className="text-xs font-medium">{comment.likes}</span>
          )}
        </motion.button>
      </div>
    </motion.article>
  )
})

// ---- CommentForm ----
interface CommentFormProps {
  onSubmit: (author: string, text: string) => void
}

const CommentForm = memo(function CommentForm({ onSubmit }: CommentFormProps) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    if (!author.trim() || !text.trim()) return
    onSubmit(author.trim(), text.trim())
    setAuthor('')
    setText('')
  }, [author, text, onSubmit])

  return (
    <motion.form
      className="mb-8 sm:mb-12 p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
      {...createMotionProps({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: ANIMATION_DURATIONS.SMOOTH, delay: DELAYS.CONTENT_DELAY },
      })}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Tvoje meno"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        maxLength={50}
        className={cn(
          'w-full px-4 py-3 rounded-xl',
          'bg-white/5 border border-white/10',
          'text-white text-sm sm:text-base placeholder:text-gray-500',
          'focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:border-red-500/30',
          'transition-all duration-300',
          'min-h-[44px]'
        )}
        aria-label="Tvoje meno"
        required
      />

      <textarea
        placeholder="Napíš komentár..."
        value={text}
        onChange={e => setText(e.target.value)}
        maxLength={500}
        rows={3}
        className={cn(
          'w-full px-4 py-3 rounded-xl resize-none',
          'bg-white/5 border border-white/10',
          'text-white text-sm sm:text-base placeholder:text-gray-500',
          'focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:border-red-500/30',
          'transition-all duration-300',
          'mt-3 sm:mt-4'
        )}
        aria-label="Text komentára"
        required
      />

      <div className="flex items-center justify-between mt-3 sm:mt-4">
        <span className="text-xs text-gray-600">
          {text.length}/500
        </span>

        <motion.button
          type="submit"
          disabled={!author.trim() || !text.trim()}
          className={cn(
            'px-6 sm:px-8 py-3 rounded-full',
            'bg-gradient-to-r from-red-500 to-red-600',
            'text-white text-sm sm:text-base font-bold',
            'hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]',
            'active:scale-95',
            'focus:outline-none focus:ring-4 focus:ring-red-500/50',
            'transition-all duration-300',
            'min-h-[44px]',
            'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Odoslať komentár"
        >
          Odoslať
        </motion.button>
      </div>
    </motion.form>
  )
})

// ---- CommentsSection (main) ----
const CommentsSection = memo(function CommentsSection({ pageId }: CommentsSectionProps) {
  const [state, setState] = useState<CommentsState>(() => loadCommentsState(pageId))

  const handleAddComment = useCallback((author: string, text: string) => {
    setState(prev => {
      const newComment: Comment = {
        id: generateId(),
        author,
        text,
        timestamp: Date.now(),
        likes: 0,
      }
      const newState: CommentsState = {
        ...prev,
        comments: [newComment, ...prev.comments],
      }
      saveCommentsState(pageId, newState)
      return newState
    })
  }, [pageId])

  const handleLike = useCallback((commentId: string) => {
    setState(prev => {
      const alreadyLiked = prev.likedCommentIds.includes(commentId)
      const newComments = prev.comments.map(c =>
        c.id === commentId
          ? { ...c, likes: alreadyLiked ? c.likes - 1 : c.likes + 1 }
          : c
      )
      const newLikedIds = alreadyLiked
        ? prev.likedCommentIds.filter(id => id !== commentId)
        : [...prev.likedCommentIds, commentId]

      const newState: CommentsState = { comments: newComments, likedCommentIds: newLikedIds }
      saveCommentsState(pageId, newState)
      return newState
    })
  }, [pageId])

  return (
    <section
      className="py-12 sm:py-16 border-t border-white/10 relative"
      aria-labelledby="comments-title"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-red-600/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Title */}
      <motion.h2
        id="comments-title"
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 text-white"
        {...createMotionProps({
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: ANIMATION_DURATIONS.SMOOTH },
        })}
      >
        Komentáre
      </motion.h2>

      {/* Form */}
      <CommentForm onSubmit={handleAddComment} />

      {/* Counter */}
      {state.comments.length > 0 && (
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-bold whitespace-nowrap">
            Komentáre ({state.comments.length})
          </span>
          <div className="flex-1 h-px bg-white/5" aria-hidden="true" />
        </div>
      )}

      {/* Comments list */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {state.comments.map((comment, index) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLiked={state.likedCommentIds.includes(comment.id)}
              onLike={handleLike}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {state.comments.length === 0 && (
        <motion.div
          className="text-center py-12 sm:py-16"
          {...createMotionProps({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: ANIMATION_DURATIONS.SMOOTH },
          })}
        >
          <MessageCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 text-sm sm:text-base">
            Zatiaľ žiadne komentáre. Buď prvý!
          </p>
        </motion.div>
      )}
    </section>
  )
})

export default CommentsSection
