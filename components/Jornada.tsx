import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Diagnóstico gratuito",
    text: "Uma conversa pelo WhatsApp para entender seu perfil e indicar o plano ideal. Sem custo, sem compromisso.",
  },
  {
    title: "Onboarding",
    text: "Você entra no portal do cliente e recebe o checklist personalizado de documentos para o seu caso.",
  },
  {
    title: "Execução do processo",
    text: "Nossa equipe preenche o DS-160, emite a guia de pagamento da taxa e agenda a sua entrevista.",
  },
  {
    title: "Preparação para a entrevista",
    text: "Orientações completas — e, nos planos com simulação, um treino por videochamada para o grande dia.",
  },
  {
    title: "Dia da entrevista",
    text: "Você comparece ao consulado preparado e confiante. A decisão é do oficial consular — e acompanhamos você até o resultado.",
  },
];

export default function Jornada() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 md:py-32" id="jornada">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 0%, rgba(45,156,219,0.14), transparent 70%), radial-gradient(600px 400px at 10% 100%, rgba(45,156,219,0.08), transparent 70%)",
        }}
      />
      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="chip-dark">Como funciona</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5 text-white">
              Sua jornada, do diagnóstico ao{" "}
              <span className="text-blue">embarque.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div
            aria-hidden
            className="absolute bottom-6 left-6 top-2 border-l-2 border-dashed border-blue/30"
          />
          <ol className="space-y-11">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <li className="relative flex gap-6 md:gap-8">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue/50 bg-deep font-display text-lg font-extrabold text-blue shadow-glow">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/60">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
            <Reveal delay={0.45}>
              <li className="relative flex gap-6 md:gap-8">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue text-white shadow-glow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" transform="rotate(-42 12 12)" />
                  </svg>
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-xl font-bold text-white">Boa viagem!</h3>
                  <p className="mt-2 leading-relaxed text-white/60">
                    Com o visto no passaporte, é só embarcar. E seguimos por
                    perto no pós-atendimento — para renovações e as próximas
                    viagens da família.
                  </p>
                </div>
              </li>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  );
}
