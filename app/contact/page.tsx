"use client";

import { useState } from "react";
import { Send, CheckCircle, MapPin, Clock, Star } from "lucide-react";

const projectTypes = [
  "iOS App",
  "Android App",
  "Web Application",
  "Full-Stack Product",
  "Website / Landing Page",
  "Other",
];

const budgetRanges = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Let's discuss",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire to email service (Resend / Formspree / Supabase edge function)
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50/60 via-white to-violet-50/40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Start a project with us
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Tell us what you're building. We'll review your inquiry and get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-4">Why work with us?</h2>
                <ul className="space-y-3">
                  {[
                    "Top 3% on Toptal — independently verified quality",
                    "Full-stack from idea to launch — no handoffs",
                    "Apple-quality UI/UX design standards",
                    "iOS, Android, and web under one roof",
                    "Transparent communication throughout",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={15} className="text-indigo-500 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <MapPin size={15} className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Based in</p>
                    <p className="text-sm font-semibold text-slate-900">Toronto, Canada · Working globally</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Clock size={15} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Response time</p>
                    <p className="text-sm font-semibold text-slate-900">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Star size={15} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Toptal rating</p>
                    <p className="text-sm font-semibold text-slate-900">Top 3% globally</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Email us directly</p>
                <a
                  href="mailto:hello@staarsolutions.com"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors text-sm"
                >
                  hello@staarsolutions.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle size={56} className="text-emerald-500 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Message sent!</h2>
                  <p className="text-slate-500 max-w-sm">
                    Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company / Startup (optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Project type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                      >
                        <option value="" disabled>Select type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Budget range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                      >
                        <option value="" disabled>Select range</option>
                        {budgetRanges.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Tell us about your project <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe what you're building, who it's for, your timeline, and anything else that's helpful..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Send message <Send size={15} />
                  </button>

                  <p className="text-xs text-slate-400">
                    We respond within 24 hours. No spam, no sales calls you didn't ask for.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
