import React from "react";

const steps = [
  { num: "01", title: "Raw Material Procurement", desc: "Farm & mill waste collected from certified agricultural partners" },
  { num: "02", title: "Drying & Sizing",           desc: "Moisture reduced to ≤10% via industrial rotary dryers" },
  { num: "03", title: "Compression",               desc: "High-pressure pelleting/briquetting at 1200–2000 bar" },
  { num: "04", title: "QA Lab Testing",             desc: "Calorific value, ash, moisture & density certified per batch" },
  { num: "05", title: "Dispatch & Delivery",        desc: "Packed in moisture-proof bags, shipped pan-India" },
];

export default function ProcessSection() {
  return (
    <section
      id="process-section"
      className="py-24 px-12"
      style={{ background: "linear-gradient(160deg,#1c3a1e 0%,#2d5c30 100%)" }}
    >
      {/* Header */}
      <div className="text-center reveal max-w-[580px] mx-auto mb-[70px]">
        <div className="flex items-center justify-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#c8dfca] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#c8dfca] before:rounded-sm after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#c8dfca] after:rounded-sm">
          Our Method
        </div>
        <h2
          className="text-[#f7f2e8] leading-[1.15] mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px,4vw,54px)" }}
        >
          From Field{" "}
          <em className="italic text-[#e8a455]">to Furnace</em>
        </h2>
        <p className="text-[17px] text-[#f7f2e8]/65 leading-[1.8]">
          A five-stage quality pipeline ensuring every pellet and briquette performs exactly as specified.
        </p>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-0 mt-[72px]">
        {/* Connector */}
        <div className="absolute top-9 left-[10%] right-[10%] h-[2px] bg-white/12 z-0 hidden lg:block" />

        {steps.map((s, i) => (
          <div
            key={i}
            className="relative z-10 text-center px-6 reveal group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div
              className="w-[72px] h-[72px] rounded-full bg-white/10 border-2 border-white/25 flex items-center justify-center mx-auto mb-6 font-semibold text-[#e8a455] text-[22px] transition-all duration-[400ms] group-hover:bg-[#3e7a42] group-hover:border-[#a8c5ab] group-hover:scale-110 group-hover:shadow-[0_0_0_12px_rgba(62,122,66,0.18)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {s.num}
            </div>
            <div className="text-[15px] font-semibold text-[#f7f2e8] mb-2.5">{s.title}</div>
            <div className="text-[13px] text-[#f7f2e8]/55 leading-[1.6]">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Decorative botanical */}
      <div className="text-center mt-20 opacity-50" style={{ animation: "float 5s ease-in-out infinite" }}>
        <svg width="300" height="110" viewBox="0 0 300 110">
          <g transform="translate(150,95)">
            <line x1="0" y1="0" x2="0" y2="-75" stroke="#87a878" strokeWidth="3" strokeLinecap="round" />
            {[-60, -30, 0, 30, 60].map((x, i) => (
              <g
                key={i}
                transform={`translate(${x * 0.6},${-18 - i * 7})`}
                style={{ transformOrigin: "0px 0px", animation: `sway 4s ${i * 0.25}s ease-in-out infinite` }}
              >
                <ellipse
                  cx="0" cy="-13" rx="19" ry="11"
                  fill={["#4a7c59","#87a878","#b5c4a1","#87a878","#4a7c59"][i]}
                  opacity="0.85"
                  transform={`rotate(${[-40,-20,0,20,40][i]})`}
                />
              </g>
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
}