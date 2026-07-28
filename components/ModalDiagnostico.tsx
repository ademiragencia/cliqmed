"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/site";

interface ModalDiagnosticoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalDiagnostico({ isOpen, onClose }: ModalDiagnosticoProps) {
  const [step, setStep] = useState(1);
  const [especialidade, setEspecialidade] = useState("Odontologia");
  const [cidade, setCidade] = useState("");
  const [gargalo, setGargalo] = useState("Poucos agendamentos novos");
  const [orcamento, setOrcamento] = useState("R$ 1.500 a R$ 3.000/mês");

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const formatWhatsAppUrl = () => {
    const text = `Olá Cliqmed! Preenchi o formulário de Diagnóstico Gratuito no site:\n\n` +
      `🩺 *Especialidade:* ${especialidade}\n` +
      `📍 *Cidade/UF:* ${cidade || "Não informada"}\n` +
      `⚠️ *Maior Desafio Atual:* ${gargalo}\n` +
      `💰 *Verba Estimada de Anúncios:* ${orcamento}\n\n` +
      `Gostaria de agendar a análise gratuita da presença digital da minha clínica!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-base/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass relative z-10 w-full max-w-xl overflow-hidden border-neon/40 bg-panel/95 p-6 shadow-neonStrong md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-base text-muted transition-colors hover:text-ink"
            aria-label="Fechar"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="chip">Passo {step} de 3</span>
            <h3 className="font-display text-2xl font-bold text-ink mt-3">
              Diagnóstico Estratégico Gratuito
            </h3>
            <p className="text-xs text-muted mt-1">
              Descubra o potencial de faturamento da sua clínica e receba uma análise da sua região.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div
              className="h-full bg-neon transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Form Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Qual a sua especialidade principal?
                </label>
                <select
                  value={especialidade}
                  onChange={(e) => setEspecialidade(e.target.value)}
                  className="w-full rounded-2xl border border-line bg-base px-4 py-3.5 font-display text-sm font-semibold text-ink outline-none focus:border-neon"
                >
                  <option value="Odontologia">Odontologia & Ortodontia</option>
                  <option value="Harmonização Orofacial / Estética">Harmonização Orofacial / Estética</option>
                  <option value="Dermatologia">Dermatologia</option>
                  <option value="Cirurgia Plástica">Cirurgia Plástica</option>
                  <option value="Ortopedia / Fisioterapia">Ortopedia / Fisioterapia</option>
                  <option value="Oftalmologia">Oftalmologia</option>
                  <option value="Medicina Integrativa / Nutrologia">Medicina Integrativa / Nutrologia</option>
                  <option value="Ginecologia / Obstetrícia">Ginecologia / Obstetrícia</option>
                  <option value="Outra Especialidade">Outra Especialidade Médica</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Qual a sua cidade e estado?
                </label>
                <input
                  type="text"
                  placeholder="Ex: Campo Grande / MS"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className="w-full rounded-2xl border border-line bg-base px-4 py-3.5 font-display text-sm font-semibold text-ink outline-none focus:border-neon"
                />
              </div>

              <button onClick={handleNext} className="btn-primary w-full py-4 mt-6">
                Próximo Passo →
              </button>
            </div>
          )}

          {/* Form Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Qual o seu maior gargalo hoje?
                </label>
                <div className="space-y-2.5">
                  {[
                    "Poucos agendamentos novos por semana",
                    "Apenas pacientes buscando o menor preço",
                    "Dependência excessiva de convênios ou indicações",
                    "Redes sociais e Instagram sem retorno de pacientes",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-3.5 text-xs font-medium transition-all ${
                        gargalo === item
                          ? "border-neon bg-neon/10 text-ink"
                          : "border-line bg-base/50 text-muted hover:border-neon/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="gargalo"
                        checked={gargalo === item}
                        onChange={() => setGargalo(item)}
                        className="accent-neon"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="btn-ghost flex-1 py-3 text-xs"
                >
                  Voltar
                </button>
                <button onClick={handleNext} className="btn-primary flex-1 py-3 text-xs">
                  Próximo Passo →
                </button>
              </div>
            </div>
          )}

          {/* Form Step 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Previsão de investimento mensal em tráfego pago
                </label>
                <select
                  value={orcamento}
                  onChange={(e) => setOrcamento(e.target.value)}
                  className="w-full rounded-2xl border border-line bg-base px-4 py-3.5 font-display text-sm font-semibold text-ink outline-none focus:border-neon"
                >
                  <option value="R$ 1.000 a R$ 2.000/mês">R$ 1.000 a R$ 2.000/mês</option>
                  <option value="R$ 2.000 a R$ 5.000/mês">R$ 2.000 a R$ 5.000/mês</option>
                  <option value="R$ 5.000 a R$ 10.000/mês">R$ 5.000 a R$ 10.000/mês</option>
                  <option value="Mais de R$ 10.000/mês">Mais de R$ 10.000/mês</option>
                </select>
              </div>

              <div className="rounded-2xl border border-neon/30 bg-neon/[0.08] p-4 text-xs text-muted">
                <p className="font-bold text-neon">✓ Análise 100% Gratuita e Sem Compromisso</p>
                <p className="mt-1">
                  Ao clicar abaixo, seus dados serão pré-preenchidos no WhatsApp para conversa direta com nossos especialistas.
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="btn-ghost flex-1 py-3 text-xs"
                >
                  Voltar
                </button>
                <a
                  href={formatWhatsAppUrl()}
                  target="_blank"
                  rel="noopener"
                  onClick={onClose}
                  className="btn-primary flex-1 py-4 text-xs font-bold"
                >
                  Enviar no WhatsApp
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
