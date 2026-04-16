import React from "react";
import { features } from "@/data";

export default function FeaturesSection() {
  return (
    <section className="bg-[#f5f0e8] py-24 px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div className="reveal">
          <div className="flex items-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#4a7c59] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#4a7c59] before:rounded-sm">
            Why Bio Palette
          </div>
          <h2
            className="text-[clamp(34px,4vw,54px)] leading-[1.15] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Color Science
            <br />
            Meets Living
            <br />
            Nature
          </h2>
          <p className="text-[17px] text-[#5a6e55] leading-[1.7] max-w-[560px]">
            Our system bridges field ecology and professional design — producing palettes with measurable biological
            authenticity.
          </p>
          <button className="mt-9 bg-[#4a7c59] text-white border-none px-9 py-4 rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(74,124,89,0.4)] hover:bg-[#87a878]">
            Download Free Starter Kit
          </button>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-2 gap-7">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-white rounded-[20px] px-8 py-9 border border-[#4a7c59]/12 cursor-default transition-all duration-[400ms] reveal hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(74,124,89,0.12)] before:content-[''] before:absolute before:-top-10 before:-right-10 before:w-[120px] before:h-[120px] before:rounded-full before:bg-[#e8ede2] before:opacity-0 before:transition-all before:duration-[400ms] hover:before:opacity-100 hover:before:scale-[2]"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div
                className="relative w-14 h-14 rounded-[14px] flex items-center justify-center text-[26px] mb-5"
                style={{ background: f.bg }}
              >
                {f.icon}
              </div>
              <div
                className="text-[19px] font-semibold mb-2.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {f.title}
              </div>
              <div className="text-[14px] text-[#6a7e65] leading-[1.7]">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}