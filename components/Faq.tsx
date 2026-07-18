"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { FAQS, WA_DEFAULT } from "@/lib/site";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="chip">Perguntas frequentes</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Dúvidas respondidas{" "}
              <span className="text-blue-deep">com transparência.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3.5">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={`card overflow-hidden transition-colors ${open ? "border-blue/40" : ""}`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenIdx(open ? null : i)}
                  >
                    <span className="font-display text-[17px] font-bold">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        open ? "rotate-45 bg-blue text-white" : "bg-blue/10 text-blue-deep"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
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
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-muted">
            Não achou a sua dúvida?{" "}
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="font-display font-bold text-blue-deep underline decoration-blue/40 underline-offset-4 transition-colors hover:text-blue"
            >
              Pergunte no WhatsApp
            </a>{" "}
            — respondemos sem compromisso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
