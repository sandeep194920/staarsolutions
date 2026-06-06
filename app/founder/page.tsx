import Link from "next/link";
import { ExternalLink, Download, MapPin, Briefcase, Star, Code2, Smartphone, Globe } from "lucide-react";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Mobile: ["React Native", "Expo", "NativeWind", "Swift (learning)", "SwiftUI (learning)"],
  Backend: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Edge Functions"],
  Tools: ["Git", "Figma", "Vercel", "Xcode", "VS Code"],
};

const experience = [
  {
    role: "Freelance Software Developer",
    company: "Toptal Network",
    period: "2024 – Present",
    type: "Freelance",
    desc: "Selected into Toptal's top 3% network of global software developers. Available for senior-level full-stack and mobile development engagements.",
    highlight: true,
  },
  {
    role: "Founder & Lead Developer",
    company: "Staar Solutions",
    period: "2023 – Present",
    type: "Full-time",
    desc: "Building in-house products (FocusSharp, SaveNShare, CodeVizual, Thinky) and delivering client projects end-to-end.",
  },
  {
    role: "Full-Stack Developer",
    company: "Zenorbis Technologies (Client)",
    period: "2024",
    type: "Project",
    desc: "Designed and built the full company website for an engineering and IT services firm serving aerospace, automotive, and healthcare industries.",
  },
  {
    role: "Full-Stack Developer",
    company: "Cyntronex (Client)",
    period: "2024",
    type: "Project",
    desc: "Built the product and services website for an engineering company specialising in product design, manufacturing, and advanced automation.",
  },
];

const inHouseApps = [
  { name: "FocusSharp", desc: "Focus timer & time tracker", href: "/apps#focussharp", live: "https://focussharp.app" },
  { name: "CodeVizual", desc: "Algorithm visualizations for FAANG prep", href: "/apps#codevizual", live: "https://codevizual.com" },
  { name: "SaveNShare", desc: "Unified video saving app", href: "/apps#savenshare" },
  { name: "Thinky", desc: "Curated riddle app", href: "/apps#thinky" },
];

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15),_transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Avatar placeholder */}
            <div className="shrink-0">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-5xl font-black shadow-2xl">
                S
              </div>
              <p className="text-slate-500 text-xs mt-3 text-center">Photo coming soon</p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4 uppercase tracking-wide">
                <Star size={12} className="fill-indigo-400 text-indigo-400" />
                Top 3% on Toptal
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Sandeep Amarnath
              </h1>
              <p className="text-xl text-indigo-300 font-medium mb-4">
                Full-Stack & Mobile Developer · Founder, Staar Solutions
              </p>

              <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-indigo-400" /> India · Working globally
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-indigo-400" /> 5+ years experience
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-2xl text-lg mb-8">
                I'm a full-stack and mobile developer who builds apps from zero to production. I founded Staar Solutions to ship in-house products and take on client work. I was accepted into Toptal's network — where only the top 3% of applicants pass — and I'm actively available for senior freelance engagements.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/sandeep-amarnath-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Download size={15} /> Download Resume
                </a>
                <a
                  href="https://www.toptal.com/resume/sandeep-amarnath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 text-sm font-semibold hover:border-indigo-500 hover:text-white transition-colors"
                >
                  View Toptal Profile <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/sandeep194920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 text-sm font-semibold hover:border-indigo-500 hover:text-white transition-colors"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              </div>
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
                I started my career as a full-stack web developer, building production applications in React, Node.js, and PostgreSQL. Over the years I've worked across the entire stack — from building pixel-perfect UIs to architecting backend systems and deploying to production.
              </p>
              <p>
                I founded <strong className="text-slate-900">Staar Solutions</strong> to pursue something I've always wanted: building products that solve real problems. The studio lets me ship in-house apps while also taking on client projects — two things I genuinely love doing.
              </p>
              <p>
                In 2024 I was accepted into <strong className="text-slate-900">Toptal</strong>, the exclusive network for the top 3% of global tech talent. The multi-stage screening process (test, live coding, technical interview, live project) confirmed what I'd spent years working toward: I can compete with the best engineers in the world.
              </p>
              <p>
                I'm currently expanding into iOS and macOS development with Swift and SwiftUI — building native companions to the web apps I've already shipped.
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
                  {category === "Frontend" && <Globe size={16} className="text-indigo-600" />}
                  {category === "Mobile" && <Smartphone size={16} className="text-violet-600" />}
                  {category === "Backend" && <Code2 size={16} className="text-emerald-600" />}
                  {category === "Tools" && <Briefcase size={16} className="text-amber-600" />}
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

          <div className="space-y-4 max-w-3xl">
            {experience.map((job) => (
              <div
                key={job.company + job.role}
                className={`rounded-2xl p-6 border ${job.highlight ? "border-indigo-200 bg-indigo-50/50" : "border-slate-100 bg-white"}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-bold text-slate-900">{job.role}</h3>
                    <p className={`text-sm font-medium ${job.highlight ? "text-indigo-600" : "text-slate-500"}`}>
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{job.period}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      job.type === "Freelance" ? "bg-indigo-100 text-indigo-700" :
                      job.type === "Full-time" ? "bg-emerald-100 text-emerald-700" :
                      "bg-slate-100 text-slate-600"
                    }`}>
                      {job.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{job.desc}</p>
                {job.highlight && (
                  <div className="mt-3 flex items-center gap-2 text-indigo-600 text-xs font-semibold">
                    <Star size={12} className="fill-indigo-600" />
                    Top 3% of global applicants
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-house apps */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Products</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Apps I've built</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inHouseApps.map((app) => (
              <div key={app.name} className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">{app.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{app.desc}</p>
                <div className="flex gap-3">
                  <Link href={app.href} className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                    Details →
                  </Link>
                  {app.live && (
                    <a href={app.live} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1">
                      Live <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toptal badge + contact CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            <Star size={14} className="fill-white" />
            Available for freelance via Toptal
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Let's work together</h2>
          <p className="text-indigo-200 text-lg mb-8">
            Hire me through Toptal for senior-level engagements, or reach out directly to discuss a project with Staar Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.toptal.com/resume/sandeep-amarnath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
            >
              Hire via Toptal <ExternalLink size={15} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Contact directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
