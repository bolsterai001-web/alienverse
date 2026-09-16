import React from "react";
import { Star, Quote, Award } from "lucide-react";
import { Review } from "@/types";

interface TestimonialCardProps {
  review: Review;
  featured?: boolean;
}

export default function TestimonialCard({ review, featured = false }: TestimonialCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-300 ${
        featured
          ? "glass-panel-glow border-cyan-500/40 bg-void-850/80 shadow-xl shadow-cyan-500/10"
          : "glass-panel glass-panel-hover"
      }`}
    >
      {/* Subtle quote watermark */}
      <Quote className="absolute top-5 right-5 h-8 w-8 text-cyan-500/10 pointer-events-none" />

      <div className="space-y-4">
        {/* Star Rating & Type Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${
              review.type === "editorial"
                ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                : "bg-violet-500/15 text-violet-300 border border-violet-500/30"
            }`}
          >
            {review.type === "editorial" ? "Editorial Star" : "Verified Reader"}
          </span>
        </div>

        {/* Quote Body */}
        <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      </div>

      {/* Reviewer Information */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-white text-sm tracking-wide">
            {review.author}
          </h4>
          <p className="text-xs text-cyan-400/90 font-mono">
            {review.source}
          </p>
        </div>

        {review.date && (
          <span className="text-[11px] font-mono text-slate-500">
            {review.date}
          </span>
        )}
      </div>
    </div>
  );
}
