"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Current Threat Level", href: "#threat" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border-b border-white/20"
        : "bg-gradient-to-r from-slate-900/20 via-slate-800/10 to-slate-900/20 backdrop-blur-xl border-b border-white/10"
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3 text-lg font-semibold text-white">
          <div className="relative h-16 w-16">
            <Image src="/logo.png" alt="Improvise Solutions logo" fill className="object-contain" priority />
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full bg-emerald-500/20 backdrop-blur-md px-3 py-1 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-400/50 shadow-lg shadow-emerald-500/20 md:flex">
            <span>Current Threat Level:</span>
            <span aria-live="polite">SUBSTANTIAL</span>
          </div>
          <button
            className="md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                />
                <span className={`block h-0.5 w-6 bg-white ${isOpen ? "opacity-0" : ""}`} />
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                />
              </div>
            </div>
          </button>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 space-y-2 rounded-2xl bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/60 p-4 ring-1 ring-white/20 backdrop-blur-2xl shadow-2xl">
            <div className="flex items-center justify-between rounded-xl bg-emerald-500/20 backdrop-blur-md px-4 py-3 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-400/50 shadow-lg shadow-emerald-500/20">
              <span>Current Threat Level:</span>
              <span aria-live="polite">SUBSTANTIAL</span>
            </div>
            <div className="grid gap-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-gray-100 transition hover:bg-white/10 hover:backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
