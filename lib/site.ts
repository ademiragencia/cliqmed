export const SITE_URL = "https://cliqmed.com.br";
export const WHATSAPP_NUMBER = "5567981082158";

export function wa(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = wa("Olá! Vim pelo site da Cliqmed e quero saber como encher a agenda da minha clínica.");
export const WA_DIAGNOSTICO = wa("Olá! Quero agendar o diagnóstico gratuito da minha clínica com a equipe da Cliqmed.");

export const NAV_LINKS = [
  { href: "#metodo", label: "O Método" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#calculadora", label: "Calculadora de ROI" },
  { href: "#resultados", label: "Resultados" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export const SPECIALTIES_DATA = [
  {
    id: "odontologia",
    name: "Odontologia & Ortodontia",
    icon: "tooth",
    highTicket: "Implantes, Lentes de Contato Dental, Invisalign, Protocolo All-on-4",
    bestChannel: "Google Ads (fundo de funil) + Instagram Ads (desejo visual)",
    cpl: "R$ 12 - R$ 22",
    agendamentoRate: "28%",
    strategy: "Campanha focada na dor estética e funcional, com landig page exclusiva para cada procedimento e atendimento humanizado rápido no WhatsApp.",
    result: "Média de +18 a +35 novos tratamentos de alto ticket por mês.",
  },
  {
    id: "estetica",
    name: "Estética Médica & HOF",
    icon: "sparkles",
    highTicket: "Harmonização Orofacial, Toxina Botulínica, Bioestimuladores de Colágeno, Preenchimento",
    bestChannel: "Meta Ads (Instagram Reels) + Tráfego Geolocalizado",
    cpl: "R$ 9 - R$ 16",
    agendamentoRate: "32%",
    strategy: "Vídeos educativos do profissional mostrando sutileza e naturalidade, quebrando o medo do exagero e gerando desejo imediato.",
    result: "Geração contínua de avaliação presencial para pacotes de procedimentos.",
  },
  {
    id: "cirurgia",
    name: "Cirurgia Plástica",
    icon: "user-check",
    highTicket: "Mamoplastia, Lipoaspiração HD, Abdominoplastia, Rinoplastia",
    bestChannel: "Google Ads (Busca de intenção) + Conteúdo de Autoridade no Instagram",
    cpl: "R$ 25 - R$ 45",
    agendamentoRate: "22%",
    strategy: "Nutrição de leads de alto valor com funil educativo e acolhedor, tirando dúvidas de pré e pós-operatório sem ferir o conselho de medicina.",
    result: "Captação contínua de pacientes dispostos a pagar pelo valor da consulta particular.",
  },
  {
    id: "dermatologia",
    name: "Dermatologia",
    icon: "sun",
    highTicket: "Tratamentos a Laser, Rejuvenescimento, Melasma, Tricologia e Transplante Capilar",
    bestChannel: "Instagram Reels + Google Ads Local",
    cpl: "R$ 14 - R$ 24",
    agendamentoRate: "30%",
    strategy: "Posicionamento da médica como referência de dermatologia natural e preventiva, atraindo pacientes que buscam cuidado contínuo.",
    result: "Aumento expressivo de consultas particulares e adesão a protocolos anuais.",
  },
  {
    id: "ortopedia",
    name: "Ortopedia & Fisioterapia de Elite",
    icon: "activity",
    highTicket: "Infiltrações, Cirurgias de Joelho/Ombro, Reabilitação Esportiva, Terapia de Ondas de Choque",
    bestChannel: "Google Ads (Intenção de dor) + Meta Ads Local",
    cpl: "R$ 10 - R$ 18",
    agendamentoRate: "35%",
    strategy: "Foco na resolução rápida da dor e retorno às atividades físicas, captando pacientes com urgência de agendamento.",
    result: "Agenda cheia com consultas particulares e procedimentos ambulatoriais.",
  },
  {
    id: "oftalmologia",
    name: "Oftalmologia",
    icon: "eye",
    highTicket: "Cirurgia Refrativa, Catarata, Lentes Premium, Tratamento de Glaucoma",
    bestChannel: "Google Ads para Termos de Cirurgia + Meta Ads para Visão Livre de Óculos",
    cpl: "R$ 15 - R$ 28",
    agendamentoRate: "26%",
    strategy: "Comunicação focada na liberdade de viver sem óculos e na segurança de enxergar com clareza, direcionando para exames de triagem.",
    result: "Conversão acelerada de exames em cirurgias refrativas.",
  },
  {
    id: "integrativa",
    name: "Medicina Integrativa & Nutrologia",
    icon: "heart-pulse",
    highTicket: "Protocolos de Emagrecimento, Implantes Hormonais, Soroterapia, Longevidade",
    bestChannel: "Meta Ads (Instagram Stories + Reels) + Funil de Conteúdo",
    cpl: "R$ 11 - R$ 19",
    agendamentoRate: "34%",
    strategy: "Narrativa focada na transformação de vida, disposição diária e performance física, valorizando o acompanhamento personalizado.",
    result: "Venda recorrente de programas e acompanhamentos de médio a longo prazo.",
  },
];

export const PLANS = [
  {
    name: "Essencial",
    price: "2.500",
    desc: "Para clínicas que precisam de presença digital profissional e autoridade inquestionável.",
    featured: false,
    cta: wa("Olá! Quero saber mais sobre o plano Essencial."),
    features: [
      "Gestão completa do Instagram profissional",
      "12 posts estratégicos e educativos por mês",
      "Design e legendas ajustados às regras CFM/CFO",
      "Stories e Destaques otimizados para conversão",
      "Relatório mensal com métricas de engajamento",
      "Suporte direto no WhatsApp com gestor dedicado",
    ],
  },
  {
    name: "Crescimento",
    price: "4.000",
    desc: "O plano mais vendido: atração contínua de novos pacientes via tráfego pago de alto desempenho.",
    featured: true,
    badge: "Mais Escolhido",
    bonus: "Bônus Grátis: Landing Page de Alta Conversão + Auditoria de Perfil",
    cta: wa("Olá! Quero garantir o plano Crescimento para a minha clínica."),
    features: [
      "Tudo do plano Essencial",
      "Gestão de campanhas no Meta Ads (Instagram & Facebook)",
      "R$ 1.000 de verba de anúncios já inclusa no valor",
      "Criação de anúncios e copys orientadas a agendamento",
      "Otimização semanal e testes A/B contínuos",
      "Relatório semanal de leads e custo por paciente",
      "Integração do botão direto com o WhatsApp da recepção",
    ],
  },
  {
    name: "Autoridade 360",
    price: "6.500",
    desc: "Para clínicas que desejam dominar o Google e ser a referência número #1 da cidade.",
    featured: false,
    cta: wa("Olá! Quero o plano Autoridade 360 para dominar minha cidade."),
    features: [
      "Tudo do plano Crescimento",
      "Google Ads (Campanhas de busca de alta intenção)",
      "Roteiro e direcionamento estratégico para Reels",
      "Otimização do Google Meu Negócio (SEO Local)",
      "Funil de captação multicanal de pacientes",
      "Reunião estratégica mensal de crescimento e escala",
      "Treinamento rápido de script de conversão para recepção",
    ],
  },
];

export const FAQS = [
  {
    q: "Em quanto tempo os primeiros pacientes novos começam a agendar?",
    a: "Com campanhas de tráfego pago ativas, os primeiros leads qualificados e agendamentos pelo WhatsApp começam a chegar entre 7 e 15 dias após o lançamento. O fortalecimento de marca e autoridade orgânica consolida-se em até 90 dias.",
    category: "Resultados",
  },
  {
    q: "Existe fidelidade contratual ou multa de cancelamento?",
    a: "Zero fidelidade. Nosso contrato é mensal e renovável. Se por qualquer motivo você desejar pausar, basta avisar com 30 dias de antecedência sem nenhuma multa. Garantimos a permanência pelo resultado apresentado, não por letras miúdas.",
    category: "Contrato",
  },
  {
    q: "As estratégias seguem as diretrizes éticas do CFM e do CFO?",
    a: "100% sim. Conhecemos profundamente a Resolução CFM 2.336/2023 e o Código de Ética Odontológica. Todas as peças, copys e criativos passam por filtro rigoroso para preservar a idoneidade, autoridade e segurança jurídica do profissional.",
    category: "Ética Médica",
  },
  {
    q: "Qual a diferença da Cliqmed para uma agência de marketing genérica?",
    a: "Agências genéricas vendem 'pacote de post' e comemoram curtidas. A Cliqmed é especializada exclusivamente na área da saúde. Entendemos a jornada da dor ao agendamento, otimizamos o custo por lead e focamos em uma única métrica: pacientes particulares na sua agenda.",
    category: "Diferencial",
  },
  {
    q: "Como funciona a verba de anúncios pagos?",
    a: "A verba de anúncios é o valor pago diretamente ao Meta (Instagram/Facebook) e Google. No plano Crescimento, já incluímos R$ 1.000 de verba dentro do valor. Nos demais planos, você escolhe o valor e a cobrança ocorre diretamente no cartão da clínica.",
    category: "Investimento",
  },
  {
    q: "A Cliqmed atende o meu concorrente da mesma cidade?",
    a: "Não. Trabalhamos com cláusula de exclusividade territorial: apenas 1 clínica por especialidade por cidade ou região estratégica. Assim que você entra, fechamos as portas para a concorrência direta no seu nicho.",
    category: "Exclusividade",
  },
  {
    q: "Minha recepção precisa de treinamento para atender os leads?",
    a: "Sim, e nós ajudamos com isso! Fornecemos scripts práticos de atendimento para WhatsApp que aumentam a taxa de conversão do lead em consulta confirmada.",
    category: "Atendimento",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "É uma reunião online de 30 a 45 minutos com um especialista em marketing médico. Analisamos sua presença digital, concorrência local, volume de buscas na região e apresentamos um plano personalizado de aquisição de pacientes.",
    category: "Diagnóstico",
  },
];

export const TESTIMONIALS = [
  {
    initial: "M",
    name: "Dra. Marina S.",
    role: "Odontologia & Estética Dental",
    city: "Campo Grande / MS",
    specialty: "Odontologia",
    text: "Em 45 dias com a Cliqmed nossa agenda virou completamente. Saímos de 4 consultas novas por semana para mais de 20. O faturamento adicional pagou o investimento mais de 4x logo no primeiro mês.",
    metric: "+320% agendamentos",
  },
  {
    initial: "R",
    name: "Dr. Rafael T.",
    role: "Dermatologista SBD",
    city: "Cuiabá / MT",
    specialty: "Dermatologia",
    text: "Já passei por 3 agências que só mandavam relatórios de alcance e curtidas. A Cliqmed foi a primeira que falou a minha língua: custo por paciente agendado. Hoje o Instagram traz mais paciente particular do que indicação.",
    metric: "4.2x ROAS médio",
  },
  {
    initial: "J",
    name: "Dra. Juliana P.",
    role: "Harmonização Orofacial & Estética",
    city: "Campo Grande / MS",
    specialty: "Estética",
    text: "Eu queria parar de depender do boca a boca ou de dar desconto para fechar pacote. Com as campanhas da Cliqmed, atração de pacientes de alto ticket ficou previsível.",
    metric: "+R$ 85k faturamento/mês",
  },
  {
    initial: "C",
    name: "Dr. Carlos E.",
    role: "Cirurgia Plástica & Contorno Corporal",
    city: "São Paulo / SP",
    specialty: "Cirurgia",
    text: "Tinha receio de fazer anúncios e ferir o conselho de medicina. O time da Cliqmed fez um trabalho impecável, ético, trazendo pacientes qualificados que valorizam a consulta particular.",
    metric: "100% CFM Compliant",
  },
];

export const SPECIALTIES = [
  "Odontologia",
  "Harmonização Orofacial",
  "Dermatologia",
  "Cirurgia Plástica",
  "Ortopedia",
  "Oftalmologia",
  "Medicina Integrativa",
  "Nutrologia & Nutrição",
  "Ginecologia & Obstetrícia",
  "Psicologia & Psiquiatria",
];

