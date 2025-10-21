# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Starts the development server with Turbopack on http://localhost:3000
- `npm run build` - Builds the production application
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

### TypeScript
- TypeScript is configured with strict mode enabled
- Path alias `@/*` maps to `./src/*`
- No specific typecheck script exists - TypeScript errors surface during build

## Analytics Setup

### Implementation
- **Platforms**: Google Analytics 4 (GA4) + Vercel Analytics + Vercel Speed Insights
- **Dual Tracking**: All custom events sent to both GA4 and Vercel Analytics
- **Coverage**: Comprehensive tracking across videos, images, and #TripleTakeTim campaign
- **Environment Variable**: `NEXT_PUBLIC_GA_MEASUREMENT_ID` (set in Vercel)

### Components
- `GoogleAnalyticsWrapper.tsx` - Client wrapper for GA4 integration
- `AnalyticsTracker.tsx` - Client component for custom event tracking (dual platform)
- `VideoEmbed.tsx` - Video component with interaction tracking
- `PhotoSwipeGallery.tsx` - Image gallery with view tracking
- Analytics integrated in root layout

### Tracked Events

**#TripleTakeTim Campaign:**
- `tripletaketim_page_view` - Page visits
- `tripletaketim_video_play` - Video plays by month and take number
- `tripletaketim_hero_click` - Hero CTA interactions
- `tripletaketim_homepage_click` - Homepage section clicks
- `tripletaketim_month_view` - Monthly scene scroll tracking

**General Site Analytics:**
- `video_play` - All video interactions (showreels and reels) across homepage and videos page
- `image_view` - Image gallery lightbox opens with image title and gallery ID

**Automatic Tracking:**
- Page views for all pages (GA4 and Vercel)
- UTM parameters captured automatically

### UTM Strategy
- UTM parameter guide in `UTM_STRATEGY.md`
- Track casting director outreach effectiveness
- Monitor social media campaign performance
- Both analytics platforms automatically capture UTM parameters

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with PostCSS
- **Content**: 
  - Local JSON files in `src/content/` (current)
  - Sanity CMS integration prepared but not yet active
- **Image Gallery**: PhotoSwipe library v5.4.4
- **Image Processing**: Next.js optimized images with AVIF/WebP formats

