import Reveal from "./Reveal";

const STEPS = [
  { num: "1", title: "Diagnóstico", text: "Uma conversa de 30–45 min para entender sua clínica, público e o que já foi tentado. Grátis, sem compromisso." },
  { num: "2", title: "Estratégia", text: "Montamos o plano: canais, verba, campanhas e calendário de conteúdo — para a sua especialidade e região." },
  { num: "3", title: "Execução", text: "Anúncios no ar, perfil otimizado, conteúdo publicado. Tudo feito pela nossa equipe, sem tomar o seu tempo." },
  { num: "4", title: "Crescimento", text: "Otimização semanal e relatório com números reais. O que funciona escala; o que não funciona sai." },
];

export default function Processo() {
  return (
    <section className="py-24 md:py-32" id="processo">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="chip">Como funciona</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">Do primeiro contato à <span className="text-gradient">agenda cheia.</span></h2>
          </Reveal>
        </div>
        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-neon/10 via-neon/50 to-neon/10 md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="relative text-center md:px-2">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neon/40 bg-panel font-display text-xl font-bold text-neon shadow-neon">{s.num}</div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mx-auto mt-2.5 max-w-[260px] text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
