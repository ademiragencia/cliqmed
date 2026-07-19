"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WA_DIAGNOSTICO } from "@/lib/site";

export default function Navbar() {
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
          scrolled ? "border-b border-line bg-base/70 backdrop-blur-xl" : "border-b border-transparent"
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
                  className="font-display text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={WA_DIAGNOSTICO}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-5 py-2.5 font-display text-sm font-bold text-neon transition-all hover:bg-neon hover:text-base hover:shadow-neon md:inline-flex"
          >
            Diagnóstico grátis
          </a>

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
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-base/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="p-4 font-display text-2xl font-bold text-ink"
          >
            {l.label}
          </a>
        ))}
        <a
          href={WA_DIAGNOSTICO}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="btn-primary mt-6"
        >
          Diagnóstico grátis
        </a>
      </div>
    </>
  );
}
