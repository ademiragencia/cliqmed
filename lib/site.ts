export const SITE_URL = "https://bluevisausa.com";
export const WHATSAPP_NUMBER = "5567981082158";

export function wa(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = wa("Olá! Vim pelo site da BlueVisa e quero saber mais sobre a assessoria.");
export const WA_DIAGNOSTICO = wa("Olá! Quero o diagnóstico gratuito do meu perfil com a BlueVisa.");

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#vistos", label: "Vistos" },
  { href: "#jornada", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export type Visto = {
  sigla: string;
  nome: string;
  desc: string;
  pontos: string[];
  cta: string;
};

export const VISTOS: Visto[] = [
  {
    sigla: "B1/B2",
    nome: "Turismo e Negócios",
    desc: "O visto mais procurado pelos brasileiros, com validade de até 10 anos. Permite turismo, visitas, compras, eventos e reuniões de negócios nos Estados Unidos.",
    pontos: [
      "Férias, parques, compras e cruzeiros",
      "Visitas a familiares e amigos",
      "Feiras, congressos e reuniões de negócios",
    ],
    cta: wa("Olá! Quero assessoria para o visto de turismo e negócios (B1/B2)."),
  },
  {
    sigla: "B1/B2",
    nome: "Renovação de visto",
    desc: "Para quem já teve visto americano e precisa renovar. Em muitos casos o processo dispensa nova entrevista, com envio dos documentos sem ir ao consulado.",
    pontos: [
      "Visto vencido ou perto de vencer",
      "Análise de elegibilidade para isenção de entrevista",
      "Processo mais rápido e simples",
    ],
    cta: wa("Olá! Quero assessoria para renovar meu visto americano."),
  },
  {
    sigla: "F1/M1",
    nome: "Estudante",
    desc: "Para estudar nos EUA: cursos de inglês, high school, graduação, pós-graduação e cursos técnicos, com matrícula em instituição aprovada pelo governo americano.",
    pontos: [
      "Cursos de idioma e escolas",
      "Graduação e pós-graduação",
      "Orientação sobre I-20 e taxa SEVIS",
    ],
    cta: wa("Olá! Quero assessoria para o visto de estudante (F1/M1)."),
  },
  {
    sigla: "J1",
    nome: "Intercâmbio",
    desc: "Para programas de intercâmbio cultural aprovados, como au pair, summer work, treinamentos e pesquisa acadêmica, sempre com um patrocinador credenciado.",
    pontos: [
      "Au pair e summer work",
      "Estágio e treinamento (trainee)",
      "Pesquisadores e professores visitantes",
    ],
    cta: wa("Olá! Quero assessoria para o visto de intercâmbio (J1)."),
  },
  {
    sigla: "H/L/O/P",
    nome: "Trabalho",
    desc: "Para quem tem oferta de trabalho, transferência ou carreira de destaque nos EUA. Cada categoria tem regras próprias e exige petição aprovada pelo USCIS.",
    pontos: [
      "H-1B: profissionais especializados",
      "L-1: transferência entre empresas do mesmo grupo",
      "O e P: talentos, atletas e artistas",
    ],
    cta: wa("Olá! Quero assessoria para visto de trabalho nos EUA."),
  },
  {
    sigla: "K1",
    nome: "Noivo(a)",
    desc: "Para quem vai se casar com cidadão americano nos Estados Unidos. O processo começa com a petição do noivo americano e o casamento acontece em até 90 dias após a chegada.",
    pontos: [
      "Organização da petição I-129F",
      "Comprovação do relacionamento",
      "Preparação completa para a entrevista",
    ],
    cta: wa("Olá! Quero assessoria para o visto de noivo(a) (K1)."),
  },
  {
    sigla: "E1/E2",
    nome: "Investidor",
    desc: "Para empreendedores e investidores de países com tratado comercial com os EUA que compram ou abrem um negócio no país e vão administrá-lo de perto.",
    pontos: [
      "Planejamento do investimento",
      "Documentação completa da empresa",
      "Renovável enquanto o negócio operar",
    ],
    cta: wa("Olá! Quero assessoria para o visto de investidor (E1/E2)."),
  },
  {
    sigla: "EB-1",
    nome: "Imigração por talento",
    desc: "Green Card para quem se destaca em ciências, artes, educação, negócios ou esportes. Reconhece a habilidade extraordinária e dispensa oferta de emprego.",
    pontos: [
      "Análise honesta de elegibilidade",
      "Montagem do dossiê de evidências",
      "Condução com advogados licenciados nos EUA",
    ],
    cta: wa("Olá! Quero assessoria para o processo de imigração EB-1."),
  },
  {
    sigla: "EB-2 NIW",
    nome: "Interesse Nacional",
    desc: "Green Card por interesse nacional, para profissionais qualificados cujo trabalho beneficia os Estados Unidos. Dispensa oferta de emprego e patrocinador.",
    pontos: [
      "Avaliação do perfil e da tese NIW",
      "Petição e documentação completas",
      "Condução com advogados licenciados nos EUA",
    ],
    cta: wa("Olá! Quero assessoria para o processo de imigração EB-2 NIW."),
  },
];

export type Plan = {
  name: string;
  desc: string;
  featured: boolean;
  badge?: string;
  cta: string;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Blue Start",
    desc: "O essencial para tirar seu visto com segurança.",
    featured: false,
    cta: wa("Olá! Quero saber mais sobre o plano Blue Start."),
    features: [
      "Análise do perfil",
      "Checklist personalizado",
      "Preenchimento do DS-160",
      "Emissão da guia de pagamento",
      "Agendamento da entrevista",
      "Suporte via WhatsApp",
    ],
  },
  {
    name: "Blue Premium",
    desc: "Preparação completa, incluindo simulação da entrevista.",
    featured: true,
    badge: "Mais escolhido",
    cta: wa("Olá! Quero saber mais sobre o plano Blue Premium."),
    features: [
      "Tudo do plano Blue Start",
      "Revisão documental completa",
      "Simulação da entrevista",
      "Reunião por videochamada",
      "Suporte prioritário",
    ],
  },
  {
    name: "Blue Family",
    desc: "A família inteira com o processo organizado de uma vez.",
    featured: false,
    cta: wa("Olá! Quero saber mais sobre o plano Blue Family."),
    features: [
      "Atendimento para famílias",
      "Organização completa da documentação",
      "DS-160 de todos os viajantes",
      "Agendamento conjunto da entrevista",
      "Preparação personalizada",
      "Suporte via WhatsApp",
    ],
  },
  {
    name: "Blue VIP",
    desc: "Experiência exclusiva, com consultor dedicado ao seu caso.",
    featured: false,
    cta: wa("Olá! Quero saber mais sobre o plano Blue VIP."),
    features: [
      "Tudo do plano Blue Premium",
      "Consultor exclusivo",
      "Atendimento prioritário",
      "Acompanhamento integral",
      "Reuniões ilimitadas durante o processo",
    ],
  },
];

export const FAQS = [
  {
    q: "A BlueVisa garante a aprovação do visto?",
    a: "Não, e desconfie de quem prometer isso. A decisão final é sempre do governo americano, tomada pelo oficial consular no dia da entrevista. O que garantimos é uma preparação impecável: documentação organizada, formulários preenchidos corretamente e você treinado e confiante para a entrevista.",
  },
  {
    q: "A BlueVisa faz parte do governo dos Estados Unidos?",
    a: "Não. Somos uma assessoria particular e independente, sem qualquer vínculo com o governo americano, a embaixada ou os consulados. Prestamos orientação administrativa: cuidamos da burocracia, organizamos o processo e preparamos você para cada etapa oficial.",
  },
  {
    q: "Quais tipos de visto vocês atendem?",
    a: "Todos os principais vistos americanos: turismo e negócios (B1/B2), renovação, estudante (F1/M1), intercâmbio (J1), trabalho (H, L, O e P), noivo(a) (K1), investidor (E1/E2) e os processos de imigração EB-1 e EB-2 NIW (Green Card). Cada tipo tem um processo e um valor de assessoria específicos. Se você não sabe qual é o seu caso, o diagnóstico gratuito identifica o visto certo para o seu objetivo.",
  },
  {
    q: "O atendimento é presencial?",
    a: "Não precisa ser, e essa é uma das nossas maiores vantagens. Todo o processo é 100% online: atendimento por WhatsApp, e-mail e videochamada, com portal do cliente para acompanhar cada etapa. Atendemos o Brasil inteiro, sem deslocamento.",
  },
  {
    q: "Quanto custa a assessoria?",
    a: "O valor depende do tipo de visto, do plano escolhido e do número de viajantes. No diagnóstico gratuito você recebe o orçamento completo, com transparência e sem surpresas. As taxas do governo americano são sempre pagas por você diretamente aos órgãos oficiais e não fazem parte dos nossos honorários. Nós emitimos as guias e orientamos cada pagamento.",
  },
  {
    q: "Quanto tempo leva o processo?",
    a: "A parte que depende da BlueVisa é rápida: em poucos dias seu checklist está pronto e os formulários preenchidos. O prazo total depende do tipo de visto e da disponibilidade de datas do consulado da sua região. Acompanhamos tudo e buscamos sempre a data mais próxima possível para o seu caso.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "É uma conversa pelo WhatsApp, sem custo e sem compromisso. Entendemos seu objetivo, analisamos seu perfil e indicamos o visto e o plano ideais. Você sai sabendo exatamente o que precisa para dar entrada no processo, mesmo que decida não contratar.",
  },
];

export const TESTIMONIALS = [
  {
    initial: "C",
    name: "Camila R.",
    role: "Turismo · São Paulo/SP",
    text: "Adiei o visto por dois anos com medo da burocracia. A BlueVisa cuidou de tudo: em uma semana meu DS-160 estava pronto e a entrevista agendada. Fui tranquila e saí com o visto aprovado.",
  },
  {
    initial: "F",
    name: "Fernando M.",
    role: "Negócios · Belo Horizonte/MG",
    text: "Só o DS-160 já me assustava. Com a assessoria, revisamos tudo em uma videochamada e a simulação da entrevista fez toda a diferença. Cheguei no consulado sabendo o que esperar.",
  },
  {
    initial: "A",
    name: "Família Almeida",
    role: "Orlando · Curitiba/PR",
    text: "Fizemos o processo dos quatro de uma vez com o plano Family. Documentação organizada, entrevistas no mesmo dia e um atendimento humano do início ao fim. As crianças já conheceram a Disney!",
  },
];
