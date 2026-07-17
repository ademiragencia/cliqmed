"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { WA_DIAGNOSTICO } from "@/lib/site";

const WORDS = ["pacientes", "agenda cheia", "previsibilidade", "resultado"];

function RotatingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative inline-block text-teal-deep">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
      <svg
        className="absolute -bottom-2 left-0 w-full text-teal"
        viewBox="0 0 200 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M3 9C50 3 150 3 197 8"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

const BARS = [34, 48, 42, 62, 70, 84, 96];

function DashboardCard() {
  return (
    <div className="relative">
      {/* floating badges */}
      <div className="absolute -left-4 -top-6 z-10 animate-floaty rounded-2xl border border-line bg-white px-4 py-3 shadow-lift md:-left-10">
        <div className="font-display text-xs font-bold uppercase tracking-wider text-muted">
          ROI médio
        </div>
        <div className="font-display text-2xl font-extrabold text-teal-deep">3.4x</div>
      </div>
      <div
        className="absolute -bottom-6 -right-3 z-10 animate-floaty rounded-2xl border border-line bg-white px-4 py-3 shadow-lift md:-right-8"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="font-display text-xs font-bold uppercase tracking-wider text-muted">
          Custo por lead
        </div>
        <div className="font-display text-2xl font-extrabold text-teal-deep">R$ 11</div>
      </div>

      {/* main card */}
      <div className="card overflow-hidden p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-muted">
            <span className="h-2 w-2 animate-blink rounded-full bg-teal" />
            Painel da clínica
          </div>
        </div>

        <div className="mb-1 font-display text-sm font-semibold text-muted">
          Pacientes novos este mês
        </div>
        <div className="mb-6 flex items-end gap-3">
          <span className="font-display text-6xl font-extrabold leading-none tracking-tight">
            +47
          </span>
          <span className="mb-1 rounded-full bg-teal/15 px-2.5 py-1 font-display text-xs font-bold text-teal-deep">
            ↑ 312% vs. antes
          </span>
        </div>

        <div className="flex h-28 items-end gap-2.5">
          {BARS.map((h, idx) => (
            <motion.div
              key={idx}
              className="flex-1 origin-bottom rounded-t-lg bg-gradient-to-t from-teal-dark to-teal"
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0.08 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.7, delay: 0.5 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between font-display text-[10px] font-semibold uppercase tracking-wider text-muted/70">
          <span>Jan</span>
          <span>Fev</span>
          <span>Mar</span>
          <span>Abr</span>
          <span>Mai</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>

      {/* notification toasts */}
      <div
        className="absolute -right-2 top-16 z-10 flex items-center gap-3 rounded-2xl border border-line bg-white py-3 pl-3 pr-5 shadow-lift md:-right-12"
        style={{ animation: "toastIn 7s ease-in-out infinite" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1faf54]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          </svg>
        </span>
        <div>
          <div className="font-display text-sm font-bold">Nova consulta marcada</div>
          <div className="text-xs text-muted">pelo WhatsApp · agora</div>
        </div>
      </div>
      <div
        className="absolute -left-2 bottom-24 z-10 flex items-center gap-3 rounded-2xl border border-line bg-white py-3 pl-3 pr-5 shadow-lift md:-left-12"
        style={{ animation: "toastIn2 7s ease-in-out infinite" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/15 text-teal-deep">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M19 8v6M22 11h-6" />
          </svg>
        </span>
        <div>
          <div className="font-display text-sm font-bold">Lead qualificado</div>
          <div className="text-xs text-muted">pelo Instagram · há 2 min</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-24 pt-14 md:pb-32 md:pt-20"
    >
      {/* background decor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 400px at 85% 10%, rgba(0,180,162,0.10), transparent 70%), radial-gradient(500px 400px at 5% 80%, rgba(255,181,71,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,33,29,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,33,29,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="chip">
              <span className="h-2 w-2 animate-blink rounded-full bg-teal" />
              Marketing de performance para saúde
            </span>
          </motion.div>

          <motion.h1 className="heading-xl mt-6" {...fadeUp(0.08)}>
            Sua clínica não precisa de likes.
            <br />
            Precisa de <RotatingWord />
            <span className="text-teal-deep">.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            {...fadeUp(0.16)}
          >
            A Cliqmed transforma anúncio em consulta marcada. Tráfego pago,
            conteúdo e funil de captação — tudo medido por uma única métrica:{" "}
            <strong className="font-semibold text-ink">
              pacientes novos na sua agenda.
            </strong>
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-4" {...fadeUp(0.24)}>
            <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Quero meu diagnóstico gratuito
            </a>
            <a href="#metodo" className="btn-ghost">
              Ver o método
            </a>
          </motion.div>

          <motion.ul
            className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-muted"
            {...fadeUp(0.32)}
          >
            {["Sem fidelidade", "Resultado em 30 dias", "1 clínica por especialidade"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              )
            )}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 md:px-10 lg:px-0"
        >
          <DashboardCard />
        </motion.div>
      </div>
    </section>
  );
}
