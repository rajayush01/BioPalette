import React from "react";

interface CTASectionProps {
  onNavigate: (page: "home" | "products" | "contact" | "shop") => void;
}

export default function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 px-12 text-center bg-[#f0ece3]">
      {/* Soft orbs */}
      <div className="absolute rounded-full pointer-events-none w-[600px] h-[600px] bg-[#3e7a42]/[0.07] -top-[200px] -left-[100px]" />
      <div className="absolute rounded-full pointer-events-none w-[400px] h-[400px] bg-[#c4763a]/[0.07] -bottom-[100px] right-0" />

      <div className="relative z-10 reveal">
        <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#3e7a42] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#3e7a42] before:rounded-sm after:content-[''] after:block after:w-7 after:h-[1.5px] after:bg-[#3e7a42] after:rounded-sm">
          Get Started
        </div>

        <h2
          className="leading-[1.12] mb-5 text-[#1c3a1e]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px,5vw,60px)" }}
        >
          Ready to Switch to
          <br />
          <em className="italic text-[#c4763a]">Clean Biomass Energy?</em>
        </h2>

        <p className="text-[17px] text-[#5a7a5c] max-w-[480px] mx-auto mb-10 leading-[1.7]">
          Join 500+ industries that have reduced fuel costs and carbon footprint with our certified biomass solutions.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => onNavigate("contact")}
            className="bg-[#c4763a] text-white border-none px-9 py-[15px] rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8a455] hover:shadow-[0_14px_36px_rgba(196,118,58,0.45)]"
          >
            Contact Our Team
          </button>
          <button
            onClick={() => onNavigate("shop")}
            className="bg-transparent text-[#1c3a1e] border border-[#1c3a1e]/30 px-9 py-[15px] rounded-full text-[14px] cursor-pointer transition-all duration-300 hover:border-[#3e7a42] hover:bg-[#3e7a42]/[0.07]"
          >
            Browse All Products →
          </button>
        </div>
      </div>
    </section>
  );
}