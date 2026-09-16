"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Award, 
  Calendar, 
  MapPin, 
  Mail, 
  ShoppingBag, 
  Radio,
} from "lucide-react";
import BuyModal from "@/components/BuyModal";
import { AUTHOR_INFO } from "@/data/bookData";

export default function AuthorPage() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* 1. Header & Author Bio Showcase */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Author Photo Profile Card (Left 5 Cols) matching Fineed Profile Screen */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xl group">
            
            {/* Inner Card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-50 flex flex-col items-center justify-between p-8 text-center border border-slate-100">
              
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-950 font-bold">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4F639] border border-black/30 animate-pulse" />
                  STATUS: ACTIVE
                </span>
                <span className="bg-[#D4F639]/40 px-2 py-0.5 rounded-md">ID: VANCE-88</span>
              </div>

              {/* Holographic Avatar Graphic with Fineed Sunset/Sky Gradient Halo */}
              <div className="relative my-8">
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-amber-300 via-rose-300 to-sky-300 p-1.5 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden border border-slate-200">
                    <div className="text-center z-10 space-y-1">
                      <span className="text-4xl font-black text-slate-950 tracking-wider">EV</span>
                      <p className="text-[10px] font-mono text-slate-500 font-bold">AUTHOR PROFILE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-950 tracking-wide">{AUTHOR_INFO.name}</h3>
                <p className="text-xs text-slate-700 font-mono font-bold">{AUTHOR_INFO.role}</p>
                <p className="text-xs text-slate-500 flex items-center justify-center gap-1 pt-1 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-slate-700" />
                  {AUTHOR_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Copy (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-slate-950" />
            <span>BIOGRAPHY & PHILOSOPHY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight">
            Elias Vance
          </h1>
          <p className="text-lg text-slate-800 font-mono font-bold">
            Astrophysicist, Radio Astronomer & Novelist
          </p>

          <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            {AUTHOR_INFO.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all border border-[#c4e92d]"
            >
              <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
              <span>Get Alien Verse</span>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <Mail className="h-4 w-4" />
              <span>Book Elias for Q&A / Keynote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Literary Accolades & Recognition */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">
            <Award className="h-3.5 w-3.5 text-slate-950" />
            <span>CRITICAL RECOGNITION</span>
          </div>
          <h2 className="text-3xl font-black text-slate-950">Awards & Nominations</h2>
          <p className="text-sm text-slate-600">
            Selected honours received for Alien Verse and previous short fiction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUTHOR_INFO.awards.map((award, i) => (
            <div
              key={i}
              className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#D4F639] transition-all flex items-start gap-3"
            >
              <div className="p-2.5 rounded-2xl bg-[#D4F639]/35 text-slate-950 shrink-0">
                <Award className="h-5 w-5 stroke-[2.5]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
                {award}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Personal Note to Readers */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold">
          <Radio className="h-3.5 w-3.5 text-slate-950" />
          <span>AUTHOR TRANSMISSION TO READERS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-950">Why I Wrote &ldquo;Alien Verse&rdquo;</h3>
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base italic">
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
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm font-black text-slate-950 font-mono">— Elias Vance</span>
          <span className="text-xs font-mono text-slate-500 font-bold">KEPLER DEEP OBSERVATORY</span>
        </div>
      </section>

      {/* 4. Upcoming Appearances & Events */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">
            <Calendar className="h-3.5 w-3.5 text-slate-950" />
            <span>DISPATCH SCHEDULE</span>
          </div>
          <h2 className="text-3xl font-black text-slate-950">Upcoming Events & Signings</h2>
          <p className="text-sm text-slate-600">
            Meet Elias Vance in person or join interactive virtual book syndicate livestreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUTHOR_INFO.upcomingEvents.map((evt, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-[#D4F639] transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-950 font-bold">
                <Calendar className="h-3.5 w-3.5 text-slate-900" />
                <span>{evt.date}</span>
              </div>
              <h4 className="text-base font-black text-slate-950">{evt.title}</h4>
              <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <MapPin className="h-3 w-3 text-slate-700" />
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
