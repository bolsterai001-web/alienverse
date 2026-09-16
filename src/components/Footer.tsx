import React from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { BOOK_INFO, RETAILERS } from "@/data/bookData";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-white/75 backdrop-blur-md text-slate-600 overflow-hidden pt-16 pb-12">
      {/* Background radial aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#D4F639]/20 via-orange-100/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Telemetry Status Line */}
        <div className="mb-12 pb-6 border-b border-slate-200/80 flex flex-col md:flex-row items-center justify-between text-xs font-mono gap-4">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4F639] border border-black/40 animate-ping" />
            <span className="font-extrabold tracking-wider">FREQUENCY:</span>
            <span className="text-slate-600">1420.405 MHz (HYDROGEN LINE) // STATUS: NOMINAL</span>
          </div>
          <div className="text-slate-500 flex items-center gap-4 text-[11px] font-medium">
            <span>SYSTEM: KEPLER-452 SECTOR</span>
            <span>•</span>
            <span>ENCRYPTION: 256-BIT QUANTUM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          
          {/* Brand & Blurb Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#D4F639]" />
              </div>
              <span className="text-xl font-black tracking-wider text-slate-950 uppercase">
                ALIEN <span className="bg-[#D4F639] text-black px-1.5 py-0.5 rounded-md">VERSE</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              An international bestselling space opera by Elias Vance. Exploring first contact, deep relativistic time, and the haunting majesty of the stars.
            </p>

            <div className="text-xs font-mono text-slate-500 space-y-1 pt-2">
              <p>PUBLISHER: {BOOK_INFO.specs.publisher}</p>
              <p>ISBN-13: {BOOK_INFO.specs.isbn}</p>
              <p>GLOBAL RELEASE: {BOOK_INFO.specs.published}</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-950 font-black">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-slate-950 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-950 transition-colors">
                  About the Book & Lore
                </Link>
              </li>
              <li>
                <Link href="/author" className="hover:text-slate-950 transition-colors">
                  Author Elias Vance
                </Link>
              </li>
              <li>
                <Link href="/sample-chapter" className="hover:text-slate-950 transition-colors">
                  Read Sample Chapter
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-slate-950 transition-colors">
                  Reviews & Accolades
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* External Retail Partners */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-950 font-black">
              External Retailers
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {RETAILERS.map((retailer) => (
                <li key={retailer.id}>
                  <a
                    href={retailer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-slate-950 transition-colors"
                  >
                    <span>{retailer.name}</span>
                    <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-[#9fc705] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Legal Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-950 font-black">
              Dispatch Channels
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors">
                  Press & Media Kit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors">
                  Reading Group Q&A
                </Link>
              </li>
              <li>
                <a
                  href="https://goodreads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-950 transition-colors flex items-center gap-1"
                >
                  <span>Goodreads Page</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </li>
              <li>
                <Link href="/sample-chapter" className="hover:text-slate-950 transition-colors">
                  Audio Excerpt Preview
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Elias Vance & Celestial Press. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-700">
              <ShieldCheck className="h-4 w-4 text-slate-900" />
              Direct retail links • Zero on-site payment processing
            </span>
            <Link href="/contact" className="hover:text-slate-950 transition-colors">
              Terms & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
