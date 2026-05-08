"use client";
import React, { useState } from "react";
import { products, Product } from "@/data/product";

interface ProductPageProps {
  productId: string;
  onNavigate: (page: "home" | "products" | "contact" | "shop") => void;
}

export default function ProductPage({ productId, onNavigate }: ProductPageProps) {
  const product = products.find((p) => p.id === productId);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2e8]">
      <p className="text-[#5a7a5c]">Product not found.</p>
    </div>
  );

  const related = products.filter((p) => p.id !== productId).slice(0, 3);

  return (
    <div className="bg-[#f7f2e8] pt-[88px]">

      {/* Breadcrumb */}
      <div className="px-12 py-5 border-b border-[#1c3a1e]/[0.07]">
        <div className="flex items-center gap-2 text-[13px] text-[#5a7a5c]">
          <button onClick={() => onNavigate("home")} className="hover:text-[#3e7a42] transition-colors bg-transparent border-none cursor-pointer text-[#5a7a5c] font-inherit text-[13px]">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate("shop")} className="hover:text-[#3e7a42] transition-colors bg-transparent border-none cursor-pointer text-[#5a7a5c] font-inherit text-[13px]">Shop</button>
          <span>/</span>
          <span className="text-[#1c3a1e] font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main product layout */}
      <div
        className="px-12 py-12"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}
      >
        {/* Gallery */}
        <div style={{ position: "sticky", top: "108px" }}>
          {/* Main image */}
          <div className="rounded-[24px] overflow-hidden mb-4" style={{ height: "480px" }}>
            <img
              src={product.images[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className="rounded-[12px] overflow-hidden flex-shrink-0 transition-all duration-300 bg-transparent border-none p-0 cursor-pointer"
                style={{
                  width: "84px", height: "84px",
                  border: `2.5px solid ${i === activeImg ? "#3e7a42" : "transparent"}`,
                  boxShadow: i === activeImg ? "0 0 0 2px rgba(62,122,66,0.2)" : "none",
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          {/* Category tag */}
          <div className="flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-[#3e7a42] font-semibold mb-3 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-[#3e7a42] before:rounded-sm">
            {product.category}
          </div>

          <h1
            className="text-[#1c3a1e] leading-[1.08] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)" }}
          >
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span
              className="text-[#c4763a] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px" }}
            >
              {product.price}
            </span>
            <span className="text-[15px] text-[#5a7a5c]">/ tonne</span>
          </div>
          <p className="text-[13px] text-[#5a7a5c] mb-6">Min. order: {product.minOrder} · Bulk pricing available</p>

          {/* Description */}
          <p className="text-[16px] text-[#5a7a5c] leading-[1.8] mb-8 border-b border-[#1c3a1e]/[0.08] pb-8">
            {product.fullDesc}
          </p>

          {/* Specs table */}
          <table className="w-full mb-8">
            <tbody>
              {product.specs.map(([key, val]) => (
                <tr key={key} className="border-b border-[#1c3a1e]/[0.07]">
                  <td className="py-3 text-[14px] text-[#5a7a5c] w-[45%]">{key}</td>
                  <td className="py-3 text-[14px] font-semibold text-[#1c3a1e]">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Quantity */}
          <div className="flex items-center gap-5 mb-7">
            <span className="text-[14px] font-medium text-[#1c3a1e]">Quantity (tonnes)</span>
            <div className="flex items-center border border-[#1c3a1e]/20 rounded-full overflow-hidden">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 border-none bg-transparent text-xl cursor-pointer text-[#1c3a1e] hover:bg-[#ede4d3] transition-colors font-light"
              >
                −
              </button>
              <span className="w-12 text-center text-[15px] font-medium text-[#1c3a1e]">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 border-none bg-transparent text-xl cursor-pointer text-[#1c3a1e] hover:bg-[#ede4d3] transition-colors font-light"
              >
                +
              </button>
            </div>
          </div>

          {/* CTAs */}
          <button
            onClick={() => onNavigate("contact")}
            className="w-full bg-[#1c3a1e] text-white border-none py-[18px] rounded-full text-[16px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 mb-3 hover:bg-[#3e7a42] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(28,58,30,0.35)]"
          >
            🛒 Add to Order / Get Quote
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="w-full bg-transparent text-[#1c3a1e] border-2 border-[#1c3a1e]/25 py-4 rounded-full text-[15px] cursor-pointer transition-all duration-300 hover:border-[#3e7a42] hover:bg-[#3e7a42]/[0.05]"
          >
            📋 Request Bulk / Custom Pricing
          </button>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 mt-7">
            {[
              { icon: "🔬", label: "Lab Certified" },
              { icon: "🚛", label: "48hr Dispatch" },
              { icon: "♻️", label: "Carbon Neutral" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="bg-white border border-[#1c3a1e]/[0.08] rounded-[14px] py-3 px-3 text-center"
              >
                <div className="text-[20px] mb-1">{icon}</div>
                <div className="text-[11px] font-medium text-[#1c3a1e]">{label}</div>
              </div>
            ))}
          </div>

          {/* Quality guarantee */}
          <div className="mt-6 p-5 bg-[#3e7a42]/[0.07] rounded-[16px] border-l-[3px] border-[#3e7a42]">
            <div className="text-[13px] font-semibold text-[#1c3a1e] mb-1.5">🔒 Quality Guarantee</div>
            <div className="text-[13px] text-[#5a7a5c] leading-[1.65]">
              Every batch ships with a third-party lab test certificate for calorific value, moisture, ash, and density.
              If it doesn't match the spec, we replace or refund — no questions asked.
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="px-12 py-16 border-t border-[#1c3a1e]/[0.07]">
        <h3
          className="text-[#1c3a1e] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,3vw,36px)" }}
        >
          You Might Also Like
        </h3>
        <div className="grid grid-cols-3 gap-6">
          {related.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-[20px] overflow-hidden cursor-pointer transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(28,58,30,0.12)]"
              onClick={() => { setActiveImg(0); setQty(1); window.scrollTo({top:0,behavior:'smooth'}); onNavigate("products"); setTimeout(()=>window.dispatchEvent(new CustomEvent('openProduct',{detail:p.id})),100); }}
            >
              <div className="h-[160px] overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]" />
              </div>
              <div className="p-5">
                <div className="font-semibold text-[#1c3a1e] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px" }}>{p.name}</div>
                <div className="text-[13px] text-[#5a7a5c] mb-3">{p.shortDesc.substring(0, 70)}…</div>
                <div className="text-[#c4763a] font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px" }}>{p.price} <span className="text-[12px] text-[#5a7a5c] font-normal" style={{ fontFamily: "'DM Sans', sans-serif" }}>/ tonne</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}