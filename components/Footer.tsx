import { NAV_LINKS, WA_DEFAULT } from "@/lib/site";

const FUTURO = [
  "Seguro viagem",
  "Câmbio",
  "Chip internacional",
  "Passagens e hospedagem",
  "Planejamento de viagens aos EUA",
];

export default function Footer() {
  return (
    <footer className="bg-deep-darker py-16 text-white">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-1.5 font-display text-2xl font-extrabold tracking-tight">
              <svg className="text-blue" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" transform="rotate(-42 12 12)" />
              </svg>
              Blue<span className="text-blue">Visa</span>
            </div>
            <p className="mt-2 text-sm text-white/55">Seu sonho americano começa aqui.</p>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-white/40">
              Em breve na BlueVisa:{" "}
              {FUTURO.join(" · ")}.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-display text-sm font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#comecar"
                  className="font-display text-sm font-semibold text-white/70 transition-colors hover:text-white"
                >
                  Começar agora
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener"
                  className="font-display text-sm font-semibold text-blue transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@bluevisausa.com"
                  className="font-display text-sm font-semibold text-white/70 transition-colors hover:text-white"
                >
                  contato@bluevisausa.com
                </a>
              </li>
              <li className="text-sm text-white/50">Atendimento 100% online para o Brasil inteiro</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/40">
            A BlueVisa é uma empresa privada de assessoria e orientação
            administrativa para processos de visto americano. Não temos vínculo
            com o governo dos Estados Unidos, com a embaixada ou com os
            consulados americanos, e não garantimos a aprovação do visto. A
            decisão é exclusiva das autoridades consulares. As taxas
            governamentais são pagas diretamente aos órgãos oficiais.
          </p>
          <p className="mt-6 text-center text-sm text-white/50">
            © {new Date().getFullYear()} BlueVisa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
