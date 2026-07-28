"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-1 text-lime" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  const [filter, setFilter] = useState("Todas");

  const categories = ["Todas", "Odontologia", "Estética", "Dermatologia", "Cirurgia"];

  const filteredTestimonials = filter === "Todas"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.specialty === filter);

  return (
    <section className="relative py-24 md:py-32" id="resultados">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="chip">Casos de Sucesso</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Clínicas reais. <span className="text-gradient">Agendas lotadas.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Sem promessas vazias, sem métricas de vaidade. Veja os depoimentos de médicos e dentistas que transformaram seus consultórios com a Cliqmed.
            </p>
          </Reveal>
        </div>

        {/* Specialty Filter Buttons */}
        <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-neon text-base shadow-neon"
                  : "border border-line bg-white/[0.03] text-muted hover:border-neon/40 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Testimonial Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="glass glass-hover relative flex h-full flex-col justify-between p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <Stars />
                    {t.metric && (
                      <span className="rounded-full bg-neon/15 px-3 py-1 font-display text-[11px] font-bold text-neon">
                        {t.metric}
                      </span>
                    )}
                  </div>
                  <blockquote className="mt-5 leading-relaxed text-ink/90">
                    “{t.text}”
                  </blockquote>
                </div>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon to-neon-deep font-display text-lg font-bold text-base shadow-neon">
                    {t.initial}
                  </span>
                  <div>
                    <div className="font-display font-bold text-ink">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                    <div className="text-[11px] font-medium text-neon">{t.city}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
