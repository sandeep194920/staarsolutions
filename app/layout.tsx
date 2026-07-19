import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Staar Solutions — Software Studio",
    template: "%s | Staar Solutions",
  },
  description:
    "Staar Solutions is a Canadian software studio building iOS, web, and cross-platform applications. We ship in-house products and partner with clients to bring their ideas to life.",
  metadataBase: new URL("https://staarsolutions.ca"),
  keywords: ["software studio", "iOS app development", "web app development", "React Native", "Next.js", "Toronto", "Canada", "mobile app", "full-stack"],
  authors: [{ name: "Sandeep Amarnath", url: "https://staarsolutions.ca/founder" }],
  creator: "Sandeep Amarnath",
  openGraph: {
    title: "Staar Solutions — Software Studio",
    description:
      "Canadian software studio building iOS, web, and cross-platform applications. In-house products and client work.",
    url: "https://staarsolutions.ca",
    siteName: "Staar Solutions",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staar Solutions — Software Studio",
    description:
      "Canadian software studio building iOS, web, and cross-platform applications.",
    creator: "@sandeepamarnath",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://staarsolutions.ca",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
