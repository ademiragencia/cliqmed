import { NAV_LINKS, WA_DEFAULT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <div className="container-site">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="font-display text-2xl font-extrabold tracking-tight">
              Blue<span className="text-blue">Visa</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              Seu sonho americano começa aqui.
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-sm font-semibold text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener"
                className="font-display text-sm font-semibold text-blue-deep transition-colors hover:text-blue"
              >
                WhatsApp
              </a>
            </li>
          </ul>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} BlueVisa. Todos os direitos reservados.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-3xl border-t border-line pt-8 text-center text-xs leading-relaxed text-muted/80">
          A BlueVisa é uma empresa privada de assessoria e orientação
          administrativa para processos de visto americano. Não temos vínculo
          com o governo dos Estados Unidos, com a embaixada ou com os
          consulados americanos, e não garantimos a aprovação do visto — a
          decisão é exclusiva das autoridades consulares. As taxas
          governamentais são pagas diretamente aos órgãos oficiais.
        </p>
      </div>
    </footer>
  );
}
