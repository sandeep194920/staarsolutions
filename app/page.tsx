import Link from "next/link";
import { ArrowRight, Smartphone, Globe, Zap, Users, Code2, Star } from "lucide-react";

const apps = [
  {
    name: "FocusSharp",
    tagline: "Minimal focus timer & time tracker",
    description:
      "A clean, distraction-free timer app built for deep work. Category-based tracking, circular progress ring, and stats — designed like an Apple Watch app.",
    tags: ["iOS", "Web", "Next.js"],
    color: "from-blue-500 to-cyan-500",
    href: "/apps#focussharp",
    live: "https://focussharp.app",
  },
  {
    name: "SaveNShare",
    tagline: "One home for all your saved videos",
    description:
      "Save videos from YouTube, Instagram, TikTok into organised playlists with notes. Share curated collections with friends.",
    tags: ["iOS", "Android", "React Native"],
    color: "from-rose-500 to-pink-500",
    href: "/apps#savenshare",
  },
  {
    name: "CodeVizual",
    tagline: "Learn algorithms in 5 min, not 5 hours",
    description:
      "Interactive algorithm visualizations for FAANG interview prep. Step-by-step code mapping with real-time variable tracking.",
    tags: ["Web", "Next.js", "EdTech"],
    color: "from-violet-500 to-purple-600",
    href: "/apps#codevizual",
    live: "https://codevizual.com",
  },
  {
    name: "Thinky",
    tagline: "The definitive riddle app",
    description:
      "High-quality curated riddles sourced from YouTube puzzle channels and logic communities. Daily challenges, streaks, and shareable results.",
    tags: ["iOS", "Android", "React Native"],
    color: "from-amber-500 to-orange-500",
    href: "/apps#thinky",
  },
];

const services = [
  {
    icon: Smartphone,
    title: "iOS & Mobile Apps",
    description:
      "Native iOS with Swift/SwiftUI and cross-platform with React Native. From idea to App Store.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Fast, modern web apps built with Next.js, TypeScript, and Tailwind CSS. Deployed to production.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end development — backend APIs, databases, authentication, and cloud infrastructure.",
  },
  {
    icon: Zap,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces that feel native to the platform. Apple HIG-inspired design.",
  },
];

const stats = [
  { value: "4+", label: "In-house apps" },
  { value: "5+", label: "Years building" },
  { value: "Top 3%", label: "Toptal rating" },
  { value: "2", label: "Client products shipped" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-white to-violet-50/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-8 uppercase tracking-wide">
              <Star size={12} className="fill-indigo-600 text-indigo-600" />
              Software Studio · Top 3% on Toptal
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              We build apps that{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                people actually use
              </span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
              Staar Solutions is a software studio creating iOS, web, and cross-platform applications.
              We ship in-house products and partner with clients to bring their ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apps"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                See Our Apps <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Full-stack software development
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">
              From a napkin idea to a live product in the App Store or on the web — we handle design, development, and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-house apps */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Apps we've built in-house
              </h2>
            </div>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors shrink-0"
            >
              View all apps <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className={`h-48 bg-gradient-to-br ${app.color} relative flex items-center justify-center`}>
                  <span className="text-white/20 text-7xl font-black select-none">
                    {app.name[0]}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/60 text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                      Screenshot / GIF coming soon
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {app.name}
                    </h3>
                    {app.live && (
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-600 text-sm font-medium mb-3">{app.tagline}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client work teaser */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">Client Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Products we've shipped for clients
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-xl">
                We partner with businesses to design and build their digital presence from the ground up.
              </p>
            </div>
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
            >
              See client work <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Zenorbis Technologies",
                type: "Corporate Website",
                desc: "Full company website for an engineering & IT services firm serving aerospace, automotive, and healthcare industries.",
                tags: ["Web Design", "Development", "SEO"],
                color: "from-blue-600 to-indigo-700",
              },
              {
                name: "Cyntronex",
                type: "Product & Services Website",
                desc: "Marketing website for a dynamic engineering company specialising in product design, manufacturing, and automation.",
                tags: ["Web Design", "Development", "Branding"],
                color: "from-orange-500 to-red-600",
              },
            ].map((client) => (
              <Link
                key={client.name}
                href="/clients"
                className="group block bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-600 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-40 bg-gradient-to-br ${client.color} flex items-center justify-center relative`}>
                  <span className="text-white font-bold text-lg">{client.name}</span>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-xs font-medium text-white/70 bg-black/30 px-2 py-1 rounded-full">
                      Screenshot coming soon
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">{client.type}</p>
                  <h3 className="font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{client.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{client.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {client.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Users size={40} className="text-white/60 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            We take on select client projects — web apps, mobile apps, and design. Tell us what you're building.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
          >
            Start the conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
