"use client";

import React, { useState } from "react";
import { 
  Radio, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F639]/35 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold shadow-sm">
          <Radio className="h-3.5 w-3.5 text-slate-950 animate-pulse" />
          <span>SUB-SPACE FREQUENCY RELAY // OPEN CHANNEL</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight">
          Contact & Inquiries
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
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
            <h3 className="text-xl font-black text-slate-950">Direct Representation</h3>
            <p className="text-xs text-slate-500 font-medium">
              For urgent professional inquiries, please reach out to the appropriate contact directly.
            </p>
          </div>

          <div className="space-y-4">
            {directContacts.map((contact, i) => (
              <div
                key={i}
                className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-2.5 hover:border-[#D4F639] transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="bg-[#D4F639]/35 text-slate-950 px-2 py-0.5 rounded-md font-bold uppercase">{contact.role}</span>
                  <span className="text-slate-400 font-bold">VERIFIED</span>
                </div>
                <h4 className="font-extrabold text-slate-950 text-base">{contact.name}</h4>
                <p className="text-xs text-slate-600 font-medium">{contact.agent}</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-slate-950 hover:underline font-mono font-bold flex items-center gap-1.5"
                  >
                    <Mail className="h-3.5 w-3.5 stroke-[2.5]" />
                    <span>{contact.email}</span>
                  </a>
                  <span className="text-[11px] text-slate-500 font-medium">{contact.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Location / Observatory Note */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 text-xs text-slate-600">
            <MapPin className="h-4 w-4 text-slate-900 shrink-0 mt-0.5" />
            <p>
              Mailing correspondence for Elias Vance is handled through Celestial Press, 450 Starfall Blvd, Suite 900, Seattle WA.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F639]/30 border border-[#D4F639] text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5 text-slate-950" />
            <span>COMMONLY DECRYPTED QUESTIONS</span>
          </div>
          <h2 className="text-3xl font-black text-slate-950">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-600">
            Everything you need to know about the series, publication formats, and upcoming work.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-3xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-extrabold text-slate-950 text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-xl bg-[#D4F639] text-slate-950 shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4 stroke-[3]" /> : <ChevronDown className="h-4 w-4 stroke-[3]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
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
