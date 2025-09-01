import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";

const SITE_URL = "https://ulfatcyber.vercel.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const LOGO_PNG = `${SITE_URL}/logo.png`;

export const metadata: Metadata = {
  title:
    "Ulfatjon Xamrokulov — Full-Stack Developer | React, Next.js, Node.js & Telegram Bots",
  description:
    "Professional portfolio of Ulfatjon — Full-stack developer (React, Next.js, TypeScript, Node.js, Telegram bots). Based in Uzbekistan, serving clients worldwide.",
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
    "portfolio",
    "Tailwind CSS",
  ],
  authors: [{ name: "Ulfatjon Xamrokulov", url: SITE_URL }],
  creator: "Ulfatjon",
  publisher: "Ulfatjon",
  applicationName: "Ulfatjon Portfolio",
  referrer: "origin-when-cross-origin",
  category: "Technology",
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
    url: SITE_URL,
    siteName: "Ulfatjon Portfolio",
    title: "Ulfatjon Xamrokulov — Full-Stack Developer",
    description:
      "Full-stack developer from Uzbekistan specializing in React, Next.js, Node.js, and Telegram bot development.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Ulfatjon Xamrokulov — Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ulfatjon Xamrokulov — Full-Stack Developer",
    description:
      "Full-stack developer from Uzbekistan specializing in modern web technologies.",
    images: [OG_IMAGE],
    creator: "@ulfat_cyber",
  },

  verification: {
    google: "6iQrHLOyvGrRoWDr39mC0fShP1V44qsp_XirUW4P3dU",
  },

  alternates: {
    canonical: SITE_URL,
  },

  themeColor: "#1E40AF",
  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },

  other: {
    "msapplication-TileColor": "#1E40AF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ulfatjon Xamrokulov",
    alternateName: ["UlfatDev", "Ulfat DevWorks"],
    description:
      "Full-stack developer specializing in React, Next.js, Node.js, and Telegram bot development.",
    url: SITE_URL,
    image: [OG_IMAGE, LOGO_PNG],
    sameAs: [
      "https://github.com/XamrokulovDev",
      "https://www.instagram.com/ulfatjon_xamrokulov",
      "https://t.me/ulfatjons_channel",
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Ulfat DevWorks",
      url: SITE_URL,
      logo: LOGO_PNG,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Samarkand",
      addressCountry: "UZ",
    },
    email: "mailto:ulfatjon@dev.uz",
    telephone: "+998900302423",
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Telegram Bots",
      "Web Development",
      "Modern Web Applications",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ulfatjon" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-black text-white`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <div className="hidden lg:block">
          <CursorGlow />
        </div>
      </body>
    </html>
  );
}