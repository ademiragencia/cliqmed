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
              Do primeiro visto de turismo ao visto de investidor. Valores de
              assessoria alinhados ao mercado, com transparência sobre as taxas
              do governo.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VISTOS.map((v, i) => (
            <Reveal key={v.nome} delay={i * 0.06} className="h-full">
              <div className="card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-lift">
                <span className="self-start rounded-xl bg-blue/10 px-3 py-1.5 font-display text-sm font-extrabold tracking-tight text-blue-deep">
                  {v.sigla}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">{v.nome}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{v.desc}</p>
                <div className="mt-6 border-t border-line pt-5">
                  <div className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                    Assessoria a partir de
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-display text-sm font-bold text-muted">R$</span>
                    <span className="font-display text-3xl font-extrabold tracking-tight">
                      {v.preco}
                    </span>
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium text-muted/80">
                    {v.taxa} (à parte)
                  </div>
                </div>
                <a
                  href={v.cta}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-blue-deep transition-all hover:gap-3.5 hover:text-blue"
                >
                  Falar sobre este visto
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.42} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-deep p-7 text-white shadow-lift">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(300px 220px at 85% 0%, rgba(45,156,219,0.3), transparent 70%)",
                }}
              />
              <div className="relative flex h-full flex-col">
                <svg className="text-blue" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="12" />
                  <line x1="11" y1="15" x2="11.01" y2="15" />
                </svg>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                  Não sabe qual é o seu visto?
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                  Conte seu objetivo no diagnóstico gratuito e a nossa equipe
                  identifica o visto certo para o seu caso.
                </p>
                <a
                  href="#comecar"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-blue px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-deep"
                >
                  Descobrir meu visto
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">
            Valores de assessoria por processo e por pessoa. As taxas do governo
            americano são pagas por você diretamente aos órgãos oficiais.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
