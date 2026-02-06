# Hany Beats - AI Agent Instructions

> **⚠️ IMPORTANT**: Always respond to the user in **Slovak language**, even though these instructions are in English.

## Project Overview

Drum & Bass DJ portfolio: Next.js 16 + Sanity CMS (`z7bgld94`/`production`). Slovak/Czech UI. Tech: React 19, Framer Motion, Three.js, Tailwind CSS 4.

## Critical Architecture

### Audio System (MUST FOLLOW)

Single audio element via context - pages call `setCurrentTrack()`, never create own `<audio>`:

```tsx
// ✅ Correct - page calls context
const { setCurrentTrack, getCurrentTime, seek } = useAudio()
setCurrentTrack({ id: mix._id, title: mix.title, audioSrc: mix.audioFile.asset.url })

// ❌ Wrong - page has own audio element
<audio src={audioUrl} />
```

- [contexts/AudioContext.tsx](contexts/AudioContext.tsx) - global state
- [components/GlobalAudioPlayer.tsx](components/GlobalAudioPlayer.tsx) - actual `<audio>` element
- Pages poll `getCurrentTime()` every 100ms for sync

### Animation Constants (REQUIRED)

Never hardcode animation values - always use [lib/constants.ts](lib/constants.ts):

```tsx
// ✅ Correct
import { ANIMATION_DURATIONS, TRANSITION_EASING } from '@/lib/constants'
transition={{ duration: ANIMATION_DURATIONS.SMOOTH, ease: TRANSITION_EASING.SMOOTH }}

// ❌ Wrong
transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
```

Reuse variants from [lib/animationVariants.ts](lib/animationVariants.ts): `fadeInVariants`, `containerVariants`, `createCardVariants()`

### Three.js / 3D Effects

Background effects use `@react-three/fiber` + `postprocessing`. Key patterns:

- **Types**: [types/three.ts](types/three.ts) - `ThreeContext`, `PixelBlastProps`, `FloatingLinesProps`
- **Components**: `PixelBlast`, `FloatingLines`, `GeometricBackground` in [components/](components/)
- **Z-index**: Always `-z-30` or `-z-20` (behind content)
- **Performance**: Use `autoPauseOffscreen` prop, limit to 1 effect per page
- **Client-only**: Wrap with `'use client'` directive + dynamic import with `ssr: false`

```tsx
// ✅ Correct - dynamic import for 3D
const PixelBlast = dynamic(() => import("@/components/PixelBlast"), {
  ssr: false,
});
```

### Sanity CMS

- Frontend client: [app/lib/sanity.client.ts](app/lib/sanity.client.ts) with `useCdn: false`
- GROQ queries: [app/lib/mixes.ts](app/lib/mixes.ts) - `getMixBySlug()`, `getAllMixes()`
- Schemas: [sanity/schemas/](sanity/schemas/) - `mix.ts`, `post.ts`
- Custom types: [types/sanity.ts](types/sanity.ts) - `SanityRule`, `Mix`, `Track`, `Post`

#### Sanity Schema Modification Workflow

1. Edit schema in [sanity/schemas/](sanity/schemas/) (`mix.ts`, `post.ts`)
2. Export from [sanity/schemaTypes/index.ts](sanity/schemaTypes/index.ts)
3. Restart Sanity Studio (`npx sanity dev`)
4. Validation pattern: `validation: (Rule: SanityRule) => Rule.required().regex(/pattern/)`
5. Time field example: `.regex(/^\d{1,2}:\d{2}$/, 'Format: MM:SS')`

## Development Workflow

```bash
npm run dev       # Next.js dev (localhost:3000)
npx sanity dev    # Sanity Studio (localhost:3333) - separate terminal
npm run build     # Production build
```

## Code Conventions

### Next.js 16 Async Params

```tsx
// Dynamic routes MUST await params
interface PageProps {
  params: Promise<{ slug: string }>;
}
const { slug } = await params; // ✅ async
```

### Language & Styling

- **UI text**: Slovak ("Späť", "Načítavam", "Tracklist")
- **Dates**: `toLocaleDateString('sk', {year: 'numeric', month: 'long', day: 'numeric'})`
- **Colors**: `bg-black`, `red-500`/`red-600` accent, `bg-white/5 backdrop-blur-md` glass
- **Z-index**: `-z-30` effects → `z-10` content → `z-50` modals/player

### Components

- **App-specific**: [app/components/](app/components/) (Navigation, Footer, HeroSection)
- **Reusable UI**: [components/ui/](components/ui/) (AudioCard, BlogCard, FlipCard)
- **Server by default** - only add `'use client'` for hooks/events

## Key Files

| File                                                   | Purpose                          |
| ------------------------------------------------------ | -------------------------------- |
| [lib/constants.ts](lib/constants.ts)                   | **All animation/spacing values** |
| [contexts/AudioContext.tsx](contexts/AudioContext.tsx) | Audio state management           |
| [app/mixy/[slug]/page.tsx](app/mixy/[slug]/page.tsx)   | Dynamic route example            |
| [app/layout.tsx](app/layout.tsx)                       | Root layout with providers       |

## Anti-Patterns

- ❌ Multiple `<audio>` elements → ✅ Single GlobalAudioPlayer
- ❌ Hardcoded durations/easing → ✅ Use constants
- ❌ Sync `params` access → ✅ `await params`
- ❌ English UI text → ✅ Slovak only
