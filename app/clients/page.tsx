import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Work",
  description:
    "Web products built by Staar Solutions for clients — Zenorbis Technologies and Cyntronex. Full-stack design and development from discovery to launch.",
  alternates: { canonical: "https://staarsolutions.ca/clients" },
  openGraph: {
    title: "Client Work — Staar Solutions",
    description: "Web products built for Zenorbis Technologies and Cyntronex by Staar Solutions.",
    url: "https://staarsolutions.ca/clients",
  },
};

const clients = [
  {
    id: "zenorbis",
    name: "Zenorbis Technologies",
    website: "zenorbis.com",
    tagline: "Engineering & IT services for industrial sectors",
    type: "Corporate Website",
    description:
      "Zenorbis Technologies needed a professional web presence to communicate their expertise across aerospace, automotive, healthcare, energy, and manufacturing sectors. We designed and built a clean, credibility-first corporate website that clearly positions their services and converts visitors into leads.",
    industry: "Engineering & IT Services",
    image: "/images/apps/zenorbis/zenorbis1.png",
    bgLight: "bg-blue-50",
    textAccent: "text-blue-700",
    industries: ["Aerospace", "Automotive", "Healthcare", "Energy", "Manufacturing"],
    services: ["Product Design", "Manufacturing & Assembly", "IT Services & Consulting"],
    deliverables: [
      "Full company website design and development",
      "Industries We Serve showcase with visual cards",
      "Services section with detailed breakdowns",
      "Why Choose Us trust section",
      "Contact form with email integration",
      "Mobile responsive across all devices",
      "SEO-optimised structure and metadata",
    ],
  },
  {
    id: "cyntronex",
    name: "Cyntronex",
    website: "cyntronex.com",
    tagline: "Product design, manufacturing & advanced engineering",
    type: "Product & Services Website",
    description:
      "Cyntronex is a dynamic engineering company with deep expertise in 3D/2D design, manufacturing, and automation. We built a bold, structured website that showcases their three core service pillars — Product Design, Manufacturing, and Advanced Engineering & Automation — with detailed service pages that convert engineering buyers.",
    industry: "Engineering & Manufacturing",
    image: "/images/apps/cyntronex/cyntronex.png",
    bgLight: "bg-orange-50",
    textAccent: "text-orange-700",
    services: ["Product Design", "Manufacturing", "Advanced Engineering & Automation"],
    deliverables: [
      "Full marketing website design and development",
      "3-pillar services structure with deep detail pages",
      "FEA/CFD, CNC, robotics & automation service pages",
      "Brand identity integration with custom logo",
      "Contact form and lead capture",
      "Fully responsive mobile-first design",
      "SEO and performance optimised",
    ],
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">Client Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Products built for clients
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            We partner with businesses to design and build their digital presence — from discovery to launch.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
          {clients.map((client, i) => (
            <div
              key={client.id}
              id={client.id}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start`}
            >
              {/* Screenshot */}
              <div className="lg:w-1/2 w-full">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-video relative">
                  <Image
                    src={client.image}
                    alt={`${client.name} website`}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Industry badges */}
                {"industries" in client && client.industries && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {client.industries.map((ind) => (
                      <span key={ind} className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {ind}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    Delivered
                  </span>
                  <span className={`text-xs font-semibold ${client.textAccent}`}>
                    {client.type}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-2">{client.name}</h2>
                <p className={`font-semibold mb-1 ${client.textAccent}`}>{client.tagline}</p>
                <p className="text-sm text-slate-400 mb-5">Industry: {client.industry}</p>
                <p className="text-slate-500 leading-relaxed mb-6">{client.description}</p>

                {/* Services */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Services Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((s) => (
                      <span key={s} className={`text-xs font-medium px-2.5 py-1 rounded-full ${client.bgLight} ${client.textAccent}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">What We Delivered</p>
                  <ul className="space-y-2">
                    {client.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {client.website && (
                  <a
                    href={`https://${client.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Visit {client.website} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl font-bold text-slate-900">Our process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We understand your business, users, and goals before writing a single line of code." },
              { step: "02", title: "Design", desc: "Clean, modern UI/UX — wireframes to high-fidelity, reviewed with you at every step." },
              { step: "03", title: "Build", desc: "Full-stack development with proper architecture, tested on real devices and browsers." },
              { step: "04", title: "Launch", desc: "Deployed to production with SEO, performance, and security handled from day one." },
            ].map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="text-3xl font-black text-indigo-100 mb-4">{p.step}</div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to build something?</h2>
          <p className="text-indigo-200 text-lg mb-8">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
          >
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
