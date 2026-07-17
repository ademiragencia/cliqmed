import { SPECIALTIES } from "@/lib/site";

export default function Marquee() {
  const items = [...SPECIALTIES, ...SPECIALTIES];
  return (
    <section
      className="overflow-hidden border-y border-line bg-white py-6"
      aria-label="Especialidades atendidas"
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex items-center gap-12 font-display text-lg font-bold uppercase tracking-widest text-ink/35"
          >
            {s}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#00B4A2" aria-hidden>
              <path d="M12 0l2.8 9.2L24 12l-9.2 2.8L12 24l-2.8-9.2L0 12l9.2-2.8z" />
            </svg>
          </span>
        ))}
      </div>
      <p className="container-site mt-4 text-center text-sm font-medium text-muted">
        Atendemos todas as especialidades — com{" "}
        <strong className="text-teal-deep">
          exclusividade: 1 clínica por especialidade por cidade.
        </strong>
      </p>
    </section>
  );
}
