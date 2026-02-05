# Hany Beats - Inštrukcie pre AI Coding Agentov

## Prehľad Projektu
Next.js 16 portfolio stránka pre Drum & Bass DJ s Sanity CMS (project `z7bgld94`, dataset `production`), obsah mixy, blog posty a playlisty. Postavené na React 19, Framer Motion animáciach, Three.js 3D efektoch a Tailwind CSS 4. Slovenský/český obsah s podporou lokalizácie.

**Tech Stack**: Next.js 16.1.6, React 19.2.3, Sanity 4.22, Framer Motion 12.29, Tailwind CSS 4, TypeScript 5, GSAP 3.14

## Architektúra a Tok Dát

### Sanity CMS Integrácia
- **Frontend klient**: [app/lib/sanity.client.ts](app/lib/sanity.client.ts) - `useCdn: false` pre čerstvé dáta
- **Backend klient**: `sanity/lib/client.ts` - pre server-side operácie
- **Projekt**: `z7bgld94` / `production` dataset (pozri [sanity.config.ts](sanity.config.ts))
- **Schémy**: `mix` (audio + tracklisty), `post` (blog) v [sanity/schemas/](sanity/schemas/)
- **Dátové funkcie**: `getMixBySlug()`, `getAllMixes()` v [app/lib/mixes.ts](app/lib/mixes.ts)
- **Next.js 16 pattern**: Async params - `const { slug } = await params` v dynamických routách

### Architekúra Audio Systému
**Tok dát**: Page komponenta → `setCurrentTrack()` → `AudioContext` → `GlobalAudioPlayer` na spodku

- **Globálny stav** [contexts/AudioContext.tsx](contexts/AudioContext.tsx):
  - `setCurrentTrack({id, title, audioSrc, artist?, slug?})` - spúšťa prehrávanie
  - `registerControls()` - registrácia ovládacích prvkov
  - `updateTime(time, duration)` - synchronizácia času

- **Audio hook** [hooks/useAudioPlayer.ts](hooks/useAudioPlayer.ts):
  - Spravuje HTML5 Audio element cez ref
  - Vracia `{isPlaying, seek(time), togglePlay(), currentTime, duration, ...}`
  - Chyby ako `error` state (slovenské správy)

- **Player komponenty**:
  - `GlobalAudioPlayer` - persistentný player dole (všetky tracky)
  - `DJAudioPlayer` - plne vybavený s waveformom
  - **Správa**: Page komponenty volajú `setCurrentTrack()`, NEMAJÚ svoj `<audio>`

- **Synchronizácia**: Page komponenty poolujú `getCurrentTime()` každých 100ms

### Štruktúra Routingu (App Router)
- **Slovenské routes**: `/mixy`, `/mixy/[slug]`, `/blog`, `/playlisty`, `/about`
- **Dynamické routes**: `generateStaticParams()` pre SSG
- **Async params**: `const { slug } = await params` - POVINNÉ v Next.js 16

### Organizácia Komponentov
- **App-specific**: [app/components/](app/components/) (HeroSection, TracklistSection, Navigation, Footer)
- **Reusable UI**: [components/ui/](components/ui/) (AudioCard, BlogCard, SectionHeader, FlipCard)
- **Audio**: `GlobalAudioPlayer`, `DJAudioPlayer`, `DJAudioPlayerWrapper` (SSR-safe)
- **Efekty**: `PixelBlast`, `FloatingLines`, `GeometricBackground` (pozaďové animácie)
- **Performance**: Lazy load s `React.lazy()` + `Suspense`

## Vývojové Workflow

### Spustenie Projektu (2 terminály)
```bash
# Terminal 1: Next.js dev server
npm run dev              # http://localhost:3000

# Terminal 2: Sanity Studio (oddelený proces)
npx sanity dev           # http://localhost:3333
```

### Build & Testing
```bash
npm run build            # Production build
npm run lint             # ESLint
npm start                # Produkčný server
```

### Sanity Schémy (Zmeny)
1. Upravte v [sanity/schemas/](sanity/schemas/) (mix.ts, post.ts)
2. Exportujte z [sanity/schemaTypes/index.ts](sanity/schemaTypes/index.ts)
3. Reštartujte Sanity Studio (`npx sanity dev`)
4. **Validácia**: `validation: (Rule: SanityRule) => Rule.required().regex(/pattern/)`
5. Príklad časového poľa: `.regex(/^\d{1,2}:\d{2}$/, 'Formát: MM:SS')`

## Konvencie Kódu

### Animačný Systém (KRITICKÉ)
- **Žiadne magické čísla**: VŽDY referencujte [lib/constants.ts](lib/constants.ts)
  - `ANIMATION_DURATIONS` (SMOOTH: 0.8, FAST: 0.3, SLOW: 1.2)
  - `SPACING_VALUES` (SECTION_VERTICAL: 32, CARD_PADDING: 4)
  - `TRANSITION_EASING` (SMOOTH, BOUNCE, LINEAR)
- **Framer Motion varianty**: [lib/animationVariants.ts](lib/animationVariants.ts) - reuse `fadeInVariants`, `containerVariants`
- **Príklad**: ✅ `duration: ANIMATION_DURATIONS.SMOOTH` | ❌ `duration: 0.8`

### Jazyk a Obsah
- **UI texty**: Slovenčina ("Späť", "Načítavam", "Tracklist")
- **Obsah z Sanity**: Môže byť SK alebo CZ (bez zmeny)
- **Dátumy**: `toLocaleDateString('sk', {year: 'numeric', month: 'long', day: 'numeric'})`
- **Komentáre**: SK/CZ zmiešané (historický štýl - zachovajte)

