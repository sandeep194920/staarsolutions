import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPin, Briefcase, Star, Code2, Smartphone, Globe, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Sandeep Amarnath — Senior Full-Stack Developer and founder of Staar Solutions. 7+ years building iOS, web, and cross-platform apps. Technical Lead at Staples Canada. Top 3% on Toptal.",
  alternates: { canonical: "https://staarsolutions.ca/founder" },
  openGraph: {
    title: "Sandeep Amarnath — Founder of Staar Solutions",
    description: "Senior Full-Stack Developer, Technical Lead at Staples Canada, Top 3% on Toptal.",
    url: "https://staarsolutions.ca/founder",
  },
};

const skills = {
  "Languages": [
    "JavaScript", "TypeScript", "HTML", "CSS",
    "Python", "SQL",
  ],
  "Frontend & Mobile": [
    "React", "React Native", "Next.js",
    "Redux", "Zustand", "Context API", "React Query",
    "Tailwind CSS", "Styled Components", "NativeWind",
  ],
  "Backend & APIs": [
    "Node.js", "Express", "NestJS",
    "REST APIs", "GraphQL",
    "Supabase", "PostgreSQL", "MongoDB", "Oracle",
  ],
  "Tools & Platforms": [
    "Git", "Xcode", "Figma", "Storybook",
    "AWS (S3, CloudFront, Amplify)", "Vercel", "EAS (Expo)",
    "CI/CD Pipelines",
    "Shopify (Liquid, Storefront API)",
    "Algolia", "Contentful",
    "Cypress", "Playwright", "React Testing Library",
  ],
};

