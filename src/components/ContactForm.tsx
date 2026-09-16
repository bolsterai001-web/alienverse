"use client";

import React, { useState } from "react";
import { Send, Check, Radio, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Reader Inquiry",
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
      <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#D4F639] text-center space-y-4 shadow-xl text-slate-900">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#D4F639] border border-black/10 flex items-center justify-center text-slate-950">
          <Check className="h-7 w-7 stroke-[3]" />
        </div>
        <div className="text-xs font-mono text-slate-900 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Radio className="h-3.5 w-3.5 animate-pulse text-slate-900" />
          <span>DISPATCH LOGGED // SECURE ROUTING</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Transmission Acknowledged</h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-slate-950 font-bold">{formData.name}</span>. Your dispatch regarding &ldquo;{formData.subject || formData.category}&rdquo; has been beamed to Elias Vance and his literary management team. Typical response window: 24–48 standard Earth hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              category: "General Reader Inquiry",
              subject: "",
              message: "",
            });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-950 text-white hover:bg-slate-800 text-xs font-mono font-bold transition-all mt-4"
        >
          Send Another Dispatch
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6 text-slate-900"
    >
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold uppercase tracking-widest mb-2">
          <Radio className="h-3.5 w-3.5 text-slate-950 animate-pulse" />
          <span>SUB-SPACE TRANSMISSION RELAY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">Direct Author & Media Dispatch</h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Have an inquiry for Elias Vance or Celestial Press? Complete the transmission parameters below.
        </p>
      </div>

      {/* Category selector */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
          Transmission Frequency (Inquiry Type) *
        </label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
          aria-label="Inquiry Type"
          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30 text-slate-950 text-sm outline-none transition-all font-medium"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="bg-white text-slate-900">
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
            Your Name / Identification *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Dr. Eleanor Stone"
            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30 text-slate-950 placeholder:text-slate-400 text-sm outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
            Transmission Channel (Email) *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="stone@seti-institute.org"
            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30 text-slate-950 placeholder:text-slate-400 text-sm outline-none transition-all"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
          Subject Log *
        </label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Podcast Interview Request: The Fermi Paradox in Alien Verse"
          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30 text-slate-950 placeholder:text-slate-400 text-sm outline-none transition-all"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
          Transmission Payload (Message) *
        </label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Greetings Elias Vance, our monthly sci-fi reading syndicate would love to host a 30-minute virtual Q&A..."
          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D4F639] focus:ring-2 focus:ring-[#D4F639]/30 text-slate-950 placeholder:text-slate-400 text-sm outline-none transition-all resize-none"
        />
      </div>

      {/* Submit Button & Disclaimer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono font-medium">
          <ShieldCheck className="h-4 w-4 text-slate-900 shrink-0" />
          <span>Encrypted with TLS 1.3. Zero spam policy.</span>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all cursor-pointer disabled:opacity-50 border border-[#c4e92d]"
        >
          {loading ? (
            <span>Transmitting...</span>
          ) : (
            <>
              <span>Broadcast Dispatch</span>
              <Send className="h-3.5 w-3.5 stroke-[2.5]" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
