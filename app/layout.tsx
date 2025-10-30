import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Pampered Paws Grooming Studio",
  description:
    "Premium dog grooming services with spa-level care, fear-free handling, and custom styling in a boutique studio setting.",
  keywords: [
    "dog grooming",
    "pet spa",
    "dog groomer",
    "pet styling",
    "mobile grooming",
    "Pampered Paws"
  ],
  openGraph: {
    title: "Pampered Paws Grooming Studio",
    description:
      "Boutique dog grooming studio delivering personalized spa experiences, breed-specific cuts, and holistic care.",
    url: "https://agentic-5b7a68d7.vercel.app",
    siteName: "Pampered Paws Grooming Studio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pampered Paws Grooming Studio",
    description:
      "Premium dog grooming services, spa packages, and fear-free care from master groomers." 
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} font-sans bg-primary-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
