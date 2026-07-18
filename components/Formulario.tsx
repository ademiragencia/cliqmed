"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { wa } from "@/lib/site";

const TIPOS_VISTO = [
  "Turismo e Negócios (B1/B2)",
  "Renovação de visto",
  "Estudante (F1/M1)",
  "Intercâmbio (J1)",
  "Trabalho (H, L, O, P)",
  "Noivo(a) (K1)",
  "Investidor (E1/E2)",
  "Imigração (EB-1 / EB-2 NIW)",
  "Ainda não sei",
];

const VIAJANTES = [
  "Só eu",
  "2 pessoas",
  "3 ou mais",
  "Família com crianças",
];

const PRAZOS = [
  "Nos próximos 3 meses",
  "Em até 6 meses",
  "Ainda este ano",
  "Ainda estou planejando",
];

const HISTORICO = [
  "É meu primeiro visto",
  "Já tive visto americano",
  "Já tive visto negado",
];

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [zap, setZap] = useState("");
  const [tipo, setTipo] = useState(TIPOS_VISTO[0]);
  const [viajantes, setViajantes] = useState(VIAJANTES[0]);
  const [prazo, setPrazo] = useState(PRAZOS[0]);
  const [historico, setHistorico] = useState(HISTORICO[0]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Olá! Quero começar minha assessoria com a BlueVisa.`,
      ``,
      `• Nome: ${nome.trim() || "não informado"}`,
      `• WhatsApp: ${zap.trim() || "não informado"}`,
      `• Visto: ${tipo}`,
      `• Viajantes: ${viajantes}`,
      `• Quando pretendo viajar: ${prazo}`,
      `• Histórico: ${historico}`,
    ].join("\n");
    window.open(wa(msg), "_blank", "noopener");
  };

  const labelCls =
    "font-display text-xs font-bold uppercase tracking-[0.14em] text-muted";
  const fieldCls =
    "mt-2 w-full rounded-2xl border border-line bg-bg px-5 py-3.5 font-medium text-ink outline-none transition-colors focus:border-blue";

  return (
    <section className="relative overflow-hidden bg-deep-darker py-24 md:py-32" id="comecar">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 500px at 15% 10%, rgba(45,156,219,0.18), transparent 70%), radial-gradient(600px 400px at 95% 90%, rgba(45,156,219,0.10), transparent 70%)",
        }}
      />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="chip-dark">Formulário de qualificação</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5 text-white">
              Conte o seu objetivo.{" "}
              <span className="text-blue">A gente cuida do resto.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Responda rapidinho e fale direto com a nossa equipe no WhatsApp.
              Você recebe o diagnóstico gratuito do seu perfil, a indicação do
              visto certo e do plano ideal. Sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3.5">
              {[
                "Diagnóstico gratuito do seu perfil",
                "Indicação do visto certo para o seu caso",
                "Resposta rápida nos dias úteis",
                "Sem compromisso e sem custo",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium text-white/90">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-lift md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="nome">
                  Seu nome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className={fieldCls}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="zap">
                  Seu WhatsApp
                </label>
                <input
                  id="zap"
                  type="tel"
                  required
                  placeholder="(00) 90000-0000"
                  value={zap}
                  onChange={(e) => setZap(e.target.value)}
                  className={fieldCls}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className={labelCls} htmlFor="tipo">
                Qual visto você precisa?
              </label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className={fieldCls}
              >
                {TIPOS_VISTO.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="viajantes">
                  Quantas pessoas?
                </label>
                <select
                  id="viajantes"
                  value={viajantes}
                  onChange={(e) => setViajantes(e.target.value)}
                  className={fieldCls}
                >
                  {VIAJANTES.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="prazo">
                  Quando pretende viajar?
                </label>
                <select
                  id="prazo"
                  value={prazo}
                  onChange={(e) => setPrazo(e.target.value)}
                  className={fieldCls}
                >
                  {PRAZOS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className={labelCls} htmlFor="historico">
                Seu histórico com vistos
              </label>
              <select
                id="historico"
                value={historico}
                onChange={(e) => setHistorico(e.target.value)}
                className={fieldCls}
              >
                {HISTORICO.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary mt-8 w-full">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Enviar e falar no WhatsApp
            </button>
            <p className="mt-4 text-center text-xs text-muted">
              Você será direcionado ao WhatsApp oficial da BlueVisa com a sua
              mensagem pronta. Seus dados não são armazenados por este site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
