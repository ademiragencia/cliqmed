import Reveal from "./Reveal";

const PILLARS = [
  {
    num: "01",
    title: "Atração",
    sub: "Tráfego pago que traz o paciente certo",
    items: [
      "Campanhas no Meta Ads (Instagram e Facebook)",
      "Google Ads para quem já está procurando",
      "Segmentação por região e especialidade",
      "Criativos e copy feitos para saúde",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Conversão",
    sub: "Conteúdo e funil que transformam clique em consulta",
    items: [
      "Perfil posicionado como autoridade",
      "Conteúdo estratégico que gera confiança",
      "Landing page e funil de captação",
      "WhatsApp integrado para agendar na hora",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Escala",
    sub: "Dados e otimização para crescer todo mês",
    items: [
      "Otimização semanal das campanhas",
      "Relatórios com números reais — sem achismo",
      "Testes contínuos de criativos e públicos",
      "Reunião estratégica de crescimento",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
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
            <span className="chip">O método Cliqmed</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Um sistema completo que transforma{" "}
              <span className="text-teal-deep">cliques em consultas.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Não vendemos “pacote de posts”. Operamos um sistema de aquisição de
              pacientes com três engrenagens que trabalham juntas:
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-bg p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-lift">
                <span className="pointer-events-none absolute -right-3 -top-6 font-display text-[110px] font-extrabold leading-none text-ink/[0.045] transition-colors group-hover:text-teal/10">
                  {p.num}
                </span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white shadow-glow">
                  {p.icon}
                </div>
                <h3 className="font-display text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-1.5 font-medium text-teal-deep">{p.sub}</p>
                <ul className="mt-6 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
