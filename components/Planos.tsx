import Reveal from "./Reveal";
import { PLANS } from "@/lib/site";

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
              Um plano para cada{" "}
              <span className="text-blue-deep">perfil de viajante.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Pagamento único por processo, atendimento 100% online e suporte
              via WhatsApp em todos os planos.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              {plan.featured ? (
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-deep p-8 text-white shadow-lift xl:scale-[1.04]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(400px 260px at 80% 0%, rgba(45,156,219,0.28), transparent 70%)",
                    }}
                  />
                  <div className="relative flex h-full flex-col">
                    <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-blue px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {plan.badge}
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-extrabold">{plan.name}</h3>
                    <p className="mt-1.5 text-sm text-white/60">{plan.desc}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-lg font-bold text-white/60">R$</span>
                      <span className="font-display text-5xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    {plan.bonus && (
                      <div className="mt-5 rounded-2xl border border-dashed border-amber/50 bg-amber/10 px-4 py-3 text-sm leading-snug text-amber">
                        ⭐ {plan.bonus}
                      </div>
                    )}
                    <ul className="mt-6 flex-1 space-y-3.5 border-t border-white/10 pt-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                          <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FBBEC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
                      className="mt-8 flex w-full items-center justify-center rounded-full bg-blue py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-deep hover:shadow-glow"
                    >
                      Escolher esse plano
                    </a>
                  </div>
                </div>
              ) : (
                <div className="card flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <h3 className="font-display text-2xl font-extrabold">{plan.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{plan.desc}</p>
                  <div className="mt-6">
                    {plan.pricePrefix && (
                      <div className="font-display text-xs font-bold uppercase tracking-wider text-muted">
                        {plan.pricePrefix}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-lg font-bold text-muted">R$</span>
                      <span className="font-display text-5xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3.5 border-t border-line pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
                        <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
                    className="mt-8 flex w-full items-center justify-center rounded-full border-2 border-blue/40 py-4 font-display text-sm font-bold uppercase tracking-wider text-blue-deep transition-all hover:border-blue hover:bg-blue/5"
                  >
                    Quero esse plano
                  </a>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">
            A taxa consular (US$ 185 para o visto B1/B2) é paga por você
            diretamente ao governo americano —{" "}
            <strong className="text-ink">
              nós emitimos a guia e orientamos o pagamento.
            </strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
