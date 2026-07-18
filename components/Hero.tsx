"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WA_DEFAULT } from "@/lib/site";
import { LogoMark } from "./Logo";

const STARS: Array<[number, number, number]> = [
  [8, 12, 2], [15, 72, 1], [22, 38, 1], [30, 88, 2], [12, 55, 1],
  [40, 18, 1], [35, 63, 2], [48, 80, 1], [52, 30, 1], [60, 8, 2],
  [65, 50, 1], [70, 92, 1], [18, 25, 1], [25, 95, 2], [55, 68, 1],
  [45, 45, 1], [10, 85, 1], [62, 25, 2], [38, 5, 1], [75, 75, 1],
];

function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {STARS.map(([top, left, size], i) => (
        <span
          key={i}
          className={`absolute rounded-full ${size === 2 ? "h-1.5 w-1.5 bg-blue/40" : "h-1 w-1 bg-white/25"}`}
          style={{ top: `${top}%`, left: `${left}%` }}
        />
      ))}
    </div>
  );
}

function BoardingPass() {
  return (
    <div className="group relative mx-auto max-w-3xl -rotate-1 transition-transform duration-500 hover:rotate-0">
      <div className="overflow-hidden rounded-3xl bg-white text-ink shadow-lift md:flex">
        {/* main section */}
        <div className="flex-1 p-7 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 font-display text-sm font-extrabold tracking-tight">
              <LogoMark variant="dark" className="h-7 w-7" />
              Blue<span className="text-blue">Visa</span>
            </div>
            <div className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
              Cartão de embarque do seu sonho
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-blue-deep">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-blue" />
              Em preparação
            </span>
          </div>

          <div className="mt-7 flex items-center gap-4 md:gap-6">
            <div>
              <div className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">BRA</div>
              <div className="mt-0.5 text-xs font-medium text-muted">Brasil</div>
            </div>
            <div className="relative flex-1">
              <div className="border-t-2 border-dashed border-line" />
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-blue transition-transform duration-500 group-hover:translate-x-2"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
            <div className="text-right">
              <div className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">USA</div>
              <div className="mt-0.5 text-xs font-medium text-muted">Estados Unidos</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {[
              ["Passageiro", "Você e os seus"],
              ["Assessoria", "100% online"],
              ["Classe", "Primeira"],
              ["Suporte", "WhatsApp"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                  {k}
                </div>
                <div className="mt-1 font-display text-sm font-bold">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* stub */}
        <div className="relative border-t-2 border-dashed border-line p-7 md:w-56 md:border-l-2 md:border-t-0 md:p-8">
          <span aria-hidden className="absolute -left-3.5 -top-3.5 hidden h-7 w-7 rounded-full bg-deep-darker md:block" />
          <span aria-hidden className="absolute -bottom-3.5 -left-3.5 hidden h-7 w-7 rounded-full bg-deep-darker md:block" />
          <div className="flex items-center justify-between gap-6 md:h-full md:flex-col md:items-start md:justify-between">
            <div>
              <div className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                Vistos
              </div>
              <div className="font-display text-3xl font-extrabold tracking-tight text-blue-deep">
                EUA
              </div>
              <div className="mt-0.5 text-xs font-medium text-muted">Todos os tipos</div>
            </div>
            <svg className="h-12 w-28 text-ink md:w-full" viewBox="0 0 120 48" aria-hidden>
              {[0, 5, 9, 15, 20, 23, 29, 34, 40, 44, 50, 56, 60, 67, 71, 77, 84, 88, 95, 100, 105, 111, 116].map(
                (x, i) => (
                  <rect key={x} x={x} y="0" width={i % 3 === 0 ? 3 : 1.6} height="48" fill="currentColor" />
                )
              )}
            </svg>
          </div>
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
    <section id="inicio" className="relative overflow-hidden bg-deep-darker pb-24 pt-36 md:pb-28 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(45,156,219,0.22), transparent 70%), radial-gradient(700px 500px at 85% 90%, rgba(45,156,219,0.08), transparent 70%)",
        }}
      />
      <Starfield />
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 w-[900px] -translate-x-1/2 opacity-25"
        viewBox="0 0 900 300"
        fill="none"
      >
        <path d="M40 270 Q 450 -60 860 230" stroke="#2D9CDB" strokeWidth="2" strokeDasharray="2 12" strokeLinecap="round" />
      </svg>

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)}>
            <span className="chip-dark">
              <span className="h-2 w-2 animate-blink rounded-full bg-blue" />
              Assessoria especializada em vistos americanos
            </span>
          </motion.div>

          <motion.h1 className="heading-xl mt-7 text-white" {...fadeUp(0.08)}>
            Seu visto americano,
            <br />
            <span className="text-blue">sem complicação.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65"
            {...fadeUp(0.16)}
          >
            A BlueVisa cuida da burocracia para que você foque na sua viagem.
            Documentação, formulários, agendamento e preparação para a
            entrevista, em todos os tipos de visto.{" "}
            <strong className="font-semibold text-white">
              Tudo 100% online, do início ao fim.
            </strong>
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap justify-center gap-4" {...fadeUp(0.24)}>
            <a href="#comecar" className="btn-primary">
              Começar minha assessoria
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/25 px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue hover:text-blue"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={reduce ? undefined : { opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <BoardingPass />
        </motion.div>

        <motion.ul
          className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/50"
          {...fadeUp(0.55)}
        >
          {["Diagnóstico gratuito", "Atendimento humanizado", "Portal do cliente"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
