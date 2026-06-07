import Link from "next/link";

type FooterLink = { label: string; href: string; external: boolean };

const footerLinks: { [group: string]: FooterLink[] } = {
  Company: [
    { label: "Home", href: "/", external: false },
    { label: "Apps", href: "/apps", external: false },
    { label: "Clients", href: "/clients", external: false },
    { label: "Founder", href: "/founder", external: false },
  ],
  Connect: [
    { label: "Contact Us", href: "/contact", external: false },
    { label: "GitHub", href: "https://github.com/sandeep194920", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sandeepamarnath/", external: true },
    { label: "Toptal Profile", href: "https://talent.toptal.com/resume/developers/sandeep-amarnath", external: true },
  ],
  Products: [
    { label: "FocusSharp", href: "https://focussharp.app", external: true },
    { label: "CodeVizual", href: "https://codevizual-com.vercel.app/", external: true },
    { label: "SaveNShare", href: "https://savenshare-ten.vercel.app/", external: true },
    { label: "Thinky", href: "/apps#thinky", external: false },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shrink-0">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="white" fillOpacity="0.95"/>
                </svg>
              </div>
              <div>
                <span className="block font-bold text-white leading-tight">Staar Solutions</span>
                <span className="block text-[10px] text-slate-500 leading-tight tracking-wide">Crafting software that stands out.</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Building high-quality iOS, web, and cross-platform applications.
            </p>
            <p className="text-sm mt-4 text-slate-500">
              📍 Toronto, Canada · Working globally
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Staar Solutions. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Designed & developed by{" "}
            <Link href="/founder" className="text-slate-400 hover:text-white transition-colors">
              Sandeep Amarnath
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
