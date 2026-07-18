import Reveal from "./Reveal";
import { VISTOS } from "@/lib/site";

export default function Vistos() {
  return (
    <section className="py-24 md:py-32" id="vistos">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="chip">Todos os vistos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Assessoria para todos os tipos de{" "}
              <span className="text-blue-deep">visto americano.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Do primeiro visto de turismo ao Green Card. Entenda cada
              categoria e fale com a equipe sobre o seu caso.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VISTOS.map((v, i) => (
            <Reveal key={v.nome} delay={(i % 3) * 0.08} className="h-full">
              <div className="card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-lift md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-xl bg-blue/10 px-3 py-1.5 font-display text-sm font-extrabold tracking-tight text-blue-deep">
                    {v.sigla}
                  </span>
                  <svg className="text-blue/40" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" transform="rotate(-42 12 12)" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug">{v.nome}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.desc}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
                  {v.pontos.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                      <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={v.cta}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-blue-deep transition-all hover:gap-3.5 hover:text-blue"
                >
                  Falar sobre este visto
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-6 overflow-hidden rounded-3xl bg-deep p-8 text-white shadow-lift md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(500px 300px at 90% 0%, rgba(45,156,219,0.3), transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
              <svg className="hidden text-blue md:block" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="12" />
                <line x1="11" y1="15" x2="11.01" y2="15" />
              </svg>
              <div>
                <h3 className="font-display text-xl font-bold">Não sabe qual é o seu visto?</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  Conte seu objetivo no formulário de qualificação e a nossa
                  equipe identifica o visto certo para o seu caso, com o
                  orçamento completo no diagnóstico gratuito.
                </p>
              </div>
              <a
                href="#comecar"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-blue px-7 py-4 font-display text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-deep"
              >
                Descobrir meu visto
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">
            As taxas do governo americano são pagas por você diretamente aos
            órgãos oficiais. Nos processos de imigração (EB-1 e EB-2 NIW), o
            trabalho jurídico é conduzido com advogados parceiros licenciados
            nos EUA.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
