"use client";

import React, { useState } from "react";
import { Mail, Check, Sparkles, Send, Radio } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "inline" | "card" | "compact";
  className?: string;
}

export default function NewsletterSignup({ className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please input a valid transmission address.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className={`p-8 sm:p-10 rounded-3xl border-2 border-[#D4F639] bg-white text-center space-y-4 shadow-xl ${className}`}>
        <div className="mx-auto w-14 h-14 rounded-full bg-[#D4F639] border border-black/10 flex items-center justify-center text-slate-950">
          <Check className="h-7 w-7 stroke-[3]" />
        </div>
        <div className="text-xs font-mono text-slate-900 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Radio className="h-3.5 w-3.5 animate-pulse" />
          <span>TRANSMISSION CONFIRMED</span>
        </div>
        <h3 className="text-2xl font-black text-slate-950">Welcome to the Vanguard</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your frequency is now locked. You will receive priority briefings, bonus lore logs, and sequel release updates directly from Elias Vance.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setEmail("");
          }}
          className="text-xs text-slate-600 hover:text-slate-950 underline underline-offset-4 pt-2 font-semibold"
        >
          Subscribe another address
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 md:p-12 shadow-xl backdrop-blur-xl ${className}`}
    >
      {/* Fineed pastel ambient aura */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4F639]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-[11px] font-mono text-slate-950 font-bold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5 text-slate-900" />
          <span>DEEP VOID DISPATCH // VOL. 1</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
          Transmissions from the Void
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Subscribe to receive classified world-building notes, behind-the-scenes astrophysics research, deleted chapters, and exclusive notifications for the upcoming sequel, <span className="text-slate-950 font-bold italic">Signal Fracture</span>.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="cadet@deepspace.org"
                aria-label="Email address"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30 text-slate-950 placeholder:text-slate-400 text-sm outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all cursor-pointer disabled:opacity-50 border border-[#c4e92d]"
            >
              {loading ? (
                <span>Locking...</span>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="h-3.5 w-3.5 stroke-[2.5]" />
                </>
              )}
            </button>
          </div>

          {error && (
            <p className="text-xs text-rose-600 font-semibold">{error}</p>
          )}

          <p className="text-[11px] text-slate-500 font-medium">
            Zero spam. Unsubscribe at any time. Cryptographically shielded frequency.
          </p>
        </form>
      </div>
    </div>
  );
}
