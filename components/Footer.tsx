import { NAV_LINKS, SPECIALTIES_DATA, WA_DEFAULT, WHATSAPP_NUMBER } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40 py-16 text-sm">
      <div className="container-site space-y-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-display text-2xl font-bold tracking-tight text-ink">
              cliqmed<span className="text-neon">.</span>
            </div>
            <p className="max-w-md text-muted leading-relaxed">
              A agência de marketing digital de performance líder na área da saúde. Transformamos investimentos em anúncios em pacientes particulares na agenda da sua clínica.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span className="flex h-2.5 w-2.5 rounded-full bg-neon animate-blink" />
              <span>Atendimento em todo o Brasil · Exclusividade territorial por especialidade</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-ink">
              Navegação
            </div>
            <ul className="space-y-2 text-muted">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-neon">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-ink">
              Especialidades Atendidas
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs text-muted">
              {SPECIALTIES_DATA.map((s) => (
                <a
                  key={s.id}
                  href="#especialidades"
                  className="rounded-lg border border-line bg-base/60 px-2.5 py-1 transition-colors hover:border-neon/40 hover:text-ink"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 text-xs text-muted md:flex-row">
          <div>
            © {new Date().getFullYear()} Cliqmed Agência de Marketing Digital. CNPJ registrado. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>Resolução CFM 2.336/2023 & CFO Compliant</span>
            <a href={WA_DEFAULT} target="_blank" rel="noopener" className="font-semibold text-neon hover:underline">
              Contato WhatsApp: +55 (67) 98108-2158
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
