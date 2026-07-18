import Reveal from "./Reveal";

const SERVICES = [
  {
    num: "01",
    title: "Análise do perfil",
    text: "Entendemos seu histórico e seu objetivo de viagem antes de qualquer formulário — cada caso é um caso.",
  },
  {
    num: "02",
    title: "Checklist personalizado",
    text: "Você recebe a lista exata de documentos para o seu perfil. Nada de lista genérica copiada da internet.",
  },
  {
    num: "03",
    title: "DS-160 sem erros",
    text: "O formulário mais temido do processo, preenchido e revisado por quem faz isso todos os dias.",
  },
  {
    num: "04",
    title: "Guia de pagamento da taxa",
    text: "Emitimos a guia da taxa consular e orientamos o pagamento, feito por você direto ao governo americano.",
  },
  {
    num: "05",
    title: "Agendamento da entrevista",
    text: "Cuidamos do agendamento e buscamos a melhor data disponível no consulado da sua região.",
  },
  {
    num: "06",
    title: "Preparação para a entrevista",
    text: "Orientações completas e simulação por videochamada para você chegar confiante diante do oficial consular.",
  },
];

export default function Servicos() {
  return (
    <section className="bg-white py-24 md:py-32" id="servicos">
      <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="chip">O que fazemos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              A burocracia inteira,{" "}
              <span className="text-blue-deep">com a gente.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Acompanhamos você do início ao fim do processo: documentação,
              formulários, agendamento e preparação para a entrevista.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href="#planos"
              className="mt-7 inline-flex items-center gap-2 border-b-2 border-blue pb-1 font-display text-sm font-bold uppercase tracking-wider text-blue-deep transition-all hover:gap-4"
            >
              Conhecer os planos
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div>
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <div className="group flex gap-6 border-b border-line py-7 transition-all duration-300 first:pt-0 hover:pl-2 md:gap-8">
                <span className="font-display text-lg font-extrabold text-blue/40 transition-colors group-hover:text-blue">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
