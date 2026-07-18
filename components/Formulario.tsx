"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { wa } from "@/lib/site";

const WEB3FORMS_ACCESS_KEY = "e3706ec1-f2ac-4cee-9f78-4267e9b60cbc";

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

type Status = "idle" | "sending" | "success" | "error";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [zap, setZap] = useState("");
  const [tipo, setTipo] = useState(TIPOS_VISTO[0]);
  const [viajantes, setViajantes] = useState(VIAJANTES[0]);
  const [prazo, setPrazo] = useState(PRAZOS[0]);
  const [historico, setHistorico] = useState(HISTORICO[0]);
  const [status, setStatus] = useState<Status>("idle");

  const resumo = [
    `Visto: ${tipo}`,
    `Viajantes: ${viajantes}`,
    `Quando pretende viajar: ${prazo}`,
    `Histórico: ${historico}`,
    `WhatsApp: ${zap.trim()}`,
  ].join("\n");

  const waLink = wa(
    `Olá! Acabei de enviar o formulário de qualificação no site da BlueVisa. Meu nome é ${nome.trim()}.\n\n${resumo}`
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo lead BlueVisa: ${tipo}`,
          from_name: "Site BlueVisa",
          name: nome.trim(),
          email: email.trim(),
          whatsapp: zap.trim(),
          visto: tipo,
          viajantes,
          prazo,
          historico,
          message: resumo,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
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
              Preencha o formulário e a nossa equipe entra em contato com o
              diagnóstico gratuito do seu perfil, a indicação do visto certo e
              o orçamento completo. Sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3.5">
              {[
                "Diagnóstico gratuito do seu perfil",
                "Indicação do visto certo para o seu caso",
                "Orçamento completo e transparente",
                "Resposta rápida nos dias úteis",
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
          {status === "success" ? (
            <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-lift md:p-12">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue/15 text-blue-deep">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <h3 className="mt-6 font-display text-2xl font-extrabold">
                Formulário enviado!
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">
                Recebemos as suas respostas. Nossa equipe analisa o seu perfil
                e entra em contato em breve. Se preferir agilizar, chame agora
                no WhatsApp:
              </p>
              <a href={waLink} target="_blank" rel="noopener" className="btn-primary mt-7">
                Falar no WhatsApp agora
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-lift md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="nome">
                    Seu nome
                  </label>
                  <input
                    id="nome"
                    name="name"
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="email">
                    Seu e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldCls}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="zap">
                    Seu WhatsApp
                  </label>
                  <input
                    id="zap"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="(00) 90000-0000"
                    value={zap}
                    onChange={(e) => setZap(e.target.value)}
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="tipo">
                    Qual visto você precisa?
                  </label>
                  <select
                    id="tipo"
                    name="visto"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className={fieldCls}
                  >
                    {TIPOS_VISTO.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="viajantes">
                    Quantas pessoas?
                  </label>
                  <select
                    id="viajantes"
                    name="viajantes"
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
                    name="prazo"
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
                  name="historico"
                  value={historico}
                  onChange={(e) => setHistorico(e.target.value)}
                  className={fieldCls}
                >
                  {HISTORICO.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Quero meu diagnóstico gratuito"}
              </button>

              {status === "error" && (
                <p className="mt-4 text-center text-sm font-medium text-red-500">
                  Não conseguimos enviar agora. Tente de novo ou{" "}
                  <a href={waLink} target="_blank" rel="noopener" className="underline">
                    chame direto no WhatsApp
                  </a>
                  .
                </p>
              )}

              <p className="mt-4 text-center text-xs text-muted">
                Suas respostas vão direto para a equipe BlueVisa, que entra em
                contato pelo WhatsApp ou e-mail informados.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
