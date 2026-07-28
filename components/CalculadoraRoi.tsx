"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { WHATSAPP_NUMBER } from "@/lib/site";

const SPECIALTIES_CALC = [
  { name: "Odontologia / Implantes", defaultTicket: 2500, avgCpl: 16, conversion: 0.28 },
  { name: "Harmonização Orofacial / Estética", defaultTicket: 1800, avgCpl: 14, conversion: 0.32 },
  { name: "Cirurgia Plástica", defaultTicket: 12000, avgCpl: 35, conversion: 0.22 },
  { name: "Dermatologia", defaultTicket: 950, avgCpl: 18, conversion: 0.30 },
  { name: "Ortopedia & Fisioterapia", defaultTicket: 450, avgCpl: 12, conversion: 0.35 },
  { name: "Oftalmologia", defaultTicket: 3500, avgCpl: 22, conversion: 0.26 },
  { name: "Medicina Integrativa / Nutrologia", defaultTicket: 1200, avgCpl: 15, conversion: 0.34 },
  { name: "Outra Especialidade Médica", defaultTicket: 500, avgCpl: 15, conversion: 0.30 },
];

export default function CalculadoraRoi() {
  const [selectedSpec, setSelectedSpec] = useState(SPECIALTIES_CALC[0]);
  const [ticket, setTicket] = useState(SPECIALTIES_CALC[0].defaultTicket);
  const [budget, setBudget] = useState(2500);

  const handleSpecChange = (idx: number) => {
    const spec = SPECIALTIES_CALC[idx];
    setSelectedSpec(spec);
    setTicket(spec.defaultTicket);
  };

  // Calculations based on healthcare marketing benchmarks
  const estimatedLeads = Math.round(budget / selectedSpec.avgCpl);
  const estimatedAgendamentos = Math.round(estimatedLeads * selectedSpec.conversion);
  const estimatedReceitaAdicional = estimatedAgendamentos * ticket;
  const estimatedRoi = (estimatedReceitaAdicional / budget).toFixed(1);

  const formatBrl = (val: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(val);

  const waText = `Olá Cliqmed! Calculei no site para a especialidade *${selectedSpec.name}* com ticket médio de *${formatBrl(ticket)}* e verba de *${formatBrl(budget)}/mês*. A estimativa foi de *+${estimatedAgendamentos} novos pacientes/mês* (+${formatBrl(estimatedReceitaAdicional)}). Quero um diagnóstico gratuito para aplicar essa estratégia na minha clínica!`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  return (
    <section className="relative overflow-hidden py-24 md:py-32" id="calculadora">
      {/* Glow background accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[120px]" />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><span className="chip">Simulador de Resultado</span></Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5">
              Quanto a sua clínica pode faturar a mais <span className="text-gradient">todos os meses?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Selecione sua especialidade e investimento para calcular o fluxo estimado de pacientes novos e o retorno financeiro com o Método Cliqmed.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12">
          <div className="glass overflow-hidden border-neon/30 bg-gradient-to-b from-panel/90 to-panel/50 p-6 shadow-neon md:p-10">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* Inputs Column */}
              <div className="space-y-8 lg:col-span-7">
                {/* Specialty Selection */}
                <div>
                  <label className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-muted">
                    1. Especialidade Médica / Odontológica
                  </label>
                  <select
                    value={SPECIALTIES_CALC.findIndex((s) => s.name === selectedSpec.name)}
                    onChange={(e) => handleSpecChange(Number(e.target.value))}
                    className="w-full rounded-2xl border border-line bg-base px-4 py-3.5 font-display text-sm font-semibold text-ink outline-none transition-colors focus:border-neon focus:ring-1 focus:ring-neon"
                  >
                    {SPECIALTIES_CALC.map((spec, idx) => (
                      <option key={spec.name} value={idx}>
                        {spec.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ticket Slider */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="font-display text-xs font-bold uppercase tracking-wider text-muted">
                      2. Ticket Médio da Consulta / Procedimento
                    </label>
                    <span className="font-display text-lg font-bold text-neon">{formatBrl(ticket)}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="20000"
                    step="50"
                    value={ticket}
                    onChange={(e) => setTicket(Number(e.target.value))}
                    className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-line accent-neon"
                  />
                  <div className="mt-1 flex justify-between text-[11px] font-medium text-muted/60">
                    <span>R$ 150</span>
                    <span>R$ 10.000</span>
                    <span>R$ 20.000+</span>
                  </div>
                </div>

                {/* Budget Slider */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="font-display text-xs font-bold uppercase tracking-wider text-muted">
                      3. Verba Mensal Estimada de Anúncios
                    </label>
                    <span className="font-display text-lg font-bold text-neon">{formatBrl(budget)}/mês</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="250"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-line accent-neon"
                  />
                  <div className="mt-1 flex justify-between text-[11px] font-medium text-muted/60">
                    <span>R$ 1.000/mês</span>
                    <span>R$ 5.000/mês</span>
                    <span>R$ 15.000/mês</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-white/[0.02] p-4 text-xs text-muted">
                  <span className="font-bold text-ink">📊 Baseado em métricas reais do mercado de saúde:</span> Custo por lead qualificado de {formatBrl(selectedSpec.avgCpl)} e taxa de conversão estimada em {Math.round(selectedSpec.conversion * 100)}% de agendamento presencial no WhatsApp.
                </div>
              </div>

              {/* Output / Results Column */}
              <div className="flex flex-col justify-between rounded-2xl border border-neon/20 bg-gradient-to-br from-neon/[0.08] via-base/80 to-base p-6 text-center lg:col-span-5 lg:p-8">
                <div>
                  <div className="inline-flex rounded-full bg-neon/15 px-3.5 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-neon">
                    Projeção Mensal Estimada
                  </div>

                  <div className="mt-6">
                    <div className="text-xs font-medium uppercase tracking-wider text-muted">Faturamento Adicional Estimado</div>
                    <div className="mt-1 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl" style={{ textShadow: "0 0 25px rgba(59,247,196,0.3)" }}>
                      +{formatBrl(estimatedReceitaAdicional)}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-neon">ROI estimado: {estimatedRoi}x sobre o investimento</div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line/60 pt-6 text-left">
                    <div className="rounded-xl border border-line bg-base/60 p-3.5">
                      <div className="text-[11px] font-medium uppercase tracking-wider text-muted">Leads/mês</div>
                      <div className="font-display text-2xl font-bold text-ink">~{estimatedLeads}</div>
                      <div className="text-[10px] text-muted">Pacientes interessados</div>
                    </div>
                    <div className="rounded-xl border border-line bg-base/60 p-3.5">
                      <div className="text-[11px] font-medium uppercase tracking-wider text-muted">Agendamentos</div>
                      <div className="font-display text-2xl font-bold text-neon">+{estimatedAgendamentos}</div>
                      <div className="text-[10px] text-muted">Consultas marcadas</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href={waUrl} target="_blank" rel="noopener" className="btn-primary w-full py-4 text-xs font-bold tracking-wider">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                    Quero estes resultados na minha clínica
                  </a>
                  <p className="mt-2 text-[11px] text-muted">
                    Diagnóstico inicial gratuito · Exclusividade territorial garantida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
