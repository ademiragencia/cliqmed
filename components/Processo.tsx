import Reveal from "./Reveal";

const STEPS = [
  {
    num: "1",
    title: "Diagnóstico gratuito",
    text: "Uma conversa pelo WhatsApp para entender seu perfil e seu objetivo de viagem. Sem custo, sem compromisso.",
  },
  {
    num: "2",
    title: "Onboarding",
    text: "Você entra no portal do cliente, recebe o checklist personalizado e organizamos juntos toda a documentação.",
  },
  {
    num: "3",
    title: "Execução",
    text: "Nossa equipe preenche o DS-160, emite a guia de pagamento da taxa e agenda a sua entrevista no consulado.",
  },
  {
    num: "4",
    title: "Entrevista",
    text: "Você chega preparado: orientações completas e, nos planos Premium, Family e VIP, simulação da entrevista.",
  },
];

export default function Processo() {
  return (
    <section className="bg-white py-24 md:py-32" id="processo">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="chip">Como funciona</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Do primeiro contato ao{" "}
              <span className="text-blue-deep">dia da entrevista.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-blue/10 via-blue/50 to-blue/10 md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="relative text-center md:px-2">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-deep font-display text-xl font-extrabold text-blue shadow-lift">
                  {s.num}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mx-auto mt-2.5 max-w-[260px] text-sm leading-relaxed text-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
