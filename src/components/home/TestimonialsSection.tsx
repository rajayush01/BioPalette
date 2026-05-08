import React from "react";

const testimonials = [
  {
    stars: 5,
    text: "We switched our 3 boilers to BioFuel Co. pine pellets. Consistent quality, on-time delivery, and our fuel cost dropped 34% compared to coal.",
    emoji: "🏭",
    name: "Rajesh Mehta",
    role: "Plant Manager, Sunrise Textiles, Surat",
  },
  {
    stars: 5,
    text: "Rice husk briquettes for our brick kiln operations have been a game changer. Low ash, no smoke — workers are happier and production is up.",
    emoji: "🧱",
    name: "Supriya Patil",
    role: "Operations Head, Patil Brick Industries, Pune",
  },
  {
    stars: 4,
    text: "Bulk orders delivered in 48 hours to our Ahmedabad facility. The bamboo pellets perform at 5100 kcal — exactly as spec'd. Very impressed.",
    emoji: "⚗️",
    name: "Dr. Anand Kumar",
    role: "Energy Manager, Zydus Pharma, Ahmedabad",
  },
  {
    stars: 5,
    text: "Best biomass supplier we've worked with. Proper documentation, lab reports with every batch, and a team that actually picks up the phone.",
    emoji: "🌿",
    name: "Meena Rajan",
    role: "Sustainability Lead, Green Foods Co., Chennai",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#ede4d3] py-24 px-12">
      <div className="text-center reveal mb-12 max-w-[520px] mx-auto">
        <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#3e7a42] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#3e7a42] before:rounded-sm after:content-[''] after:block after:w-7 after:h-[1.5px] after:bg-[#3e7a42] after:rounded-sm">
          What Clients Say
        </div>
        <h2
          className="leading-[1.15] text-[#1c3a1e]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)" }}
        >
          Trusted by Industries
          <br />
          Across India
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-[18px] max-sm:grid-cols-1">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-[22px] p-7 border border-[#3e7a42]/10 transition-all duration-[350ms] reveal hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,58,30,0.10)]"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="text-[#c4763a] text-[14px] mb-3">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
            <p className="text-[14px] text-[#4a5e45] leading-[1.8] italic mb-[18px]">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-[#e8ede2] flex items-center justify-center text-[18px] shrink-0">
                {t.emoji}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#1c3a1e]">{t.name}</div>
                <div className="text-[12px] text-[#7a8c75]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}