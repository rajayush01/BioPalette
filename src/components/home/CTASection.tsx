import React from "react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#e8ede2] py-[100px] px-12 text-center">
      {/* Soft orbs */}
      <div className="absolute rounded-full pointer-events-none w-[420px] h-[420px] bg-[#4a7c59]/[0.12] -top-[120px] -left-[80px]" />
      <div className="absolute rounded-full pointer-events-none w-[300px] h-[300px] bg-[#a0653a]/[0.10] -bottom-[80px] right-[40px]" />

      <div className="relative z-10 reveal">
        <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#4a7c59] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#4a7c59] before:rounded-sm after:content-[''] after:block after:w-7 after:h-[1.5px] after:bg-[#4a7c59] after:rounded-sm">
          Get Started
        </div>
        <h2
          className="text-[clamp(30px,4vw,50px)] text-[#1a3a1a] leading-[1.15] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Design
          <br />
          with{" "}
          <em className="italic text-[#a0653a]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Living Color?
          </em>
        </h2>
        <p className="text-[17px] text-[#4a5e45] max-w-[480px] mx-auto mb-9 leading-[1.7]">
          Join thousands of designers who build with palettes drawn directly from nature's own pigment library.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-[#4a7c59] text-white border-none px-9 py-[14px] rounded-full text-[14px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a3a1a] hover:shadow-[0_12px_30px_rgba(74,124,89,0.3)]">
            Start for Free
          </button>
          <button className="bg-transparent text-[#1a3a1a] border border-[#1a3a1a]/30 px-9 py-[14px] rounded-full text-[14px] cursor-pointer transition-all duration-300 hover:border-[#4a7c59] hover:bg-[#4a7c59]/[0.07]">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}