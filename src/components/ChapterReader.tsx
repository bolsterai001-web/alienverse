"use client";

import React, { useState, useEffect } from "react";
import { Chapter } from "@/types";
import { 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Type, 
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
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Control Bar */}
      <div className="sticky top-16 sm:top-20 z-30 mx-auto max-w-4xl px-4 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-void-900/90 backdrop-blur-xl border border-cyan-500/20 shadow-xl shadow-black/40 text-xs">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-slate-300">
            <span className="flex items-center gap-1.5 font-mono text-cyan-400">
              <Clock className="h-3.5 w-3.5" />
              {chapter.readingTime}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400 font-mono">
              PROLOGUE & TRANSMISSION 001
            </span>
          </div>

          {/* Controls: Typeface & Font Size */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Family Toggle */}
            <div className="flex items-center bg-slate-950/80 rounded-lg p-0.5 border border-slate-800">
              <button
                onClick={() => setFontFamily("serif")}
                className={`px-2.5 py-1 rounded font-serif text-xs ${
                  fontFamily === "serif" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
                }`}
                title="Serif Literary Font"
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamily("sans")}
                className={`px-2.5 py-1 rounded font-sans text-xs ${
                  fontFamily === "sans" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
                }`}
                title="Sans-Serif Modern Font"
              >
                Sans
              </button>
            </div>

            {/* Font Size Selector */}
            <div className="flex items-center bg-slate-950/80 rounded-lg p-0.5 border border-slate-800">
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2 py-1 rounded text-xs ${
                  fontSize === "sm" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
                }`}
                title="Compact Font Size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-2 py-1 rounded text-xs ${
                  fontSize === "base" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
                }`}
                title="Default Font Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2 py-1 rounded text-xs ${
                  fontSize === "lg" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
                }`}
                title="Large Font Size"
              >
                A+
              </button>
            </div>

            {/* Simulated Audio Narration Teaser */}
            <button
              onClick={() => setAudioPlaying(!audioPlaying)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all ${
                audioPlaying
                  ? "bg-violet-600/30 border-violet-400 text-violet-300"
                  : "bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white"
              }`}
              title="Simulated Audio Snippet"
            >
              {audioPlaying ? <Volume2 className="h-3.5 w-3.5 animate-pulse text-cyan-300" /> : <VolumeX className="h-3.5 w-3.5" />}
              <span className="hidden md:inline">{audioPlaying ? "Playing Ambient..." : "Audio Snip"}</span>
            </button>

            {/* Share / Copy Excerpt Link */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              title="Copy link to chapter"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Reader Container */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Atmospheric Transmission Header */}
        <div className="mb-10 p-5 rounded-2xl bg-void-900/60 border border-cyan-500/20 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
            <span className="flex items-center gap-1.5">
              <Radio className="h-3 w-3 animate-pulse" />
              DECRYPTED LOG
            </span>
            <span>FREQ: 1420.405 MHz</span>
          </div>
          <p className="text-xs font-mono text-slate-400 tracking-wider">
            {chapter.transmissionLog}
          </p>
        </div>

        {/* Chapter Title Headings */}
        <header className="mb-12 text-center space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            {chapter.subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {chapter.title}
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4" />
        </header>

        {/* Story Prose */}
        <div className={`space-y-6 text-slate-200 ${fontClass} ${sizeClasses[fontSize]}`}>
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
        <div className="my-16 flex items-center justify-center gap-4 text-cyan-400/40">
          <div className="w-16 sm:w-24 h-[1px] bg-cyan-500/30" />
          <span className="font-mono text-xs tracking-widest text-cyan-400">// END OF TRANSMISSION EXCERPT //</span>
          <div className="w-16 sm:w-24 h-[1px] bg-cyan-500/30" />
        </div>

        {/* Call To Action Box at End of Chapter */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-void-900 via-void-850 to-void-950 border border-cyan-500/40 text-center space-y-6 shadow-2xl shadow-cyan-500/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>CONTINUE THE EXPEDITION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The Signal Has Only Just Begun
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Discover what lies behind the twelve-million-year-old Dyson construct in the full 464-page novel. Available now in collector&apos;s hardcover, paperback, and instant digital editions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Get the Full Book</span>
            </button>
            <a
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm transition-all"
            >
              <span>Explore Lore & Cast</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      <BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />
    </div>
  );
}
