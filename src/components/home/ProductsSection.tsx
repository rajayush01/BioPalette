import React from "react";
import { products, Product } from "@/data/product";

interface ProductsSectionProps {
  onOpenProduct: (id: string) => void;
  onNavigate: (page: "home" | "products" | "contact") => void;
}

export default function ProductsSection({ onOpenProduct, onNavigate }: ProductsSectionProps) {
  return (
    <section id="products-section" className="bg-[#f7f2e8] py-24 px-12">
      {/* Header */}
      <div className="reveal text-center max-w-[600px] mx-auto mb-14">
        <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#3e7a42] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#3e7a42] before:rounded-sm after:content-[''] after:block after:w-7 after:h-[1.5px] after:bg-[#3e7a42] after:rounded-sm">
          Our Products
        </div>
        <h2
          className="leading-[1.15] mb-4 text-[#1c3a1e]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)" }}
        >
          High-Performance
          <br />
          Biomass Fuel Range
        </h2>
        <p className="text-[16px] text-[#5a7a5c] leading-[1.8]">
          From domestic heating to industrial boilers — every product engineered for peak calorific output.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {products.map((p, i) => (
          <div
            key={p.id}
            className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(28,58,30,0.07)] cursor-pointer reveal transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(28,58,30,0.16)]"
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => onOpenProduct(p.id)}
          >
            {/* Image */}
            <div className="h-[220px] relative overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.08]"
              />
              {p.badge && (
                <span
                  className="absolute top-3.5 right-3.5 text-white text-[10px] tracking-[1.5px] uppercase px-3 py-1 rounded-full"
                  style={{ background: p.badgeColor ?? "#c4763a" }}
                >
                  {p.badge}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              <div
                className="text-[21px] font-semibold mb-2 text-[#1c3a1e]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {p.name}
              </div>
              <p className="text-[13px] text-[#5a7a5c] leading-[1.65] mb-4">{p.shortDesc}</p>

              {/* Spec tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-[#ede4d3] text-[#1c3a1e] text-[11px] px-2.5 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1c3a1e]/[0.08]">
                <div
                  className="text-[25px] text-[#c4763a] font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {p.price}{" "}
                  <span className="text-[13px] text-[#5a7a5c] font-normal" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    / tonne
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenProduct(p.id); }}
                    className="bg-transparent text-[#3e7a42] border border-[#3e7a42]/30 px-4 py-2 rounded-full text-[12px] cursor-pointer transition-all duration-300 hover:border-[#3e7a42] hover:bg-[#3e7a42]/[0.06]"
                  >
                    Details
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onNavigate("contact"); }}
                    className="bg-[#1c3a1e] text-white border-none px-4 py-2 rounded-full text-[12px] font-semibold cursor-pointer transition-all duration-300 hover:bg-[#3e7a42] hover:-translate-y-0.5"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 reveal">
        <button
          onClick={() => onNavigate("contact")}
          className="bg-[#c4763a] text-white border-none px-9 py-4 rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8a455] hover:shadow-[0_14px_36px_rgba(196,118,58,0.45)]"
        >
          Request Custom Order or Bulk Pricing →
        </button>
      </div>
    </section>
  );
}