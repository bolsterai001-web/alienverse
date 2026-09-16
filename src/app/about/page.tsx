"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Radio, 
  Compass, 
  Atom, 
  ShoppingBag, 
  BookOpen, 
  Users, 
} from "lucide-react";
import BookCover3D from "@/components/BookCover3D";
import BuyModal from "@/components/BuyModal";
import { BOOK_INFO } from "@/data/bookData";

export default function AboutPage() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);

  const characters = [
    {
      name: "Captain Mara Vance",
      callsign: "VAGABOND-ACTUAL",
      role: "Commander, Salvage Cutter 'Omen Horizon'",
      bio: "A veteran deep-space surveyor stripped of her commission after refusing an orbital bombardment order. Mara survived twelve years in the outer trenches by listening when other captains pulled the trigger.",
      specialty: "High-G evasion maneuvers, non-linear tactical analysis.",
    },
    {
      name: "Jesse Lin",
      callsign: "SPECTRAL-LEAD",
      role: "Systems Specialist & Quantum Cryptographer",
      bio: "Former astrophysics prodigy who left academic life to chase anomalous radio bursts along the Kepler perimeter. The first human to decode the harmonic cadence of the Alien Verse.",
      specialty: "Sub-light telemetry decoding, relativistic signal compensation.",
    },
    {
      name: "Director Donald Vance-Vane",
      callsign: "CORONA-PRIME",
      role: "Fleet Commander, Jovian Extraction Syndicate",
      bio: "Head of the private corporate armada dispatched to seize the Kepler construct at any cost. Believes the artifact's energy engine can stave off the solar system's catastrophic energy collapse.",
      specialty: "Orbital siege logistics, autonomous dreadnought tactics.",
    },
    {
      name: "The Chorus (The Verse Construct)",
      callsign: "ENTITY-ZERO",
      role: "Slumbering Dyson Megastructure Intelligence",
      bio: "An orbital nexus orbiting Kepler-452. Constructed 12.4 million years ago as an immutable physical repository containing the preserved thoughts, songs, and final regrets of civilizations before cosmic extinction.",
      specialty: "Gravitational lensing, chronal memory refraction.",
    },
  ];

  const themes = [
    {
      title: "The Fermi Paradox Reimagined",
      description: "Why is the universe so silent? Alien Verse proposes that advanced species do not broadcast in desperation; they encode their existence into immutable cosmic vaults when entropy closes in.",
      icon: Radio,
    },
    {
      title: "Hard Relativistic Physics",
      description: "No magical instantaneous hyperdrives. Space voyages demand brutal acceleration cushions, time dilation penalties, and the terrifying loneliness of light-speed lag.",
      icon: Atom,
    },
    {
      title: "The Weight of Memory",
      description: "When an extinct species leaves behind their collective consciousness, who has the moral right to excavate it, weaponize it, or silence it?",
      icon: Compass,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* Header Banner */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-slate-950" />
          <span>DEEP ARCHIVE BRIEFING // EXPEDITION DOSSIER</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight">
          About the Universe of{" "}
          <span className="bg-[#D4F639] px-2 py-0.5 rounded-xl text-black inline-block">
            Alien Verse
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
          An epic hard science fiction saga spanning relativistic deep space, corporate flotilla warfare, and the discovery of a cosmic memorial twelve million years in the making.
        </p>
      </section>

      {/* Main Premise & Book Visual */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <BookCover3D onOpenBuy={() => setBuyModalOpen(true)} size="md" />
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold">
            <Radio className="h-3.5 w-3.5 text-slate-950" />
            <span>ORIGIN OF THE SIGNAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            The Signal at 1420.405 MHz
          </h2>
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              In the late 22nd century, human civilization stands on the razor&apos;s edge. The helium-3 reserves of the outer gas giants are depleting, and the sovereign cartel syndicates are locked in cold, silent proxy skirmishes across the Kuiper belt.
            </p>
            <p>
              When the deep salvage cutter <span className="bg-[#D4F639]/30 text-slate-950 font-bold px-1.5 py-0.5 rounded">Omen Horizon</span> drifts into the uncharted Kepler-452 Trench, its sensors pick up a phenomenon previously thought impossible: an unbroken carrier signal modulating along the hydrogen line.
            </p>
            <p>
              At the center of the anomaly lies a megastructure of incomprehensible scale—a three-million-kilometer obsidian ring inscribed with superconducting bioluminescent light channels. It is not an alien battleship or an automated fortress. It is the &ldquo;Alien Verse&rdquo;—an eternal cosmic library preserving the final thoughts of civilizations that perished long before the first human walked upright.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all border border-[#c4e92d]"
            >
              <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
              <span>Get the Book</span>
            </button>
            <Link
              href="/sample-chapter"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <BookOpen className="h-4 w-4" />
              <span>Read Opening Chapter</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Character Dossiers */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">
            <Users className="h-3.5 w-3.5 text-slate-950" />
            <span>PERSONNEL & ENTITY DOSSIERS</span>
          </div>
          <h2 className="text-3xl font-black text-slate-950">Cast of the Expedition</h2>
          <p className="text-sm text-slate-600">
            Declassified records from the Omen Horizon and the United Planetary Fleet archive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characters.map((char, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-[#D4F639] shadow-sm hover:shadow-md transition-all duration-300 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-950">{char.name}</h3>
                  <p className="text-xs font-mono text-slate-500 font-bold">{char.role}</p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-slate-950 font-black">
                  {char.callsign}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {char.bio}
              </p>

              <div className="pt-2 text-xs font-mono text-slate-500 border-t border-slate-100 font-semibold">
                <span className="text-slate-950 font-extrabold">KEY ATTRIBUTE:</span> {char.specialty}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thematic Pillars */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">
            <Atom className="h-3.5 w-3.5 text-slate-950" />
            <span>THEMATIC ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-black text-slate-950">Core Themes & Science</h2>
          <p className="text-sm text-slate-600">
            The philosophical inquiry and astrophysics at the heart of the story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {themes.map((theme, i) => {
            const Icon = theme.icon;
            return (
              <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#D4F639]/35 border border-[#D4F639] flex items-center justify-center text-slate-950">
                  <Icon className="h-6 w-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-black text-slate-950">{theme.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{theme.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Book Technical Specs Table */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950">Publication Technical Metadata</h3>
            <p className="text-xs font-mono text-slate-500 font-bold">OFFICIAL ARCHIVE CATALOG: CELESTIAL PRESS</p>
          </div>

          <div className="divide-y divide-slate-100 text-sm">
            <div className="py-3.5 flex justify-between">
              <span className="text-slate-500 font-medium">Full Title</span>
              <span className="font-bold text-slate-950">{BOOK_INFO.title}: {BOOK_INFO.subtitle}</span>
            </div>
            <div className="py-3.5 flex justify-between">
              <span className="text-slate-500 font-medium">Author</span>
              <span className="font-bold text-slate-950">{BOOK_INFO.author}</span>
            </div>
            <div className="py-3.5 flex justify-between">
              <span className="text-slate-500 font-medium">ISBN-13</span>
              <span className="font-mono font-bold text-slate-950">{BOOK_INFO.specs.isbn}</span>
            </div>
            <div className="py-3.5 flex justify-between">
              <span className="text-slate-500 font-medium">Total Extent</span>
              <span className="text-slate-950 font-bold">{BOOK_INFO.specs.pages} Pages (Trade & Hardcover)</span>
            </div>
            <div className="py-3.5 flex justify-between">
              <span className="text-slate-500 font-medium">Publication Date</span>
              <span className="text-slate-950 font-bold">{BOOK_INFO.specs.published}</span>
            </div>
            <div className="py-3.5 flex justify-between">
              <span className="text-slate-500 font-medium">Genres</span>
              <span className="text-slate-950 font-bold">{BOOK_INFO.specs.genres.join(", ")}</span>
            </div>
            <div className="py-3.5 flex justify-between">
              <span className="text-slate-500 font-medium">Publisher</span>
              <span className="text-slate-950 font-bold">{BOOK_INFO.specs.publisher}</span>
            </div>
          </div>
        </div>
      </section>

      <BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />
    </div>
  );
}