### TypeScript & Next.js 16
- **Komponenty**: Iba funkcionálne, bez tried
- **Striktné typy**: [types/sanity.ts](types/sanity.ts), [types/components.ts](types/components.ts)
- **Async params**: `const { slug } = await params` - POVINNÉ
- **Server components**: Default (rýchlejšie) - `'use client'` iba pre hooku/eventy

### Styling & Tailwind CSS 4
- **Farby**: `bg-black` (pozadia), `#E02020`/`red-500` (akcent), `white/10` (borders)
- **Glass morphism**: `bg-white/5 backdrop-blur-md border border-white/10`
- **Responzívne**: Mobile-first `sm:`, `md:`, `lg:` breakpointy
- **Z-layers**:
  - `-z-30`: Pozaďové efekty (PixelBlast, FloatingLines)
  - `-z-20`: Geometrické pozadia
  - `z-10`: Obsah
  - `z-50`: Modály, prehrávače (fixed dole)

## Kritické Integračné Toky

### Sanity CMS → Next.js Rendering
```
[Sanity Studio] --REST API--> [app/lib/sanity.client.ts] --query--> [Components] --> [HTML]
```
- Content: Sanity Studio (`z7bgld94`/`production`)
- Frontend: `useCdn: false` pre real-time dáta
- Images: `remotePatterns: ["cdn.sanity.io"]` v [next.config.ts](next.config.ts)
- Rendering: Server components (default) sú rýchlejšie

### Audio Playback Flow (KRITICKÉ)
```
User click [Play] 
  → setCurrentTrack({id, title, audioSrc, slug}) 
  → AudioContext updates 
  → GlobalAudioPlayer renders <audio>
  → Page komponenty pool getCurrentTime() 100ms
  → Click track time → seek(time) → callback
```
- **Page komponenty**: Volajú `setCurrentTrack()`, NEMAJÚ `<audio>`
- **GlobalAudioPlayer**: Spravuje skutočný audio element
- **Príklad**: [app/mixy/[slug]/page.tsx](app/mixy/[slug]/page.tsx#L12-L25)

## Časté Chyby a Anti-Patterny

### Audio System
❌ Komponenta má svoj `<audio>` element  
✅ Volajte `setCurrentTrack()` z contextu

❌ Hardcode audio URL ako prop  
✅ Získajte z Sanity: `audioFile.asset.url`

❌ Viacero audio elementov  
✅ Existuje iba jeden - `GlobalAudioPlayer`

### Animácie & Styling
❌ Hardcoded: `duration: 0.8, easing: [0.4, 0, 0.2, 1]`  
✅ Konštanty: `duration: ANIMATION_DURATIONS.SMOOTH`

❌ Inline Tailwind: `style={{ padding: '16px' }}`  
✅ Triedy: `p-4` + konštanty

### Next.js 16
❌ `const { slug } = params` (synchronne)  
✅ `const { slug } = await params` (async)

❌ Miešať anglický UI s SK obsahom  
✅ UI: vždy slovenčina

❌ Zabudnúť `useCdn: false`  
✅ Frontend klient vždy s čerstvými dátami

## Externe Knižnice

| Balík | Verzia | Účel |
|-------|--------|------|
| next | 16.1.6 | App router, SSR |
| sanity | 4.22 | CMS + client |
| framer-motion | 12.29 | React animácie |
| @react-three/fiber | 9.5 | 3D rendering |
| tailwindcss | 4 | Styling |
| lucide-react | 0.563 | Ikony |
| gsap | 3.14 | Pokročilé animácie |

**Package manager**: npm (nie yarn/pnpm/bun)

## Kritické Súbory

| Súbor | Účel | Kľúčové |
|-------|------|---------|
| [app/lib/sanity.client.ts](app/lib/sanity.client.ts) | Frontend Sanity | `useCdn: false` |
| [app/lib/mixes.ts](app/lib/mixes.ts) | GROQ queries | `getMixBySlug()` |
| [app/mixy/[slug]/page.tsx](app/mixy/[slug]/page.tsx) | Príklad dynamickej routy | Async params pattern |
| [lib/constants.ts](lib/constants.ts) | **VŠETKY konštanty** | Durations, spacing |
| [lib/animationVariants.ts](lib/animationVariants.ts) | Framer Motion | Reusable variants |
| [contexts/AudioContext.tsx](contexts/AudioContext.tsx) | Globálny audio stav | `setCurrentTrack()` |
| [hooks/useAudioPlayer.ts](hooks/useAudioPlayer.ts) | Audio wrapper | HTML5 API |
| [components/GlobalAudioPlayer.tsx](components/GlobalAudioPlayer.tsx) | Persistent player | Audio element |
| [app/layout.tsx](app/layout.tsx) | Root layout | Providers, player |

## Výkon & Best Practices
- **Images**: Next.js `<Image>` so Sanity CDN
- **Code splitting**: `lazy()` + `Suspense`
- **Client vs Server**: Server default (rýchlejšie)
- **Effects**: Max jeden na stránku, `fixed` positioning
- **Animations**: Polling 100ms - optimálny refresh

---

## Vrstvenie Komplexnosti

### 🟢 Jednoduchá (30min)
- Text do Sanity
- Tailwind zmeny
- Konštanty v [lib/constants.ts](lib/constants.ts)
- UI komponenty

### 🟡 Stredná (2h)
- Nový obsah typ v Sanity
- Audio track s Tracklist
- Nová animácia (z variantov)

### 🔴 Zložitá (1 deň+)
- Nový player typ
- 3D efekty s Three.js
- Zmeny v AudioContext

---
*Pre detailné pravidlá, pozri [.windsurf/rules/global-rules.md](.windsurf/rules/global-rules.md)*
