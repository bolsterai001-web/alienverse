import React from "react";
import { Star, Quote } from "lucide-react";
import { Review } from "@/types";

interface TestimonialCardProps {
  review: Review;
  featured?: boolean;
}

export default function TestimonialCard({ review, featured = false }: TestimonialCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
        featured
          ? "bg-white border-2 border-[#D4F639] shadow-lg shadow-[#D4F639]/15"
          : "bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#D4F639]"
      }`}
    >
      {/* Subtle quote watermark */}
      <Quote className="absolute top-5 right-5 h-8 w-8 text-slate-100 pointer-events-none stroke-[1.5]" />

      <div className="space-y-4">
        {/* Star Rating & Type Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span
            className={`text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-bold ${
              review.type === "editorial"
                ? "bg-[#D4F639]/35 text-slate-950 border border-[#D4F639]"
                : "bg-slate-100 text-slate-700 border border-slate-200"
            }`}
          >
            {review.type === "editorial" ? "Editorial Star" : "Verified Reader"}
          </span>
        </div>

        {/* Quote Body */}
        <blockquote className="text-sm sm:text-base text-slate-800 leading-relaxed italic">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      </div>

      {/* Reviewer Information */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="font-extrabold text-slate-950 text-sm tracking-wide">
            {review.author}
          </h4>
          <p className="text-xs text-slate-500 font-mono font-bold">
            {review.source}
          </p>
        </div>

        {review.date && (
          <span className="text-[11px] font-mono text-slate-400 font-medium">
            {review.date}
          </span>
        )}
      </div>
    </div>
  );
}
