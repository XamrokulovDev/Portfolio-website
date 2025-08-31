import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CursorGlow } from "@/components/ui/cursor-glow"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ulfatjon - Full-Stack Developer | React, Next.js, Node.js & Telegram Bots",
  description:
    "Professional portfolio of Ulfatjon - Expert full-stack developer specializing in React, Next.js, TypeScript, Node.js, and Telegram bot development. Based in Uzbekistan, serving clients worldwide with modern web solutions.",
  keywords: [
    "Ulfatjon",
    "UlfatDev",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "Telegram bot developer",
    "frontend developer",
    "backend developer",
    "Uzbekistan developer",
    "Tashkent developer",
    "web development",
    "modern web applications",
    "portfolio",
    "JavaScript developer",
    "Tailwind CSS",
  ],
  authors: [{ name: "Ulfatjon", url: "https://ulfatjon.dev" }],
  creator: "Ulfatjon",
  publisher: "Ulfatjon",
  generator: "v0.app",
  applicationName: "Ulfatjon Portfolio",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  classification: "Portfolio Website",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ulfatjon.dev",
    siteName: "Ulfatjon Portfolio",
    title: "Ulfatjon - Full-Stack Developer",
    description:
      "Professional full-stack developer from Uzbekistan specializing in React, Next.js, Node.js, and Telegram bot development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ulfatjon - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulfatjon - Full-Stack Developer",
    description: "Professional full-stack developer from Uzbekistan specializing in modern web technologies",
    images: ["/og-image.png"],
    creator: "@ulfatjon_dev",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://ulfatjon.dev",
    languages: {
      "en-US": "https://ulfatjon.dev",
      "uz-UZ": "https://ulfatjon.dev/uz",
      "ru-RU": "https://ulfatjon.dev/ru",
    },
  },
  other: {
    "msapplication-TileColor": "#1E40AF",
    "theme-color": "#1E40AF",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ulfatjon" />
        <meta name="msapplication-TileColor" content="#1E40AF" />
        <meta name="theme-color" content="#1E40AF" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ulfatjon",
              alternateName: ["UlfatDev", "Ulfat DevWorks"],
              description: "Full-stack developer specializing in React, Next.js, Node.js, and Telegram bot development",
              url: "https://ulfatjon.dev",
              image: "https://ulfatjon.dev/og-image.png",
              sameAs: [
                "https://github.com/ulfatjon",
                "https://instagram.com/ulfatjon_cyber",
                "https://t.me/ulfatjon_cyber",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Ulfat DevWorks",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tashkent",
                addressCountry: "UZ",
              },
              email: "ulfatjon@dev.uz",
              telephone: "+998901234567",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Telegram Bots",
                "Web Development",
                "Modern Web Applications",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-black text-white`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <div className="hidden lg:block">
          <CursorGlow />
        </div>
      </body>
    </html>
  )
}
