# Hero Static Concave Fan — Design

**Date:** 2026-04-25
**Scope:** Phase 1 only — replace the marquee carousel in the home hero with a static, concave fan of 7 portrait images.
**Out of scope:** Animations (deferred to Phase 2), headline/subtitle/CTA, captions row beneath the fan, broader site changes.

## Context

The project is already on Next.js (App Router) with Framer Motion installed. The hero carousel currently lives in `src/components/ui/pulse-fit-hero.jsx` as `CurvedCard`, driven by `requestAnimationFrame` reading `getBoundingClientRect` per frame. The visual result is convex (cards drop down at edges, scale shrinks, rotateZ tilts). The target reference is a *concave* fan — cards on a flat baseline rotating inward toward the viewer, all the same size.

## Target Geometry

Seven cards in a centered flex row. Each card's rotation is derived purely from its index:

```text
offset   = index − 3               // for index in 0..6 → -3, -2, -1, 0, 1, 2, 3
rotateY  = -offset × 15deg         // → +45°, +30°, +15°, 0°, -15°, -30°, -45°
```

No `translateY`, no `scale`, no `rotateZ`. Pure `rotateY` only. All cards share the same baseline and size.

## Container

| Property | Value |
| --- | --- |
| `perspective` | `1400px` |
| `perspective-origin` | `50% 50%` |
| `overflow` | `visible` (edge cards intentionally bleed past the viewport, as in reference) |
| Layout | `flex`, centered, `gap: 12px` |
| Height | `360px` |

## Card

| Property | Value |
| --- | --- |
| Width × height | `200 × 320 px` |
| Border radius | `22px` |
| `transform-origin` | `center center` |
| Overlay / labels | None — clean image only |

## Image Source

7 portrait-style Unsplash URLs (clean headshots on neutral backgrounds, mixed demographics) replace the current 5 contextual workplace photos. Final URLs selected at implementation time. Consumer of `programs` prop continues to receive the same shape `{ image, category, title }` — only the carousel renderer ignores `category` and `title` for now.

## File Changes

**`src/components/ui/pulse-fit-hero.jsx`**

1. Delete the marquee state machine: `useMotionValue`, `useAnimation`, the `useEffect` that starts the linear `x: ["0%", "-33.333%"]` animation, and the `extendedPrograms = [...programs, ...programs, ...programs]` triplication.
2. Replace the `motion.div` marquee track with a static `<div>` flex row containing exactly 7 cards.
3. Rewrite `CurvedCard`:
   - Drop `useEffect`, `useRef`, rAF loop, and `getBoundingClientRect`.
   - Accept a `rotateY` prop (number, degrees).
   - Apply `transform: rotateY(${rotateY}deg)` once, statically, via inline style.
4. Keep `perspective` on the container (bumped to `1400px`).
5. Hover handlers (`onMouseEnter`/`onMouseLeave` toggling `isHovered`) are removed — nothing to pause.

**`src/components/home/HeroSection.jsx`**

The `programs` array shrinks from 5 to 7 entries with new portrait URLs. `category` and `title` fields kept (they are unused by the new carousel but may be used by Phase 2 / hover treatments). Captions and copy untouched.

## Acceptance Criteria

- 7 cards visible in a single horizontal row, all at the same vertical position and same rendered size.
- Center card faces the viewer (rotateY = 0°). Cards on either side rotate inward symmetrically.
- Edge cards clip past viewport on wide screens (matches reference).
- No animation: opening the page produces a static image. No marquee scroll, no per-frame rAF.
- Page does not throw or warn about missing motion handlers.
- Lighthouse / dev console clean.

## Phase 2 (deferred — not part of this work)

- GSAP scroll-driven rotation that intensifies the fan as the user scrolls past
- Framer entrance stagger
- Hover lift on individual cards
- Mobile responsive treatment (current scope assumes desktop reference)
