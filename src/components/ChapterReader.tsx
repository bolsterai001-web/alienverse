"use client";

import React, { useState, useEffect } from "react";
import { Chapter } from "@/types";
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ArrowRight, 
  ShoppingBag, 
  Clock, 
  Radio, 
  Share2, 
  Check 
} from "lucide-react";
import BuyModal from "./BuyModal";

interface ChapterReaderProps {
  chapter: Chapter;
}

export default function ChapterReader({ chapter }: ChapterReaderProps) {
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [fontFamily, setFontFamily] = useState<"sans" | "serif">("serif");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const fontClass = fontFamily === "serif" ? "font-serif" : "font-sans";

  const sizeClasses = {
    sm: "text-base sm:text-lg leading-relaxed sm:leading-8",
    base: "text-lg sm:text-xl leading-relaxed sm:leading-9",
    lg: "text-xl sm:text-2xl leading-relaxed sm:leading-10",
  };

  return (
    <div className="relative">
      {/* Top Reading Progress Bar matching Fineed Electric Lime */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-200 z-50">
        <div
          className="h-full bg-[#D4F639] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Control Bar */}
      <div className="sticky top-16 sm:top-20 z-30 mx-auto max-w-4xl px-4 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md text-xs">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-slate-700">
            <span className="flex items-center gap-1.5 font-mono text-slate-950 font-extrabold">
              <Clock className="h-3.5 w-3.5 text-slate-900" />
              {chapter.readingTime}
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-500 font-mono font-medium">
              PROLOGUE & TRANSMISSION 001
            </span>
          </div>

          {/* Controls: Typeface & Font Size */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Family Toggle */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200">
              <button
                onClick={() => setFontFamily("serif")}
                className={`px-3 py-1 rounded-lg font-serif text-xs transition-all ${
                  fontFamily === "serif" ? "bg-[#D4F639] text-slate-950 font-black shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`}
                title="Serif Literary Font"
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamily("sans")}
                className={`px-3 py-1 rounded-lg font-sans text-xs transition-all ${
                  fontFamily === "sans" ? "bg-[#D4F639] text-slate-950 font-black shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`}
                title="Sans-Serif Modern Font"
              >
                Sans
              </button>
            </div>

            {/* Font Size Selector */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200">
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  fontSize === "sm" ? "bg-[#D4F639] text-slate-950 font-black shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`}
                title="Compact Font Size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  fontSize === "base" ? "bg-[#D4F639] text-slate-950 font-black shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`}
                title="Default Font Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  fontSize === "lg" ? "bg-[#D4F639] text-slate-950 font-black shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`}
                title="Large Font Size"
              >
                A+
              </button>
            </div>

            {/* Simulated Audio Narration Teaser */}
            <button
              onClick={() => setAudioPlaying(!audioPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all text-xs font-bold ${
                audioPlaying
                  ? "bg-[#D4F639] border-[#c4e92d] text-slate-950 shadow-sm"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950"
              }`}
              title="Simulated Audio Snippet"
            >
              {audioPlaying ? <Volume2 className="h-3.5 w-3.5 animate-pulse text-slate-950" /> : <VolumeX className="h-3.5 w-3.5" />}
              <span className="hidden md:inline">{audioPlaying ? "Playing Ambient..." : "Audio Snip"}</span>
            </button>

            {/* Share / Copy Excerpt Link */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
              title="Copy link to chapter"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" /> : <Share2 className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Reader Container */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Atmospheric Transmission Header */}
        <div className="mb-10 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-950 font-bold">
            <span className="flex items-center gap-1.5">
              <Radio className="h-3 w-3 animate-pulse text-slate-900" />
              DECRYPTED LOG
            </span>
            <span>FREQ: 1420.405 MHz</span>
          </div>
          <p className="text-xs font-mono text-slate-600 tracking-wider">
            {chapter.transmissionLog}
          </p>
        </div>

        {/* Chapter Title Headings */}
        <header className="mb-12 text-center space-y-3">
          <span className="text-xs font-mono tracking-widest text-slate-600 font-bold uppercase">
            {chapter.subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {chapter.title}
          </h1>
          <div className="w-16 h-1 bg-[#D4F639] mx-auto mt-4 rounded-full" />
        </header>

        {/* Story Prose */}
        <div className={`space-y-6 text-slate-800 ${fontClass} ${sizeClasses[fontSize]}`}>
          {chapter.paragraphs.map((para, index) => (
            <p
              key={index}
              className={index === 0 ? "drop-cap" : ""}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Divider with sci-fi glyph */}
        <div className="my-16 flex items-center justify-center gap-4 text-slate-400">
          <div className="w-16 sm:w-24 h-[1px] bg-slate-300" />
          <span className="font-mono text-xs tracking-widest text-slate-600 font-bold">{"// END OF TRANSMISSION EXCERPT //"}</span>
          <div className="w-16 sm:w-24 h-[1px] bg-slate-300" />
        </div>

        {/* Call To Action Box at End of Chapter */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold">
            <Sparkles className="h-3.5 w-3.5 text-slate-900" />
            <span>CONTINUE THE EXPEDITION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            The Signal Has Only Just Begun
          </h3>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Discover what lies behind the twelve-million-year-old Dyson construct in the full 464-page novel. Available now in collector&apos;s hardcover, paperback, and instant digital editions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all cursor-pointer border border-[#c4e92d]"
            >
              <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
              <span>Get the Full Book</span>
            </button>
            <a
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore Lore & Cast</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </article>

      <BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />
    </div>
  );
}
