import React, { useMemo } from "react";

const LEAF_ICONS = ["🍃", "🌿", "🍀", "🌱"];

interface LeafProps {
  style: React.CSSProperties;
}

function FloatingLeaf({ style }: LeafProps) {
  const icon = LEAF_ICONS[Math.floor(Math.random() * LEAF_ICONS.length)];
  return (
    <div className="absolute pointer-events-none text-2xl animate-[leafFall_linear_infinite]" style={style}>
      {icon}
    </div>
  );
}

export default function Hero() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 12}s`,
        animationDelay: `${Math.random() * 10}s`,
        fontSize: `${16 + Math.random() * 16}px`,
        opacity: 0.4 + Math.random() * 0.4,
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a27 40%, #4a7c59 70%, #87a878 100%)",
        backgroundSize: "300% 300%",
        animation: "gradMove 10s ease infinite",
      }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Orbs */}
      <div className="absolute rounded-full blur-[60px] opacity-25 pointer-events-none w-[600px] h-[600px] bg-[#2d5a27] -top-[10%] -left-[10%]" />
      <div className="absolute rounded-full blur-[60px] opacity-25 pointer-events-none w-[500px] h-[500px] bg-[#a0653a] -bottom-[15%] -right-[5%]" />
      <div className="absolute rounded-full blur-[60px] opacity-25 pointer-events-none w-[350px] h-[350px] bg-[#87a878] top-[30%] right-[20%]" />

      {/* Falling leaves */}
      {leaves.map((style, i) => (
        <FloatingLeaf key={i} style={style} />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#c8dbc0] text-xs tracking-[1.5px] uppercase px-5 py-2 rounded-full mb-8"
          style={{ animation: "fadeUp 0.6s ease forwards" }}
        >
          <span className="w-1.5 h-1.5 bg-[#c8dbc0] rounded-full animate-[pulse_2s_infinite]" />
          Nature's Living Color System
        </div>

        <h1
          className="text-[clamp(52px,8vw,108px)] text-[#f5f0e8] leading-[1.05]"
          style={{ fontFamily: "'Playfair Display', serif", animation: "fadeUp 0.8s 0.1s ease both" }}
        >
          Colors Grown
          <br />
          from <em className="text-[#d4b896] italic">the Earth</em>
        </h1>

        <p
          className="text-[clamp(16px,2vw,20px)] text-[#f5f0e8]/65 leading-[1.7] max-w-[560px] mx-auto mt-6 mb-8"
          style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
        >
          Bio Palette translates living ecosystems into precision color libraries. Every hue is sourced from real
          botanical specimens, biome surveys, and spectral field data.
        </p>

        <div className="flex gap-4 justify-center flex-wrap" style={{ animation: "fadeUp 0.8s 0.35s ease both" }}>
          <button className="bg-[#d4b896] text-[#1a3a1a] border-none px-9 py-4 rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(212,184,150,0.5)] hover:bg-[#f5f0e8]">
            Browse Palettes
          </button>
          <button className="bg-transparent text-[#f5f0e8] border border-white/30 px-9 py-4 rounded-full text-[15px] font-normal cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/60">
            Watch the Process
          </button>
        </div>
      </div>

      {/* Animated SVG plants */}
      <svg
        className="absolute bottom-0 left-[5%] opacity-35"
        width="120"
        height="180"
        viewBox="0 0 120 180"
      >
        <path
          d="M60 180 Q60 120 60 80"
          stroke="#87a878"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{ animation: "sway 4s ease-in-out infinite", transformOrigin: "60px 180px" }}
        />
        <ellipse
          cx="60" cy="80" rx="28" ry="18" fill="#4a7c59"
          style={{ animation: "float 5s 0.3s ease-in-out infinite" }}
        />
        <ellipse
          cx="40" cy="100" rx="22" ry="14" fill="#2d5a27"
          style={{ animation: "float 5s 0.8s ease-in-out infinite" }}
        />
        <ellipse
          cx="80" cy="95" rx="20" ry="13" fill="#87a878"
          style={{ animation: "float 5s 1.2s ease-in-out infinite" }}
        />
      </svg>

      <svg
        className="absolute bottom-0 right-[8%] opacity-30 scale-x-[-1]"
        width="100"
        height="150"
        viewBox="0 0 100 150"
      >
        <path
          d="M50 150 Q50 100 50 60"
          stroke="#b5c4a1"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{ animation: "sway 4s 0.5s ease-in-out infinite", transformOrigin: "50px 150px" }}
        />
        <ellipse
          cx="50" cy="60" rx="24" ry="16" fill="#87a878"
          style={{ animation: "float 5s 1s ease-in-out infinite" }}
        />
        <ellipse
          cx="32" cy="80" rx="18" ry="12" fill="#4a7c59"
          style={{ animation: "float 5s 1.5s ease-in-out infinite" }}
        />
      </svg>
    </section>
  );
}