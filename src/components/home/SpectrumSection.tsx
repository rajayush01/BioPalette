import React from "react";
import { spectrumColors } from "@/data";

export default function SpectrumSection() {
  return (
    <section
      className="relative overflow-hidden py-24 px-12 text-center bg-[#1a3a1a]"
    >
      {/* Background orbs */}
      <div className="absolute rounded-full blur-[80px] opacity-15 pointer-events-none w-[500px] h-[500px] bg-[#4a7c59] -top-[20%] -left-[10%]" />
      <div className="absolute rounded-full blur-[80px] opacity-15 pointer-events-none w-[400px] h-[400px] bg-[#a0653a] -bottom-[15%] -right-[5%]" />

      <div className="relative z-10 reveal">
        <div className="flex items-center justify-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#c8dbc0] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#c8dbc0] before:rounded-sm after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#c8dbc0] after:rounded-sm">
          The Bio Spectrum
        </div>
        <h2
          className="text-[clamp(34px,4vw,54px)] text-[#f5f0e8] leading-[1.15] mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nature's Chromatic Range
        </h2>

        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          className="mx-auto"
          style={{
            animation: "float 5s ease-in-out infinite",
            filter: "drop-shadow(0 20px 60px rgba(74,124,89,0.4))",
          }}
        >
          {spectrumColors.map((color, i) => {
            const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
            const r = 120;
            const cx = 160;
            const cy = 160;
            const nextAngle = angle + (2 * Math.PI) / 12;
            const outerD = [
              `M${cx + (r - 40) * Math.cos(angle)},${cy + (r - 40) * Math.sin(angle)}`,
              `L${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`,
              `A${r},${r},0,0,1,${cx + r * Math.cos(nextAngle)},${cy + r * Math.sin(nextAngle)}`,
              `L${cx + (r - 40) * Math.cos(nextAngle)},${cy + (r - 40) * Math.sin(nextAngle)}`,
              `A${r - 40},${r - 40},0,0,0,${cx + (r - 40) * Math.cos(angle)},${cy + (r - 40) * Math.sin(angle)}`,
              "Z",
            ].join(" ");

            return (
              <path
                key={i}
                d={outerD}
                fill={color}
                opacity="0.92"
                className="transition-all duration-300 cursor-pointer hover:opacity-100"
                style={{ transformOrigin: "160px 160px" }}
              />
            );
          })}
          <circle cx="160" cy="160" r="78" fill="#1a3a1a" />
          <text
            x="160"
            y="153"
            textAnchor="middle"
            fill="#d4b896"
            fontSize="13"
            fontFamily="'Playfair Display', serif"
            fontWeight="600"
          >
            Bio
          </text>
          <text
            x="160"
            y="172"
            textAnchor="middle"
            fill="#b5c4a1"
            fontSize="11"
            fontFamily="Inter, sans-serif"
          >
            Palette
          </text>
        </svg>

        <p className="text-[14px] text-[#f5f0e8]/55 mt-6 max-w-[360px] mx-auto">
          12-hue biochromatic spectrum spanning forest, earth, mist, and mineral tones
        </p>
      </div>
    </section>
  );
}