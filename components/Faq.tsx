"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { FAQS, WA_DEFAULT } from "@/lib/site";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal><span className="chip">Perguntas frequentes</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">Dúvidas respondidas <span className="text-gradient">sem enrolação.</span></h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 leading-relaxed text-muted">Não achou a sua? Chama no WhatsApp — respondemos qualquer pergunta, sem compromisso.</p>
          </Reveal>
          <Reveal delay={0.24}>
            <a href={WA_DEFAULT} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 border-b-2 border-neon pb-1 font-display text-sm font-bold uppercase tracking-wide text-neon transition-all hover:gap-4">
              Falar com a Cliqmed
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
          </Reveal>
        </div>
        <div className="flex flex-col gap-3.5">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`glass overflow-hidden transition-colors ${open ? "border-neon/30" : ""}`}>
                  <button className="flex w-full items-center justify-between gap-5 p-6 text-left" aria-expanded={open} onClick={() => setOpenIdx(open ? null : i)}>
                    <span className="font-display text-[17px] font-bold text-ink">{f.q}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? "rotate-45 bg-neon text-base" : "bg-neon/10 text-neon"}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                        <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
