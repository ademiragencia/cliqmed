"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { WA_DIAGNOSTICO } from "@/lib/site";

const WORDS = ["complicação", "burocracia", "estresse", "achismo"];

function RotatingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative inline-block text-blue-deep">
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
        className="absolute -bottom-2 left-0 w-full text-blue"
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

const STEPS = [
  { label: "Análise do perfil", done: true },
  { label: "Checklist personalizado", done: true },
  { label: "DS-160 preenchido", done: true },
  { label: "Guia de pagamento emitida", done: true },
  { label: "Entrevista agendada", done: false, current: true },
  { label: "Preparação para a entrevista", done: false },
];

function PortalCard() {
  return (
    <div className="relative">
      {/* floating badges */}
      <div className="absolute -left-4 -top-6 z-10 animate-floaty rounded-2xl border border-line bg-white px-4 py-3 shadow-lift md:-left-10">
        <div className="font-display text-xs font-bold uppercase tracking-wider text-muted">
          Atendimento
        </div>
        <div className="font-display text-2xl font-extrabold text-blue-deep">100% online</div>
      </div>
      <div
        className="absolute -bottom-6 -right-3 z-10 animate-floaty rounded-2xl border border-line bg-white px-4 py-3 shadow-lift md:-right-8"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="font-display text-xs font-bold uppercase tracking-wider text-muted">
          Suporte
        </div>
        <div className="font-display text-2xl font-extrabold text-blue-deep">WhatsApp</div>
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
            <span className="h-2 w-2 animate-blink rounded-full bg-blue" />
            Portal do cliente
          </div>
        </div>

        <div className="mb-1 font-display text-sm font-semibold text-muted">
          Andamento do seu processo
        </div>
        <div className="mb-6 flex items-end gap-3">
          <span className="font-display text-6xl font-extrabold leading-none tracking-tight">
            4/6
          </span>
          <span className="mb-1 rounded-full bg-blue/15 px-2.5 py-1 font-display text-xs font-bold text-blue-deep">
            etapas concluídas
          </span>
        </div>

        <ul className="space-y-3">
          {STEPS.map((s, idx) => (
            <motion.li
              key={s.label}
              className="flex items-center gap-3 text-sm font-medium"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {s.done ? (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              ) : s.current ? (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-blue bg-blue/10">
                  <span className="h-2 w-2 animate-blink rounded-full bg-blue" />
                </span>
              ) : (
                <span className="h-6 w-6 shrink-0 rounded-full border-2 border-line" />
              )}
              <span className={s.done || s.current ? "text-ink" : "text-muted/70"}>
                {s.label}
              </span>
              {s.current && (
                <span className="ml-auto rounded-full bg-blue/10 px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-blue-deep">
                  em andamento
                </span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* notification toasts */}
      <div
        className="absolute -right-2 top-16 z-10 flex items-center gap-3 rounded-2xl border border-line bg-white py-3 pl-3 pr-5 shadow-lift md:-right-12"
        style={{ animation: "toastIn 7s ease-in-out infinite" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue/15 text-blue-deep">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          </svg>
        </span>
        <div>
          <div className="font-display text-sm font-bold">Entrevista agendada</div>
          <div className="text-xs text-muted">Consulado · agora</div>
        </div>
      </div>
      <div
        className="absolute -left-2 bottom-24 z-10 flex items-center gap-3 rounded-2xl border border-line bg-white py-3 pl-3 pr-5 shadow-lift md:-left-12"
        style={{ animation: "toastIn2 7s ease-in-out infinite" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1faf54]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h8M8 14h5" />
          </svg>
        </span>
        <div>
          <div className="font-display text-sm font-bold">DS-160 revisado</div>
          <div className="text-xs text-muted">pela equipe · há 2 min</div>
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
            "radial-gradient(600px 400px at 85% 10%, rgba(45,156,219,0.12), transparent 70%), radial-gradient(500px 400px at 5% 80%, rgba(10,35,66,0.06), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,35,66,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,35,66,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="chip">
              <span className="h-2 w-2 animate-blink rounded-full bg-blue" />
              Assessoria especializada em vistos americanos
            </span>
          </motion.div>

          <motion.h1 className="heading-xl mt-6" {...fadeUp(0.08)}>
            Seu visto americano,
            <br />
            sem <RotatingWord />
            <span className="text-blue-deep">.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            {...fadeUp(0.16)}
          >
            A BlueVisa cuida da burocracia para que você foque na sua viagem.
            Análise de perfil, DS-160, agendamento e preparação para a
            entrevista —{" "}
            <strong className="font-semibold text-ink">
              tudo 100% online, do início ao fim.
            </strong>
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-4" {...fadeUp(0.24)}>
            <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Começar minha assessoria
            </a>
            <a href="#metodo" className="btn-ghost">
              Como funciona
            </a>
          </motion.div>

          <motion.ul
            className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-muted"
            {...fadeUp(0.32)}
          >
            {["100% online", "Diagnóstico gratuito", "Suporte via WhatsApp"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
          <PortalCard />
        </motion.div>
      </div>
    </section>
  );
}
