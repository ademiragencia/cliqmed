import { PROFILES } from "@/lib/site";

export default function Marquee() {
  const items = [...PROFILES, ...PROFILES];
  return (
    <section
      className="overflow-hidden border-y border-line bg-white py-6"
      aria-label="Perfis de viagem atendidos"
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex items-center gap-12 font-display text-lg font-bold uppercase tracking-widest text-ink/35"
          >
            {s}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#2D9CDB" aria-hidden>
              <path d="M12 0l2.8 9.2L24 12l-9.2 2.8L12 24l-2.8-9.2L0 12l9.2-2.8z" />
            </svg>
          </span>
        ))}
      </div>
      <p className="container-site mt-4 text-center text-sm font-medium text-muted">
        Assessoria para todos os perfis de viajante — com{" "}
        <strong className="text-blue-deep">
          checklist personalizado para cada caso.
        </strong>
      </p>
    </section>
  );
}
