"use client";

import React, { useState } from "react";
import { 
  Star, 
  MessageSquare, 
  ShoppingBag, 
  Filter,
  CheckCircle2
} from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import BuyModal from "@/components/BuyModal";
import { REVIEWS } from "@/data/bookData";

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "editorial" | "reader">("all");
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReviewSubmitted, setNewReviewSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [userName, setUserName] = useState("");
  const [userReview, setUserReview] = useState("");

  const filteredReviews = activeFilter === "all"
    ? REVIEWS
    : REVIEWS.filter((r) => r.type === activeFilter);

  const ratingDistribution = [
    { stars: 5, percentage: 91, count: "1,292" },
    { stars: 4, percentage: 7, count: "99" },
    { stars: 3, percentage: 2, count: "28" },
    { stars: 2, percentage: 0, count: "1" },
    { stars: 1, percentage: 0, count: "0" },
  ];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewReviewSubmitted(true);
    setTimeout(() => {
      setReviewModalOpen(false);
      setNewReviewSubmitted(false);
      setUserName("");
      setUserReview("");
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* 1. Header & Rating Overview */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold shadow-sm">
          <Star className="h-3.5 w-3.5 fill-slate-900 text-slate-900" />
          <span>OFFICIAL TRANSMISSION LOGS // ACCLAIM ARCHIVE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight">
          Reviews & Critical Acclaim
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
          Discover why authors, science fiction reviewers, and readers across the globe call <span className="bg-[#D4F639] text-slate-950 font-black px-1.5 py-0.5 rounded">Alien Verse</span> one of the most thrilling space operas of the decade.
        </p>
      </section>

      {/* 2. Rating Breakdown Summary Card */}
      <section className="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl max-w-4xl mx-auto shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Overall Score (5 Cols) */}
          <div className="md:col-span-5 text-center md:text-left space-y-3 md:border-r md:border-slate-100 md:pr-8">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
              Cumulative Reader Rating
            </span>
            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <span className="text-5xl sm:text-6xl font-black text-slate-950">4.9</span>
              <span className="text-slate-400 font-mono text-sm font-bold">/ 5.0</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-xs text-slate-500 font-medium">
              Based on 1,420+ verified ratings across major booksellers worldwide.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setReviewModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-sm border border-[#c4e92d]"
              >
                <MessageSquare className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>Submit Your Review</span>
              </button>
            </div>
          </div>

          {/* Right: Distribution Bars (7 Cols) */}
          <div className="md:col-span-7 space-y-3">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-1 w-14 shrink-0 text-slate-700 font-bold">
                  <span>{item.stars}</span>
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>

                {/* Progress bar container */}
                <div className="flex-1 h-3 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#D4F639]"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <span className="w-10 text-right text-slate-500 font-bold">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filter Controls */}
      <section className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-900 stroke-[2.5]" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">Filter By:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { key: "all" as const, label: "All Testimonials" },
            { key: "editorial" as const, label: "Editorial & Press" },
            { key: "reader" as const, label: "Verified Readers" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`text-xs px-4 py-2 rounded-xl font-bold transition-all border ${
                activeFilter === tab.key
                  ? "bg-[#D4F639] border-[#c4e92d] text-slate-950 shadow-sm"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Reviews Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <TestimonialCard key={review.id} review={review} featured={review.featured} />
        ))}
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950">Experience the Journey for Yourself</h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Join thousands of satisfied readers who have ventured into the Kepler-452 Abyss. Order your copy through your favorite bookseller today.
        </p>
        <button
          onClick={() => setBuyModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all border border-[#c4e92d]"
        >
          <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
          <span>Get Alien Verse Today</span>
        </button>
      </section>

      {/* Leave a Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-2xl text-slate-900">
            {newReviewSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="h-12 w-12 text-[#D4F639] mx-auto fill-slate-950" />
                <h3 className="text-xl font-black text-slate-950">Transmission Recorded</h3>
                <p className="text-xs text-slate-600">
                  Thank you for reviewing Alien Verse! Your transmission has been queued for moderation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-black text-slate-950">Transmit Reader Review</h3>
                  <button
                    type="button"
                    onClick={() => setReviewModalOpen(false)}
                    className="text-slate-400 hover:text-slate-950 text-xs font-mono font-bold"
                  >
                    CLOSE [X]
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold uppercase mb-1">
                    Rating (Stars)
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className="p-1"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            star <= userRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold uppercase mb-1">
                    Your Name / Reader Handle *
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Alex M., Kepler Science Society"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-950 text-sm outline-none focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold uppercase mb-1">
                    Review Thoughts *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    placeholder="Share what moved you about the book..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-950 text-sm outline-none focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30 resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setReviewModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-950"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />
    </div>
  );
}
