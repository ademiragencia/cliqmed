"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { SPECIALTIES_DATA, wa } from "@/lib/site";

export default function Especialidades() {
  const [activeTab, setActiveTab] = useState(SPECIALTIES_DATA[0].id);
  const activeData = SPECIALTIES_DATA.find((s) => s.id === activeTab) || SPECIALTIES_DATA[0];

  return (
    <section className="relative py-24 md:py-32" id="especialidades">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="chip">Estratégias sob medida</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Conhecemos a fundo a jornada do paciente em <span className="text-gradient">cada especialidade.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Não existe estratégia genérica no mercado da saúde. Veja como adaptamos a engenharia de tráfego pago e autoridade para o seu nicho específico:
            </p>
          </Reveal>
        </div>

        {/* Specialty Navigation Tabs */}
        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-2">
          {SPECIALTIES_DATA.map((spec) => {
            const isSelected = spec.id === activeTab;
            return (
              <button
                key={spec.id}
                onClick={() => setActiveTab(spec.id)}
                className={`rounded-full px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-neon text-base shadow-neon"
                    : "border border-line bg-white/[0.03] text-muted hover:border-neon/40 hover:text-ink"
                }`}
              >
                {spec.name}
              </button>
            );
          })}
        </Reveal>

        {/* Active Specialty Detail Card */}
        <Reveal delay={0.28} className="mt-10">
          <div className="glass overflow-hidden border-neon/30 p-8 shadow-card md:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3.5 py-1 font-display text-xs font-bold uppercase tracking-wider text-neon">
                  Estratégia Validada
                </div>
                <h3 className="font-display text-3xl font-bold text-ink md:text-4xl">
                  {activeData.name}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {activeData.strategy}
                </p>

                <div className="space-y-3.5 border-t border-line/60 pt-6 text-sm">
                  <div className="flex items-start gap-3 text-ink">
                    <span className="font-bold text-neon">💎 Procedimentos Foco:</span>
                    <span className="text-muted">{activeData.highTicket}</span>
                  </div>
                  <div className="flex items-start gap-3 text-ink">
                    <span className="font-bold text-neon">🎯 Melhores Canais:</span>
                    <span className="text-muted">{activeData.bestChannel}</span>
                  </div>
                </div>
              </div>

              {/* Specialty Metrics Panel */}
              <div className="flex flex-col justify-center rounded-2xl border border-line bg-base/80 p-6 lg:col-span-5 lg:p-8">
                <div className="font-display text-xs font-bold uppercase tracking-widest text-muted">
                  Métricas Médias do Nicho
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-line/50 pb-3">
                    <span className="text-sm text-muted">Custo por Lead Médio</span>
                    <span className="font-display font-bold text-neon">{activeData.cpl}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-line/50 pb-3">
                    <span className="text-sm text-muted">Taxa Agendamento WhatsApp</span>
                    <span className="font-display font-bold text-ink">{activeData.agendamentoRate}</span>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-sm text-muted">Resultado Esperado</span>
                    <span className="font-display font-semibold text-lime">{activeData.result}</span>
                  </div>
                </div>

                <a
                  href={wa(`Olá! Tenho uma clínica de ${activeData.name} e quero ver a estratégia de captação de pacientes para o meu nicho.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary mt-8 w-full justify-center text-xs font-bold uppercase tracking-wider"
                >
                  Ver plano para {activeData.name.split("&")[0]}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
