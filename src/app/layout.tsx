import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kazi Sazzad Hossain — Full Stack Developer",
    template: "%s — Kazi Sazzad Hossain",
  },
  description:
    "Kazi Sazzad Hossain is a full-stack developer from Dhaka, Bangladesh, building fast, accessible web experiences with React, Next.js, TypeScript, Node.js, and MongoDB.",
  keywords: [
    "Kazi Sazzad Hossain",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Kazi Sazzad Hossain" }],
  creator: "Kazi Sazzad Hossain",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kazi Sazzad Hossain — Full Stack Developer",
    description:
      "Full-stack developer building thoughtful, accessible web products with React, Next.js, TypeScript, and Node.js.",
    siteName: "Kazi Sazzad Hossain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazi Sazzad Hossain — Full Stack Developer",
    description:
      "Full-stack developer building thoughtful, accessible web products with React, Next.js, TypeScript, and Node.js.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-slate-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
