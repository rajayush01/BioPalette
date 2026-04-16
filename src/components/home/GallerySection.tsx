import React from "react";
import { galleryItems } from "@/data";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#e8ede2] py-24 px-12">
      <div className="reveal">
        <div className="flex items-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#4a7c59] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#4a7c59] before:rounded-sm">
          In the Wild
        </div>
        <h2
          className="text-[clamp(34px,4vw,54px)] leading-[1.15] mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Palettes Applied
        </h2>
        <p className="text-[17px] text-[#5a6e55] leading-[1.7] max-w-[560px]">
          Bio Palette colors used in real brand identities, packaging, interiors, and digital products.
        </p>
      </div>

      {/* Gallery Grid */}
      <div
        className="reveal mt-14"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "280px 280px",
          gap: "16px",
        }}
      >
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden cursor-pointer relative group"
            style={i === 0 ? { gridRow: "1 / 3" } : {}}
          >
            <img
              src={item.src}
              alt={item.label}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.06] block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a1a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span
                className="text-white text-[15px] font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}