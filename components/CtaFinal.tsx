import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section className="pb-24 pt-10 md:pb-32" id="contato">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-deep via-deep to-blue-dark p-10 text-center text-white md:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(700px 400px at 50% 120%, rgba(45,156,219,0.35), transparent 70%)",
              }}
            />
            <svg
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-6 w-[700px] -translate-x-1/2 opacity-30"
              viewBox="0 0 700 200"
              fill="none"
            >
              <path d="M30 180 Q 350 -40 670 160" stroke="#5FBBEC" strokeWidth="2" strokeDasharray="2 12" strokeLinecap="round" />
            </svg>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" transform="rotate(-42 12 12)" />
                </svg>
                Pronto para decolar?
              </span>
              <h2 className="heading-xl mx-auto mt-6 max-w-2xl">
                Seu sonho americano{" "}
                <span className="text-blue">começa aqui.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Preencha o formulário de qualificação ou chame direto no
                WhatsApp. O diagnóstico do seu perfil é gratuito, e a burocracia
                fica com a gente.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#comecar"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-4 font-display text-sm font-bold uppercase tracking-wider text-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Começar minha assessoria
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <p className="mt-6 text-sm text-white/45">
                Atendimento 100% online · Diagnóstico gratuito · Sem compromisso
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
