import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Safe",
  title: {
    default: "Safe | Safety Check-In App for Trusted Contacts",
    template: "%s | Safe"
  },
  description:
    "Safe is a safety check-in app for Ukraine, families, and trusted contacts. Share status updates, location with manual override, and get notified when someone checks in.",
  keywords: [
    "Safe app",
    "safety check-in app",
    "family safety app",
    "trusted contacts app",
    "Ukraine safety app",
    "check-in app",
    "location sharing with privacy",
    "ping a friend",
    "status updates for loved ones"
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      uk: "/"
    }
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Safe",
    title: "Safe | Quick safety check-ins for trusted contacts",
    description:
      "One-tap safety updates, trusted contacts, status notifications, and privacy-first location sharing for people in Ukraine and their families.",
    locale: "en_US",
    alternateLocale: ["uk_UA"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe | Quick safety check-ins for trusted contacts",
    description:
      "One-tap safety updates, trusted contacts, notifications, and privacy-first location sharing."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
