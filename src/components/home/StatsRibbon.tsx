import React, { useState, useEffect, useRef } from "react";
import { statsData } from "@/data";

interface CounterProps {
  target: number;
  suffix?: string;
}

function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1800;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        io.disconnect();
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsRibbon() {
  return (
    <div className="bg-[#1a3a1a] py-8 px-12 flex justify-center gap-20 flex-wrap">
      {statsData.map((stat, i) => (
        <div key={i} className="text-center reveal" style={{ animationDelay: `${i * 0.1}s` }}>
          <div
            className="text-[42px] text-[#d4b896] font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <Counter target={stat.n} suffix={stat.s} />
          </div>
          <div className="text-[13px] text-[#b5c4a1] tracking-[1px] uppercase mt-1">{stat.l}</div>
        </div>
      ))}
    </div>
  );
}