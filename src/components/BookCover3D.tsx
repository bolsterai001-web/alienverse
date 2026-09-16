"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Award } from "lucide-react";

interface BookCover3DProps {
  onOpenBuy?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BookCover3D({ onOpenBuy, size = "lg", className = "" }: BookCover3DProps) {
  const [imageError, setImageError] = useState(false);

  // Dimension presets
  const sizeClasses = {
    sm: "w-48 h-72",
    md: "w-64 h-96",
    lg: "w-72 sm:w-80 md:w-96 h-[430px] sm:h-[480px] md:h-[540px]",
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Sci-Fi Atmospheric Cyan/Violet Halo Backlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 via-violet-600/20 to-blue-500/30 rounded-3xl blur-3xl -z-10 scale-95 transition-transform duration-700 hover:scale-105" />
      <div className="absolute -bottom-10 w-3/4 h-12 bg-cyan-400/20 blur-2xl rounded-full -z-10" />

      {/* 3D Perspective Book Shell */}
      <div className="book-perspective group cursor-pointer" onClick={onOpenBuy}>
        <div className={`relative ${sizeClasses[size]} book-tilt rounded-r-xl rounded-l-sm overflow-hidden border border-cyan-500/30 transition-all duration-500`}>
          
          {/* Simulated Left Book Spine & Book Depth */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/20 z-20 pointer-events-none" />

          {/* Holographic Gloss Sheen reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

          {/* Book Image Cover */}
          {!imageError ? (
            <Image
              src="/alien-verse-cover.jpg"
              alt="Alien Verse Book Cover by Elias Vance"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover rounded-r-xl"
              onError={() => setImageError(true)}
            />
          ) : (
            // Rich fallback in case image fails to load
            <div className="w-full h-full bg-gradient-to-b from-void-900 via-void-850 to-void-950 p-6 flex flex-col justify-between border-2 border-cyan-500/40">
              <div className="text-center space-y-2 pt-4">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  #1 International Bestseller
                </span>
                <h3 className="text-3xl font-black tracking-tighter text-white">ALIEN VERSE</h3>
                <p className="text-xs text-slate-300 tracking-wider uppercase">A Space Opera Novel</p>
              </div>

              {/* Central Sci-Fi Emblem */}
              <div className="relative mx-auto w-28 h-28 rounded-full border border-cyan-400/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-violet-400/60 animate-spin" />
                <div className="absolute w-12 h-12 rounded-full bg-cyan-400/20 blur-sm" />
                <Sparkles className="absolute h-8 w-8 text-cyan-300" />
              </div>

              <div className="text-center pb-2">
                <p className="text-sm font-bold tracking-widest text-white uppercase">Elias Vance</p>
                <p className="text-[10px] text-cyan-400 font-mono mt-1">Celestial Press</p>
              </div>
            </div>
          )}

          {/* Sci-Fi Holographic Overlay Badge on bottom corner */}
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 shadow-lg">
            <Award className="h-3.5 w-3.5 text-cyan-400" />
            <span>Galaxy Award</span>
          </div>
        </div>

        {/* Hover Hint */}
        <p className="mt-4 text-center text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors flex items-center justify-center gap-1.5">
          <Sparkles className="h-3 w-3 text-cyan-400" />
          <span>Click to Inspect Editions & Retailers</span>
        </p>
      </div>
    </div>
  );
}
