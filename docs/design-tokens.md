# Design Tokens - Walsh West

> **Note**: This document captures visual patterns observed from the parent firm (walshtrading.com) to guide future styling work. The v1 skeleton uses neutral Tailwind defaults informed by these observations.

## Visual Observations from walshtrading.com

### Color Palette
- **Primary brand color**: Deep navy/dark blue (appears to be in the #001f3f to #003d5c range)
- **Accent colors**: Gold/amber accents for CTAs and highlights
- **Text**: Dark gray on white backgrounds, white on dark backgrounds
- **Backgrounds**: Predominantly white/light gray sections with occasional dark navy sections

### Typography
- **Headings**: Sans-serif, bold weight, clean and professional
- **Body text**: Sans-serif, regular weight, high readability
- **Reading level**: Professional but accessible (9th-10th grade target per CLAUDE.md)

### Component Patterns
- **Buttons**: Solid fills with subtle hover states, rounded corners
- **Forms**: Clean input fields with clear labels, validation feedback
- **Cards**: Subtle borders or shadows, not overly decorative
- **Navigation**: Horizontal nav bar, simple and direct
- **Footer**: Multi-column layout with links, disclosures, and parent firm info

### Key Principles
- **Professional, not flashy**: Calm and trustworthy visual language
- **Accessibility**: High contrast, clear hierarchy
- **Compliance-first**: Risk disclosures prominent but not intrusive
- **Desktop-first with responsive**: Site assumes desktop primary but adapts

## Implementation Notes for Future Styling

1. **Update CSS variables** in `src/app/globals.css` to match Walsh Trading's brand colors once exact hex values are confirmed.
2. **Verify font choices** - consider matching Walsh Trading's exact typefaces if publicly available (or close Google Font alternatives).
3. **Component styling** - shadcn/ui components should be customized to match observed patterns (e.g., button colors, border radius).
4. **Logo/assets** - Placeholder "Walsh West" text should be replaced with actual logo once provided.

## NFA Compliance Visual Requirements

- Risk disclosures must be **visible and legible** on every page discussing services
- Font size for disclosures: minimum 10-12px, never hidden or de-emphasized to the point of illegibility
- Placement: Footer is acceptable for standard disclosure; inline placement required for performance claims (none in v1)

---

**TODO for ui-ux-agent (future task)**: Extract exact color values, font stacks, and component measurements from walshtrading.com and update Tailwind config + CSS variables accordingly.
