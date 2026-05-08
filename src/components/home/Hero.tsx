"use client";
import React, { useEffect, useRef } from "react";

interface HeroProps {
  onNavigate: (page: "home" | "products" | "contact") => void;
  onScrollToProducts: () => void;
}

export default function Hero({ onNavigate, onScrollToProducts }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#87a878", "#a8c5ab", "#6b9a6e", "#c8dfca", "#e8a455"];

    type Particle = {
      x: number; y: number; size: number;
      speedY: number; speedX: number;
      opacity: number; angle: number; rotSpeed: number;
      color: string; leaf: boolean;
    };

    const makeParticle = (randomY = false): Particle => ({
      x: Math.random() * canvas.width,
      y: randomY ? Math.random() * canvas.height : canvas.height + 20,
      size: 2 + Math.random() * 4,
      speedY: -(0.5 + Math.random() * 1.5),
      speedX: (Math.random() - 0.5) * 0.8,
      opacity: 0.3 + Math.random() * 0.5,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      leaf: Math.random() > 0.6,
    });

    const particles: Particle[] = Array.from({ length: 60 }, () => makeParticle(true));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;
        p.angle += p.rotSpeed;
        if (p.y < -20) Object.assign(p, makeParticle(false));
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        if (p.leaf) ctx.ellipse(0, 0, p.size * 2, p.size, 0, 0, Math.PI * 2);
        else ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0f1f10 0%,#1c3a1e 45%,#2d5c30 80%,#3e7a42 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Orb blurs */}
      <div className="absolute rounded-full blur-[80px] opacity-20 pointer-events-none w-[600px] h-[600px] bg-[#2d5c30] -top-[10%] -left-[10%]" />
      <div className="absolute rounded-full blur-[80px] opacity-20 pointer-events-none w-[500px] h-[500px] bg-[#c4763a] -bottom-[15%] -right-[5%]" />

      {/* Animated SVG plants */}
      <svg
        className="absolute bottom-0 left-[4%] opacity-30"
        width="100" height="160" viewBox="0 0 100 160"
        style={{ animation: "sway 5s ease-in-out infinite", transformOrigin: "bottom center" }}
      >
        <line x1="50" y1="160" x2="50" y2="60" stroke="#87a878" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="50" cy="60" rx="26" ry="17" fill="#4a7c59" />
        <ellipse cx="34" cy="82" rx="20" ry="13" fill="#2d5a27" />
        <ellipse cx="66" cy="78" rx="19" ry="12" fill="#87a878" />
      </svg>
      <svg
        className="absolute bottom-0 right-[6%] opacity-25 scale-x-[-1]"
        width="80" height="130" viewBox="0 0 80 130"
        style={{ animation: "sway 4s 0.5s ease-in-out infinite", transformOrigin: "bottom center" }}
      >
        <line x1="40" y1="130" x2="40" y2="45" stroke="#b5c4a1" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="40" cy="45" rx="22" ry="15" fill="#87a878" />
        <ellipse cx="26" cy="64" rx="17" ry="11" fill="#4a7c59" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mt-10">
        <div
          className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#c8dfca] text-[11px] tracking-[2px] uppercase px-5 py-2 rounded-full mb-7"
          style={{ animation: "fadeUp 0.6s ease both" }}
        >
          <span className="w-1.5 h-1.5 bg-[#a8c5ab] rounded-full" style={{ animation: "pulse 2s infinite" }} />
          Premium Biomass Energy Solutions
        </div>

        <h1
          className="text-[#f7f2e8] leading-[1.02] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(54px, 9vw, 110px)",
            animation: "fadeUp 0.8s 0.1s ease both",
          }}
        >
          Fuel the Future
          <br />
          with <em className="text-[#e8a455] italic">Living</em> Energy
        </h1>

        <p
          className="text-[#f7f2e8]/62 leading-[1.75] max-w-[520px] mx-auto mb-8"
          style={{ fontSize: "clamp(16px,2vw,19px)", animation: "fadeUp 0.8s 0.2s ease both" }}
        >
          Premium biomass pellets and briquettes crafted from sustainably sourced agricultural waste. Clean,
          carbon-neutral, and built for industrial &amp; domestic power.
        </p>

        <div className="flex gap-4 justify-center flex-wrap" style={{ animation: "fadeUp 0.8s 0.35s ease both" }}>
          <button
            onClick={onScrollToProducts}
            className="bg-[#c4763a] text-white border-none px-9 py-4 rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8a455] hover:shadow-[0_14px_36px_rgba(196,118,58,0.5)]"
          >
            Explore Products
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="bg-transparent text-[#f7f2e8] border border-white/30 px-9 py-4 rounded-full text-[15px] cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/60"
          >
            Request Bulk Quote
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f7f2e8]/40 text-[11px] tracking-[2px] uppercase" style={{ animation: "fadeIn 1s 1s both" }}>
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#f7f2e8]/40" style={{ animation: "scrollPulse 1.5s ease-in-out infinite" }} />
        <span>Scroll</span>
      </div>
    </section>
  );
}