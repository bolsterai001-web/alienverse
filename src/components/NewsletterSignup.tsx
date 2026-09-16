"use client";

import React, { useState } from "react";
import { Mail, Check, Sparkles, Send, ShieldAlert, Radio } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "inline" | "card" | "compact";
  className?: string;
}

export default function NewsletterSignup({ variant = "card", className = "" }: NewsletterSignupProps) {
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
      <div className={`p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-void-900/90 text-center space-y-3 shadow-xl shadow-cyan-500/10 ${className}`}>
        <div className="mx-auto w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
          <Check className="h-6 w-6" />
        </div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-1">
          <Radio className="h-3 w-3 animate-pulse" />
          <span>TRANSMISSION CONFIRMED</span>
        </div>
        <h3 className="text-xl font-bold text-white">Welcome to the Vanguard</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Your frequency is now locked. You will receive priority briefings, bonus lore logs, and sequel release updates directly from Elias Vance.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setEmail("");
          }}
          className="text-xs text-slate-400 hover:text-cyan-400 underline underline-offset-4 pt-2"
        >
          Subscribe another address
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-void-900/85 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {/* Decorative Sci-Fi background glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
          <Sparkles className="h-3 w-3 text-cyan-400" />
          <span>DEEP VOID DISPATCH // VOL. 1</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Transmissions from the Void
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed">
          Subscribe to receive classified world-building notes, behind-the-scenes astrophysics research, deleted chapters, and exclusive notifications for the upcoming sequel, <span className="text-cyan-300 italic">Signal Fracture</span>.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="cadet@deepspace.org"
                aria-label="Email address"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 text-sm outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Locking...</span>
              ) : (
                <>
                  <span>Transmit</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>

          {error && (
            <p className="text-xs text-rose-400 flex items-center justify-center gap-1">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>{error}</span>
            </p>
          )}

          <p className="text-[11px] text-slate-400 font-mono">
            // FREQUENCY: BI-WEEKLY • ZERO SPAM • QUANTUM ENCRYPTED
          </p>
        </form>
      </div>
    </div>
  );
}
