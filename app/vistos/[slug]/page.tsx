import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import { SITE_URL, WA_DEFAULT, VISTOS } from "@/lib/site";
import { VISTO_PAGES, getVistoPage } from "@/lib/vistos";

export function generateStaticParams() {
  return VISTO_PAGES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVistoPage(slug);
  if (!v) return {};
  return {
    title: `${v.metaTitle} | BlueVisa`,
    description: v.metaDesc,
    alternates: { canonical: `/vistos/${v.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/vistos/${v.slug}`,
      siteName: "BlueVisa",
      locale: "pt_BR",
      title: `${v.metaTitle} | BlueVisa`,
      description: v.metaDesc,
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: v.metaTitle,
      description: v.metaDesc,
      images: ["/og.png"],
    },
  };
}

export default async function VistoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVistoPage(slug);
  if (!v) notFound();

  const hasCustomLogo = fs.existsSync(
    path.join(process.cwd(), "public", "logo.png")
  );
  const outros = VISTOS.filter((o) => o.slug !== v.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Vistos", item: `${SITE_URL}/#vistos` },
        { "@type": "ListItem", position: 3, name: v.h1, item: `${SITE_URL}/vistos/${v.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Assessoria para ${v.h1}`,
      serviceType: `Assessoria administrativa para visto americano ${v.sigla}`,
      description: v.metaDesc,
      url: `${SITE_URL}/vistos/${v.slug}`,
      areaServed: { "@type": "Country", name: "Brasil" },
      provider: {
        "@type": "ProfessionalService",
        name: "BlueVisa",
        url: `${SITE_URL}/`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: v.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar hasCustomLogo={hasCustomLogo} />

      <main>
        {/* Hero da página */}
        <section className="relative overflow-hidden bg-deep-darker pb-16 pt-36 md:pb-20 md:pt-44">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(800px 400px at 50% -10%, rgba(45,156,219,0.2), transparent 70%)",
            }}
          />
          <div className="container-site relative">
            <nav aria-label="Você está em" className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span className="mx-2">/</span>
              <Link href="/#vistos" className="transition-colors hover:text-white">
                Vistos
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue">{v.nome}</span>
            </nav>

            <div className="mt-8 max-w-3xl">
              <span className="inline-flex rounded-xl bg-blue/15 px-3.5 py-1.5 font-display text-sm font-extrabold tracking-tight text-blue">
                {v.sigla}
              </span>
              <h1 className="heading-xl mt-5 text-white">{v.h1}</h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">{v.intro[0]}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/#comecar" className="btn-primary">
                  Fazer meu diagnóstico gratuito
                </Link>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/25 px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue hover:text-blue"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-20 md:py-24">
          <div className="container-site grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="text-lg leading-relaxed text-muted">{v.intro[1]}</p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="heading-lg mt-12 text-2xl md:text-3xl">
                  Para quem é o {v.sigla}
                </h2>
                <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                  {v.paraQuem.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-medium">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue-deep">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="heading-lg mt-12 text-2xl md:text-3xl">
                  Como funciona com a BlueVisa
                </h2>
                <ol className="mt-6 space-y-5">
                  {v.processo.map((s, i) => (
                    <li key={s.t} className="flex gap-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep font-display font-extrabold text-blue">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display font-bold">{s.t}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="heading-lg mt-12 text-2xl md:text-3xl">
                  Perguntas frequentes sobre o {v.sigla}
                </h2>
                <div className="mt-6 space-y-4">
                  {v.faqs.map((f) => (
                    <details key={f.q} className="card group p-6 open:border-blue/40">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue-deep transition-transform group-open:rotate-45">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.1}>
                <div className="card p-7">
                  <h2 className="font-display text-lg font-bold">
                    Documentos geralmente solicitados
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {v.documentos.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                        <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D9CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                    A lista exata varia caso a caso. Na assessoria você recebe um
                    checklist personalizado para o seu perfil.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="relative overflow-hidden rounded-3xl bg-deep p-7 text-white">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(280px 200px at 85% 0%, rgba(45,156,219,0.3), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <h2 className="font-display text-lg font-bold">
                      Comece pelo diagnóstico gratuito
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      Analisamos o seu perfil, confirmamos o visto certo e
                      apresentamos o orçamento completo. Sem compromisso.
                    </p>
                    <Link
                      href="/#comecar"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-blue px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-deep"
                    >
                      Começar agora
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="card p-7">
                  <h2 className="font-display text-lg font-bold">Outros vistos</h2>
                  <ul className="mt-4 space-y-2">
                    {outros.map((o) => (
                      <li key={o.slug}>
                        <Link
                          href={`/vistos/${o.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-blue/5 hover:text-blue-deep"
                        >
                          <span>
                            {o.nome}{" "}
                            <span className="font-display text-xs font-bold text-muted">
                              {o.sigla}
                            </span>
                          </span>
                          <svg className="shrink-0 text-blue opacity-0 transition-opacity group-hover:opacity-100" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {/* Aviso legal */}
        <section className="pb-20">
          <div className="container-site">
            <p className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-6 text-center text-xs leading-relaxed text-muted">
              A BlueVisa é uma empresa privada de assessoria e orientação
              administrativa. Não temos vínculo com o governo dos Estados Unidos
              e não garantimos a aprovação do visto. A decisão é exclusiva das
              autoridades consulares americanas. As taxas governamentais são
              pagas por você diretamente aos órgãos oficiais.
            </p>
          </div>
        </section>
      </main>

      <Footer hasCustomLogo={hasCustomLogo} />
      <WhatsAppFloat />
    </>
  );
}
