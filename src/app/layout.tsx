import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alienverse.novel"),
  title: "Alien Verse by Elias Vance | Official Bestselling Sci-Fi Novel",
  description:
    "Official website for 'Alien Verse', the bestselling hard sci-fi space opera novel by Elias Vance. Explore the book lore, read the sample chapter, reviews, and acquire your copy.",
  keywords: [
    "Alien Verse",
    "Elias Vance",
    "Sci-Fi Book",
    "Space Opera",
    "Hard Science Fiction",
    "Kepler-452",
    "First Contact",
    "Alien Artifact",
  ],
  authors: [{ name: "Elias Vance" }],
  openGraph: {
    title: "Alien Verse by Elias Vance | Official Bestselling Sci-Fi Novel",
    description:
      "Beyond the event horizon lies the first verse. Discover the international bestselling space opera.",
    url: "https://alienverse.novel",
    siteName: "Alien Verse Official Website",
    images: [
      {
        url: "/alien-verse-cover.jpg",
        width: 800,
        height: 1200,
        alt: "Alien Verse Book Cover by Elias Vance",
      },
    ],
    locale: "en_US",
    type: "book",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alien Verse by Elias Vance",
    description: "Beyond the event horizon lies the first verse. Official website.",
    images: ["/alien-verse-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#ebf1ea] text-slate-900 antialiased selection:bg-[#D4F639] selection:text-black">
        {/* Ambient background grid and aura layers */}
        <div className="fixed inset-0 cosmic-grid opacity-60 pointer-events-none -z-20" />
        <div className="fixed inset-0 cosmic-glow-radial pointer-events-none -z-10" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-1 pt-20 sm:pt-24">{children}</main>

        {/* Global Sci-Fi Footer */}
        <Footer />
      </body>
    </html>
  );
}
