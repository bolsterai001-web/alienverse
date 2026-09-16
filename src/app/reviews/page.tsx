"use client";

import React, { useState } from "react";
import { 
  Star, 
  Sparkles, 
  Award, 
  MessageSquare, 
  Share2, 
  Check, 
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Star className="h-3.5 w-3.5 fill-cyan-400" />
          <span>OFFICIAL TRANSMISSION LOGS // ACCLAIM ARCHIVE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Reviews & Critical Acclaim
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Discover why authors, science fiction reviewers, and readers across the globe call <span className="text-cyan-400 font-semibold">Alien Verse</span> one of the most thrilling space operas of the decade.
        </p>
      </section>

      {/* 2. Rating Breakdown Summary Card */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Overall Score (5 Cols) */}
          <div className="md:col-span-5 text-center md:text-left space-y-3 md:border-r md:border-slate-800 md:pr-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Cumulative Reader Rating
            </span>
            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <span className="text-5xl sm:text-6xl font-black text-white">4.9</span>
              <span className="text-slate-400 font-mono text-sm">/ 5.0</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Based on 1,420+ ratings on Amazon, Goodreads, and independent book registries.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setReviewModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-semibold text-xs tracking-wider transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Submit Your Review</span>
              </button>
            </div>
          </div>

          {/* Right: Distribution Bars (7 Cols) */}
          <div className="md:col-span-7 space-y-2.5">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-1 w-14 shrink-0 text-slate-300">
                  <span>{item.stars}</span>
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>

                {/* Progress bar container */}
                <div className="flex-1 h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <span className="w-10 text-right text-slate-400 font-mono">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filter Controls */}
      <section className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Filter By:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { key: "all", label: "All Testimonials" },
            { key: "editorial", label: "Editorial & Press" },
            { key: "reader", label: "Verified Readers" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`text-xs px-4 py-2 rounded-xl font-medium transition-all border ${
                activeFilter === tab.key
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/15"
                  : "bg-void-900/60 border-slate-800 text-slate-400 hover:text-white"
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
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-void-900 via-void-850 to-void-900 border border-cyan-500/30 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Experience the Journey for Yourself</h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Join thousands of satisfied readers who have ventured into the Kepler-452 Abyss. Order your copy through your favorite bookseller today.
        </p>
        <button
          onClick={() => setBuyModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Get Alien Verse Today</span>
        </button>
      </section>

      {/* Leave a Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-void-900 p-6 sm:p-8 space-y-4 shadow-2xl">
            {newReviewSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="h-12 w-12 text-cyan-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Transmission Recorded</h3>
                <p className="text-xs text-slate-300">
                  Thank you for reviewing Alien Verse! Your transmission has been queued for moderation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-white">Transmit Reader Review</h3>
                  <button
                    type="button"
                    onClick={() => setReviewModalOpen(false)}
                    className="text-slate-400 hover:text-white text-xs font-mono"
                  >
                    CLOSE [X]
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
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
                              : "text-slate-600"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Your Name / Reader Handle *
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Alex M., Kepler Science Society"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Review Thoughts *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    placeholder="Share what moved you about the book..."
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setReviewModalOpen(false)}
                    className="px-4 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase"
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
