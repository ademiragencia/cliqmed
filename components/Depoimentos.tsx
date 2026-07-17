import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-1 text-amber" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="py-24 md:py-32" id="resultados">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal>
            <span className="chip">Quem já viveu isso</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Clínicas reais.{" "}
              <span className="text-teal-deep">Agendas reais.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Sem promessa vazia, sem milagre. Estratégia certa + execução
              consistente = resultado que aparece na agenda.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="card flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <Stars />
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink/85">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark font-display text-lg font-extrabold text-white">
                    {t.initial}
                  </span>
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
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
