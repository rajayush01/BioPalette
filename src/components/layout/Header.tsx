import React from "react";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 backdrop-blur-md bg-[#1a3a1a]/55 border-b border-white/[0.08] transition-all">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <ellipse cx="14" cy="14" rx="10" ry="13" fill="#4a7c59" opacity="0.9" />
          <path d="M14 4 Q20 10 14 18 Q8 10 14 4Z" fill="#87a878" />
          <line x1="14" y1="18" x2="14" y2="26" stroke="#2d5a27" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span
          className="text-[#f5f0e8] text-[22px] font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bio Palette
        </span>
      </a>

      <div className="hidden md:flex gap-8">
        {["Palettes", "Process", "Gallery", "About"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#f5f0e8]/70 text-sm font-normal tracking-wide no-underline hover:text-[#d4b896] transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      <button className="bg-[#4a7c59] text-[#f5f0e8] border-none px-5 py-2.5 rounded-full text-[13px] font-medium cursor-pointer tracking-wide transition-all duration-300 hover:bg-[#87a878] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,124,89,0.4)]">
        Explore Library
      </button>
    </nav>
  );
}