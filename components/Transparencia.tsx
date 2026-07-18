import Reveal from "./Reveal";

const PROMISES = [
  "Comunicação clara e honesta em todas as etapas",
  "Atendimento humanizado, com gente de verdade",
  "Portal do cliente para acompanhar tudo em tempo real",
  "Segurança e sigilo no tratamento dos seus dados",
];

export default function Transparencia() {
  return (
    <section className="py-10" id="transparencia">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-deep-darker p-9 text-white md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 400px at 15% 20%, rgba(45,156,219,0.18), transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center lg:h-40 lg:w-40">
                <span className="absolute inset-0 animate-ring rounded-full border-2 border-blue/40" />
                <span className="absolute inset-3 rounded-full bg-blue/10" />
                <svg className="relative" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>

              <div>
                <span className="chip-dark">Transparência em primeiro lugar</span>
                <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">
                  Assessoria séria. Sem promessa milagrosa.
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/65">
                  A BlueVisa é uma empresa privada de assessoria e orientação
                  administrativa.{" "}
                  <strong className="font-semibold text-white">
                    Não temos vínculo com o governo dos Estados Unidos e nenhuma
                    empresa pode garantir a aprovação do visto.
                  </strong>{" "}
                  A decisão é exclusiva do oficial consular. Nosso compromisso
                  é preparar você tão bem que a burocracia deixe de ser um
                  obstáculo.
                </p>
                <ul className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {PROMISES.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm font-medium text-white/85">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
