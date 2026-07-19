import Reveal from "./Reveal";
import Aurora from "./Aurora";
import { WA_DIAGNOSTICO } from "@/lib/site";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" id="contato">
      <Aurora />
      <div className="container-site relative mx-auto max-w-3xl text-center">
        <Reveal><span className="chip">Só 3 vagas por mês</span></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">Seu próximo paciente está <span className="text-gradient">procurando agora.</span></h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">A pergunta é: ele vai encontrar você — ou o seu concorrente? Marque seu diagnóstico gratuito e saia com um plano de ação claro para encher a agenda.</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mx-auto mt-10 flex max-w-md items-center gap-4 rounded-3xl border border-neon/30 bg-neon/[0.06] p-5 text-left">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neon text-base"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></span>
            <div>
              <div className="font-display text-sm font-bold uppercase tracking-wide text-neon">Bônus de hoje</div>
              <div className="text-sm leading-snug text-ink/85">Diagnóstico estratégico completo <strong className="text-ink">(valor R$ 497)</strong> — grátis, com plano de ação na hora.</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener" className="btn-primary mt-10 px-10 py-5 text-base">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
            Quero meu diagnóstico grátis
          </a>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-6 text-sm text-muted">Resposta em até 1 hora nos dias úteis · Sem compromisso</p>
        </Reveal>
      </div>
    </section>
  );
}
