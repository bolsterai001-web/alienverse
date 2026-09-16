"use client";

import React, { useState } from "react";
import { X, ExternalLink, BookOpen, ShoppingCart, Check, ShieldCheck, Sparkles } from "lucide-react";
import { RETAILERS, BOOK_INFO } from "@/data/bookData";

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BuyModal({ isOpen, onClose }: BuyModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<string>("All");

  if (!isOpen) return null;

  const formats = ["All", "Hardcover", "Paperback", "Kindle / eBook", "Audible"];

  const filteredRetailers = selectedFormat === "All"
    ? RETAILERS
    : RETAILERS.filter((r) =>
        r.formats.some((f) =>
          f.toLowerCase().includes(selectedFormat.toLowerCase().split(" ")[0])
        )
      );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-void-900/95 p-6 md:p-8 shadow-2xl shadow-cyan-500/10 text-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient background glow inside modal */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>OFFICIAL RETAIL DISPATCH</span>
            </div>
            <h2 id="modal-title" className="mt-1 text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              Acquire <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">{BOOK_INFO.title}</span>
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Select your preferred bookseller. Dispatched directly through official literary distributors.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Format Selector Pills */}
        <div className="py-4 border-b border-slate-800/80">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Filter by Edition:
          </p>
          <div className="flex flex-wrap gap-2">
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`text-xs px-3 py-1.5 rounded-full transition-all border ${
                  selectedFormat === fmt
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20 font-medium"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Retailers List */}
        <div className="overflow-y-auto py-4 space-y-3 flex-1 pr-1">
          {filteredRetailers.map((retailer) => (
            <div
              key={retailer.id}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-200 gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {retailer.name}
                  </span>
                  {retailer.featured && (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      Popular
                    </span>
                  )}
                  <span className="text-xs text-slate-400">
                    • {retailer.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">{retailer.priceHint}</span>
                  <span>•</span>
                  <span>{retailer.formats.join(", ")}</span>
                </div>
              </div>

              <a
                href={retailer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 shrink-0"
              >
                <span>Buy on {retailer.name}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Notice & Disclaimer footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>Direct link to verified sellers. No on-site transactions.</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors"
          >
            Return to site
          </button>
        </div>
      </div>
    </div>
  );
}
