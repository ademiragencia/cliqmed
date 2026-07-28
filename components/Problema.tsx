import Reveal from "./Reveal";

const PAINS = [
  { title: "Invisível no Google", text: "Quem busca sua especialidade na cidade encontra o concorrente — e ele fica com o paciente.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>) },
  { title: "Instagram que não converte", text: "Post bonito, curtida de colega, zero paciente novo. Conteúdo sem estratégia é diário — não é marketing.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>) },
  { title: "Anúncio que virou prejuízo", text: "Já impulsionou post, já tentou anunciar, o dinheiro sumiu. O problema nunca foi a ferramenta — foi a estratégia.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>) },
  { title: "Refém da indicação", text: "Mês bom, mês ruim — sem controle nenhum. Faturamento imprevisível não sustenta crescimento.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="17" y1="8" x2="22" y2="13" /><line x1="22" y1="8" x2="17" y2="13" /></svg>) },
];

export default function Problema() {
  return (
    <section className="py-24 md:py-32" id="problema">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal><span className="chip">O diagnóstico</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">Sua agenda não está vazia por falta de <span className="text-gradient">competência.</span></h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">Está vazia porque o paciente que precisa de você… encontra o concorrente primeiro. Todo dia vemos o mesmo cenário:</p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass glass-hover group h-full p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all group-hover:shadow-neon">{p.icon}</div>
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
