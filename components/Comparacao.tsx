import Reveal from "./Reveal";

const SEM = [
  "Agenda dependente de indicação",
  "Concorrente aparece primeiro no Google",
  "Instagram parado, sem retorno",
  "Você posta sozinho nas brechas do dia",
  "Faturamento imprevisível todo mês",
  "Decisões no achismo, sem dados",
];

const COM = [
  "Fluxo constante de pacientes novos",
  "Sua clínica no topo do Google e do Instagram",
  "Equipe cuidando de tudo por você",
  "Você foca em atender — só isso",
  "Previsibilidade de agenda e faturamento",
  "Relatórios com números reais toda semana",
];

export default function Comparacao() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 500px at 50% 0%, rgba(0,180,162,0.12), transparent 70%)",
        }}
      />
      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="chip-dark">A virada de chave</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5 text-white">
              O que muda quando a Cliqmed{" "}
              <span className="text-teal">assume o seu digital.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <div className="mb-6 inline-flex rounded-full bg-red-400/15 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Hoje, sem estratégia
              </div>
              <ul className="space-y-4">
                {SEM.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/65">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-400/15 text-red-300">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative h-full rounded-3xl border border-teal/40 bg-gradient-to-b from-teal/15 to-teal/5 p-8">
              <div className="mb-6 inline-flex rounded-full bg-teal/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-teal">
                Em 30 dias, com a Cliqmed
              </div>
              <ul className="space-y-4">
                {COM.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] font-medium leading-relaxed text-white/90">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-deep-darker">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
