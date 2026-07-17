export const SITE_URL = "https://cliqmed.com.br";
export const WHATSAPP_NUMBER = "5567981082158";

export function wa(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = wa("Olá! Vim pelo site da Cliqmed e quero saber mais.");
export const WA_DIAGNOSTICO = wa("Olá! Quero meu diagnóstico gratuito da Cliqmed.");

export const NAV_LINKS = [
  { href: "#metodo", label: "O Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export const PLANS = [
  {
    name: "Essencial",
    price: "2.500",
    desc: "Para clínicas que precisam de presença digital profissional.",
    featured: false,
    cta: wa("Olá! Quero saber mais sobre o plano Essencial."),
    features: [
      "Gestão completa do Instagram",
      "12 posts estratégicos por mês",
      "Design e legendas profissionais",
      "Stories e destaques otimizados",
      "Relatório mensal de crescimento",
      "Suporte direto no WhatsApp",
    ],
  },
  {
    name: "Crescimento",
    price: "4.000",
    desc: "Para clínicas prontas para encher a agenda com tráfego pago.",
    featured: true,
    badge: "Mais escolhido",
    bonus: "Bônus: landing page de captura + otimização de perfil grátis",
    cta: wa("Olá! Quero saber mais sobre o plano Crescimento."),
    features: [
      "Tudo do plano Essencial",
      "Campanhas no Meta Ads (Instagram/Facebook)",
      "R$ 1.000 de verba de anúncio inclusa",
      "Criativos e copy de anúncios",
      "Otimização semanal das campanhas",
      "Relatório semanal de resultados",
    ],
  },
  {
    name: "Autoridade",
    price: "6.500",
    desc: "Para clínicas que querem dominar a busca na cidade.",
    featured: false,
    cta: wa("Olá! Quero saber mais sobre o plano Autoridade."),
    features: [
      "Tudo do plano Crescimento",
      "Google Ads (busca + display)",
      "Produção e roteiro de Reels",
      "Google Meu Negócio otimizado",
      "Funil de captação completo",
      "Reunião estratégica mensal",
    ],
  },
];

export const FAQS = [
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Com tráfego pago bem configurado, os primeiros leads e agendamentos aparecem entre 15 e 30 dias. O crescimento orgânico — autoridade, seguidores qualificados, ranqueamento no Google — se consolida entre 3 e 6 meses. E se em 30 dias não houver resultado, continuamos trabalhando sem cobrar até aparecer.",
  },
  {
    q: "Tem fidelidade ou multa?",
    a: "Não. O contrato é mensal e renovável. Se você não estiver satisfeito, basta avisar e encerramos sem multa. Queremos que você fique pelos resultados — não pela letra miúda.",
  },
  {
    q: "Qual o investimento total com a verba de anúncios?",
    a: "A mensalidade cobre gestão, criativos e relatórios. A verba de anúncios é separada e vai direto para o Meta e o Google. No plano Crescimento, já incluímos R$ 1.000 de verba. Para escalar mais rápido, recomendamos a partir de R$ 1.500/mês.",
  },
  {
    q: "E se meu concorrente também quiser contratar?",
    a: "Não aceitamos. Trabalhamos com exclusividade territorial: uma clínica por especialidade por cidade. Quando você fecha conosco, fechamos as portas para a sua concorrência direta — por isso aceitamos apenas 3 novas clínicas por mês.",
  },
  {
    q: "Preciso aparecer nos vídeos e Reels?",
    a: "Não é obrigatório, mas aumenta muito a conversão: quando o paciente vê o rosto e a voz do profissional, a confiança dispara. Para quem não se sente confortável, montamos estratégias com conteúdo educativo, depoimentos e cases — também funciona.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "É uma conversa de 30 a 45 minutos com a nossa equipe. Analisamos seu perfil, seu site, sua concorrência e a oportunidade da sua região. Você sai com um plano de ação claro — mesmo que decida não contratar.",
  },
];

export const TESTIMONIALS = [
  {
    initial: "M",
    name: "Dra. Marina S.",
    role: "Odontologia — Campo Grande/MS",
    text: "Em 45 dias a agenda virou. Saímos de 4 consultas novas por semana para mais de 20. O retorno pagou o investimento três vezes já no primeiro mês.",
  },
  {
    initial: "R",
    name: "Dr. Rafael T.",
    role: "Dermatologia — Cuiabá/MT",
    text: "Já tinha passado por três agências. A Cliqmed foi a primeira que entendeu de clínica de verdade. Hoje meu Instagram traz mais paciente que indicação.",
  },
  {
    initial: "J",
    name: "Dra. Juliana P.",
    role: "Estética — Campo Grande/MS",
    text: "Eu só queria parar de depender de indicação. Hoje tenho previsibilidade: sei quanto vou faturar no mês — e isso muda tudo.",
  },
];

export const SPECIALTIES = [
  "Odontologia",
  "Estética",
  "Dermatologia",
  "Psicologia",
  "Nutrição",
  "Fisioterapia",
  "Oftalmologia",
  "Cardiologia",
  "Ginecologia",
  "Ortopedia",
];
