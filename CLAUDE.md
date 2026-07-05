# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16.2.9** (App Router) — check `node_modules/next/dist/docs/` for version-specific APIs before writing code
- **React 19** with `"use client"` directives on all interactive components
- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax (not `@tailwind` directives)
- **Framer Motion** for all animations and transitions
- **TypeScript** throughout

## Architecture

Single-page portfolio at `src/app/page.tsx`. The page composes all sections linearly in order: Hero → About → ExperienceEducation → Skills → Projects → Achievements → Services → Contact → Footer. Navigation is a fixed header that links to section anchors.

**Component structure:**
- `src/components/` — one file per portfolio section (Hero, About, Skills, etc.)
- `src/components/ui/` — shared primitives: `Button` (primary/secondary variants), `GlassCard` (hover lift with orange shadow), `SectionHeading` (animated title + subtitle), `Timeline` (for experience/education)
- `src/hooks/useCounter.ts` — animated number counter tied to scroll visibility via `useInView`

## Design System

Brand color: `#FF5E00` (orange). Background: `#120c0a` (dark cocoa). All section components animate in with `whileInView` + `viewport={{ once: true }}` from Framer Motion.

`globals.css` applies aggressive `!important` overrides to force white text on all elements in dark mode — avoid inline Tailwind dark text classes as they will be overridden. Use `text-[#FF5E00]` for brand accents (protected by CSS specificity rules).

The `glass-panel` utility class is referenced in `GlassCard` and the nav — define it in `globals.css` if missing.
