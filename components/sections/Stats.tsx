"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Globe2, Building2 } from "lucide-react";
import { statsData } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-7 h-7" />,
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  Globe2: <Globe2 className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
};

function Counter({ targetValue, suffix }: { targetValue: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutExpo function for smooth counting
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeOutExpo * targetValue);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView, targetValue]);

  return (
    <span ref={ref} className="font-extrabold font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="statistik" className="relative -mt-8 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 shadow-2xl border border-blue-800/40 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Decorative background lights */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/40 transition-colors"
            >
              <div className="w-13 h-13 p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white mb-4 shadow-lg shadow-blue-600/30">
                {iconMap[stat.iconName] || <Users className="w-7 h-7" />}
              </div>

              <div className="mb-1">
                <Counter targetValue={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="text-base font-semibold text-blue-100 font-heading">
                {stat.label}
              </h3>

              <p className="text-xs text-slate-300/80 mt-1 leading-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
