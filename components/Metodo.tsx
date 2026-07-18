import Reveal from "./Reveal";

const PILLARS = [
  {
    num: "01",
    title: "Preparação",
    sub: "Seu processo organizado desde o primeiro dia",
    items: [
      "Análise completa do seu perfil",
      "Checklist personalizado de documentos",
      "Portal do cliente para acompanhar tudo",
      "Planejamento de cada etapa do processo",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Execução",
    sub: "A burocracia inteira feita pela nossa equipe",
    items: [
      "Preenchimento profissional do DS-160",
      "Emissão da guia de pagamento da taxa",
      "Agendamento da entrevista no consulado",
      "Revisão documental completa",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Entrevista",
    sub: "Você confiante diante do oficial consular",
    items: [
      "Simulação da entrevista por videochamada",
      "Orientações de postura e respostas",
      "Checklist do dia da entrevista",
      "Suporte até a conclusão do processo",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
];

export default function Metodo() {
  return (
    <section className="bg-white py-24 md:py-32" id="metodo">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal>
            <span className="chip">O método BlueVisa</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Assessoria completa, do primeiro documento{" "}
              <span className="text-blue-deep">ao dia da entrevista.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Nada de PDF genérico ou tutorial solto. Acompanhamos o seu caso do
              início ao fim, em três frentes que trabalham juntas:
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-bg p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-lift">
                <span className="pointer-events-none absolute -right-3 -top-6 font-display text-[110px] font-extrabold leading-none text-ink/[0.045] transition-colors group-hover:text-blue/10">
                  {p.num}
                </span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-white shadow-glow">
                  {p.icon}
                </div>
                <h3 className="font-display text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-1.5 font-medium text-blue-deep">{p.sub}</p>
                <ul className="mt-6 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
