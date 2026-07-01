# Staar Solutions — TODOS

## High priority — replace placeholders

- [ ] **Founder photo** — Add a professional headshot at `public/images/sandeep.jpg` and update `/founder` page to use `<Image>` instead of the "S" avatar placeholder
- [ ] **Resume PDF** — Add `sandeep-amarnath-resume.pdf` to the `public/` folder so the download button on `/founder` works
- [ ] **FocusSharp screenshot/GIF** — Add real app screenshot or screen recording GIF to `/apps#focussharp` section (replace gradient placeholder)
- [ ] **SaveNShare screenshot/GIF** — Add real app screenshot or screen recording GIF to `/apps#savenshare` section
- [ ] **CodeVizual screenshot/GIF** — Add real app screenshot or screen recording GIF to `/apps#codevizual` section
- [ ] **Zenorbis screenshot** — Add real website screenshot to `/clients#zenorbis` (replace gradient placeholder)
- [ ] **Cyntronex screenshot** — Add real website screenshot to `/clients#cyntronex` (replace gradient placeholder)
- [ ] **Home page app cards** — Replace gradient placeholders with actual app screenshots once available
- [ ] **Home page client cards** — Replace gradient placeholders with real website screenshots

## Contact form

- [ ] **Wire contact form to email** — Currently fake-submits (shows success state but sends nothing). Options:
  - [Resend](https://resend.com) — email API, free tier 3000/month, simplest option
  - [Formspree](https://formspree.io) — no backend needed, just POST the form
  - Supabase Edge Function — store in DB + trigger email notification
- [ ] **Add contact email** — Replace `hello@staarsolutions.com` in footer and contact page with your real email

## Content updates

- [ ] **Toptal profile URL** — Replace `https://www.toptal.com/resume/sandeep-amarnath` with your actual Toptal profile URL
- [ ] **LinkedIn URL** — Update footer LinkedIn link with your real LinkedIn profile URL
- [ ] **GitHub URL** — Confirm `https://github.com/sandeep194920` is correct
- [ ] **Founder page work history** — Add any additional full-time roles or freelance engagements to the experience section
- [ ] **SaveNShare live link** — Update footer and apps page with real URL once launched

## SEO & metadata

- [ ] **Add OG image** — Create a 1200x630 OG image (`public/og-image.png`) for social sharing. Use Figma or a quick gradient image.
- [ ] **Per-page metadata** — Add `export const metadata` to each page file (`/apps`, `/clients`, `/founder`, `/contact`) with unique title + description
- [ ] **Favicon** — Replace default Next.js favicon with Staar Solutions brand icon

## Infrastructure

- [ ] **Deploy to Vercel** — Connect GitHub repo to Vercel, set `NEXT_PUBLIC_APP_URL=https://staarsolutions.com`
- [ ] **Wire domain** — Point `staarsolutions.com` DNS to Vercel
- [ ] **Analytics** — Add Vercel Analytics (`@vercel/analytics`) for visitor tracking

## Future pages (optional)

- [ ] **Blog** — Add `/blog` page for articles/updates (good for SEO)
- [ ] **Privacy Policy / Terms** — Add if collecting form data or email addresses
- [ ] **waitlist page for native apps** — If you want a separate waitlist capture for SaveNShare's launch