const experience = [
  {
    role: "Technical Lead",
    company: "Staples Canada",
    location: "Richmond Hill, ON, Canada",
    period: "Feb 2026 – Present",
    type: "Full-time",
    highlight: true,
    bullets: [
      "Lead frontend development for staples.ca homepage, PLP, and PDP within a React/Shopify architecture, managing integrations across Algolia, Akeneo PIM, and Shopify Storefront API serving millions of Canadian customers.",
      "Manage a cross-functional team of 4 developers — conducting code reviews, sprint planning, and technical feasibility assessments.",
      "Orchestrating Bootstrap 4→5 migration to meet compliance requirements, building a comprehensive UI test suite from scratch.",
      "Resolved a critical production incident — duplicate SKU issue that uncovered $40K in lost revenue — within first two weeks of role.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Quartermaster",
    location: "Toronto, ON, Canada",
    period: "Apr 2024 – Oct 2025",
    type: "Full-time",
    bullets: [
      "Led frontend migration of a React–Angular web app into a modern React architecture, reducing page load times by ~30%.",
      "Developed chat features for Homeowners and Pros using Stream Chat; implemented AI-driven requirement collection and project summaries.",
      "Built and maintained React Native apps for Homeowners and Pros, managing mobile app development independently.",
      "Deployed frontend builds to AWS S3/CloudFront; created reusable components with Storybook following a11y best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "OANDA Corporation",
    location: "Toronto, ON, Canada",
    period: "Dec 2021 – Jan 2024",
    type: "Full-time",
    bullets: [
      "Built OANDA's user onboarding app with React and state machines, handling complex navigation across multiple countries and divisions.",
      "Implemented i18n supporting 18 languages and WCAG-compliant accessibility with keyboard navigation and screen reader support.",
      "Built dynamic workflows handling 100+ country-specific document submissions with robust Cypress end-to-end tests.",
      "Led development of a React Native mobile app for user consent management; mentored a team of 5 interns.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Mackenzie Investments",
    location: "Toronto, ON, Canada",
    period: "Mar 2019 – Dec 2021",
    type: "Full-time",
    bullets: [
      "Built a performant ReactJS application to replace the legacy frontend of an internal tool, improving usability across multiple teams.",
      "Led implementation of a scalable email-sending service with Node.js and SendGrid — driving 25% improvement in campaign conversions.",
      "Engineered a high-performance app with Node.js, Express, and Oracle — reducing query time per user by 6–8 minutes.",
    ],
  },
];

const inHouseApps = [
  { name: "FocusSharp", desc: "Focus timer & time tracker", href: "/apps#focussharp", live: "https://focussharp.app", image: "/images/apps/focussharp/focus1.png" },
  { name: "CodeVizual", desc: "Algorithm visualizations for FAANG prep", href: "/apps#codevizual", image: "/images/apps/codevisual/cv3.png" },
  { name: "SaveNShare", desc: "Unified video saving app", href: "/apps#savenshare", live: "https://savenshare-ten.vercel.app/", image: "/images/apps/savenshare/sns3.png" },
  { name: "Thinky", desc: "Curated riddle app", href: "/apps#thinky", image: "/images/apps/thinky/thinky2.png" },
  { name: "Cash Transaction Tracker", desc: "Ledger app for small businesses", href: "/apps#ctt", image: "/images/apps/ctt/ctt1.png" },
];

const RESUME_DRIVE_EMBED_URL = "https://drive.google.com/file/d/1pcL1czFgXxifgwwQL-W-Eo6O-ojyE24S/preview";
const RESUME_DRIVE_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1pcL1czFgXxifgwwQL-W-Eo6O-ojyE24S";

export default function FounderPage() {
  return (
    <>
      {/* Toptal trust banner — first thing visitors see */}
      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 py-3 px-6">
        <a
          href="https://talent.toptal.com/resume/developers/sandeep-amarnath"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 group"
        >
          <Star size={15} className="fill-white text-white shrink-0" />
          <span className="text-white text-sm font-semibold">
            Verified Toptal Member — Top 3% of global software developers
          </span>
          <span className="text-indigo-200 text-sm font-medium group-hover:text-white transition-colors flex items-center gap-1">
            View my Toptal profile <ExternalLink size={13} />
          </span>
        </a>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden min-h-[560px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.12),_transparent_55%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[560px]">

            {/* Left — all content */}
            <div className="flex-1 flex flex-col justify-center py-20 pr-0 lg:pr-16">

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {["Technical Lead", "React / React Native", "Full-Stack", "Mobile Dev", "Freelancer"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-indigo-300 border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-only circular photo */}
              <div className="lg:hidden mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden"
                  style={{ boxShadow: "0 0 0 2px rgba(99,102,241,0.3), 0 4px 20px rgba(0,0,0,0.4)" }}>
                  <Image
                    src="/images/founder_profile_pic.png"
                    alt="Sandeep Amarnath"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 leading-tight tracking-tight">
                Sandeep Amarnath
              </h1>
              <p className="text-lg text-indigo-300 font-medium mb-4">
                Technical Lead & Senior Full-Stack Developer · Founder, Staar Solutions
              </p>

              <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-7">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-indigo-400" /> Toronto, Canada · Working globally
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={13} className="text-indigo-400" /> 7+ years experience
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-xl mb-8">
                Senior Software Developer with 7+ years building scalable web and mobile applications using React, React Native, and modern JavaScript frameworks. Currently Technical Lead at Staples Canada and founder of Staar Solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#resume-preview"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View Resume ↓
                </a>
                <a
                  href="https://www.linkedin.com/in/sandeepamarnath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 text-sm font-semibold hover:border-indigo-500 hover:text-white transition-colors"
                >
                  LinkedIn <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/sandeep194920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 text-sm font-semibold hover:border-indigo-500 hover:text-white transition-colors"
                >
                  GitHub <ExternalLink size={14} />
                </a>
                <a
                  href="https://stackoverflow.com/users/10824697/sandeep-amarnath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 text-sm font-semibold hover:border-indigo-500 hover:text-white transition-colors"
                >
                  Stack Overflow <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right — photo + Toptal below */}
            <div className="hidden lg:flex flex-col items-center justify-center w-80 xl:w-[360px] shrink-0 py-10">

              {/* Photo — raw transparent PNG, no effects */}
              <Image
                src="/images/founder_profile_pic.png"
                alt="Sandeep Amarnath"
                width={360}
                height={440}
                className="object-contain w-full"
                priority
              />

              {/* Gap + Toptal — sits cleanly below photo, centered */}
              <a
                href="https://talent.toptal.com/resume/developers/sandeep-amarnath"
                target="_blank"
                rel="noopener noreferrer"
                className="toptal-btn-glow flex items-center gap-3 mt-4 mb-4 px-4 py-3 rounded-xl group hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/toptal_logo.svg"
                  alt="Toptal"
                  width={26}
                  height={26}
                  className="shrink-0 brightness-0 invert opacity-80"
                />
                <div>
                  <p className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">
                    Verified Toptal Member
                  </p>
                  <p className="text-indigo-300 text-xs mt-0.5">Top 3% · Only 3 in 100 pass ↗</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-wrap gap-8 lg:gap-16">
            <div>
              <p className="text-2xl font-bold text-white">7,168</p>
              <p className="text-slate-400 text-sm mt-0.5">Stack Overflow reputation</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">7.4M+</p>
              <p className="text-slate-400 text-sm mt-0.5">Developers reached</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">103</p>
              <p className="text-slate-400 text-sm mt-0.5">Answers written</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">7+</p>
              <p className="text-slate-400 text-sm mt-0.5">Years of experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Top 3%</p>
              <p className="text-slate-400 text-sm mt-0.5">Toptal network</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">About</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm a Senior Software Developer with 7+ years of experience building production web and mobile applications. My career spans fintech (OANDA, Mackenzie Investments), marketplaces (Quartermaster), and large-scale e-commerce (Staples Canada), where I currently serve as Technical Lead.
              </p>
              <p>
                My strength is full-stack React — from complex state management and multi-country i18n flows to AWS deployments and CI/CD pipelines. On mobile, I've independently built and shipped React Native apps for both iOS and Android across several companies.
              </p>
              <p>
                I founded <strong className="text-slate-900">Staar Solutions</strong> to build products I'd actually use, and to take on client work where I can own the outcome end-to-end. In 2026 I was accepted into <strong className="text-slate-900">Toptal's top 3% network</strong> — the multi-stage process (logic test, live coding, technical interview, live project) is the most rigorous screening I've been through, and passing it was a meaningful benchmark.
              </p>
              <p>
                I hold a <strong className="text-slate-900">Master of Engineering in Computer Networking</strong> from Dalhousie University, where I also served as a Teaching Assistant in Python.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Technical Skills</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">What I work with</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  {category.includes("Languages") && <Code2 size={16} className="text-indigo-600" />}
                  {category.includes("Frontend") && <Globe size={16} className="text-violet-600" />}
                  {category.includes("Backend") && <Smartphone size={16} className="text-emerald-600" />}
                  {category.includes("Tools") && <Briefcase size={16} className="text-amber-600" />}
                  <h3 className="font-semibold text-slate-900 text-sm">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Experience</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Work history</h2>

          <div className="space-y-5 max-w-3xl">
            {experience.map((job) => (
              <div
                key={job.company + job.role}
                className={`rounded-2xl p-6 border ${job.highlight ? "border-indigo-200 bg-indigo-50/60" : "border-slate-100 bg-white"}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{job.role}</h3>
                    <p className={`text-sm font-semibold ${job.highlight ? "text-indigo-600" : "text-slate-600"}`}>
                      {job.company}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{job.location}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400">{job.period}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      job.type === "Freelance" ? "bg-indigo-100 text-indigo-700" :
                      "bg-emerald-100 text-emerald-700"
                    }`}>
                      {job.type}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-slate-500 leading-relaxed flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                {job.highlight && (
                  <div className="mt-3 flex items-center gap-2 text-indigo-600 text-xs font-semibold">
                    <Star size={12} className="fill-indigo-600" />
                    Currently serving as Technical Lead
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Education</p>
          <div className="max-w-3xl bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
              <GraduationCap size={20} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Master of Engineering, Computer Networking</h3>
              <p className="text-sm font-medium text-indigo-600">Dalhousie University</p>
              <p className="text-xs text-slate-400 mb-2">Jan 2017 – Jul 2018 · Halifax, NS, Canada</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Advanced Python coursework, distributed file-sharing system design, Twitter bot project. Served as Teaching Assistant mentoring students in Python programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume inline preview */}
      <section id="resume-preview" className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-1">Resume</p>
              <h2 className="text-2xl font-bold text-slate-900">View full resume</h2>
            </div>
            <a
              href={RESUME_DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
↓ Download PDF
            </a>
          </div>

          {/* Google Drive embed */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: "900px" }}>
            <iframe
              src={RESUME_DRIVE_EMBED_URL}
              className="w-full h-full"
              allow="autoplay"
              title="Sandeep Amarnath Resume"
            />
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">
            Can't see the PDF?{" "}
            <a href={RESUME_DRIVE_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
              Download it directly
            </a>
          </p>
        </div>
      </section>

      {/* In-house apps */}
      <section className="bg-slate-50 py-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Products</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Apps I've built</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inHouseApps.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-36 relative overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{app.name}</h3>
                    {app.live && (
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">Live</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mb-3">{app.desc}</p>
                  {app.live && (
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      Live <ExternalLink size={10} />
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client work */}
      <section className="bg-slate-50 pt-8 pb-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Client Work</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Products built for clients</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Zenorbis Technologies", desc: "Corporate website for an engineering & IT services firm", website: "https://zenorbis.com", image: "/images/apps/zenorbis/zenorbis1.png" },
              { name: "Cyntronex", desc: "Product & services website for an engineering and automation company", website: "https://cyntronex.com", image: "/images/apps/cyntronex/cyntronex.png" },
            ].map((client) => (
              <Link
                key={client.name}
                href="/clients"
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-44 relative overflow-hidden bg-slate-100">
                  <Image src={client.image} alt={client.name} fill className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{client.name}</h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">Delivered</span>
                  </div>
                  <p className="text-sm text-slate-500">{client.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Toptal section */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4 uppercase tracking-wide">
              <Star size={12} className="fill-indigo-400 text-indigo-400" />
              Verified Member
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              I'm on Toptal — top 3% of global talent
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Toptal is the exclusive network for the world's top freelance talent. Only 3% of applicants pass their rigorous multi-stage screening. I did — and I'm actively available for engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Hire me card */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <Briefcase size={20} className="text-indigo-400" />
              </div>
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">For Companies</p>
              <h3 className="text-xl font-bold text-white mb-2">Hire me via Toptal</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                Looking for a senior React, React Native, or full-stack developer? Hire me through Toptal for vetted, contract engagements. You get top-3% quality with Toptal's no-risk guarantee.
              </p>
              <a
                href="https://talent.toptal.com/ddZznJ/worlds-top-talent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 text-white text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Hire me on Toptal <ExternalLink size={14} />
              </a>
              <p className="text-xs text-slate-500 mt-3 text-center">
                Using this link gives you $2,000 in Toptal credits
              </p>
            </div>

            {/* Refer talent card */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <Star size={20} className="text-indigo-400" />
              </div>
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">For Developers</p>
              <h3 className="text-xl font-bold text-white mb-2">Apply to Toptal</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                Are you a developer, designer, or finance expert? Apply to join Toptal through my referral link and earn up to <strong className="text-white">$100 in rewards</strong> when you land your first job.
              </p>
              <a
                href="https://talent.toptal.com/talent/apply/ddZznJ/worlds-top-talent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-indigo-500/50 text-indigo-300 text-sm font-bold hover:bg-indigo-500/10 transition-colors"
              >
                Apply via my referral <ExternalLink size={14} />
              </a>
              <p className="text-xs text-slate-500 mt-3 text-center">
                Earn up to $100 when hired for your first job
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Have a project in mind?</h2>
          <p className="text-indigo-200 text-lg mb-8">
            Reach out directly to discuss a project with Staar Solutions — web apps, mobile apps, or both.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
          >
            Contact directly
          </Link>
        </div>
      </section>
    </>
  );
}
