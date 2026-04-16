import React from "react";
import { palettes } from "@/data";

export default function PaletteSection() {
  return (
    <section id="palettes" className="bg-[#f5f0e8] py-24 px-12">
      {/* Header */}
      <div className="reveal">
        <div className="flex items-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#4a7c59] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#4a7c59] before:rounded-sm">
          Curated Collections
        </div>
        <h2
          className="text-[clamp(30px,4vw,48px)] leading-[1.15] mb-4 text-[#1a3a1a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Living Palette
          <br />
          Libraries
        </h2>
        <p className="text-[16px] text-[#5a6e55] leading-[1.7] max-w-[520px] mb-12">
          Six signature collections drawn from the most chromatically rich ecosystems on the planet — each with full
          professional color references.
        </p>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {palettes.map((palette, i) => (
          <div
            key={i}
            className="rounded-[20px] overflow-hidden bg-white shadow-[0_2px_16px_rgba(26,58,26,0.07)] cursor-pointer reveal transition-all duration-[350ms] ease-out hover:-translate-y-[6px] hover:shadow-[0_20px_48px_rgba(26,58,26,0.14)]"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Swatch */}
            <div
              className="h-[160px] relative flex items-end p-[14px]"
              style={{ background: palette.swatchBg }}
            >
              {/* Ecosystem badge */}
              <span className="absolute top-[14px] right-[14px] bg-white/20 border border-white/35 text-white text-[10px] tracking-[1.5px] uppercase px-[10px] py-1 rounded-full backdrop-blur-sm">
                {palette.biome ?? palette.name}
              </span>

              {/* Colour dots */}
              <div className="flex gap-1.5">
                {palette.hexes.map((h, j) => (
                  <div
                    key={j}
                    className="w-7 h-7 rounded-full border-2 border-white/60"
                    style={{ background: h.bg }}
                  />
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="px-5 py-[18px]">
              <div
                className="text-[17px] text-[#1a3a1a] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {palette.name}
              </div>
              <div className="text-[12px] text-[#7a8c75] leading-[1.55] mb-3.5">{palette.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {palette.hexes.map((h, j) => (
                  <span
                    key={j}
                    className="text-[10px] px-[9px] py-[3px] rounded-full font-medium tracking-[0.5px] border border-black/[0.09]"
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