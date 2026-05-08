import React from "react";

const features = [
  { icon: "🌾", title: "Agricultural Waste",  desc: "Sourced entirely from farms and mills — no deforestation involved" },
  { icon: "♻️", title: "Zero Waste Process",  desc: "100% of raw material converted into usable biomass fuel" },
  { icon: "🔬", title: "Lab Certified",        desc: "ISO 17225 & BIS certified, tested for moisture & ash per batch" },
  { icon: "🚛", title: "Pan-India Delivery",  desc: "Bulk logistics to 28 states with just-in-time scheduling" },
];

export default function FeaturesSection() {
  return (
    <section
      id="about-section"
      className="bg-[#f0ece3] py-24 px-12"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
    >
      {/* Left copy */}
      <div className="reveal">
        <div className="flex items-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#3e7a42] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#3e7a42] before:rounded-sm">
          Who We Are
        </div>
        <h2
          className="leading-[1.12] mb-5 text-[#1c3a1e]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,4vw,56px)" }}
        >
          Turning Agricultural Waste
          <br />
          into <em className="text-[#c4763a] italic">Clean Power</em>
        </h2>
        <p className="text-[17px] text-[#5a7a5c] leading-[1.8] max-w-[560px] mb-8">
          BioFuel Co. transforms rice husk, sugarcane bagasse, sawdust, and agri-residues into high-density biomass
          pellets and briquettes — delivering energy security with zero net carbon emissions.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-white rounded-[18px] px-6 py-7 border border-[#3e7a42]/10 cursor-default transition-all duration-[400ms] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(28,58,30,0.1)]"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="text-[28px] mb-3">{f.icon}</div>
              <div
                className="text-[17px] font-semibold mb-2 text-[#1c3a1e]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {f.title}
              </div>
              <div className="text-[13px] text-[#5a7a5c] leading-[1.65]">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="reveal" style={{ position: "relative", height: "480px", borderRadius: "28px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
          alt="Biomass processing facility"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top,rgba(15,31,16,.7) 0%,transparent 50%)" }}
        />
        <div
          className="absolute bottom-7 left-7 border border-white/12 rounded-[16px] p-[18px]"
          style={{ background: "rgba(15,31,16,.85)", backdropFilter: "blur(12px)", color: "#f7f2e8" }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", color: "#e8a455" }}>12+</div>
          <div style={{ fontSize: "12px", color: "#a8c5ab", marginTop: "2px" }}>Years of sustainable energy</div>
        </div>
      </div>
    </section>
  );
}