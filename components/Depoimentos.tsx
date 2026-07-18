import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";

function Stars({ small }: { small?: boolean }) {
  return (
    <div className="flex justify-center gap-1 text-amber" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={small ? 14 : 18} height={small ? 14 : 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  const [featured, ...rest] = TESTIMONIALS;
  return (
    <section className="py-24 md:py-32" id="depoimentos">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="chip">Depoimentos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Histórias de quem já{" "}
              <span className="text-blue-deep">embarcou.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <figure className="relative mt-14">
              <svg
                aria-hidden
                className="mx-auto mb-6 text-blue/30"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <Stars />
              <blockquote className="mx-auto mt-6 max-w-2xl font-display text-xl font-semibold leading-relaxed text-ink md:text-2xl">
                “{featured.text}”
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-dark font-display text-lg font-extrabold text-white">
                  {featured.initial}
                </span>
                <div className="text-left">
                  <div className="font-display font-bold">{featured.name}</div>
                  <div className="text-sm text-muted">{featured.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={0.1 + i * 0.1}>
              <figure className="card flex h-full flex-col p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex justify-start">
                  <Stars small />
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-dark font-display font-extrabold text-white">
                    {t.initial}
                  </span>
                  <div>
                    <div className="font-display text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
