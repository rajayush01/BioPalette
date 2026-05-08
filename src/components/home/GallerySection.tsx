import React from "react";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",  label: "Industrial Biomass Plant" },
  { src: "https://images.unsplash.com/photo-1567461175522-f79d7027bd98?w=600&q=80", label: "Pine Wood Pellets" },
  { src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80", label: "Rice Husk Briquettes" },
  { src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80", label: "Agri-Residue Pellets" },
  { src: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",   label: "Bamboo Pellets" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#e8ede2] py-24 px-12">
      <div className="reveal">
        <div className="flex items-center gap-2.5 text-[12px] tracking-[2px] uppercase text-[#3e7a42] font-semibold mb-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-[#3e7a42] before:rounded-sm">
          In the Field
        </div>
        <h2
          className="leading-[1.15] mb-4 text-[#1c3a1e]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px,4vw,54px)" }}
        >
          Our Products &amp; Facility
        </h2>
        <p className="text-[17px] text-[#5a7a5c] leading-[1.7] max-w-[540px]">
          From field collection to finished fuel — a glimpse into BioFuel Co.'s operations and product range.
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3a1e]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span
                className="text-white text-[15px] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
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