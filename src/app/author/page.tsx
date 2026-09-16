"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Mail, 
  ExternalLink, 
  ShoppingBag, 
  Radio,
  CheckCircle2
} from "lucide-react";
import BuyModal from "@/components/BuyModal";
import { AUTHOR_INFO, BOOK_INFO } from "@/data/bookData";

export default function AuthorPage() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* 1. Header & Author Bio Showcase */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Author Photo Placeholder Card (Left 5 Cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-cyan-500/40 bg-void-900 p-2 shadow-2xl shadow-cyan-500/10 group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-violet-600/15 to-transparent blur-xl pointer-events-none" />
            
            {/* Stylized Author Portrait Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 via-void-850 to-void-950 flex flex-col items-center justify-between p-8 text-center border border-slate-800">
              
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  STATUS: ACTIVE
                </span>
                <span>ID: VANCE-88</span>
              </div>

              {/* Holographic Avatar Graphic Placeholder */}
              <div className="relative my-6">
                <div className="w-36 h-36 rounded-full border-2 border-cyan-400/60 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500/20 via-violet-600/30 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 to-transparent animate-pulse" />
                    {/* Stylized Silhouette */}
                    <div className="text-center z-10 space-y-1">
                      <span className="text-3xl font-black text-white tracking-wider">EV</span>
                      <p className="text-[10px] font-mono text-cyan-300">AUTHOR PORTRAIT</p>
                    </div>
                  </div>
                </div>
                {/* Orbiting accent rings */}
                <div className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/30 animate-spin" style={{ animationDuration: "25s" }} />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-wide">{AUTHOR_INFO.name}</h3>
                <p className="text-xs text-cyan-400 font-mono">{AUTHOR_INFO.role}</p>
                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1 pt-1">
                  <MapPin className="h-3 w-3" />
                  {AUTHOR_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Copy (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>BIOGRAPHY & PHILOSOPHY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Elias Vance
          </h1>
          <p className="text-lg text-cyan-300 font-mono">
            Astrophysicist, Radio Astronomer & Novelist
          </p>

          <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            {AUTHOR_INFO.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Get Alien Verse</span>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Mail className="h-4 w-4 text-cyan-400" />
              <span>Book Elias for Q&A / Keynote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Literary Accolades & Recognition */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Award className="h-3.5 w-3.5" />
            <span>CRITICAL RECOGNITION</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Awards & Nominations</h2>
          <p className="text-sm text-slate-400">
            Selected honours received for Alien Verse and previous short fiction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUTHOR_INFO.awards.map((award, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-void-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                {award}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Personal Note to Readers */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-void-900 via-void-850 to-void-950 border border-cyan-500/30 max-w-4xl mx-auto space-y-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <Radio className="h-3.5 w-3.5" />
          <span>AUTHOR TRANSMISSION TO READERS</span>
        </div>
        <h3 className="text-2xl font-bold text-white">Why I Wrote &ldquo;Alien Verse&rdquo;</h3>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base italic">
          <p>
            &ldquo;When you spend hours in the high desert tracking faint emissions from distant pulsars, you are struck by how ancient and fragile everything is. Light that left its source before humanity discovered fire is only now touching our instruments.&rdquo;
          </p>
          <p>
            &ldquo;Alien Verse grew out of a simple, haunting question: What if the universe isn&apos;t empty, but full of echoes? What if the civilizations that came before us didn&apos;t vanish into nothingness, but left behind their songs, their physics, and their confessions for whoever was brave enough to venture past the rim?&rdquo;
          </p>
          <p>
            &ldquo;To every reader who has ever stood beneath an unpolluted night sky and felt that quiet ache of curiosity: this book is for you.&rdquo;
          </p>
        </div>
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-sm font-bold text-white font-mono">— Elias Vance</span>
          <span className="text-xs font-mono text-slate-400">KEPLER DEEP OBSERVATORY</span>
        </div>
      </section>

      {/* 4. Upcoming Appearances & Events */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Calendar className="h-3.5 w-3.5" />
            <span>DISPATCH SCHEDULE</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Upcoming Events & Signings</h2>
          <p className="text-sm text-slate-400">
            Meet Elias Vance in person or join interactive virtual book syndicate livestreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUTHOR_INFO.upcomingEvents.map((evt, i) => (
            <div key={i} className="p-6 rounded-2xl bg-void-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>{evt.date}</span>
              </div>
              <h4 className="text-base font-bold text-white">{evt.title}</h4>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-slate-400" />
                {evt.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />
    </div>
  );
}
