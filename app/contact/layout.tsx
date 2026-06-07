import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Staar Solutions. We build iOS, Android, and web applications. Get in touch and we'll respond within 24 hours.",
  alternates: { canonical: "https://staarsolutions.ca/contact" },
  openGraph: {
    title: "Start a Project — Staar Solutions",
    description: "Get in touch to start a project. We build iOS, Android, and web applications.",
    url: "https://staarsolutions.ca/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
