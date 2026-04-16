import React from "react";
import { steps } from "@/data";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 px-12"
      style={{ background: "linear-gradient(160deg, #1a3a1a 0%, #2d5a27 100%)" }}
    >
      {/* Header */}
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#c8dbc0] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#c8dbc0] before:rounded-sm after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#c8dbc0] after:rounded-sm">
          Our Method
        </div>
        <h2
          className="text-[clamp(34px,4vw,54px)] text-[#f5f0e8] leading-[1.15] mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          From Leaf to Pixel
        </h2>
        <p className="text-[17px] text-[#f5f0e8]/70 leading-[1.7] max-w-[560px] mx-auto">
          A rigorous five-stage pipeline ensures every digital color is a true representation of its living biological
          source.
        </p>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-0 mt-[72px]">
        {/* Connector line */}
        <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/15 z-0 hidden lg:block" />

        {steps.map((step, i) => (
          <div
            key={i}
            className="relative z-10 text-center px-6 reveal group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mx-auto mb-6 text-[24px] font-semibold text-[#d4b896] transition-all duration-[400ms] group-hover:bg-[#4a7c59] group-hover:border-[#87a878] group-hover:scale-110 group-hover:shadow-[0_0_0_10px_rgba(74,124,89,0.2)]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {step.num}
            </div>
            <div className="text-[16px] font-semibold text-[#f5f0e8] mb-2.5">{step.title}</div>
            <div className="text-[14px] text-[#f5f0e8]/60 leading-[1.6]">{step.desc}</div>
          </div>
        ))}
      </div>

      {/* Animated botanical */}
      <div className="text-center mt-20 opacity-60">
        <svg width="320" height="120" viewBox="0 0 320 120" style={{ animation: "float 5s ease-in-out infinite" }}>
          <g transform="translate(160,100)">
            <line x1="0" y1="0" x2="0" y2="-80" stroke="#87a878" strokeWidth="3" strokeLinecap="round" />
            {[-60, -30, 0, 30, 60].map((x, i) => (
              <g
                key={i}
                transform={`translate(${x * 0.6}, ${-20 - i * 8})`}
                style={{
                  transformOrigin: "0px 0px",
                  animation: `sway 4s ${i * 0.25}s ease-in-out infinite`,
                }}
              >
                <ellipse
                  cx="0"
                  cy="-14"
                  rx="20"
                  ry="12"
                  fill={["#4a7c59", "#87a878", "#b5c4a1", "#87a878", "#4a7c59"][i]}
                  opacity="0.85"
                  transform={`rotate(${[-40, -20, 0, 20, 40][i]})`}
                />
              </g>
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
}