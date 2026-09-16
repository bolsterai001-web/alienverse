"use client";

import React, { useState } from "react";
import { X, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-2xl text-slate-900 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fineed ambient background glows */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#D4F639]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-orange-200/25 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5 text-slate-900" />
              <span>OFFICIAL RETAIL DISPATCH</span>
            </div>
            <h2 id="modal-title" className="text-2xl font-black tracking-tight text-slate-950 flex items-center gap-2">
              Acquire <span className="bg-[#D4F639] px-2 py-0.5 rounded-lg text-black">{BOOK_INFO.title}</span>
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Select your preferred bookseller. Dispatched directly through official literary distributors.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-950 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Format Selector Pills */}
        <div className="py-4 border-b border-slate-100">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
            Filter by Edition:
          </p>
          <div className="flex flex-wrap gap-2">
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all border ${
                  selectedFormat === fmt
                    ? "bg-[#D4F639] border-[#c4e92d] text-slate-950 font-black shadow-sm"
                    : "bg-slate-100 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 font-semibold"
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
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#D4F639] hover:bg-white hover:shadow-md transition-all duration-200 gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-extrabold text-slate-950 text-base">
                    {retailer.name}
                  </span>
                  {retailer.featured && (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-[#D4F639] text-black font-black border border-[#c4e92d]">
                      Popular
                    </span>
                  )}
                  <span className="text-xs text-slate-500">
                    • {retailer.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-slate-800 font-bold">{retailer.priceHint}</span>
                  <span>•</span>
                  <span>{retailer.formats.join(", ")}</span>
                </div>
              </div>

              <a
                href={retailer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs tracking-wide transition-all shadow-sm hover:shadow-md shrink-0"
              >
                <span>Buy on {retailer.name}</span>
                <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
              </a>
            </div>
          ))}
        </div>

        {/* Notice & Disclaimer footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-slate-900 shrink-0" />
            <span>Direct link to verified sellers. No on-site transactions.</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-950 underline underline-offset-2 transition-colors font-medium"
          >
            Return to site
          </button>
        </div>
      </div>
    </div>
  );
}
