import React from "react";
import { footerCollections, footerResources, footerCompany } from "@/data";

interface FooterColumnProps {
  heading: string;
  links: string[];
}

function FooterColumn({ heading, links }: FooterColumnProps) {
  return (
    <div>
      <div className="text-[12px] tracking-[1.5px] uppercase text-[#b5c4a1] mb-4 font-medium">{heading}</div>
      <ul className="list-none">
        {links.map((link) => (
          <li key={link} className="mb-2.5">
            <a
              href="#"
              className="text-[13px] text-[#f5f0e8]/50 no-underline transition-colors duration-300 hover:text-[#d4b896]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="py-[60px] px-12 pb-8"
      style={{
        background: "#0f2410",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "48px",
      }}
    >
      {/* Brand */}
      <div>
        <div
          className="text-[22px] text-[#d4b896] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bio Palette
        </div>
        <p className="text-[13px] text-[#f5f0e8]/45 leading-[1.7]">
          The world's most scientifically rigorous source of nature-derived color libraries for professional designers,
          brand teams, and product studios.
        </p>
      </div>

      <FooterColumn heading="Collections" links={footerCollections} />
      <FooterColumn heading="Resources" links={footerResources} />
      <FooterColumn heading="Company" links={footerCompany} />

      {/* Bottom bar */}
      <div
        className="col-span-full border-t border-white/[0.06] pt-5 mt-2"
      >
        <p className="text-[12px] text-[#f5f0e8]/30">
          © 2026 Bio Palette. All rights reserved. Colors sourced from living ecosystems worldwide.
        </p>
      </div>
    </footer>
  );
}