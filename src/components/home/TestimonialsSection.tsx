import React from "react";
import { testimonials } from "@/data";

export default function TestimonialsSection() {
  // Show only first 4
  const four = testimonials.slice(0, 4);

  return (
    <section id="about" className="bg-[#f5f0e8] py-24 px-12">
      <div className="text-center reveal mb-12">
        <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#4a7c59] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#4a7c59] before:rounded-sm after:content-[''] after:block after:w-7 after:h-[1.5px] after:bg-[#4a7c59] after:rounded-sm">
          Community
        </div>
        <h2
          className="text-[clamp(28px,3.5vw,44px)] leading-[1.15] text-[#1a3a1a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          From Designers
          <br />
          Who Use It Daily
        </h2>
      </div>

      {/* 2-column grid, 4 cards */}
      <div className="grid grid-cols-2 gap-[18px] max-sm:grid-cols-1">
        {four.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] p-7 border border-[#4a7c59]/10 transition-all duration-[350ms] reveal hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(74,124,89,0.1)]"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="text-[#a0653a] text-[14px] mb-3">{"★".repeat(t.stars)}</div>
            <p className="text-[14px] text-[#4a5e45] leading-[1.75] italic mb-[18px]">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-[#e8ede2] flex items-center justify-center text-[18px] shrink-0">
                {t.emoji}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#1a3a1a]">{t.name}</div>
                <div className="text-[12px] text-[#7a8c75]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}