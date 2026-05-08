"use client";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  onNavigate: (page: "home" | "products" | "contact") => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 border-b border-white/[0.08] transition-all duration-400 ${
        scrolled ? "py-3.5 bg-[#0f1f10]/92 backdrop-blur-xl" : "py-5 bg-[#0f1f10]/65 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <button onClick={() => onNavigate("home")} className="flex items-center gap-2.5 no-underline bg-transparent border-none cursor-pointer">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <ellipse cx="18" cy="18" rx="13" ry="16" fill="#3e7a42" opacity=".9" />
          <path d="M18 5 Q25 13 18 23 Q11 13 18 5Z" fill="#a8c5ab" />
          <line x1="18" y1="23" x2="18" y2="33" stroke="#2d5c30" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="12" cy="20" rx="6" ry="4" fill="#6b9a6e" opacity=".7" transform="rotate(-25 12 20)" />
          <ellipse cx="24" cy="20" rx="6" ry="4" fill="#6b9a6e" opacity=".7" transform="rotate(25 24 20)" />
        </svg>
        <span className="text-[#f7f2e8] text-[22px] font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          BioFuel Co.
        </span>
      </button>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8">
        {[
          { label: "About", action: () => scrollTo("about-section") },
          { label: "Products", action: () => scrollTo("products-section") },
          { label: "Process", action: () => scrollTo("process-section") },
          { label: "Shop", action: () => onNavigate("products") },
        ].map(({ label, action }) => (
          <button
            key={label}
            onClick={action}
            className="text-[#f7f2e8]/70 text-sm font-normal tracking-wide no-underline bg-transparent border-none cursor-pointer hover:text-[#e8a455] transition-colors duration-300"
          >
            {label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => onNavigate("contact")}
        className="bg-[#c4763a] text-white border-none px-5 py-2.5 rounded-full text-[13px] font-medium cursor-pointer tracking-wide transition-all duration-300 hover:bg-[#e8a455] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,118,58,0.4)]"
      >
        Get a Quote
      </button>
    </nav>
  );
}