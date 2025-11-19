# Copilot Instructions for acadeny3

## Project Overview
**acadeny3** is a Next.js 13+ educational platform (Smart Study Center) featuring mentorship, courses, and student guidance. It's a marketing/service site with client-side interactivity, form handling, and email integration.

**Key Technologies:**
- **Framework:** Next.js 13+ (App Router)
- **UI:** React 18, Radix UI components, Tailwind CSS
- **Styling:** Tailwind CSS with custom theme (HSL colors, dark mode support)
- **Animations:** Framer Motion
- **Forms:** React Hook Form with custom form components
- **Email:** Resend API (requires `RESEND_API_KEY` env var)
- **Backend:** Supabase integration (prepared but minimal in current codebase)
- **Type Safety:** TypeScript with strict mode enabled

---

## Architecture

### Component Structure
```
components/
├── layout/           # Global layout (Navbar, Footer) - must use 'use client'
├── sections/         # Page sections (Hero, Features, FAQs) - mostly 'use client'
└── ui/              # Radix UI component wrappers with CVA styling
```

**Key Pattern:** All interactive components are marked `'use client'`. Server components are only the page files and API routes.

### Page Routing
- `app/page.tsx` - Home: Composable section components (Hero → Features → Testimonials → FAQ)
- `app/contact/page.tsx` - Contact form with client-side validation
- `app/about/page.tsx`, `app/courses/page.tsx`, `app/mentors/page.tsx` - Content pages
- `app/api/send-contact/route.ts` - Email API endpoint (POST only, validates all fields)

### Design System
- **Colors:** CSS HSL variables (--primary, --secondary, --muted, etc.) in globals.css
- **Components:** Pre-built Radix UI wrappers with CVA (class-variance-authority) for variants
- **Spacing:** Tailwind defaults + custom `exs: 320px` screen breakpoint
- **Layout:** `max-w-7xl lg:mx-auto` for centered containers; fixed nav at z-50 (height 80px)

---

## Critical Developer Workflows

### Local Development
```powershell
npm run dev          # Start dev server on port 3000
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Run ESLint (ignores during build)
npm run typecheck    # Full TypeScript check without emit
```

