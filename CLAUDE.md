# Staar Solutions — CLAUDE.md

## Project overview

This is the official company website for **Staar Solutions** — a software studio founded by Sandeep Amarnath.
The site serves three purposes:
1. Business credibility (Apple Developer account, client leads)
2. Showcase of in-house apps and client work
3. Founder/personal profile page (resume, Toptal, bio)

Domain: **staarsolutions.com** · Deployed on Vercel

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Deployment | Vercel |

## Project structure

```
app/
  layout.tsx          # Root layout — Inter font, Navbar, Footer
  page.tsx            # Home (/) — hero, services, apps preview, client preview, CTA
  apps/page.tsx       # /apps — all 4 in-house apps with detail
  clients/page.tsx    # /clients — Zenorbis + Cyntronex with deliverables
  founder/page.tsx    # /founder — Sandeep bio, skills, Toptal, resume download
  contact/page.tsx    # /contact — project inquiry form
components/
  Navbar.tsx          # Sticky nav with mobile drawer
  Footer.tsx          # Dark footer with links
public/
  images/             # App screenshots, GIFs, founder photo go here
  sandeep-amarnath-resume.pdf  # Resume PDF for download button
```

## Design decisions

- **Color palette:** Indigo-600 to Violet-600 gradient as primary brand. Slate for neutrals. Clean white backgrounds.
- **No dark mode** on this site — corporate clean is the goal.
- **Placeholder image areas** use gradient blocks with "coming soon" labels. Replace with real screenshots when ready.
- **Contact form** currently fake-submits (shows success state). Wire to email service (Resend recommended) when ready.
- **Resume download** points to `/public/sandeep-amarnath-resume.pdf` — add the PDF file there.

## In-house apps covered

| App | Status | Platforms | Live URL |
|---|---|---|---|
| FocusSharp | Live | Web, iOS (coming) | focussharp.app |
| CodeVizual | Live | Web | codevizual.com |
| SaveNShare | In Development | iOS, Android | — |
| Thinky | In Development | iOS, Android, Web | — |

## Client projects covered

| Client | Type | Status |
|---|---|---|
| Zenorbis Technologies | Corporate website | Delivered |
| Cyntronex | Product & services website | Delivered |

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Pending items

See [TODOS.md](./TODOS.md) for all outstanding tasks and placeholder replacements.
