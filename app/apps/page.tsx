import Link from "next/link";
import { ExternalLink, Smartphone, Globe, ArrowRight } from "lucide-react";

const apps = [
  {
    id: "focussharp",
    name: "FocusSharp",
    tagline: "Minimal focus timer & time tracker",
    description:
      "FocusSharp is a distraction-free productivity timer built with an Apple-ecosystem feel — clean, minimal, lots of white space. It supports timed sessions (25/40/60/90 min), a flow mode that counts up, category-based tracking, and a beautiful circular progress ring. Stats let you see where your time actually went.",
    platforms: ["Web", "iOS (coming soon)"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
    status: "Live",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    textAccent: "text-blue-600",
    live: "https://focussharp.app",
    features: [
      "Circular countdown ring with smooth animation",
      "Flow mode (open-ended count-up session)",
      "Category-based time tracking",
      "Stats: daily, weekly, category breakdowns",
      "Free tier + Pro plan with Stripe",
      "Dark mode, no FOUC",
    ],
  },
  {
    id: "savenshare",
    name: "SaveNShare",
    tagline: "One home for all your saved videos",
    description:
      "SaveNShare solves the scattered saved-video problem. Share a video from any app — YouTube, Instagram, TikTok, Facebook — directly into SaveNShare via the iOS Share Sheet or Android share intent. Organise into playlists, add notes at the moment of saving, and share curated collections with friends.",
    platforms: ["iOS", "Android"],
    tech: ["React Native", "Expo", "NativeWind", "Supabase", "Expo Router"],
    status: "In Development",
    color: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50",
    textAccent: "text-rose-600",
    features: [
      "iOS Share Extension & Android Share Intent",
      "Playlists with one level of sub-playlists",
      "Notes on save — add context at capture time",
      "Smart thumbnails for YouTube and TikTok",
      "In-app video playback (sequential feed)",
      "Share playlists with friends",
      "Free tier + Pro ($2.99/month)",
    ],
  },
  {
    id: "codevizual",
    name: "CodeVizual",
    tagline: "Learn algorithms in 5 minutes, not 5 hours",
    description:
      "CodeVizual transforms algorithm learning with truly interactive, step-by-step visualizations. No videos — just self-paced execution you control. Line-by-line code mapping, real-time variable tracking, and LeetCode-style problems with FAANG company tags. Built for interview prep at Google, Meta, Amazon, Apple, Netflix, and Microsoft.",
    platforms: ["Web"],
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS 4"],
    status: "Live",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    textAccent: "text-violet-600",
    live: "https://codevizual.com",
    features: [
      "Interactive step-by-step algorithm visualizations",
      "Line-by-line code mapping with real-time variable tracking",
      "Hide code & think visually first",
      "Custom input visualization",
      "10 language support (JS, Python, Go, Java, C++, and more)",
      "Company tags for targeted FAANG prep",
      "Free (20 demos) + Monthly/Annual plans",
    ],
  },
  {
    id: "thinky",
    name: "Thinky",
    tagline: "The definitive riddle app",
    description:
      "Thinky is built around one belief: riddle quality is the product. Every riddle is curated from YouTube's best logic and puzzle channels (Logically Yours, MindYourDecisions, TED-Ed), public domain puzzle books (Dudeney, Sam Loyd), and Reddit's top riddle communities. Wordle-style daily challenges everyone shares.",
    platforms: ["iOS", "Android", "Web"],
    tech: ["React Native", "Expo", "NativeWind", "Zustand", "TypeScript"],
    status: "In Development",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textAccent: "text-amber-600",
    features: [
      "1000+ curated high-quality riddles",
      "Daily challenge — Wordle-style virality",
      "Shareable solve results",
      "Lateral thinking, logic, Sherlock-level brain teasers",
      "Deep links to share individual riddles",
      "Favourites and stats",
    ],
  },
];

export default function AppsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50/60 via-white to-violet-50/40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Our Products</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Apps built in-house at{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Staar Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            We build products we'd use ourselves — utility apps, learning tools, and productivity software for iOS, Android, and the web.
          </p>
        </div>
      </section>

      {/* Apps */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
          {apps.map((app, i) => (
            <div
              key={app.id}
              id={app.id}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start`}
            >
              {/* Screenshot placeholder */}
              <div className="lg:w-1/2 w-full">
                <div
                  className={`rounded-2xl bg-gradient-to-br ${app.color} aspect-video flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-white/10 text-[120px] font-black select-none absolute">
                    {app.name[0]}
                  </span>
                  <div className="relative text-center">
                    <p className="text-white font-bold text-xl mb-2">{app.name}</p>
                    <p className="text-white/70 text-sm bg-black/20 px-4 py-2 rounded-full">
                      App screenshots / GIF coming soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      app.status === "Live"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {app.status}
                  </span>
                  <div className="flex gap-2">
                    {app.platforms.map((p) => (
                      <span key={p} className="flex items-center gap-1 text-xs text-slate-500">
                        {p.includes("iOS") || p.includes("Android") ? (
                          <Smartphone size={12} />
                        ) : (
                          <Globe size={12} />
                        )}
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-2">{app.name}</h2>
                <p className={`font-semibold mb-4 ${app.textAccent}`}>{app.tagline}</p>
                <p className="text-slate-500 leading-relaxed mb-6">{app.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className={`mt-0.5 w-4 h-4 rounded-full ${app.bgLight} ${app.textAccent} flex items-center justify-center text-xs font-bold shrink-0`}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {app.live && (
                  <a
                    href={app.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Visit {app.name} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Build with us */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Want us to build your app?</h2>
          <p className="text-slate-500 mb-6">
            We take on select client projects alongside our in-house work. If you have a product idea, let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
