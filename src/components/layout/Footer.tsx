import React from "react";

interface FooterProps {
  onNavigate: (page: "home" | "products" | "contact" | "shop") => void;
}

const collections = ["Pine Wood Pellets", "Rice Husk Briquettes", "Agri-Residue Pellets", "Bamboo Pellets", "Sawdust Briquettes", "Cotton Stalk Briquettes"];
const resources   = ["Technical Data Sheets", "Certifications", "Lab Reports", "Delivery Guide", "FAQ"];
const company     = ["About Us", "Sustainability", "Careers", "Blog", "Press"];

function Col({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[1.5px] uppercase text-[#a8c5ab] mb-4 font-medium">{heading}</div>
      <ul className="list-none">
        {links.map((l) => (
          <li key={l} className="mb-2.5">
            <a href="#" className="text-[13px] text-[#f7f2e8]/45 no-underline transition-colors duration-300 hover:text-[#e8a455]">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      className="py-14 px-12 pb-8"
      style={{
        background: "#0a1a0b",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "48px",
      }}
    >
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2.5 mb-4 cursor-pointer" onClick={() => onNavigate("home")}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <ellipse cx="18" cy="18" rx="13" ry="16" fill="#3e7a42" opacity=".9" />
            <path d="M18 5 Q25 13 18 23 Q11 13 18 5Z" fill="#a8c5ab" />
            <line x1="18" y1="23" x2="18" y2="33" stroke="#2d5c30" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span
            className="text-[22px] text-[#e8a455]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            BioFuel Co.
          </span>
        </div>
        <p className="text-[13px] text-[#f7f2e8]/40 leading-[1.75] mb-6">
          India's trusted biomass pellet and briquette manufacturer. Sustainable energy from agricultural waste —
          certified, lab-tested, and pan-India delivered.
        </p>
        {/* Certifications */}
        <div className="flex gap-3 flex-wrap">
          {["ISO 17225", "ENplus A1", "BIS Certified", "Carbon Neutral"].map((c) => (
            <span
              key={c}
              className="text-[10px] tracking-[0.5px] uppercase px-3 py-1 rounded-full border border-white/10 text-[#a8c5ab]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <Col heading="Products" links={collections} />
      <Col heading="Resources" links={resources} />
      <Col heading="Company" links={company} />

      {/* Bottom bar */}
      <div className="col-span-full border-t border-white/[0.06] pt-5 mt-2 flex items-center justify-between flex-wrap gap-3">
        <p className="text-[12px] text-[#f7f2e8]/25">
          © 2026 BioFuel Co. All rights reserved. Sustainably manufactured biomass energy products.
        </p>
        <div className="flex gap-4">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <a key={l} href="#" className="text-[11px] text-[#f7f2e8]/25 no-underline hover:text-[#e8a455] transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}