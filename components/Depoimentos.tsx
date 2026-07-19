import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-1 text-lime" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="py-24 md:py-32" id="resultados">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal><span className="chip">Quem já viveu isso</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">Clínicas reais. <span className="text-gradient">Agendas reais.</span></h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">Sem promessa vazia, sem milagre. Estratégia certa + execução consistente = resultado que aparece na agenda.</p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="glass glass-hover flex h-full flex-col p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink/90">“{t.text}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neon to-neon-deep font-display text-lg font-bold text-base">{t.initial}</span>
                  <div>
                    <div className="font-display font-bold text-ink">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
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
