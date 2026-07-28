"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { FAQS, WA_DEFAULT } from "@/lib/site";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Todas", "Resultados", "Contrato", "Ética Médica", "Investimento", "Exclusividade"];

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCategory = selectedCategory === "Todas" || f.category === selectedCategory;
    const matchesSearch =
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-24 md:py-32" id="faq">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal><span className="chip">Perguntas Frequentes</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Dúvidas respondidas <span className="text-gradient">sem enrolação.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 leading-relaxed text-muted">
              Tudo o que você precisa saber sobre a gestão de tráfego, contrato mensal, segurança jurídica e resultados para a sua clínica.
            </p>
          </Reveal>

          {/* Search Box */}
          <Reveal delay={0.2} className="mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar dúvida (ex: contrato, CFM, resultado)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-line bg-panel/80 px-4 py-3 pl-11 font-display text-xs font-semibold text-ink outline-none transition-colors focus:border-neon"
              />
              <svg
                className="absolute left-4 top-3.5 text-muted"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </Reveal>

          {/* Category Filter Pills */}
          <Reveal delay={0.24} className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-neon text-base shadow-neon"
                    : "border border-line bg-white/[0.03] text-muted hover:border-neon/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <Reveal delay={0.3} className="mt-8">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border-b-2 border-neon pb-1 font-display text-sm font-bold uppercase tracking-wide text-neon transition-all hover:gap-4"
            >
              Falar direto no WhatsApp
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Accordion Questions */}
        <div className="flex flex-col gap-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-line p-8 text-center text-muted">
              Nenhuma pergunta encontrada para sua busca. Chama a gente no WhatsApp!
            </div>
          ) : (
            filteredFaqs.map((f, i) => {
              const open = openIdx === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className={`glass overflow-hidden transition-colors ${open ? "border-neon/30" : ""}`}>
                    <button
                      className="flex w-full items-center justify-between gap-5 p-6 text-left"
                      aria-expanded={open}
                      onClick={() => setOpenIdx(open ? null : i)}
                    >
                      <span className="font-display text-[16px] font-bold text-ink">{f.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          open ? "rotate-45 bg-neon text-base" : "bg-neon/10 text-neon"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          aria-hidden
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
