"use client";

import React, { useState } from "react";
import { Send, Check, Radio, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = [
    "General Reader Inquiry",
    "Press & Media / Interviews",
    "Book Club & Reading Group Q&A",
    "Film, TV & Translation Rights",
    "Speaking Engagements",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-void-900/90 border border-cyan-500/40 text-center space-y-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="mx-auto w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
          <Check className="h-7 w-7" />
        </div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Radio className="h-3.5 w-3.5 animate-pulse" />
          <span>DISPATCH LOGGED // SECURE ROUTING</span>
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Transmission Acknowledged</h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your dispatch regarding &ldquo;{formData.subject || formData.category}&rdquo; has been beamed to Elias Vance and his literary management team. Typical response window: 24–48 standard Earth hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              category: "General Inquiry",
              subject: "",
              message: "",
            });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-white transition-all mt-4"
        >
          Send Another Dispatch
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-void-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-2xl space-y-6"
    >
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Radio className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span>SUB-SPACE TRANSMISSION RELAY</span>
        </div>
        <h2 className="text-2xl font-bold text-white mt-1">Direct Author & Media Dispatch</h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Have an inquiry for Elias Vance or Celestial Press? Complete the transmission parameters below.
        </p>
      </div>

      {/* Category selector */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
          Transmission Frequency (Inquiry Type) *
        </label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
          aria-label="Inquiry Type"
          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white text-sm outline-none transition-all"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="bg-void-950 text-white">
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Your Name / Identification *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Dr. Eleanor Stone"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 text-sm outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Transmission Channel (Email) *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="stone@seti-institute.org"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 text-sm outline-none transition-all"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
          Subject Log *
        </label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Podcast Interview Request: The Fermi Paradox in Alien Verse"
          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 text-sm outline-none transition-all"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
          Transmission Payload (Message) *
        </label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Greetings Elias Vance, our monthly sci-fi reading syndicate would love to host a 30-minute virtual Q&A..."
          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 text-sm outline-none transition-all resize-none"
        />
      </div>

      {/* Submit Button & Disclaimer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
          <span>Encrypted with TLS 1.3. Zero spam policy.</span>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <span>Transmitting...</span>
          ) : (
            <>
              <span>Broadcast Dispatch</span>
              <Send className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
