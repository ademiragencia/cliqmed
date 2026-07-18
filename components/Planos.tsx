import Reveal from "./Reveal";
import { PLANS } from "@/lib/site";

function Price({ prefix, value, light }: { prefix?: string; value: string; light?: boolean }) {
  return (
    <div className="mt-5">
      {prefix && (
        <div className={`font-display text-[11px] font-bold uppercase tracking-wider ${light ? "text-white/50" : "text-muted"}`}>
          {prefix}
        </div>
      )}
      <div className="flex items-baseline gap-1">
        <span className={`font-display text-base font-bold ${light ? "text-white/50" : "text-muted"}`}>
          R$
        </span>
        <span className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          {value}
        </span>
      </div>
    </div>
  );
}

export default function Planos() {
  return (
    <section className="bg-white py-24 md:py-32" id="planos">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="chip">Planos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Escolha como quer{" "}
              <span className="text-blue-deep">embarcar.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Pacotes de acompanhamento com pagamento único por processo, para
              qualquer tipo de visto. Todos incluem atendimento 100% online e
              suporte via WhatsApp.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-5">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              {plan.featured ? (
                <div className="relative overflow-hidden rounded-3xl bg-deep p-8 text-white shadow-lift md:p-10">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(500px 300px at 90% 0%, rgba(45,156,219,0.25), transparent 70%)",
                    }}
                  />
                  <div className="relative grid gap-8 md:grid-cols-[230px_1fr_auto] md:items-center">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        {plan.badge}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-extrabold">{plan.name}</h3>
                      <p className="mt-1 text-sm text-white/60">{plan.desc}</p>
                      <Price prefix={plan.pricePrefix} value={plan.price} light />
                    </div>
                    <ul className="grid gap-x-8 gap-y-3 border-white/10 sm:grid-cols-2 md:border-l md:pl-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                          <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5FBBEC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={plan.cta}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-center whitespace-nowrap rounded-full bg-blue px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-deep hover:shadow-glow"
                    >
                      Escolher plano
                    </a>
                  </div>
                </div>
              ) : (
                <div className="card grid gap-8 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:grid-cols-[230px_1fr_auto] md:items-center md:p-10">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted">{plan.desc}</p>
                    <Price prefix={plan.pricePrefix} value={plan.price} />
                  </div>
                  <ul className="grid gap-x-8 gap-y-3 border-line sm:grid-cols-2 md:border-l md:pl-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.cta}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-center whitespace-nowrap rounded-full border-2 border-blue/40 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-blue-deep transition-all hover:border-blue hover:bg-blue/5"
                  >
                    Escolher plano
                  </a>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">
            As taxas consulares (de US$ 185 a US$ 315, conforme o tipo de
            visto) são pagas por você diretamente ao governo americano.{" "}
            <strong className="text-ink">
              Nós emitimos as guias e orientamos cada pagamento.
            </strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
