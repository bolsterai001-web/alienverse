"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  ShoppingBag, 
  Star, 
  Radio, 
  ChevronRight,
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-slate-950" />
              <span>#1 SCI-FI BESTSELLER • GALAXY AWARD WINNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08]">
              Beyond the Event Horizon Lies the{" "}
              <span className="bg-[#D4F639] px-2 py-0.5 rounded-xl text-black inline-block">
                First Verse.
              </span>
            </h1>

            {/* Author Byline & Rating Snippet */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <span className="font-bold text-slate-950 tracking-wide">
                By <Link href="/author" className="underline decoration-[#D4F639] decoration-4 underline-offset-2 hover:text-black">{BOOK_INFO.author}</Link>
              </span>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 font-mono text-xs">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-black text-slate-950">4.9 / 5.0</span>
                <span className="text-slate-500 font-medium">(1,420+ verified ratings)</span>
              </div>
            </div>

            {/* Hero Subhead / Hook */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {BOOK_INFO.synopsis}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setBuyModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all cursor-pointer active:scale-95 border border-[#c4e92d]"
              >
                <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
                <span>Get Your Copy Now</span>
              </button>

              <Link
                href="/sample-chapter"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md group"
              >
                <BookOpen className="h-4 w-4" />
                <span>Read Free Excerpt</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </Link>
            </div>

            {/* Retailer Quick Badges */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2.5 font-bold">
                Available through trusted booksellers worldwide:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
                {RETAILERS.map((retailer) => (
                  <button
                    key={retailer.id}
                    onClick={() => setBuyModalOpen(true)}
                    className="font-bold transition-all bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 text-slate-700 hover:text-slate-950 hover:border-[#D4F639] hover:bg-white shadow-sm"
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
      <section className="border-y border-slate-200/80 bg-white/70 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div key={rev.id} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <p className="text-xs sm:text-sm text-slate-700 italic mb-3 line-clamp-3">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                  <span className="font-extrabold text-slate-950">{rev.author}</span>
                  <span className="text-[10px] font-mono font-bold text-slate-500">{rev.source}</span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold tracking-wider">
              <Radio className="h-3.5 w-3.5 text-slate-900" />
              <span>THE EXPEDITION PREMISE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              An Ancient Megastructure. A Slumbering Chorus.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              {BOOK_INFO.fullBlurb.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {BOOK_INFO.features.map((feat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#D4F639] transition-colors">
                  <h4 className="font-extrabold text-slate-950 text-sm mb-1">{feat.title}</h4>
                  <p className="text-xs text-slate-500 leading-normal">{feat.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-950 hover:underline transition-all"
              >
                <span>Read in-depth universe lore & character dossiers</span>
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Book Specs & Format Table Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xl font-black text-slate-950">Publication Dossier</h3>
                <span className="text-xs font-mono text-slate-950 font-bold px-2.5 py-1 rounded-full bg-[#D4F639]/35 border border-[#D4F639]">
                  OFFICIAL RELEASE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">Title</span>
                  <p className="font-bold text-slate-950">{BOOK_INFO.title}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">Author</span>
                  <p className="font-bold text-slate-950">{BOOK_INFO.author}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">Length</span>
                  <p className="font-bold text-slate-950">{BOOK_INFO.specs.pages} Pages</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">Release Date</span>
                  <p className="font-bold text-slate-950">{BOOK_INFO.specs.published}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">ISBN-13</span>
                  <p className="font-mono text-slate-900 font-bold">{BOOK_INFO.specs.isbn}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">Publisher</span>
                  <p className="font-bold text-slate-950">{BOOK_INFO.specs.publisher}</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase font-bold">Available Formats</span>
                <div className="flex flex-wrap gap-2">
                  {["Collector's Hardcover", "Trade Paperback", "Amazon Kindle", "ePub / Apple Books", "Unabridged Audiobook"].map((fmt) => (
                    <span key={fmt} className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setBuyModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-sm border border-[#c4e92d]"
              >
                <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
                <span>Acquire from Authorized Retailer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMPLE EXCERPT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-8 sm:p-12 shadow-lg">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold">
              <BookOpen className="h-3.5 w-3.5 text-slate-900" />
              <span>CHAPTER 001 TEASER</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950">
              &ldquo;{SAMPLE_CHAPTER.excerpt}&rdquo;
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Read the opening transmission from the Kepler-452 Abyss. Experience the atmospheric tension, hard astrophysics, and terrifying first contact that has captivated sci-fi readers across the globe.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/sample-chapter"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-[#D4F639]/30"
              >
                <span>Read Full Sample Chapter</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <span className="text-xs font-mono text-slate-500 font-semibold">
                8-minute read • No email required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REVIEWS & TESTIMONIALS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">
            <Star className="h-3.5 w-3.5 fill-slate-900 text-slate-900" />
            <span>CRITICAL PRAISE & COMMUNITY REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Loved by Readers, Acclaimed by Critics
          </h2>
          <p className="text-sm text-slate-600">
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
            className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-950 hover:underline transition-colors"
          >
            <span>View all editorial quotes & rating breakdowns</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      {/* 6. NEWSLETTER TRANSMISSION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSignup />
      </section>

      {/* 7. FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-8 sm:p-14 text-center space-y-6 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4F639]/25 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight relative z-10">
            Begin Your Voyage Into the Verse
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed relative z-10">
            Order your copy today in hardcover, paperback, or instant eBook format. Prepare for an unforgettable journey to the edge of known space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all border border-[#c4e92d]"
            >
              <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
              <span>Acquire Alien Verse</span>
            </button>
            <Link
              href="/author"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm transition-all"
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
