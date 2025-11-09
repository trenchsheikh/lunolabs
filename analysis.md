# Luno Labs Landing Page - Repository Analysis

## Tech Stack
- **Framework**: Next.js 14.2.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes (dark mode support)

## File Structure Map

### Core Layout Files
- `app/layout.tsx` - Root layout with metadata and theme provider
- `app/page.tsx` - Main page assembling all sections
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

### Navigation
- `components/layout/navbar.tsx` - Top navigation with mobile menu

### Landing Page Sections (in order)
1. `components/layout/sections/hero.tsx` - Hero section with main CTA
2. `components/layout/sections/sponsors.tsx` - Social proof/logos
3. `components/layout/sections/benefits.tsx` - Benefits section
4. `components/layout/sections/features.tsx` - Features grid
5. `components/layout/sections/services.tsx` - Services cards
6. `components/layout/sections/testimonial.tsx` - Testimonials carousel
7. `components/layout/sections/team.tsx` - Team member cards
8. `components/layout/sections/community.tsx` - Community/CTA section
9. `components/layout/sections/pricing.tsx` - **TO BE REMOVED**
10. `components/layout/sections/contact.tsx` - Contact form
11. `components/layout/sections/faq.tsx` - FAQ accordion
12. `components/layout/sections/footer.tsx` - Footer with links

### Content Sources
- **All content is hardcoded** in component files
- No CMS, no JSON, no MDX
- Copy is embedded directly in JSX
- Images referenced from `/public` and external URLs

### Color & Typography
- **Current theme**: Orange-based color scheme in CSS variables (HSL format)
- **Location**: `app/globals.css` lines 77-138
- **System**: Uses CSS variables mapped to Tailwind classes
- **Typography**: Inter font from Google Fonts

## Components Holding Text & CTAs

### Sections with CTAs:
- `hero.tsx` - Primary CTA buttons
- `navbar.tsx` - Navigation links
- `contact.tsx` - Contact form with submission
- `community.tsx` - Community CTA
- `pricing.tsx` - Pricing CTAs (to be removed)

### Sections with Main Copy:
- All section files contain their own copy
- Pattern: Section eyebrow (text-primary) → H2 heading → description → content

## Change Checklist

### 1. Theme & Branding
- [ ] Update `tailwind.config.ts` with Luno Labs color tokens
- [ ] Replace CSS variables in `app/globals.css` with Luno color scheme
- [ ] Apply dark green, light green, and cream palette
- [ ] Update `app/layout.tsx` metadata (title, description)
- [ ] Update `app/page.tsx` metadata (OpenGraph, Twitter cards)
- [ ] Update `components/layout/navbar.tsx` logo/brand name

### 2. Section Content Updates
- [ ] `hero.tsx` - Replace with Luno hero copy, CTAs, badges
- [ ] `sponsors.tsx` - Update to show trust badges or hide if no logos
- [ ] `benefits.tsx` - **Repurpose as Process section** (4-step workflow)
- [ ] `features.tsx` - **Transform to Services section** (Web2/Web3 split)
  - Web2: Agentic AI + MCP Integrations
- [ ] `services.tsx` - **Convert to Work/Case Studies section** (4 projects)
- [ ] `testimonial.tsx` - Keep or minimal update if no testimonials
- [ ] `team.tsx` - **Replace with About/Founder section** (Sami Tahir)
- [ ] `community.tsx` - Remove or repurpose as secondary CTA
- [ ] `pricing.tsx` - **REMOVE completely**
- [ ] `contact.tsx` - Update form fields, copy, and validation
- [ ] `faq.tsx` - Replace with Luno Labs FAQs
- [ ] `footer.tsx` - Update copyright, links, socials

### 3. Routing & Navigation
- [ ] Update navbar links to match new sections
- [ ] Remove all pricing references
- [ ] Ensure all CTAs route to #contact

### 4. SEO & Meta
- [ ] Update favicon (if custom available)
- [ ] Add proper meta descriptions
- [ ] Add OpenGraph images/meta
- [ ] Consider JSON-LD schema

### 5. Validation
- [ ] No "Shadcn" references remain
- [ ] No placeholder Lorem ipsum text
- [ ] No pricing mentions
- [ ] All CTAs point to contact
- [ ] Color tokens applied consistently
- [ ] Form validation works

## Implementation Order

1. **Create theme tokens** (Tailwind config + CSS variables)
2. **Update metadata** (layout.tsx, page.tsx)
3. **Update navbar** (branding, links)
4. **Replace hero section**
5. **Transform/replace middle sections** (Services, Work, Process, About)
6. **Remove pricing section**
7. **Update contact form**
8. **Update FAQ section**
9. **Update footer**
10. **Final review and validation**

## Notes

- Template uses HSL color format in CSS variables
- Dark mode is supported and should be maintained
- All sections are server components except hero, navbar, and contact (client components for interactivity)
- Form uses mailto: link on submission (no backend)
- Responsive design with Tailwind breakpoints (sm, md, lg, xl)

