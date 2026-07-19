import { NAV_LINKS, WA_DEFAULT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-site flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-display text-2xl font-bold tracking-tight text-ink">cliqmed<span className="text-neon">.</span></div>
          <p className="mt-1 text-sm text-muted">Marketing de performance para clínicas e consultórios.</p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} className="font-display text-sm font-medium text-muted transition-colors hover:text-ink">{l.label}</a></li>
          ))}
          <li><a href={WA_DEFAULT} target="_blank" rel="noopener" className="font-display text-sm font-medium text-neon transition-colors hover:text-neon-soft">WhatsApp</a></li>
        </ul>
        <p className="text-sm text-muted">© {new Date().getFullYear()} Cliqmed. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
