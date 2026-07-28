import Reveal from "./Reveal";

const COMPLIANCE_PILLARS = [
  {
    title: "Resolução CFM 2.336/2023",
    desc: "Adequação completa às novas regras de publicidade médica. Permite divulgação de valores, equipamentos e instalações de forma sóbria e informativa.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Código de Ética Odontológica (CFO)",
    desc: "Anúncios e conteúdos alinhados com o conselho de odontologia. Transparência na divulgação de qualificações, registro e especialidades.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Antes & Depois com Consentimento",
    desc: "Uso de imagens educativas e autorizadas pelo paciente com fins exclusivamente instrutivos e sem sensacionalismo ou promessas milagrosas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Inviolabilidade de Registro (CRM / CRO)",
    desc: "Toda peça publicada contém CRM/RQE ou CRO visíveis, garantindo a idoneidade técnica e protegendo o seu registro profissional.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function EticaMedica() {
  return (
    <section className="relative py-24 md:py-32" id="etica">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><span className="chip">Segurança Jurídica & Ética</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Captação de pacientes com <span className="text-gradient">100% de respeito aos conselhos.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Sabemos o valor do seu registro profissional (CRM/CRO). Na Cliqmed, todo o marketing é desenhado para atrair pacientes sem jamais utilizar práticas apelativas ou arriscar sanções.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPLIANCE_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/15 text-neon shadow-neon">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{pillar.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-neon/30 bg-neon/[0.05] px-6 py-4 text-sm font-medium text-ink backdrop-blur">
            <span className="flex h-3 w-3 rounded-full bg-neon animate-blink" />
            <span>
              <strong className="text-neon">Sua autoridade intacta:</strong> criamos campanhas elegantes que valorizam o profissional da saúde e passam credibilidade imediata ao paciente.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
