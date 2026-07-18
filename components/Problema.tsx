import Reveal from "./Reveal";

const PAINS = [
  {
    title: "DS-160 confuso",
    text: "São dezenas de perguntas em inglês burocrático — e um erro simples no formulário pode virar dor de cabeça na entrevista.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: "Agendamento complicado",
    text: "Taxas, sites oficiais, datas que aparecem e somem: marcar a entrevista por conta própria vira um trabalho à parte.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Medo da entrevista",
    text: "Sem saber o que o oficial consular vai perguntar, a insegurança toma conta — e pode atrapalhar justamente na hora H.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    title: "Informação desencontrada",
    text: "Cada fórum e vídeo diz uma coisa diferente. Sem orientação profissional, você decide no achismo a etapa mais importante da viagem.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="12" />
        <line x1="11" y1="15" x2="11.01" y2="15" />
      </svg>
    ),
  },
];

export default function Problema() {
  return (
    <section className="py-24 md:py-32" id="problema">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal>
            <span className="chip">O problema</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Tirar o visto americano não precisa ser{" "}
              <span className="text-blue-deep">complicado.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Mas, sozinho, o processo costuma travar sempre nos mesmos pontos —
              e é aí que muita viagem fica só no plano:
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10 text-blue-deep transition-colors group-hover:bg-blue group-hover:text-white">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
