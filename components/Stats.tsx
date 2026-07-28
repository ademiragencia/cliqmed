"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function Counter({ target, prefix = "", suffix = "", decimals = 0 }: { target: number; prefix?: string; suffix?: string; decimals?: number; }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setValue(target); return; }
    const dur = 1600, start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);
  return <span ref={ref}>{prefix}{value.toFixed(decimals)}{suffix}</span>;
}

const STATS = [
  { target: 312, prefix: "+", suffix: "%", label: "aumento médio de pacientes novos em 90 dias" },
  { target: 3.4, suffix: "x", decimals: 1, label: "retorno médio sobre o investimento em anúncios" },
  { target: 11, prefix: "R$ ", label: "custo médio por lead qualificado na saúde" },
  { target: 94, suffix: "%", label: "das clínicas renovam o contrato após o 3º mês" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-line py-16 md:py-20" id="numeros">
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="font-display text-5xl font-bold tracking-tight text-neon md:text-6xl" style={{ textShadow: "0 0 30px rgba(59,247,196,0.4)" }}>
              <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </div>
            <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-muted lg:mx-0">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
