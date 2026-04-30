# Walsh West Design System

## Overview

The Walsh West site uses an institutional finance aesthetic: calm, professional, trustworthy. The design system balances approachability with gravitas appropriate for a commodities brokerage serving commercial hedgers and informed speculators.

## Typography

### Font Pairing
- **Serif (Display):** Merriweather — used for headings, logo, emphasis
- **Sans (Body):** Inter — used for body text, UI, navigation

### Scale
- Headings use `font-serif` with `font-bold` and `tracking-tight`
- Body text uses `font-sans` with `leading-relaxed`
- All text respects semantic hierarchy (h1 > h2 > h3, etc.)

### Features
- OpenType features enabled: `cv11`, `ss01`
- Antialiasing for crisp rendering across devices

## Color Palette

### Semantic Tokens

**Light Mode:**
- Primary: Deep navy (`hsl(215 60% 16%)`) — institutional, trustworthy
- Secondary: Warm neutral (`hsl(40 15% 96%)`) — soft backgrounds
- Accent: Subtle gold (`hsl(38 70% 88%)`) — professional highlights
- Muted: Light neutral (`hsl(40 12% 95%)`) — backgrounds, surfaces
- Text emphasis: Dark navy (`hsl(215 30% 10%)`) — headings, important text

**Dark Mode:**
- Supported with adjusted contrast ratios
- Primary becomes light on dark navy background
- Accent shifts to deeper gold with maintained WCAG AA contrast

### Surface Hierarchy
- `surface-subtle`: Subtle backgrounds for sections
- `surface-elevated`: Cards and elevated content
- Border: Subtle (`hsl(215 15% 88%)`) to avoid harsh divisions

## Spacing

Uses Tailwind's default spacing scale with custom additions:
- `18` (4.5rem) for larger section spacing
- `22` (5.5rem) for hero sections

Container: `container mx-auto` with responsive padding (`px-4 md:px-6`)

## Border Radius

Consistent, subtle rounding:
- `--radius`: 0.375rem (6px) — default for cards, inputs, buttons
- `lg`, `md`, `sm` variations available

## Components

### Buttons
- Primary: Deep navy background, white text
- Outline: Border with transparent background
- Ghost: Transparent, accent on hover
- All buttons have `focus-visible:ring-2` for accessibility
- `size="lg"` for CTAs

### Cards
- Border, subtle shadow, rounded corners
- Hover states include `hover:shadow-md` for interactive cards
- Used for events, service sections, risk disclosures

### Forms
- Inputs and textareas have consistent border, padding, focus states
- Labels use `text-foreground` for better contrast
- Error messages use `text-destructive` with semantic color
- Success/error alerts use bordered backgrounds with proper dark mode support

### Navigation
- Header: Sticky, backdrop blur, subtle border-bottom
- Navigation links use hover states with accent background
- Contact button stands out as primary CTA

### Footer
- Subtle background (`surface-subtle`)
- Three-column grid on desktop, stacked on mobile
- Risk disclosure in bordered, muted background box

## Accessibility

### Focus States
- All interactive elements have visible focus rings (`ring-2 ring-ring`)
- Focus rings respect `ring-offset-2` for clear separation

### Contrast
- All text meets WCAG AA minimum (body text meets AAA)
- Link colors tested against backgrounds
- Error messages meet contrast requirements

### Semantic HTML
- Headings follow logical hierarchy
- Forms use `<label>` elements associated with inputs
- Navigation uses `<nav>` and `<ul>` lists
- Footer uses `<footer>` landmark

### Motion
- Subtle transitions on hover/focus (`transition-colors`, `transition-shadow`)
- No autoplay or parallax (respects `prefers-reduced-motion` by default via Tailwind)

## Layout Patterns

### Hero Section
- Gradient background from `surface-subtle` to `background`
- Centered content, max-width constrained
- Primary + secondary CTA side-by-side
- Decorative gradient border at bottom

### Content Pages
- Header with border-bottom separator
- Max-width 3xl for readability
- Generous vertical spacing (12-16 spacing units)

### Forms
- Two-column grid on desktop for contact page
- Single column for newsletter
- Full-width buttons for submission

## Voice (UI Copy Patterns)

While copy text is gated for NFA review, UI patterns follow:
- Button labels are verbs ("Get in Touch", "Submit Inquiry")
- Loading states are honest ("Submitting...", not generic "Loading...")
- Error messages tell what happened AND what to do next
- Success messages confirm the action taken

## No-Go Patterns

Per CLAUDE.md compliance rules:
- No fake charts, tickers, or trading visuals
- No green/red P&L gradients
- No performance claims or hypothetical results
- No buzzwords ("easy", "guaranteed", "secret")
- All risk disclosures displayed prominently

## Future Enhancements

Items deferred for post-v1:
- Real photography / branch imagery (currently placeholder copy areas)
- Dark mode toggle (system preference respected, but no explicit toggle UI)
- Responsive navigation menu for mobile (currently assumes desktop nav fits)
