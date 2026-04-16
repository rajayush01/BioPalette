import React from "react";
import { testimonials } from "@/data";

export default function TestimonialsSection() {
  return (
    <section id="about" className="bg-[#f5f0e8] py-24 px-12">
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#4a7c59] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#4a7c59] before:rounded-sm after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#4a7c59] after:rounded-sm">
          Community
        </div>
        <h2
          className="text-[clamp(34px,4vw,54px)] leading-[1.15]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          From Designers
          <br />
          Who Use It Daily
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 mt-16">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] p-8 border border-[#4a7c59]/10 transition-all duration-[400ms] reveal hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(74,124,89,0.1)]"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="text-[#a0653a] text-[16px] mb-4">{"★".repeat(t.stars)}</div>
            <p className="text-[15px] text-[#4a5e45] leading-[1.75] italic mb-5">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#e8ede2] flex items-center justify-center text-[18px]">
                {t.emoji}
              </div>
              <div>
                <div className="text-[14px] font-semibold">{t.name}</div>
                <div className="text-[12px] text-[#7a8c75]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}