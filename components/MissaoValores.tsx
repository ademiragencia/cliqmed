import Reveal from "./Reveal";

const VALUES = [
  "Transparência",
  "Ética",
  "Agilidade",
  "Organização",
  "Atendimento humanizado",
  "Tecnologia",
];

export default function MissaoValores() {
  return (
    <section className="py-24 md:py-32" id="sobre">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="chip">Quem somos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Uma nova referência em{" "}
              <span className="text-blue-deep">assessoria de vistos.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="card h-full p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10 text-blue-deep">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-extrabold">Missão</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Tornar o processo de obtenção do visto americano{" "}
                <strong className="font-semibold text-ink">
                  simples, transparente e seguro
                </strong>
                , oferecendo atendimento especializado e totalmente online.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card h-full p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10 text-blue-deep">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-extrabold">Visão</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Ser a{" "}
                <strong className="font-semibold text-ink">
                  maior assessoria digital de vistos americanos da América Latina
                </strong>
                , reconhecida pela excelência no atendimento e pela eficiência
                dos processos.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="mr-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-muted">
              Nossos valores
            </span>
            {VALUES.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 font-display text-sm font-semibold text-ink shadow-soft"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
