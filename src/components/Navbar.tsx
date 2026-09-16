"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Radio } from "lucide-react";
import BuyModal from "./BuyModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About the Book", href: "/about" },
    { name: "Author", href: "/author" },
    { name: "Sample Chapter", href: "/sample-chapter" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3"
            : "bg-[#ebf1ea]/75 backdrop-blur-md border-b border-black/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Alien Verse Home"
          >
            {/* Fineed-inspired Black & Lime Logo Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-slate-900 group-hover:border-[#D4F639] group-hover:shadow-lg group-hover:shadow-[#D4F639]/30 transition-all duration-300">
              <div className="w-5 h-5 rounded-full border border-[#D4F639]/80 group-hover:scale-110 transition-transform flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#D4F639] animate-ping" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4F639] absolute" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-slate-950 group-hover:text-slate-800 transition-colors uppercase">
                ALIEN <span className="text-black bg-[#D4F639] px-1.5 py-0.5 rounded-md">VERSE</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase -mt-0.5 flex items-center gap-1 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4F639]" />
                ELIAS VANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? "text-slate-950 bg-[#D4F639]/35 border border-[#D4F639] shadow-sm font-bold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-black/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-slate-950 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Buy Now CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-xs tracking-wider uppercase shadow-md shadow-[#D4F639]/30 hover:shadow-[#D4F639]/50 transition-all duration-200 cursor-pointer active:scale-95 border border-[#c4e92d]"
            >
              <ShoppingBag className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>Buy Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-[#D4F639] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
            <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase px-3 py-1 flex items-center gap-1.5 font-bold">
              <Radio className="h-3 w-3 text-slate-900 animate-pulse" />
              <span>NAVIGATION FREQUENCY</span>
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#D4F639]/35 border border-[#D4F639] text-slate-950 font-bold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black text-[#D4F639]">
                        ACTIVE
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBuyModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#D4F639] hover:bg-[#c4e92d] text-slate-950 font-black text-sm uppercase tracking-wider shadow-md shadow-[#D4F639]/30"
              >
                <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
                <span>Buy External Edition</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Buy Modal */}
      <BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />
    </>
  );
}
