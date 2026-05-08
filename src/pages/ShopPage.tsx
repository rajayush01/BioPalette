"use client";
import React, { useState, useMemo } from "react";
import { products, Product } from "@/data/product";

interface ShopPageProps {
  onOpenProduct: (id: string) => void;
  onNavigate: (page: "home" | "products" | "contact" | "shop") => void;
}

const CATEGORIES = ["All", "Biomass Pellets", "Biomass Briquettes"];
const SORT_OPTIONS = [
  { label: "Featured",        value: "featured"   },
  { label: "Price: Low–High", value: "price-asc"  },
  { label: "Price: High–Low", value: "price-desc" },
  { label: "Calorific Value", value: "calorie"    },
];

export default function ShopPage({ onOpenProduct, onNavigate }: ShopPageProps) {
  const [category, setCategory] = useState("All");
  const [sort, setSort]         = useState("featured");
  const [search, setSearch]     = useState("");
  const [view, setView]         = useState<"grid" | "list">("grid");
  const [compare, setCompare]   = useState<string[]>([]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "All")  list = list.filter((p) => p.category === category);
    if (search.trim())       list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.shortDesc.toLowerCase().includes(search.toLowerCase()));
    if (sort === "price-asc")  list.sort((a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, "")));
    if (sort === "price-desc") list.sort((a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, "")));
    if (sort === "calorie")    list.sort((a, b) => b.calorieVal - a.calorieVal);
    return list;
  }, [category, sort, search]);

  const toggleCompare = (id: string) => {
    setCompare((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  return (
    <div className="bg-[#f7f2e8] min-h-screen pt-[88px]">

      {/* ── Shop Hero Banner ── */}
      <div
        className="relative px-12 py-16 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1c3a1e 0%,#2d5c30 60%,#3e7a42 100%)" }}
      >
        <div className="absolute rounded-full blur-[80px] opacity-20 w-[500px] h-[500px] bg-[#e8a455] -top-32 -right-20 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#c8dfca] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#c8dfca] before:rounded-sm after:content-[''] after:block after:w-7 after:h-[1.5px] after:bg-[#c8dfca] after:rounded-sm">
            Product Catalogue
          </div>
          <h1
            className="text-[#f7f2e8] leading-[1.1] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(38px,5vw,64px)" }}
          >
            Shop Biomass Fuel
          </h1>
          <p className="text-[#f7f2e8]/65 text-[17px] max-w-[520px] mx-auto leading-[1.75]">
            Premium certified pellets and briquettes for every application — domestic, commercial, and industrial.
          </p>
        </div>

        {/* Search bar inside banner */}
        <div className="relative z-10 mt-8 max-w-[500px] mx-auto">
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/10 border border-white/20 backdrop-blur-md text-[#f7f2e8] placeholder-[#f7f2e8]/40 rounded-full px-6 py-3.5 text-[14px] outline-none focus:bg-white/15 focus:border-white/40 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#f7f2e8]/50 text-[18px]">🔍</span>
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div className="px-12 py-5 flex items-center justify-between flex-wrap gap-4 border-b border-[#1c3a1e]/[0.08] bg-[#f7f2e8] sticky top-[72px] z-40 backdrop-blur-sm">
        {/* Category pills */}
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer border"
              style={{
                background:   category === c ? "#1c3a1e" : "transparent",
                color:        category === c ? "#f7f2e8" : "#1c3a1e",
                borderColor:  category === c ? "#1c3a1e" : "rgba(28,58,30,0.2)",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Result count */}
          <span className="text-[13px] text-[#5a7a5c]">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-[#1c3a1e]/20 rounded-full px-4 py-2 text-[13px] text-[#1c3a1e] bg-transparent outline-none cursor-pointer"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>

          {/* Grid / List toggle */}
          <div className="flex border border-[#1c3a1e]/20 rounded-full overflow-hidden">
            {(["grid","list"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="px-3 py-2 text-[13px] transition-all cursor-pointer border-none"
                style={{ background: view === v ? "#1c3a1e" : "transparent", color: view === v ? "#f7f2e8" : "#1c3a1e" }}
              >
                {v === "grid" ? "⊞" : "☰"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products ── */}
      <div className="px-12 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-[#5a7a5c]">
            <div className="text-[48px] mb-4">🌾</div>
            <p className="text-[18px]">No products match your search.</p>
          </div>
        ) : view === "grid" ? (
          // GRID VIEW
          <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(28,58,30,0.07)] group transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(28,58,30,0.14)]"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {/* Image */}
                <div className="h-[220px] relative overflow-hidden cursor-pointer" onClick={() => onOpenProduct(p.id)}>
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.07]"
                  />
                  {p.badge && (
                    <span
                      className="absolute top-3 right-3 text-white text-[10px] tracking-[1.5px] uppercase px-3 py-1 rounded-full"
                      style={{ background: p.badgeColor ?? "#c4763a" }}
                    >
                      {p.badge}
                    </span>
                  )}
                  {/* Quick view overlay */}
                  <div className="absolute inset-0 bg-[#1c3a1e]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-[#1c3a1e] text-[13px] font-semibold px-5 py-2 rounded-full">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  <div className="text-[11px] uppercase tracking-[1.5px] text-[#3e7a42] font-medium mb-1">{p.category}</div>
                  <div
                    className="text-[20px] font-semibold text-[#1c3a1e] mb-2 cursor-pointer hover:text-[#3e7a42] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    onClick={() => onOpenProduct(p.id)}
                  >
                    {p.name}
                  </div>
                  <p className="text-[13px] text-[#5a7a5c] leading-[1.65] mb-4">{p.shortDesc}</p>

                  {/* Spec tags */}
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-[#ede4d3] text-[#1c3a1e] text-[10px] px-2.5 py-1 rounded-full font-medium">{t}</span>
                    ))}
                  </div>

                  {/* Compare checkbox */}
                  <label className="flex items-center gap-2 mb-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={compare.includes(p.id)}
                      onChange={() => toggleCompare(p.id)}
                      className="accent-[#3e7a42] w-3.5 h-3.5"
                    />
                    <span className="text-[12px] text-[#5a7a5c]">Add to Compare</span>
                  </label>

                  <div className="flex items-center justify-between pt-4 border-t border-[#1c3a1e]/[0.07]">
                    <div>
                      <div
                        className="text-[24px] text-[#c4763a] font-semibold leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {p.price}
                      </div>
                      <div className="text-[11px] text-[#5a7a5c]">per tonne</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onOpenProduct(p.id)}
                        className="border border-[#3e7a42]/30 text-[#3e7a42] px-3.5 py-2 rounded-full text-[12px] cursor-pointer transition-all hover:border-[#3e7a42] hover:bg-[#3e7a42]/[0.06] bg-transparent"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onNavigate("contact")}
                        className="bg-[#1c3a1e] text-white border-none px-3.5 py-2 rounded-full text-[12px] font-semibold cursor-pointer transition-all hover:bg-[#3e7a42]"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // LIST VIEW
          <div className="flex flex-col gap-5">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-[20px] overflow-hidden flex gap-0 shadow-[0_2px_12px_rgba(28,58,30,0.07)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(28,58,30,0.12)] hover:-translate-y-0.5"
              >
                {/* Image */}
                <div className="w-[220px] flex-shrink-0 overflow-hidden cursor-pointer" onClick={() => onOpenProduct(p.id)}>
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                    style={{ minHeight: "160px" }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 px-7 py-6 flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-[1.5px] text-[#3e7a42] font-medium mb-1">{p.category}</div>
                    <div
                      className="text-[22px] font-semibold text-[#1c3a1e] mb-2 cursor-pointer hover:text-[#3e7a42] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      onClick={() => onOpenProduct(p.id)}
                    >
                      {p.name}
                    </div>
                    <p className="text-[13px] text-[#5a7a5c] leading-[1.65] mb-3 max-w-[480px]">{p.shortDesc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map((t) => (
                        <span key={t} className="bg-[#ede4d3] text-[#1c3a1e] text-[10px] px-2.5 py-1 rounded-full font-medium">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3 flex-shrink-0">
                    <div className="text-right">
                      <div
                        className="text-[28px] text-[#c4763a] font-semibold leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {p.price}
                      </div>
                      <div className="text-[12px] text-[#5a7a5c]">per tonne</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onOpenProduct(p.id)}
                        className="border border-[#3e7a42]/30 text-[#3e7a42] px-4 py-2 rounded-full text-[13px] cursor-pointer transition-all hover:border-[#3e7a42] hover:bg-[#3e7a42]/[0.06] bg-transparent"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onNavigate("contact")}
                        className="bg-[#1c3a1e] text-white border-none px-4 py-2 rounded-full text-[13px] font-semibold cursor-pointer transition-all hover:bg-[#3e7a42]"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Compare Bar ── */}
      {compare.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1c3a1e] text-[#f7f2e8] px-6 py-4 rounded-2xl shadow-[0_8px_40px_rgba(28,58,30,0.4)] flex items-center gap-5 backdrop-blur-md">
          <span className="text-[13px] font-medium">Comparing {compare.length} product{compare.length > 1 ? "s" : ""}:</span>
          <div className="flex gap-2">
            {compare.map((id) => (
              <span key={id} className="bg-white/10 border border-white/15 px-3 py-1 rounded-full text-[12px]">
                {products.find((p) => p.id === id)?.name.split(" ").slice(0, 2).join(" ")}
              </span>
            ))}
          </div>
          <button
            className="bg-[#c4763a] text-white border-none px-4 py-1.5 rounded-full text-[12px] font-semibold cursor-pointer hover:bg-[#e8a455] transition-colors"
            onClick={() => onNavigate("contact")}
          >
            Get Quotes
          </button>
          <button
            className="text-[#f7f2e8]/50 text-[18px] bg-transparent border-none cursor-pointer hover:text-[#f7f2e8] transition-colors"
            onClick={() => setCompare([])}
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Bottom CTA ── */}
      <div className="px-12 py-16 text-center border-t border-[#1c3a1e]/[0.07]">
        <h3
          className="text-[#1c3a1e] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3vw,42px)" }}
        >
          Need a Custom Blend or Bulk Pricing?
        </h3>
        <p className="text-[#5a7a5c] text-[16px] mb-8 max-w-[480px] mx-auto leading-[1.7]">
          Our team will formulate the right product mix for your boiler specs and volume requirements.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="bg-[#c4763a] text-white border-none px-10 py-4 rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8a455] hover:shadow-[0_14px_36px_rgba(196,118,58,0.45)]"
        >
          Talk to Our Team →
        </button>
      </div>
    </div>
  );
}