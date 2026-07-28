import { SPECIALTIES } from "@/lib/site";

export default function Marquee() {
  const items = [...SPECIALTIES, ...SPECIALTIES];
  return (
    <section className="overflow-hidden border-b border-line py-7" aria-label="Especialidades atendidas">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {items.map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-12 font-display text-lg font-bold uppercase tracking-widest text-ink/25">
              {s}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#3BF7C4" aria-hidden><path d="M12 0l2.8 9.2L24 12l-9.2 2.8L12 24l-2.8-9.2L0 12l9.2-2.8z" /></svg>
            </span>
          ))}
        </div>
      </div>
      <p className="container-site mt-5 text-center text-sm font-medium text-muted">
        Atendemos todas as especialidades — com{" "}
        <strong className="text-neon">exclusividade: 1 clínica por especialidade por cidade.</strong>
      </p>
    </section>
  );
}
