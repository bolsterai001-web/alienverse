"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Sparkles, Radio } from "lucide-react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
            ? "bg-void-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/50 py-3"
            : "bg-void-950/40 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Alien Verse Home"
          >
            {/* Sci-Fi Orbital Ring Logo Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-void-900 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-5 h-5 rounded-full border border-cyan-400/80 group-hover:scale-110 transition-transform flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <div className="w-1.5 h-1.5 rounded-full bg-white absolute" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white group-hover:text-cyan-300 transition-colors uppercase">
                ALIEN <span className="text-cyan-400">VERSE</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1 flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-emerald-400" />
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
                  className={`px-3 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 shadow-sm shadow-cyan-500/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Buy Now CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBuyModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Buy Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-cyan-500/20 bg-void-950/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
            <div className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase px-3 py-1 flex items-center gap-1.5">
              <Radio className="h-3 w-3 animate-pulse" />
              <span>NAVIGATION FREQUENCY</span>
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-semibold"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    {isActive && <span className="text-xs font-mono text-cyan-400">ACTIVE</span>}
                  </div>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBuyModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/20"
              >
                <ShoppingBag className="h-4 w-4" />
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
