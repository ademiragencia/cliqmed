"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function Counter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(target);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const STATS = [
  { target: 100, suffix: "%", decimals: 0, label: "do processo online — você não sai de casa em nenhuma etapa" },
  { target: 10, suffix: " anos", decimals: 0, label: "de validade do visto de turismo americano (B1/B2)" },
  { target: 4, decimals: 0, label: "planos sob medida, para cada perfil e momento de viagem" },
  { target: 3, decimals: 0, label: "canais de atendimento: WhatsApp, e-mail e videochamada" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-deep-darker py-16 md:py-20" id="numeros">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(500px 300px at 20% 0%, rgba(45,156,219,0.16), transparent 70%), radial-gradient(500px 300px at 85% 100%, rgba(45,156,219,0.10), transparent 70%)",
        }}
      />
      <div className="container-site relative grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="font-display text-5xl font-extrabold tracking-tight text-blue md:text-6xl">
              <Counter {...s} />
            </div>
            <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-white/60 lg:mx-0">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
