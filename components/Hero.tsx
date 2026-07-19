"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Aurora from "./Aurora";
import { WA_DIAGNOSTICO } from "@/lib/site";

const WORDS = ["pacientes", "agenda cheia", "previsibilidade", "faturamento"];

function RotatingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          className="inline-block text-gradient"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const BARS = [30, 44, 38, 58, 66, 82, 100];

function Dashboard() {
  return (
    <div className="relative">
      <div className="absolute -left-5 -top-6 z-20 animate-floaty rounded-2xl border border-line bg-panel/90 px-4 py-3 shadow-card backdrop-blur md:-left-10">
        <div className="font-display text-[10px] font-bold uppercase tracking-widest text-muted">ROI médio</div>
        <div className="font-display text-2xl font-bold text-neon">3.4x</div>
      </div>
      <div
        className="absolute -bottom-6 -right-4 z-20 animate-floaty rounded-2xl border border-line bg-panel/90 px-4 py-3 shadow-card backdrop-blur md:-right-8"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="font-display text-[10px] font-bold uppercase tracking-widest text-muted">Custo/lead</div>
        <div className="font-display text-2xl font-bold text-neon">R$ 11</div>
      </div>

      <div className="glass overflow-hidden p-6 shadow-card md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="h-2 w-2 animate-blink rounded-full bg-neon" /> Painel da clínica
          </div>
        </div>

        <div className="mb-1 font-display text-sm font-medium text-muted">Pacientes novos este mês</div>
        <div className="mb-6 flex items-end gap-3">
          <span className="font-display text-6xl font-bold leading-none tracking-tight text-ink">+47</span>
          <span className="mb-1 rounded-full bg-neon/15 px-2.5 py-1 font-display text-xs font-bold text-neon">↑ 312%</span>
        </div>

        <div className="flex h-28 items-end gap-2.5">
          {BARS.map((h, idx) => (
            <motion.div
              key={idx}
              className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-neon-deep to-neon"
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0.06 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.7, delay: 0.4 + idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between font-display text-[9px] font-semibold uppercase tracking-widest text-muted/60">
          {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"].map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>

      <div
        className="absolute -right-3 top-14 z-20 flex items-center gap-3 rounded-2xl border border-line bg-panel/95 py-3 pl-3 pr-5 shadow-card backdrop-blur md:-right-12"
        style={{ animation: "toastIn 7s ease-in-out infinite" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#4ee27f]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /></svg>
        </span>
        <div>
          <div className="font-display text-sm font-bold text-ink">Consulta marcada</div>
          <div className="text-xs text-muted">pelo WhatsApp · agora</div>
        </div>
      </div>
      <div
        className="absolute -left-3 bottom-24 z-20 flex items-center gap-3 rounded-2xl border border-line bg-panel/95 py-3 pl-3 pr-5 shadow-card backdrop-blur md:-left-12"
        style={{ animation: "toastIn2 7s ease-in-out infinite" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/15 text-neon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg>
        </span>
        <div>
          <div className="font-display text-sm font-bold text-ink">Lead qualificado</div>
          <div className="text-xs text-muted">pelo Instagram · há 2 min</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const up = (d: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="inicio" className="relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-24">
      <Aurora />
      <div className="container-site relative grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div {...up(0)}>
            <span className="chip">
              <span className="h-2 w-2 animate-blink rounded-full bg-neon" />
              Marketing de performance para a saúde
            </span>
          </motion.div>

          <motion.h1 className="heading-xl mt-6" {...up(0.08)}>
            Sua clínica não
            <br />
            precisa de likes.
            <br />
            Precisa de <RotatingWord />
            <span className="text-neon">.</span>
          </motion.h1>

          <motion.p className="mt-7 max-w-lg text-lg leading-relaxed text-muted" {...up(0.16)}>
            A Cliqmed transforma anúncio em consulta marcada. Tráfego pago, conteúdo
            e funil de captação — medidos por uma única métrica:{" "}
            <strong className="font-semibold text-ink">pacientes novos na sua agenda.</strong>
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-4" {...up(0.24)}>
            <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
              Quero meu diagnóstico grátis
            </a>
            <a href="#metodo" className="btn-ghost">Ver o método</a>
          </motion.div>

          <motion.ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-muted" {...up(0.32)}>
            {["Sem fidelidade", "Resultado em 30 dias", "1 clínica por especialidade"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3BF7C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="20 6 9 17 4 12" /></svg>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 md:px-10 lg:px-0"
        >
          <Dashboard />
        </motion.div>
      </div>
    </section>
  );
}
