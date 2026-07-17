import Reveal from "./Reveal";

const PROMISES = [
  "Contrato mensal — sem fidelidade, sem multa",
  "Diagnóstico inicial 100% gratuito",
  "Relatórios transparentes, com números reais",
  "Exclusividade: 1 clínica por especialidade na sua cidade",
];

export default function Garantia() {
  return (
    <section className="py-24 md:py-32" id="garantia">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center md:h-72 md:w-72">
            <span className="absolute inset-0 animate-ring rounded-full border-2 border-teal/40" />
            <span className="absolute inset-4 rounded-full bg-teal/10" />
            <div className="relative flex h-52 w-52 flex-col items-center justify-center rounded-full border-2 border-teal bg-white text-center shadow-lift md:h-56 md:w-56">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00907F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <div className="mt-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-teal-deep">
                Garantia
              </div>
              <div className="font-display text-3xl font-extrabold leading-tight">
                30 dias
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="chip">Risco zero</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Sem resultado em 30 dias?{" "}
              <span className="text-teal-deep">A conta é nossa.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Se em 30 dias os primeiros resultados não aparecerem,{" "}
              <strong className="font-semibold text-ink">
                continuamos trabalhando sem cobrar a mensalidade
              </strong>{" "}
              até que apareçam. É essa a confiança que temos no método — e é por
              isso que você não tem nada a perder.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-4">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-start gap-3.5 font-medium">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-deep">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
