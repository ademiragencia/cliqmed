"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WA_DIAGNOSTICO } from "@/lib/site";

function Logo() {
  return (
    <a
      href="#inicio"
      className="flex items-center gap-1.5 font-display text-2xl font-extrabold tracking-tight text-white"
      aria-label="BlueVisa, voltar ao início"
    >
      <svg className="text-blue" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" transform="rotate(-42 12 12)" />
      </svg>
      <span>
        Blue<span className="text-blue">Visa</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-deep-darker/90 shadow-lift backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-site flex items-center justify-between py-5">
          <Logo />

          <ul className="hidden items-center gap-9 md:flex">
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
          </ul>

          <a
            href={WA_DIAGNOSTICO}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full border border-blue/60 px-6 py-2.5 font-display text-sm font-bold text-blue transition-all hover:bg-blue hover:text-white hover:shadow-glow md:inline-flex"
          >
            Diagnóstico gratuito
          </a>

          <button
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-deep-darker/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="p-4 font-display text-2xl font-bold text-white"
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
          Diagnóstico gratuito
        </a>
      </div>
    </>
  );
}
