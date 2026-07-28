"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WA_DIAGNOSTICO } from "@/lib/site";

interface NavbarProps {
  onOpenDiagnostico?: () => void;
}

export default function Navbar({ onOpenDiagnostico }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-line bg-base/80 backdrop-blur-xl shadow-lg" : "border-b border-transparent"
        }`}
      >
        <nav className="container-site flex items-center justify-between py-4">
          <a href="#inicio" className="font-display text-2xl font-bold tracking-tight">
            cliqmed<span className="text-neon">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:text-neon"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            {onOpenDiagnostico && (
              <button
                onClick={onOpenDiagnostico}
                className="rounded-full border border-neon/40 bg-neon/10 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-neon transition-all hover:bg-neon hover:text-base hover:shadow-neon"
              >
                Diagnóstico Grátis
              </button>
            )}
            <a
              href={WA_DIAGNOSTICO}
              target="_blank"
              rel="noopener"
              className="btn-primary py-2.5 px-5 text-xs font-bold uppercase tracking-wider"
            >
              Falar no WhatsApp
            </a>
          </div>

          <button
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 w-6 rounded bg-ink transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 rounded bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 rounded bg-ink transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-base/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="p-3 font-display text-xl font-bold text-ink hover:text-neon"
          >
            {l.label}
          </a>
        ))}
        {onOpenDiagnostico && (
          <button
            onClick={() => {
              setOpen(false);
              onOpenDiagnostico();
            }}
            className="btn-primary mt-4"
          >
            Fazer Diagnóstico Grátis
          </button>
        )}
      </div>
    </>
  );
}
