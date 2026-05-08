"use client";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { n: 50000, s: "+", l: "Tonnes Supplied / Year" },
  { n: 500,   s: "+", l: "Partner Industries"     },
  { n: 100,   s: "%", l: "Carbon Neutral Output"  },
  { n: 28,    s: "",  l: "States Served"           },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const step = target / (1800 / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 16);
      io.disconnect();
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsRibbon() {
  return (
    <div className="bg-[#0f1f10] py-8 px-12 flex justify-center gap-20 flex-wrap">
      {stats.map((s, i) => (
        <div key={i} className="text-center reveal" style={{ animationDelay: `${i * 0.1}s` }}>
          <div
            className="text-[46px] text-[#e8a455] font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <Counter target={s.n} suffix={s.s} />
          </div>
          <div className="text-[12px] text-[#a8c5ab] tracking-[1.5px] uppercase mt-1">{s.l}</div>
        </div>
      ))}
    </div>
  );
}