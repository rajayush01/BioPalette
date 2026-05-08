"use client";
import React, { useState } from "react";

interface ContactPageProps {
  onNavigate: (page: "home" | "products" | "contact" | "shop") => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "",
    phone: "", email: "", product: "", quantity: "", message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="bg-[#f7f2e8] min-h-screen pt-[88px]">

      {/* Hero */}
      <div
        className="relative px-12 py-14 overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg,#1c3a1e 0%,#2d5c30 60%,#3e7a42 100%)" }}
      >
        <div className="absolute rounded-full blur-[80px] opacity-20 w-[400px] h-[400px] bg-[#e8a455] -top-24 -right-16 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#c8dfca] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#c8dfca] before:rounded-sm after:content-[''] after:block after:w-7 after:h-[1.5px] after:bg-[#c8dfca] after:rounded-sm">
            Contact Us
          </div>
          <h1
            className="text-[#f7f2e8] leading-[1.1] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,58px)" }}
          >
            Let's Fuel Your
            <br />
            <em className="italic text-[#e8a455]">Next Project</em>
          </h1>
          <p className="text-[#f7f2e8]/60 text-[16px] max-w-[480px] mx-auto leading-[1.75]">
            Whether you need a trial sample, bulk shipment, or custom formulation — our team responds within 24 hours.
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div
        className="px-12 py-16 max-w-[1100px] mx-auto"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "72px", alignItems: "start" }}
      >

        {/* Left: info */}
        <div>
          <div className="flex items-center gap-2.5 text-[11px] tracking-[2px] uppercase text-[#3e7a42] font-semibold mb-3 before:content-[''] before:block before:w-7 before:h-[1.5px] before:bg-[#3e7a42] before:rounded-sm">
            Get in Touch
          </div>
          <h2
            className="text-[#1c3a1e] leading-[1.1] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3vw,40px)" }}
          >
            We're Here to
            <br />
            <em className="italic text-[#c4763a]">Help You Choose</em>
          </h2>
          <p className="text-[16px] text-[#5a7a5c] leading-[1.8] mb-10">
            Our energy consultants can help you select the right biomass product based on your boiler type,
            capacity, and budget — at no cost.
          </p>

          {[
            { icon: "📞", label: "Phone",         value: "+91 98765 43210" },
            { icon: "📧", label: "Email",         value: "info@biofuelco.in" },
            { icon: "📍", label: "Factory",       value: "MIDC Butibori, Nagpur, Maharashtra — 441108" },
            { icon: "🕐", label: "Working Hours", value: "Mon–Sat, 9:00 AM – 6:00 PM IST" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 bg-[#3e7a42]/10 rounded-[14px] flex items-center justify-center text-[22px] flex-shrink-0">
                {icon}
              </div>
              <div>
                <div className="text-[11px] text-[#5a7a5c] uppercase tracking-[1.5px] font-medium mb-1">{label}</div>
                <div className="text-[15px] text-[#1c3a1e] font-medium">{value}</div>
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div
            className="rounded-[20px] overflow-hidden h-[180px] flex items-center justify-center border border-[#1c3a1e]/[0.08]"
            style={{ background: "linear-gradient(135deg,#e8ede2,#d4e0d6)" }}
          >
            <div className="text-center">
              <div className="text-[40px]">📌</div>
              <div className="text-[13px] text-[#1c3a1e] font-medium mt-2">MIDC Butibori, Nagpur</div>
              <div className="text-[12px] text-[#5a7a5c]">Maharashtra, India</div>
            </div>
          </div>

          {/* Social / certifications */}
          <div className="mt-8">
            <div className="text-[11px] uppercase tracking-[1.5px] text-[#5a7a5c] mb-3 font-medium">Certifications</div>
            <div className="flex gap-2 flex-wrap">
              {["ISO 17225", "ENplus A1", "BIS Certified", "Carbon Neutral", "MSME Registered"].map((c) => (
                <span
                  key={c}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-[#3e7a42]/25 text-[#3e7a42] font-medium"
                >
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-[28px] p-10 shadow-[0_4px_36px_rgba(28,58,30,0.08)]">
          {!submitted ? (
            <>
              <h3
                className="text-[#1c3a1e] mb-7"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px" }}
              >
                Send Us an Enquiry
              </h3>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { k: "firstName", label: "First Name *",  placeholder: "Rajesh"     },
                  { k: "lastName",  label: "Last Name *",   placeholder: "Mehta"      },
                ].map(({ k, label, placeholder }) => (
                  <div key={k}>
                    <label className="block text-[13px] font-medium text-[#1c3a1e] mb-1.5">{label}</label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      value={(form as any)[k]}
                      onChange={(e) => update(k, e.target.value)}
                      className="w-full border border-[#1c3a1e]/15 rounded-[12px] px-4 py-3 text-[14px] outline-none transition-all focus:border-[#3e7a42] focus:shadow-[0_0_0_3px_rgba(62,122,66,0.1)] bg-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-medium text-[#1c3a1e] mb-1.5">Company / Organization</label>
                <input
                  type="text"
                  placeholder="ABC Industries Pvt. Ltd."
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="w-full border border-[#1c3a1e]/15 rounded-[12px] px-4 py-3 text-[14px] outline-none transition-all focus:border-[#3e7a42] focus:shadow-[0_0_0_3px_rgba(62,122,66,0.1)] bg-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { k: "phone", label: "Phone *",  type: "tel",   placeholder: "+91 98765 43210" },
                  { k: "email", label: "Email *",  type: "email", placeholder: "rajesh@abc.com"   },
                ].map(({ k, label, type, placeholder }) => (
                  <div key={k}>
                    <label className="block text-[13px] font-medium text-[#1c3a1e] mb-1.5">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={(form as any)[k]}
                      onChange={(e) => update(k, e.target.value)}
                      className="w-full border border-[#1c3a1e]/15 rounded-[12px] px-4 py-3 text-[14px] outline-none transition-all focus:border-[#3e7a42] focus:shadow-[0_0_0_3px_rgba(62,122,66,0.1)] bg-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-medium text-[#1c3a1e] mb-1.5">Product of Interest</label>
                <select
                  value={form.product}
                  onChange={(e) => update("product", e.target.value)}
                  className="w-full border border-[#1c3a1e]/15 rounded-[12px] px-4 py-3 text-[14px] outline-none transition-all focus:border-[#3e7a42] focus:shadow-[0_0_0_3px_rgba(62,122,66,0.1)] bg-white cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <option value="">Select a product…</option>
                  {["Pine Wood Pellets","Rice Husk Briquettes","Agri-Residue Pellets","Sawdust Briquettes","Bamboo Pellets","Cotton Stalk Briquettes","Custom / Multiple Products"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-medium text-[#1c3a1e] mb-1.5">Estimated Monthly Quantity</label>
                <select
                  value={form.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
                  className="w-full border border-[#1c3a1e]/15 rounded-[12px] px-4 py-3 text-[14px] outline-none transition-all focus:border-[#3e7a42] focus:shadow-[0_0_0_3px_rgba(62,122,66,0.1)] bg-white cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <option value="">Select quantity range…</option>
                  {["1–5 tonnes","5–20 tonnes","20–100 tonnes","100–500 tonnes","500+ tonnes (bulk)"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-[13px] font-medium text-[#1c3a1e] mb-1.5">Message</label>
                <textarea
                  placeholder="Tell us about your boiler type, current fuel, location, delivery frequency, or any other requirements…"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  className="w-full border border-[#1c3a1e]/15 rounded-[12px] px-4 py-3 text-[14px] outline-none transition-all focus:border-[#3e7a42] focus:shadow-[0_0_0_3px_rgba(62,122,66,0.1)] resize-none bg-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="w-full text-white border-none py-[18px] rounded-full text-[16px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(28,58,30,0.35)]"
                style={{ background: "linear-gradient(135deg,#1c3a1e,#3e7a42)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Send Enquiry →
              </button>

              <p className="text-[12px] text-[#5a7a5c] text-center mt-4 leading-[1.6]">
                🔒 Your information is safe with us. We don't spam or share your data.
              </p>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-[64px] mb-5">✅</div>
              <h3
                className="text-[#1c3a1e] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px" }}
              >
                Enquiry Received!
              </h3>
              <p className="text-[15px] text-[#5a7a5c] leading-[1.75] mb-8 max-w-[360px] mx-auto">
                Our team will review your requirement and get back to you within 24 business hours with pricing and availability.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={() => onNavigate("home")}
                  className="bg-[#1c3a1e] text-white border-none px-7 py-3 rounded-full text-[14px] font-semibold cursor-pointer transition-all hover:bg-[#3e7a42]"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => onNavigate("shop")}
                  className="bg-transparent text-[#1c3a1e] border border-[#1c3a1e]/25 px-7 py-3 rounded-full text-[14px] cursor-pointer transition-all hover:border-[#3e7a42]"
                >
                  Browse More Products
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}