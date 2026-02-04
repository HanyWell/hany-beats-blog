# Hany Beats - AI Coding Agent Instructions

## Project Overview
Next.js 16 portfolio site for a Drum & Bass DJ with Sanity CMS, featuring mixes, blog posts, playlists, and Slovak/Czech localization. Built with React 19, Framer Motion animations, Three.js 3D effects, and Tailwind CSS 4.

## Architecture & Data Flow

### Sanity CMS Integration
- **Dual client setup**: `app/lib/sanity.client.ts` (frontend) and `sanity/lib/client.ts` (backend)
- **Project**: `z7bgld94` / `production` dataset (see [sanity.config.ts](sanity.config.ts))
- **Content types**: `mix` (audio files + tracklists), `post` (blog), both in `sanity/schemas/`
- **Data fetching**: Use `getMixBySlug()`, `getAllMixes()` in [app/lib/mixes.ts](app/lib/mixes.ts) - follows Next.js 16 async params pattern

### Routing Structure
- **App Router** with Slovak content (`/mixy`, `/playlisty`, `/blog`)
- **Dynamic routes**: `app/mixy/[slug]/page.tsx` uses `generateStaticParams()` for SSG
- **Production rewrites**: Sanity Studio (`/y/*`) redirected to 404 in [next.config.ts](next.config.ts)

### Component Organization
- **Page-level**: `app/components/` (HeroSection, TracklistSection, Navigation)
- **Reusable UI**: `components/ui/` (AudioCard, BlogCard, SectionHeader)
- **Visual effects**: `components/PixelBlast.tsx`, `components/FloatingLines.tsx` (background animations)
- **Lazy loading**: Use `lazy()` + `Suspense` for performance (see [app/page.tsx](app/page.tsx))

## Development Workflows

### Running the Project
```bash
npm run dev              # Next.js dev server (port 3000)
npx sanity dev           # Sanity Studio (requires separate terminal)
npm run build            # Production build
npm run lint             # ESLint check
```

### Sanity Schema Changes
1. Edit schemas in `sanity/schemas/*.ts` (mix.ts, post.ts)
2. Export from `sanity/schemaTypes/index.ts`
3. Restart Sanity Studio to see changes

### Adding shadcn Components
- Config: [components.json](components.json) with `@react-bits` registry
- Aliases: `@/components`, `@/lib`, `@/hooks`
- Install: `npx shadcn@latest add <component>`

## Code Conventions

### Animation System
- **Centralized constants**: [lib/constants.ts](lib/constants.ts) defines ALL durations, easing, spacing
- **Reusable variants**: [lib/animationVariants.ts](lib/animationVariants.ts) exports `fadeInVariants`, `containerVariants`, etc.
- **Pattern**: Never use magic numbers - reference `ANIMATION_DURATIONS.SMOOTH` instead of `0.8`
- **Example**: See [app/components/HeroModern.tsx](app/components/HeroModern.tsx) for motion component usage

### Language & Content
- **Slovak localization**: UI text, blog titles, field names (`Dátum publikovania`, `Tracklist`)
- **Comments**: Mixed Slovak/Czech (historic artifact - keep existing style)
- **Date formatting**: `toLocaleDateString('sk', {...})` for consistency

### TypeScript Patterns
- **Functional components only** - no classes
- **Strict types**: Custom types in `types/sanity.ts`, `types/components.ts`
- **Async params**: Next.js 16 requires `const { slug } = await params` in dynamic routes
- **Sanity rules**: Use `SanityRule` type for validation (see [sanity/schemas/mix.ts](sanity/schemas/mix.ts#L13))

### Styling Approach
- **Tailwind CSS 4** with custom design system
- **Color scheme**: Black backgrounds, red accent (`#E02020`, red-500/600)
- **Glass morphism**: Use `bg-white/5 backdrop-blur-md border border-white/10` pattern
- **Responsive**: Mobile-first with `sm:`, `md:` breakpoints

## Key Integration Points

### Sanity to Next.js Pipeline
1. Content created in Sanity Studio (port varies)
2. Fetched via `createClient()` with `useCdn: false` (fresh data)
3. Rendered in Server Components (default) or Client Components (`'use client'`)
4. Images: Configured in [next.config.ts](next.config.ts) `remotePatterns` for `cdn.sanity.io`

### Audio Playback
- **Native HTML5**: `<audio controls src={mix.audioFile.asset.url} />`
- **File storage**: Sanity handles audio files via `type: 'file'` field
- **No external player**: Keep it simple with native controls

### Visual Effects Layer
- **PixelBlast**: Fixed background with particle system (see [app/page.tsx](app/page.tsx#L34))
- **Three.js**: Used via `@react-three/fiber` for 3D effects (not yet widely implemented)
- **Performance**: Effects use `transparent` prop and `edgeFade` to minimize render cost

## Common Pitfalls

### Don't Do This
❌ Hardcode animation values: `duration: 0.8`  
✅ Use constants: `duration: ANIMATION_DURATIONS.SMOOTH`

❌ Mix English UI text with Slovak content  
✅ Keep UI in Slovak: "Späť na mixy" not "Back to mixes"

❌ `const { slug } = params` in Next.js 16  
✅ `const { slug } = await params` (async required)

❌ Inline styles for common patterns  
✅ Use Tailwind classes or extract to [lib/utils.ts](lib/utils.ts)

### When Adding Features
1. **Check constants first**: Is duration/spacing/color already defined?
2. **Reuse animation variants**: Don't recreate fade-in logic
3. **Follow Slovak naming**: New routes should use Slovak paths (`/o-mne` not `/about`)
4. **Test both clients**: Changes may affect Studio and frontend differently

## External Dependencies
- **Sanity**: CMS with Vision plugin enabled (GROQ query testing)
- **Framer Motion**: v12.29+ with motion components (not framer-motion/three)
- **Lucide Icons**: Primary icon library (e.g., `ArrowLeft`, `Music`)
- **shadcn/ui**: Via components.json, uses `@react-bits` registry
- **Three.js**: `@react-three/fiber` + `@react-three/drei` for 3D

## Performance Considerations
- **Image optimization**: Next.js Image with Sanity CDN
- **Code splitting**: Lazy load heavy sections (Features, Contact)
- **Client components**: Only when needed for interactivity (use `'use client'` sparingly)
- **Background effects**: Limited to one per page, use `fixed` positioning

---
*For detailed WindSurf rules (communication, architecture), see `.windsurf/rules/global-rules.md`*