### Environment Variables
Create `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url  # if using Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Build Configuration Notes
- ESLint errors ignored during production builds (`next build`)
- Images unoptimized (configured for static export compatibility)
- TypeScript strict mode enabled—always provide proper types
- Path aliases: `@/*` maps to project root for clean imports

---

## Project-Specific Conventions

### Client Components & State Management
- **Always mark interactive components** with `'use client'` directive (useState, useEffect, event handlers)
- Use built-in React hooks; no external state library yet
- Example: `Navbar.tsx` uses scroll listeners + AnimatePresence for mobile menu

### Form Handling Pattern
Contact form exemplifies the pattern:
1. **Client-side validation** in component (`validateForm()` method checks all fields)
2. **POST to `/api/send-contact`** with form data (firstName, lastName, email, phone, gradeLevel, message)
3. **Server validates** request body and calls Resend API
4. **Client handles response** with success/error state + toast notification

### UI Component Usage
All UI components in `components/ui/` follow Radix UI wrapped with CVA:
```tsx
import { Button } from '@/components/ui/button';
// Available variants: default, destructive, outline, secondary, ghost, link
// Available sizes: default, sm, lg, icon
<Button variant="default" size="lg">Click Me</Button>
```

### Styling Conventions
- **Tailwind utility classes** for all styling (no CSS files except globals.css)
- **`cn()` function** (from `lib/utils.ts`) for conditional class merging: `cn(baseClass, isActive && 'active-class')`
- **Fixed navbar height is 80px**—use `pt-[80px]` on main content, `h-[calc(100vh-80px)]` for full-screen sections
- Dark mode support via `darkMode: ["class"]` config; use `dark:` prefix for dark-mode styles

### Framer Motion Animations
- Sections use `motion.div` with `initial`, `animate`, `exit` props
- Navbar fades in with `initial={{ y: -100 }} animate={{ y: 0 }}`
- Use `AnimatePresence` for conditional rendering animations (mobile menu toggle)

### TypeScript Patterns
- Define interfaces for data shapes (e.g., `HeroItem`, `FormErrors`)
- Use `React.ReactNode` for children props
- Export types from components if shared across files
- No `any` types; use `unknown` if necessary and narrow with type guards

---

## Integration Points

### Email Service (Resend)
- **Endpoint:** `app/api/send-contact/route.ts`
- **Required fields:** firstName, lastName, email, phone, gradeLevel, message
- **Validation:** Server-side checks all fields are present
- **HTML template:** Includes custom styling with gradient header (C71585 to FF1493)
- **Error handling:** Returns 400 for missing fields, 500 for config errors, 200 for success
- **Future improvement:** Add rate limiting, spam detection

### Supabase Integration (Prepared)
- Dependency installed (`@supabase/supabase-js@^2.58.0`) but not actively used
- When implementing: Create client with `createClient()` from lib, use env vars
- Pattern: Separate API routes from client-side queries to avoid exposing anon key

### External Libraries
- **Lucide icons:** For nav, contact, and section icons (`lucide-react`)
- **cmdk:** Command menu component (installed but usage needs verification)
- **date-fns:** Date utilities (installed, available for scheduling features)
- **sonner:** Toast notifications (installed, exported from `components/ui/sonner.tsx`)

---

## Common Patterns & Examples

### Adding a New Page Section
1. Create component in `components/sections/YourSection.tsx` with `'use client'` if interactive
2. Use Tailwind classes for layout and spacing
3. Import and compose in page file (e.g., `page.tsx`)
4. Use `scroll-mt-20` (lg) or `scroll-mt-14` (mobile) for anchor targets
5. Export default function component (no named exports for page sections)

### Adding a New API Route
1. Create file at `app/api/your-endpoint/route.ts`
2. Export `POST`, `GET`, etc. as needed
3. Use `NextRequest` and `NextResponse` types
4. Validate all inputs; return 400 for bad input, 500 for server errors
5. Set `export const dynamic = 'force-dynamic'` if not using caching

### Form Integration
1. Use React Hook Form + custom form components from `components/ui/form.tsx`
2. Define interface for form shape
3. Validate client-side before submission
4. POST to API endpoint, handle response (success/error state)
5. Show feedback via toast or inline error messages

---

## SEO & Search Engine Optimization

### Meta Tags & Page Metadata
- Use `Metadata` export from `next` in route `layout.tsx` files for page-specific meta tags
- **Required for each page:** title (50-60 chars), description (150-160 chars), keywords
- Include `openGraph` object for rich preview cards on social media
- Set `twitter` card config for Twitter/X sharing
- Use `metadataBase: new URL()` in root layout for Open Graph URLs

### Google Indexing & Crawling
- `public/robots.txt` configured to allow all search engines (Googlebot, Bingbot, etc.)
- `public/sitemap.xml` contains all public routes with priority and change frequency
- Root layout includes schema.org JSON-LD for EducationalOrganization
- Set `robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'` in root metadata

### Structured Data (Schema.org)
- Use `lib/schema.ts` utilities to generate JSON-LD structured data
- **Organization schema:** Applied in root layout head via `<script type="application/ld+json">`
- **Course schema:** Use `courseSchema()` for course listings with rating aggregates
- **FAQ schema:** Use `faqSchema()` for FAQ sections to enable rich results
- **Breadcrumb schema:** Use `breadcrumbSchema()` for navigation trails
- Insert JSON-LD in page component via Next.js `<script>` tag with `dangerouslySetInnerHTML`

### URL Structure & Keywords
- **Target keywords:** "online classes 8th grade", "O-Levels online", "distance learning", "online tutoring Pakistan"
- Route structure should reflect page hierarchy (semantic URLs)
- Use descriptive page titles with primary keyword at start
- Include regional qualifiers for local SEO (Pakistan, South Asia context)

### New Features Checklist
- ✅ Add `layout.tsx` with metadata export for any new route
- ✅ Update `public/sitemap.xml` with new URL entry
- ✅ Include target keywords in page title and meta description
- ✅ Add Open Graph image (1200x630px) if branded content differs
- ✅ Consider adding schema.org markup if content type supports it

### Google Search Console Setup
- Verify domain ownership via meta tag in root layout
- Submit `sitemap.xml` through Search Console
- Monitor indexing status and fix any errors
- Track keyword rankings for target search terms

---

## Notes for AI Agents
- **Before modifying components:** Check if `'use client'` is present (required for state/effects)
- **When adding styles:** Use `cn()` function if merging Tailwind classes, never write raw CSS
- **When working with forms:** Follow the contact form pattern—client validation + server API
- **When fixing bugs:** Run `npm run typecheck` first to catch type errors
- **Path aliases work everywhere:** Always use `@/` prefix (not relative imports) for consistency
- **Navbar height is critical:** Many components depend on 80px height; keep it consistent
- **Mobile first:** Tailwind breakpoints—code mobile defaults, then `md:` and `lg:` overrides
- **SEO is production priority:** Update metadata in layout files for all new pages
- **Structured data improves CTR:** Use schema.ts utilities for courses, FAQs, and collections
