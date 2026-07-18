export type VistoPage = {
  slug: string;
  sigla: string;
  nome: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string[];
  paraQuem: string[];
  processo: { t: string; d: string }[];
  documentos: string[];
  faqs: { q: string; a: string }[];
};

export const VISTO_PAGES: VistoPage[] = [
  {
    slug: "turismo",
    sigla: "B1/B2",
    nome: "Turismo e Negócios",
    metaTitle: "Visto Americano de Turismo (B1/B2): como tirar com assessoria",
    metaDesc:
      "Assessoria 100% online para o visto americano de turismo e negócios (B1/B2): análise de perfil, DS-160, agendamento e preparação para a entrevista. Diagnóstico gratuito.",
    h1: "Visto de Turismo e Negócios (B1/B2)",
    intro: [
      "O visto B1/B2 é a porta de entrada dos brasileiros nos Estados Unidos: ele cobre turismo, visitas a familiares e amigos, compras, cruzeiros, eventos e reuniões de negócios, e costuma ser emitido com validade de até 10 anos.",
      "O processo envolve o formulário DS-160, o pagamento da taxa consular, o agendamento em duas etapas (CASV e consulado) e a entrevista. A BlueVisa cuida de toda essa burocracia com você, do primeiro documento ao dia da entrevista.",
    ],
    paraQuem: [
      "Férias, parques e passeios em família",
      "Visitas a familiares e amigos que moram nos EUA",
      "Compras, cruzeiros, shows e eventos",
      "Feiras, congressos e reuniões de negócios",
    ],
    processo: [
      { t: "Diagnóstico do perfil", d: "Entendemos seu histórico, seus vínculos com o Brasil e o objetivo da viagem para montar a melhor estratégia." },
      { t: "DS-160 e taxa consular", d: "Preenchemos o formulário DS-160 com você, revisamos tudo e emitimos a guia de pagamento da taxa." },
      { t: "Agendamento", d: "Marcamos o CASV (biometria e foto) e a entrevista no consulado, buscando as melhores datas da sua região." },
      { t: "Preparação para a entrevista", d: "Você recebe orientações completas e, nos planos com simulação, um treino por videochamada." },
    ],
    documentos: [
      "Passaporte válido",
      "Comprovantes de renda e de vínculo empregatício ou empresarial",
      "Comprovante de residência",
      "Vínculos familiares e patrimoniais no Brasil",
      "Informações sobre a viagem (período e destinos)",
    ],
    faqs: [
      {
        q: "Preciso de carta-convite para tirar o visto de turista?",
        a: "Não. A carta-convite não é obrigatória e, sozinha, não aprova nem nega um visto. O que pesa na análise são os seus vínculos com o Brasil, como trabalho, família e patrimônio, e a coerência do seu perfil com a viagem declarada.",
      },
      {
        q: "Com quanta antecedência devo tirar o visto?",
        a: "O ideal é iniciar o processo alguns meses antes da viagem, porque as datas de entrevista variam bastante ao longo do ano em cada consulado. Com o processo organizado, você também evita pagar por urgências.",
      },
      {
        q: "Crianças precisam ir à entrevista?",
        a: "Em geral, menores de 14 anos não precisam comparecer à entrevista, mas o processo e a documentação deles precisam estar corretos. No plano Blue Family organizamos o processo da família inteira de uma vez.",
      },
    ],
  },
  {
    slug: "renovacao",
    sigla: "B1/B2",
    nome: "Renovação de visto",
    metaTitle: "Renovação de Visto Americano: como renovar sem complicação",
    metaDesc:
      "Renove seu visto americano com assessoria 100% online. Análise de elegibilidade para isenção de entrevista, DS-160, agendamento e acompanhamento completo.",
    h1: "Renovação de Visto Americano",
    intro: [
      "Se o seu visto americano venceu ou está perto de vencer, a renovação costuma ser mais simples do que o primeiro processo: em muitos casos o consulado dispensa a nova entrevista, e tudo é resolvido com o envio dos documentos.",
      "A elegibilidade para a isenção de entrevista depende de critérios definidos pelo consulado, como o tempo desde o vencimento e a categoria do visto anterior. A BlueVisa analisa o seu caso, indica o caminho certo e cuida de todo o processo.",
    ],
    paraQuem: [
      "Visto vencido ou próximo do vencimento",
      "Quem quer verificar a isenção de entrevista",
      "Famílias renovando os vistos juntas",
      "Quem teve mudanças de perfil desde o último visto",
    ],
    processo: [
      { t: "Análise de elegibilidade", d: "Verificamos se o seu caso se enquadra nos critérios de isenção de entrevista do consulado." },
      { t: "DS-160 atualizado", d: "Preenchemos o novo formulário refletindo sua situação atual de trabalho, família e viagens." },
      { t: "Taxa e agendamento", d: "Emitimos a guia da taxa consular e organizamos o envio de documentos ou o agendamento, conforme o caso." },
      { t: "Acompanhamento", d: "Seguimos com você até o passaporte voltar com o visto novo." },
    ],
    documentos: [
      "Passaporte atual e o anterior (com o visto antigo)",
      "Comprovantes de renda e vínculo atualizados",
      "Histórico de viagens aos EUA",
      "Comprovante de residência",
    ],
    faqs: [
      {
        q: "Renovação dispensa entrevista?",
        a: "Muitas vezes sim, mas não é automático: o consulado define critérios de elegibilidade, como o tempo desde o vencimento do visto anterior e a categoria. Na análise do seu caso, verificamos isso antes de qualquer etapa.",
      },
      {
        q: "Posso renovar antes de o visto vencer?",
        a: "Sim. Não é preciso esperar o vencimento, e renovar antecipadamente costuma simplificar o processo e evitar imprevistos em viagens já planejadas.",
      },
    ],
  },
  {
    slug: "estudante",
    sigla: "F1/M1",
    nome: "Estudante",
    metaTitle: "Visto de Estudante Americano (F1/M1): estude nos EUA",
    metaDesc:
      "Assessoria completa para o visto de estudante americano (F1/M1): I-20, taxa SEVIS, DS-160, agendamento e preparação para a entrevista. Atendimento 100% online.",
    h1: "Visto de Estudante (F1/M1)",
    intro: [
      "O visto F1 é para quem vai estudar nos Estados Unidos em instituições aprovadas pelo governo americano: cursos de inglês, high school, graduação e pós-graduação. O M1 cobre cursos técnicos e vocacionais.",
      "Além do processo consular comum, o estudante precisa do formulário I-20 emitido pela escola e do pagamento da taxa SEVIS. A BlueVisa organiza essas etapas na ordem certa e prepara você para demonstrar o propósito de estudo na entrevista.",
    ],
    paraQuem: [
      "Cursos de inglês e escolas de idiomas",
      "High school e ensino regular",
      "Graduação, pós-graduação e MBA",
      "Cursos técnicos e vocacionais (M1)",
    ],
    processo: [
      { t: "Diagnóstico e planejamento", d: "Analisamos seu perfil, o curso escolhido e o cronograma ideal para o processo." },
      { t: "I-20 e SEVIS", d: "Orientamos a emissão do I-20 junto à escola e o pagamento correto da taxa SEVIS." },
      { t: "DS-160 e agendamento", d: "Preenchemos o formulário, emitimos a guia da taxa consular e agendamos CASV e entrevista." },
      { t: "Preparação para a entrevista", d: "Treinamos você para apresentar o plano de estudos e a comprovação financeira com segurança." },
    ],
    documentos: [
      "Passaporte válido",
      "I-20 emitido pela instituição de ensino",
      "Comprovante de pagamento da taxa SEVIS",
      "Comprovação financeira do estudante ou responsável",
      "Histórico escolar e comprovantes acadêmicos",
    ],
    faqs: [
      {
        q: "Posso trabalhar nos EUA com visto de estudante?",
        a: "As regras são restritas: em geral, o F1 permite apenas trabalho dentro do campus em condições específicas, e programas como OPT e CPT têm critérios próprios. Explicamos as regras do seu caso durante a assessoria.",
      },
      {
        q: "Minha família pode ir comigo?",
        a: "Cônjuge e filhos podem solicitar o visto F2 (dependentes). O processo é vinculado ao seu e também exige documentação organizada. Cuidamos de tudo em conjunto.",
      },
    ],
  },
  {
    slug: "intercambio",
    sigla: "J1",
    nome: "Intercâmbio",
    metaTitle: "Visto de Intercâmbio J1: au pair, summer work e pesquisa",
    metaDesc:
      "Assessoria para o visto de intercâmbio J1: au pair, summer work, trainee e pesquisa acadêmica. DS-2019, taxa SEVIS, DS-160 e preparação para a entrevista.",
    h1: "Visto de Intercâmbio (J1)",
    intro: [
      "O visto J1 é destinado a programas de intercâmbio cultural aprovados pelo governo americano: au pair, summer work, trainee, professores visitantes e pesquisa acadêmica, sempre com um patrocinador credenciado.",
      "O documento central é o DS-2019, emitido pelo patrocinador do programa. A BlueVisa organiza a documentação, o DS-160, a taxa SEVIS e a preparação para a entrevista, para que o seu programa comece sem sustos.",
    ],
    paraQuem: [
      "Au pair e summer work",
      "Estágio e treinamento profissional (trainee)",
      "Pesquisadores e professores visitantes",
      "Programas de intercâmbio universitário",
    ],
    processo: [
      { t: "Diagnóstico do programa", d: "Confirmamos o enquadramento do seu programa e o patrocinador credenciado." },
      { t: "DS-2019 e SEVIS", d: "Orientamos a emissão do DS-2019 e o pagamento da taxa SEVIS do J1." },
      { t: "DS-160 e agendamento", d: "Preenchemos o formulário, emitimos a guia da taxa e agendamos as etapas no consulado." },
      { t: "Preparação para a entrevista", d: "Você chega sabendo explicar o programa, o período e os planos de retorno." },
    ],
    documentos: [
      "Passaporte válido",
      "DS-2019 emitido pelo patrocinador",
      "Comprovante da taxa SEVIS",
      "Carta ou contrato do programa de intercâmbio",
      "Comprovação de vínculos com o Brasil",
    ],
    faqs: [
      {
        q: "Qual a diferença entre J1 e F1?",
        a: "O F1 é para estudar em uma instituição de ensino; o J1 é para programas de intercâmbio cultural com patrocinador credenciado, como au pair, summer work e pesquisa. O documento base também muda: I-20 no F1, DS-2019 no J1.",
      },
      {
        q: "O J1 tem regra de retorno ao Brasil?",
        a: "Alguns programas J1 exigem retorno ao país de origem por dois anos antes de certos vistos ou do Green Card. Verificamos se essa regra se aplica ao seu caso durante a análise do perfil.",
      },
    ],
  },
  {
    slug: "trabalho",
    sigla: "H/L/O/P",
    nome: "Trabalho",
    metaTitle: "Visto de Trabalho nos EUA: H-1B, L-1, O-1 e P",
    metaDesc:
      "Assessoria para vistos de trabalho americanos: H-1B (profissionais), L-1 (transferência entre empresas), O-1 e P (talentos, atletas e artistas). Atendimento online.",
    h1: "Vistos de Trabalho (H, L, O e P)",
    intro: [
      "Os vistos de trabalho americanos atendem situações diferentes: o H-1B para profissionais especializados com oferta de emprego, o L-1 para transferências dentro do mesmo grupo empresarial, e os vistos O e P para pessoas com habilidades de destaque, atletas e artistas.",
      "Em todas as categorias há uma etapa anterior ao consulado: a petição aprovada pelo USCIS, normalmente conduzida pelo empregador. A BlueVisa orienta o processo de ponta a ponta e cuida da fase consular com você.",
    ],
    paraQuem: [
      "Profissionais com oferta de emprego nos EUA (H-1B)",
      "Funcionários transferidos entre empresas do mesmo grupo (L-1)",
      "Pessoas com habilidade extraordinária na sua área (O-1)",
      "Atletas, artistas e grupos em turnê (P)",
    ],
    processo: [
      { t: "Análise do caso", d: "Identificamos a categoria correta e o que precisa existir do lado do empregador americano." },
      { t: "Petição no USCIS", d: "Orientamos a fase da petição, conduzida pelo empregador, e organizamos a sua documentação." },
      { t: "Fase consular", d: "Com a petição aprovada, preenchemos o DS-160, emitimos a taxa e agendamos a entrevista." },
      { t: "Preparação final", d: "Você chega à entrevista com o caso claro e a documentação completa." },
    ],
    documentos: [
      "Passaporte válido",
      "Aprovação da petição no USCIS (I-797)",
      "Comprovantes de formação e experiência profissional",
      "Documentos do empregador ou contratante americano",
      "Portfólio, prêmios ou contratos (categorias O e P)",
    ],
    faqs: [
      {
        q: "Posso tirar visto de trabalho sem oferta de emprego?",
        a: "Nas categorias H, L e P é necessário um empregador ou contratante nos EUA conduzindo a petição. Para perfis de destaque sem oferta de emprego, os caminhos costumam ser o O-1 com agente ou os processos de imigração EB-1 e EB-2 NIW.",
      },
      {
        q: "Minha família pode me acompanhar?",
        a: "Sim. Cada categoria tem o visto de dependentes correspondente (H-4, L-2, O-3, P-4) para cônjuge e filhos. Organizamos o processo da família em conjunto.",
      },
    ],
  },
  {
    slug: "noivo",
    sigla: "K1",
    nome: "Noivo(a)",
    metaTitle: "Visto de Noivo(a) K1: casar com cidadão americano nos EUA",
    metaDesc:
      "Assessoria para o visto de noivo(a) K1: petição I-129F, comprovação do relacionamento, documentação e preparação para a entrevista. Atendimento 100% online.",
    h1: "Visto de Noivo(a) (K1)",
    intro: [
      "O visto K1 é para quem vai se casar com um cidadão americano nos Estados Unidos. O processo começa com a petição I-129F, apresentada pelo noivo ou noiva americana, e o casamento deve acontecer em até 90 dias após a chegada.",
      "É um processo mais longo que o de turismo e muito baseado em evidências do relacionamento. A BlueVisa organiza a documentação dos dois lados, acompanha os prazos e prepara você para a entrevista no consulado.",
    ],
    paraQuem: [
      "Casais em que um dos dois é cidadão americano",
      "Quem pretende se casar e viver nos EUA",
      "Casais que se conheceram pessoalmente nos últimos 2 anos",
      "Quem quer conduzir o processo sem erros e sem atrasos",
    ],
    processo: [
      { t: "Análise do relacionamento", d: "Verificamos os requisitos, como o encontro presencial nos últimos dois anos, e montamos a estratégia." },
      { t: "Petição I-129F", d: "Organizamos a petição apresentada pelo cidadão americano e as evidências do relacionamento." },
      { t: "Fase consular no Brasil", d: "Com a petição aprovada, cuidamos do DS-160, dos exames e do agendamento da entrevista." },
      { t: "Preparação para a entrevista", d: "Você chega preparado para comprovar a autenticidade do relacionamento." },
    ],
    documentos: [
      "Passaporte válido",
      "Evidências do relacionamento (fotos, viagens, conversas)",
      "Comprovante do encontro presencial nos últimos 2 anos",
      "Documentos civis (certidões, divórcios anteriores)",
      "Exame médico credenciado e certidões de antecedentes",
    ],
    faqs: [
      {
        q: "Quanto tempo leva o processo do K1?",
        a: "É um processo em duas fases (USCIS e consulado) e costuma levar vários meses no total, variando com a fila do governo americano. Com a documentação organizada desde o início, você evita atrasos evitáveis.",
      },
      {
        q: "Depois do casamento, o que acontece?",
        a: "Após casar dentro dos 90 dias, o próximo passo é o ajuste de status para residência permanente (Green Card) nos EUA. Orientamos você sobre essa etapa e os profissionais adequados para conduzi-la.",
      },
    ],
  },
  {
    slug: "investidor",
    sigla: "E1/E2",
    nome: "Investidor",
    metaTitle: "Visto de Investidor E2: abra ou compre um negócio nos EUA",
    metaDesc:
      "Assessoria para o visto de investidor americano (E1/E2): planejamento do investimento, documentação da empresa e preparação para a entrevista.",
    h1: "Visto de Investidor (E1/E2)",
    intro: [
      "Os vistos E1 (comércio) e E2 (investimento) são para empreendedores de países que mantêm tratado comercial com os Estados Unidos e que compram ou abrem um negócio real e ativo no país.",
      "Como o Brasil não possui tratado E2, brasileiros normalmente acessam essa via com uma segunda cidadania de país elegível, ou avaliam alternativas como o L-1 e os processos EB. No diagnóstico, analisamos com franqueza qual caminho faz sentido para o seu caso.",
    ],
    paraQuem: [
      "Empreendedores comprando ou abrindo negócios nos EUA",
      "Quem possui cidadania de país com tratado E2",
      "Investidores que vão administrar o negócio de perto",
      "Famílias que pretendem morar nos EUA via investimento",
    ],
    processo: [
      { t: "Análise de elegibilidade", d: "Verificamos cidadanias, o negócio pretendido e se a via E2 realmente se aplica ao seu caso." },
      { t: "Planejamento do investimento", d: "Orientamos a estruturação com profissionais adequados: valor substancial, negócio real e plano consistente." },
      { t: "Documentação da empresa", d: "Organizamos as evidências do investimento, da operação e da origem dos recursos." },
      { t: "Fase consular", d: "Cuidamos do DS-160, do formulário DS-156E, do agendamento e da preparação para a entrevista." },
    ],
    documentos: [
      "Passaporte de país com tratado E1/E2",
      "Comprovação do investimento e da origem dos recursos",
      "Documentos societários e operacionais da empresa",
      "Plano de negócios",
    ],
    faqs: [
      {
        q: "Brasileiro pode tirar o visto E2?",
        a: "Somente com a cidadania de um país que tenha tratado E2 com os EUA, como Itália, Espanha ou Portugal, entre outros. Se você não tem uma segunda cidadania elegível, mostramos as alternativas viáveis para o seu caso, como o L-1 ou as vias EB.",
      },
      {
        q: "Qual o valor mínimo de investimento?",
        a: "A lei não fixa um valor único: exige um investimento substancial e proporcional ao negócio, que deve ser real e capaz de gerar atividade econômica. O plano e as evidências pesam tanto quanto o valor.",
      },
    ],
  },
  {
    slug: "eb1",
    sigla: "EB-1",
    nome: "Imigração por talento",
    metaTitle: "Green Card EB-1: imigração por habilidade extraordinária",
    metaDesc:
      "Assessoria para o Green Card EB-1: análise de elegibilidade, montagem do dossiê de evidências e condução com advogados licenciados nos EUA.",
    h1: "Green Card por Talento (EB-1)",
    intro: [
      "O EB-1 é a via de imigração para quem se destaca no topo da sua área em ciências, artes, educação, negócios ou esportes. Na modalidade EB-1A, não é preciso oferta de emprego: a própria pessoa peticiona com base nas suas realizações.",
      "O processo é construído sobre evidências: prêmios, publicações, repercussão na mídia, julgamento do trabalho de outros, entre outros critérios. A BlueVisa faz uma análise honesta da sua elegibilidade e conduz o caso com advogados de imigração licenciados nos EUA.",
    ],
    paraQuem: [
      "Pesquisadores, cientistas e professores reconhecidos",
      "Artistas, atletas e profissionais premiados",
      "Executivos e empreendedores de destaque",
      "Quem possui realizações documentáveis no topo da área",
    ],
    processo: [
      { t: "Análise de elegibilidade", d: "Avaliamos com franqueza se o seu histórico sustenta um caso EB-1 forte, antes de qualquer investimento." },
      { t: "Estratégia e dossiê", d: "Mapeamos os critérios que o seu perfil atende e montamos o dossiê de evidências com você." },
      { t: "Petição com advogados", d: "A petição é conduzida com advogados de imigração licenciados nos EUA, parceiros da BlueVisa." },
      { t: "Fase final", d: "Acompanhamos o processo até o visto de imigrante ou o ajuste de status." },
    ],
    documentos: [
      "Currículo detalhado e comprovantes de realizações",
      "Prêmios, publicações e citações",
      "Matérias de imprensa sobre o seu trabalho",
      "Cartas de recomendação de especialistas",
    ],
    faqs: [
      {
        q: "Preciso de oferta de emprego para o EB-1?",
        a: "Na modalidade EB-1A, de habilidade extraordinária, não: você mesmo peticiona com base nas suas realizações. Outras modalidades, como EB-1B e EB-1C, envolvem empregador ou empresa.",
      },
      {
        q: "Minha família imigra junto?",
        a: "Sim. Cônjuge e filhos solteiros menores de 21 anos entram no processo como dependentes e também recebem o Green Card.",
      },
    ],
  },
  {
    slug: "eb2-niw",
    sigla: "EB-2 NIW",
    nome: "Interesse Nacional",
    metaTitle: "Green Card EB-2 NIW: imigração por interesse nacional",
    metaDesc:
      "Assessoria para o Green Card EB-2 NIW: avaliação do perfil, tese de interesse nacional e petição conduzida com advogados licenciados nos EUA.",
    h1: "Green Card por Interesse Nacional (EB-2 NIW)",
    intro: [
      "O EB-2 NIW (National Interest Waiver) é uma das vias de imigração mais procuradas por profissionais qualificados: ela dispensa oferta de emprego e patrocinador quando o seu trabalho tem mérito substancial e importância nacional para os Estados Unidos.",
      "O caso é construído em torno de uma tese: o que você faz, por que isso importa para os EUA e por que você está bem posicionado para continuar fazendo. A BlueVisa avalia seu perfil com franqueza e conduz a petição com advogados de imigração licenciados nos EUA.",
    ],
    paraQuem: [
      "Profissionais com mestrado, doutorado ou experiência equivalente",
      "Engenheiros, profissionais de saúde, tecnologia e pesquisa",
      "Empreendedores com projetos de impacto",
      "Quem busca o Green Card sem depender de empregador",
    ],
    processo: [
      { t: "Avaliação do perfil", d: "Analisamos formação, experiência e resultados para verificar a força do seu caso NIW." },
      { t: "Construção da tese", d: "Definimos a narrativa de interesse nacional e as evidências que a sustentam." },
      { t: "Petição com advogados", d: "A petição I-140 é conduzida com advogados de imigração licenciados nos EUA, parceiros da BlueVisa." },
      { t: "Fase final", d: "Acompanhamos até o visto de imigrante no consulado ou o ajuste de status nos EUA." },
    ],
    documentos: [
      "Diplomas e histórico acadêmico",
      "Comprovantes de experiência e resultados profissionais",
      "Publicações, projetos e reconhecimentos",
      "Cartas de recomendação de especialistas",
    ],
    faqs: [
      {
        q: "Preciso de mestrado para o EB-2 NIW?",
        a: "O EB-2 exige grau avançado ou habilidade excepcional. Na prática, mestrado e doutorado ajudam, mas bacharelado com anos de experiência progressiva também pode qualificar. A avaliação do caso concreto é o primeiro passo.",
      },
      {
        q: "Quanto tempo leva o processo NIW?",
        a: "Depende das filas do USCIS e, para brasileiros, da disponibilidade de vistos da categoria EB-2, que varia ao longo do tempo. No diagnóstico apresentamos o cenário atual e o cronograma realista do seu caso.",
      },
    ],
  },
];

export function getVistoPage(slug: string) {
  return VISTO_PAGES.find((v) => v.slug === slug);
}
