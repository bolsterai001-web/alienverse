"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Radio, 
  Atom, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Flame
} from "lucide-react";
import BookCover3D from "@/components/BookCover3D";
import BuyModal from "@/components/BuyModal";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { BOOK_INFO, REVIEWS, SAMPLE_CHAPTER, RETAILERS } from "@/data/bookData";

export default function HomePage() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Copy (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Accolade Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-500/10">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>#1 SCI-FI BESTSELLER • GALAXY AWARD WINNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Beyond the Event Horizon Lies the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400">
                First Verse.
              </span>
            </h1>

            {/* Author Byline & Rating Snippet */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <span className="font-semibold text-white tracking-wide">
                By <Link href="/author" className="text-cyan-400 hover:underline">{BOOK_INFO.author}</Link>
              </span>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-amber-400 font-mono text-xs">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-200">4.9 / 5.0</span>
                <span className="text-slate-400">(1,420+ verified ratings)</span>
              </div>
            </div>

            {/* Hero Subhead / Hook */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {BOOK_INFO.synopsis}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setBuyModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer active:scale-95"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Get Your Copy Now</span>
              </button>

              <Link
                href="/sample-chapter"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 text-slate-200 font-semibold text-sm transition-all"
              >
                <BookOpen className="h-4 w-4 text-cyan-400" />
                <span>Read Free Excerpt</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Retailer Quick Badges */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                Available through trusted booksellers worldwide:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
                {RETAILERS.map((retailer) => (
                  <button
                    key={retailer.id}
                    onClick={() => setBuyModalOpen(true)}
                    className="hover:text-cyan-300 font-medium transition-colors bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800 hover:border-slate-700"
                  >
                    {retailer.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero 3D Book Cover Presentation (Right 5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <BookCover3D onOpenBuy={() => setBuyModalOpen(true)} size="lg" />
          </div>
        </div>
      </section>

      {/* 2. CRITICAL ACCLAIM STRIP */}
      <section className="border-y border-cyan-500/20 bg-void-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div key={rev.id} className="p-4 rounded-xl bg-void-950/60 border border-slate-800/80">
                <p className="text-xs sm:text-sm text-slate-300 italic mb-2 line-clamp-3">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/60">
                  <span className="font-semibold text-white">{rev.author}</span>
                  <span className="text-[10px] font-mono text-cyan-400">{rev.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOOK OVERVIEW & SYNOPSIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
              <Radio className="h-3.5 w-3.5" />
              <span>THE EXPEDITION PREMISE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              An Ancient Megastructure. A Slumbering Chorus.
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              {BOOK_INFO.fullBlurb.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {BOOK_INFO.features.map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-void-900/60 border border-slate-800">
                  <h4 className="font-bold text-white text-sm mb-1">{feat.title}</h4>
                  <p className="text-xs text-slate-400 leading-normal">{feat.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read in-depth universe lore & character dossiers</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Book Specs & Format Table Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-white">Publication Dossier</h3>
                <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  OFFICIAL RELEASE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Title</span>
                  <p className="font-semibold text-white">{BOOK_INFO.title}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Author</span>
                  <p className="font-semibold text-white">{BOOK_INFO.author}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Length</span>
                  <p className="font-semibold text-white">{BOOK_INFO.specs.pages} Pages</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Release Date</span>
                  <p className="font-semibold text-white">{BOOK_INFO.specs.published}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">ISBN-13</span>
                  <p className="font-mono text-cyan-300">{BOOK_INFO.specs.isbn}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Publisher</span>
                  <p className="font-semibold text-white">{BOOK_INFO.specs.publisher}</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-5 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase">Available Formats</span>
                <div className="flex flex-wrap gap-2">
                  {["Collector's Hardcover", "Trade Paperback", "Amazon Kindle", "ePub / Apple Books", "Unabridged Audiobook"].map((fmt) => (
                    <span key={fmt} className="text-xs px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setBuyModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Acquire from Authorized Retailer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMPLE EXCERPT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-void-900/90 p-8 sm:p-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <BookOpen className="h-3.5 w-3.5" />
              <span>CHAPTER 001 TEASER</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              &ldquo;{SAMPLE_CHAPTER.excerpt}&rdquo;
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Read the opening transmission from the Kepler-452 Abyss. Experience the atmospheric tension, hard astrophysics, and terrifying first contact that has captivated sci-fi readers across the globe.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/sample-chapter"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Read Full Sample Chapter</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs font-mono text-slate-400">
                8-minute read • No email required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REVIEWS & TESTIMONIALS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Star className="h-3.5 w-3.5 fill-cyan-400" />
            <span>CRITICAL PRAISE & COMMUNITY REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Loved by Readers, Acclaimed by Critics
          </h2>
          <p className="text-sm text-slate-300">
            Read honest opinions from leading science fiction critics, bestselling authors, and passionate space opera readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <TestimonialCard key={review.id} review={review} featured={review.featured} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View all editorial quotes & rating breakdowns</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 6. NEWSLETTER TRANSMISSION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSignup />
      </section>

      {/* 7. FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 bg-gradient-to-r from-void-950 via-void-900 to-void-950 p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight relative z-10">
            Begin Your Voyage Into the Verse
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed relative z-10">
            Order your copy today in hardcover, paperback, or instant eBook format. Prepare for an unforgettable journey to the edge of known space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 transition-all"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Acquire Alien Verse</span>
            </button>
            <Link
              href="/author"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-sm transition-all"
            >
              <span>Meet Author Elias Vance</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Buy Now Retailer Modal */}
      <BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />
    </div>
  );
}
