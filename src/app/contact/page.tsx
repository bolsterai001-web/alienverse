"use client";

import React, { useState } from "react";
import { 
  Radio, 
  Mail, 
  MapPin, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck 
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { FAQS } from "@/data/bookData";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const directContacts = [
    {
      role: "Literary Representation",
      name: "Solstice Literary Agency",
      agent: "Marcus Vance-Graves, Senior Partner",
      email: "rights@solsticeliterary.com",
      focus: "Translation, Film & Television Rights",
    },
    {
      role: "Publisher & Publicity",
      name: "Celestial Press Public Relations",
      agent: "Maya Lindqvist, Publicity Lead",
      email: "press@celestialpressbooks.com",
      focus: "Review Copies, Press Releases, Media Enquiries",
    },
    {
      role: "Keynote & Academic Speaking",
      name: "Galactic Horizons Speakers Bureau",
      agent: "Booking Directorate",
      email: "speaking@eliasvance.com",
      focus: "Conferences, Universities, SETI Panels",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* 1. Header Banner */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Radio className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span>SUB-SPACE FREQUENCY RELAY // OPEN CHANNEL</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Contact & Inquiries
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Establish contact with author Elias Vance, his literary management team, or Celestial Press for interviews, book clubs, and media requests.
        </p>
      </section>

      {/* 2. Contact Form & Representation Cards Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Contact Form Terminal (7 Cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right: Agency & Press Direct Contacts (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Direct Representation</h3>
            <p className="text-xs text-slate-400">
              For urgent professional inquiries, please reach out to the appropriate contact directly.
            </p>
          </div>

          <div className="space-y-4">
            {directContacts.map((contact, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-void-900/70 border border-slate-800 space-y-2.5 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold uppercase">{contact.role}</span>
                  <span className="text-slate-400">VERIFIED</span>
                </div>
                <h4 className="font-semibold text-white text-base">{contact.name}</h4>
                <p className="text-xs text-slate-300">{contact.agent}</p>
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1.5"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>{contact.email}</span>
                  </a>
                  <span className="text-[11px] text-slate-400">{contact.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Location / Observatory Note */}
          <div className="p-5 rounded-2xl bg-void-950 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              Mailing correspondence for Elias Vance is handled through Celestial Press, 450 Starfall Blvd, Suite 900, Seattle WA.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>COMMONLY DECRYPTED QUESTIONS</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-400">
            Everything you need to know about the series, publication formats, and upcoming work.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-void-900/60 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-900/50 transition-colors"
                >
                  <span className="font-semibold text-white text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-900 text-cyan-400 shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
