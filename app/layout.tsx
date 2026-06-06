import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Staar Solutions — Software Studio",
  description:
    "Staar Solutions builds high-quality iOS, web, and cross-platform applications. We create in-house products and take on client projects.",
  metadataBase: new URL("https://staarsolutions.com"),
  openGraph: {
    title: "Staar Solutions — Software Studio",
    description:
      "Staar Solutions builds high-quality iOS, web, and cross-platform applications.",
    url: "https://staarsolutions.com",
    siteName: "Staar Solutions",
    type: "website",
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
      </body>
    </html>
  );
}
