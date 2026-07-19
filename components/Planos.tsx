import Reveal from "./Reveal";
import { PLANS } from "@/lib/site";

export default function Planos() {
  return (
    <section className="py-24 md:py-32" id="planos">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="chip">Investimento</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">Escolha o plano certo <span className="text-gradient">para a sua fase.</span></h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">Todos incluem contrato mensal sem fidelidade, relatórios transparentes e suporte direto no WhatsApp.</p>
          </Reveal>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              {plan.featured ? (
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-neon/40 bg-gradient-to-b from-neon/[0.10] to-transparent p-8 shadow-neon lg:scale-[1.04]">
                  <span className="inline-flex w-max items-center gap-1.5 rounded-full bg-neon px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-base">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    {plan.badge}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">{plan.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-lg font-bold text-muted">R$</span>
                    <span className="font-display text-5xl font-bold tracking-tight text-ink">{plan.price}</span>
                    <span className="text-muted">/mês</span>
                  </div>
                  {plan.bonus && (
                    <div className="mt-5 rounded-2xl border border-dashed border-lime/40 bg-lime/[0.06] px-4 py-3 text-sm leading-snug text-lime">🎁 {plan.bonus}</div>
                  )}
                  <ul className="mt-6 space-y-3.5 border-t border-line pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink/90">
                        <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3BF7C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="20 6 9 17 4 12" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={plan.cta} target="_blank" rel="noopener" className="btn-primary mt-8 w-full">Garantir esse plano</a>
                </div>
              ) : (
                <div className="glass glass-hover flex h-full flex-col p-8">
                  <h3 className="font-display text-2xl font-bold text-ink">{plan.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-lg font-bold text-muted">R$</span>
                    <span className="font-display text-5xl font-bold tracking-tight text-ink">{plan.price}</span>
                    <span className="text-muted">/mês</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3.5 border-t border-line pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-muted">
                        <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3BF7C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="20 6 9 17 4 12" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={plan.cta} target="_blank" rel="noopener" className="btn-ghost mt-8 w-full">Quero esse plano</a>
                </div>
              )}
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">Verba de anúncios à parte (recomendamos a partir de R$ 1.500/mês) — <strong className="text-ink">no plano Crescimento, R$ 1.000 já estão inclusos.</strong></p>
        </Reveal>
      </div>
    </section>
  );
}
