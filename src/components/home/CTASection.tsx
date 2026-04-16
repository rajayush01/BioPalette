import React from "react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#1a3a1a] py-[120px] px-12 text-center">
      {/* Orbs */}
      <div className="absolute rounded-full blur-[80px] opacity-15 pointer-events-none w-[600px] h-[600px] bg-[#4a7c59] -top-[30%] -left-[10%]" />
      <div className="absolute rounded-full blur-[80px] opacity-15 pointer-events-none w-[400px] h-[400px] bg-[#a0653a] -bottom-[20%] right-[5%]" />

      <div className="relative z-10 reveal">
        <div className="flex items-center justify-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#c8dbc0] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#c8dbc0] before:rounded-sm after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#c8dbc0] after:rounded-sm">
          Get Started
        </div>
        <h2
          className="text-[clamp(34px,4vw,54px)] text-[#f5f0e8] leading-[1.15] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Design
          <br />
          with{" "}
          <em className="italic text-[#d4b896]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Living Color?
          </em>
        </h2>
        <p className="text-[#f5f0e8]/65 text-[18px] max-w-[500px] mx-auto mb-10 leading-[1.7]">
          Join thousands of designers who build with palettes drawn directly from nature's own pigment library.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-[#d4b896] text-[#1a3a1a] border-none px-9 py-4 rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(212,184,150,0.5)] hover:bg-[#f5f0e8]">
            Start for Free
          </button>
          <button className="bg-transparent text-[#f5f0e8] border border-white/30 px-9 py-4 rounded-full text-[15px] font-normal cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/60">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}