### Project Structure
- **src/app/**: Next.js app router pages
  - Each route has its own `page.tsx`
  - `layout.tsx` provides global layout with navigation and footer
  - `studio/` route configured for Sanity Studio (optional feature)
  - `_preview/` and `preview/` routes for content preview
- **src/components/**: Reusable React components
  - `CreditRow.tsx` - Displays individual credits in CV grid
  - `Navigation.tsx` - Site navigation
  - `PhotoSwipeGallery.tsx` - Image gallery component with view tracking
  - `InlinePhotoSwipe.tsx` - Inline photo viewer
  - `ThemeToggle.tsx` - Theme switching functionality
  - `AnalyticsTracker.tsx` - Custom event tracking for both GA4 and Vercel Analytics
  - `GoogleAnalyticsWrapper.tsx` - Client wrapper for Google Analytics integration
  - `VideoEmbed.tsx` - Video iframe component with interaction tracking
- **src/content/**: JSON data files with typed interfaces
  - `credits.json` - Acting credits/CV data
  - `profile.json` - Actor profile information
  - `training.json` - Training/education data
  - `videos.json` - Video/reel links
  - `images.json` - Image gallery data
- **src/lib/content.ts**: Content loading and utility functions
  - Exports typed interfaces for all content (Credit, Profile, Training, Video, Images)
  - Provides filtering functions: `getCreditsByType()`, `getCreditsByYear()`, `getCreditsByYearRange()`
  - Utility functions: `getUniqueCreditTypes()`, `getUniqueYears()`
- **src/sanity/**: Sanity CMS configuration (optional)
  - `env.ts`, `lib/client.ts` - Sanity client setup
  - `schemaTypes/` - Content schemas
- **src/schemas/**: TypeScript schemas for Sanity content types

### Content Management
- **Current**: Content stored in JSON files in `src/content/`
- **Future**: Sanity CMS integration ready with schemas in `src/schemas/`
- **Images**: Stored in `public/` for static serving, with source images in `source_images/`
- **Migration**: Use `importCredits.js` and `uploadImages.js` for Sanity migration

### Key Features
- Actor portfolio with multiple pages: Home, About, CV, Images, Videos, Contact
- CV page with chronological credit display
- Image gallery with PhotoSwipe integration
- Video/reel showcase with embedded players
- Responsive design optimized for all devices
- Sanity Studio integration at `/studio` route

### Development Status (from PROJECT_PLAN.md)
- **Phase 1**: Complete - Project setup and content preparation
- **Phase 2**: 
  - Items 1-2: Complete - Content loading and page structure
  - Item 3: Pending - CV sorting/grouping controls implementation
  - Item 4: Pending - Final styling refinements
- **Phase 3**: Pending - Deployment setup
- **Phase 4**: Pending - Optional Sanity CMS migration

### Card System & Layout Patterns
- **Card Component**: Use `.card` class for consistent surface styling across the site
  - Base: `card` - provides background, border, shadow, and rounded corners
  - Interactive: `card-hover` - adds hover shadow transition
  - Defined in `src/app/globals.css:70-77`
- **Card Usage Patterns**:
  - Content sections: `<div className="card card-hover p-6">` 
  - Navigation cards: `<Link className="group block card card-hover p-6">`
  - Data rows: Custom styling with hover states (see `CreditRow.tsx:9`)
  - Hero video: `<div className="card">` for embedded content
- **Layout Structure**:
  - Global: Min-height screen with flex column layout (`layout.tsx:28-30`)
  - Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for content width
  - Grid system: Responsive grids for content sections (1/2/3/4 column layouts)
  - Footer: 4-column grid with brand, links, and contact info

### Color System & Theme Support
- **CSS Custom Properties**: Theme-aware colors using `--color-*` variables
- **Theme Toggle**: Light/dark theme support with `data-theme` attribute AND `dark` class
- **Color Tokens**: 
  - `--color-background`: Page canvas
  - `--color-surface`: Card backgrounds  
  - `--color-foreground`: Primary text
  - `--color-muted`: Secondary text
  - `--color-accent`: Brand accent (teal)
  - `--color-border`: Borders and dividers

### Dark Mode Implementation
- **Dual System**: The app sets both `data-theme` attribute and `dark` class on the HTML element
- **CSS Selectors**: Use `[data-theme='dark']` for custom CSS, `dark:` prefix for Tailwind utilities
- **Known Issue**: Tailwind gradient classes (`bg-gradient-*`) do NOT respect dark mode modifiers
  - Problem: `dark:from-purple-950` doesn't override `from-purple-50` in gradients
  - Solution: Use client-side theme detection for conditional rendering
  - Example pattern:
    ```tsx
    // For components needing different gradients in dark mode
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
      const checkDarkMode = () => {
        setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
      };
      // Set up observer for theme changes
    }, []);
    
    return <div className={isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'}>
    ```
- **Best Practice**: For gradient backgrounds that need dark mode variants, use conditional rendering rather than Tailwind dark mode classes

## Content Writing & Tone Guidelines

When writing marketing copy, content descriptions, or any user-facing text for this site, follow these principles based on Timothy's voice:

### Language & Spelling
- **ALWAYS use British/Australian English spelling** (Timothy is Australian)
  - focussing (not focusing), realised (not realized), colour (not color)
  - -ise endings (not -ize): organise, recognise, realise
  - -our endings (not -or): colour, favour, behaviour

### Core Principles
1. **Direct over explanatory** - State what you DO, not what you DON'T do
   - ✅ "Different objectives, tactics, and character choices"
   - ❌ "Different objectives, tactics, and character choices—not just 'loud vs quiet'"

2. **Action-oriented** - Favour doing over theorising
   - ✅ "Getting it done beats getting it perfect"
   - ✅ "I'm focussing on getting it done more than getting it perfect"
   - ❌ "Perfection can be the enemy of progress and consistent practice"

3. **Concise and punchy** - Remove unnecessary qualifiers when the positive statement is clear
   - ✅ "Three takes per scene helps me find the strongest choice and build creative muscles"
   - ❌ "After working with various instructors on delivering one scene three ways, I came to realise that this particular approach..."

4. **Credible over personal** - Use research/principles over name-dropping
   - ✅ "In Atomic Habits, James Clear describes a photography class..." (universal principle)
   - ❌ "After working with Greg Apps..." (personal anecdote)

5. **Confident** - State principles without over-justifying
   - Trust the reader to understand the value
   - Avoid defensive or apologetic language
   - Don't explain why alternatives are bad—just state what works

6. **Natural, conversational phrasing** - Timothy edits towards his natural voice
   - ✅ "build creative muscles" - uses vivid, active metaphors
   - ✅ "I'm focussing on getting it done more than getting it perfect" - first person, natural rhythm

### Editing Pattern
When Timothy edits your copy, he typically:
- **Removes**: Explanatory clauses, comparisons to what he's NOT doing, defensive justifications
- **Keeps**: Clear statements of action, principle-based reasoning, concrete commitments
- **Shortens**: Multi-clause sentences into direct statements

### Examples from #TripleTakeTim Project

**Original attempt:**
> "Self-tape skills are the modern actor's essential toolkit. After working with Greg Apps on delivering one scene three ways, I realised this approach helps me find the strongest choice while avoiding generic 'loud vs quiet' variations."

**Timothy's style:**
> "In Atomic Habits, James Clear describes a photography class split into two groups: one graded on a single perfect photo, the other on quantity. The best photos came from the quantity group—they learned by doing."

**Key differences:**
- Replaced personal instructor reference with universal principle
- Removed "essential toolkit" qualifier
- Swapped "avoiding generic variations" with positive principle of learning through volume

## Development Notes
- When implementing CV controls, use utility functions in `src/lib/content.ts:86-104`
- Image optimization configured for multiple formats and sizes in `next.config.ts:4-8`
- ESLint configured with Next.js core web vitals and TypeScript rules
- Follow existing component patterns when adding new features
- **Card Consistency**: Always use `.card` and `.card-hover` classes for new UI components
- **Grid Layouts**: Use responsive grid patterns consistent with existing pages