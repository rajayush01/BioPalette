import React from "react";
import { palettes } from "@/data";

export default function PaletteSection() {
  return (
    <section id="palettes" className="bg-[#e8ede2] py-24 px-12">
      <div className="reveal">
        <div className="flex items-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#4a7c59] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#4a7c59] before:rounded-sm">
          Curated Collections
        </div>
        <h2
          className="text-[clamp(34px,4vw,54px)] leading-[1.15] mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Living Palette
          <br />
          Libraries
        </h2>
        <p className="text-[17px] text-[#5a6e55] leading-[1.7] max-w-[560px]">
          Six signature collections drawn from the most chromatically rich ecosystems on the planet — each with full
          professional color references.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 mt-14">
        {palettes.map((palette, i) => (
          <div
            key={i}
            className="rounded-[20px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] cursor-pointer reveal transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2.5 hover:scale-[1.02] hover:shadow-[0_20px_48px_rgba(0,0,0,0.15)]"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Swatch */}
            <div
              className="h-[200px] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-black/25"
              style={{ background: palette.swatchBg }}
            >
              {/* Ripple ring */}
              <div
                className="absolute top-5 left-5 w-[50px] h-[50px] rounded-full border-2 border-white/25"
                style={{ animation: `ripple 3s ${i * 0.4}s ease-out infinite` }}
              />
              {/* Accent circle */}
              <div
                className="absolute bottom-5 right-5 z-10 w-10 h-10 rounded-full border-[3px] border-white/60"
                style={{ background: palette.accent, animation: "pulse 3s infinite" }}
              />
            </div>

            {/* Info */}
            <div className="bg-white px-5 py-5">
              <div className="text-[18px] font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {palette.name}
              </div>
              <div className="text-[13px] text-[#7a8c75] leading-[1.5]">{palette.desc}</div>
              <div className="flex gap-2 mt-3.5 flex-wrap">
                {palette.hexes.map((h, j) => (
                  <span
                    key={j}
                    className="text-[11px] px-2.5 py-1 rounded-full font-medium tracking-wide border border-black/10"
                    style={{ background: h.bg, color: h.fg }}
                  >
                    {h.hex}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}