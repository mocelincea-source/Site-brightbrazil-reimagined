export interface BRBlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cta: string;
  content: string[];
  lists?: { intro?: string; items: string[] }[];
}

export const blogPosts: BRBlogPost[] = [
  {
    slug: "ifrs-s1-e-s2-de-preparacao-a-realidade-operacional",
    title: "IFRS S1 e S2: de preparação à realidade operacional",
    date: "Fevereiro 2026",
    excerpt:
      "Em 2026, os padrões IFRS S1 e IFRS S2 deixam de ser apenas um tema de preparação e passam a fazer parte da realidade operacional das empresas.",
    cta: "Quer estruturar o reporte ESG da sua empresa segundo IFRS S1 e S2? Fale com nossos especialistas.",
    content: [
      "Em 2026, os padrões IFRS S1 e IFRS S2 deixam de ser apenas um tema de preparação e passam a fazer parte da realidade operacional das empresas brasileiras e globais. O que antes era discutido como tendência regulatória, agora é exigência prática para companhias que buscam acesso a capital, credibilidade junto a investidores e alinhamento com as melhores práticas internacionais de divulgação.",
      "O IFRS S1 estabelece os requisitos gerais para a divulgação de informações financeiras relacionadas à sustentabilidade, enquanto o IFRS S2 foca especificamente em riscos e oportunidades climáticas. Juntos, eles formam a nova base global de relato, adotada também pelo Brasil via CVM.",
      "Para sair da fase de preparação e atingir maturidade operacional, as empresas precisam:",
    ],
    lists: [
      {
        items: [
          "Integrar dados financeiros e de sustentabilidade",
          "Estruturar governança e controles internos sobre dados ESG",
          "Mapear riscos e oportunidades climáticas com cenários",
          "Treinar equipes de finanças, riscos e sustentabilidade",
          "Conectar o reporte à estratégia e à tomada de decisão",
        ],
      },
      {
        intro:
          "Empresas que tratam IFRS S1 e S2 apenas como um exercício de compliance perdem a oportunidade de transformar dados ESG em diferencial competitivo, acesso a capital e fortalecimento da reputação.",
        items: [],
      },
    ],
  },
  {
    slug: "treinamentos-esg-nas-empresas",
    title: "Treinamentos ESG nas empresas: por que capacitar pessoas é estratégico",
    date: "Fevereiro 2026",
    excerpt:
      "O ESG deixou de ser um conceito teórico e passou a ser parte central da estratégia empresarial. Mas estratégia sem pessoas capacitadas não se concretiza.",
    cta: "Conheça nossos treinamentos gamificados de ESG e Compliance.",
    content: [
      "O ESG deixou de ser um conceito teórico e passou a ser parte central da estratégia empresarial. Porém, nenhuma estratégia se concretiza sem pessoas capacitadas para executá-la no dia a dia.",
      "Treinar colaboradores em ESG vai muito além de cumprir uma exigência regulatória ou de auditoria. É o que garante que políticas, metas e relatórios se traduzam em comportamentos reais, em decisões de compras, processos, relacionamento com fornecedores, atendimento ao cliente e governança.",
      "Treinamentos ESG bem estruturados geram:",
    ],
    lists: [
      {
        items: [
          "Maior engajamento e senso de propósito",
          "Redução de riscos regulatórios e reputacionais",
          "Coerência entre discurso e prática",
          "Cultura organizacional alinhada à estratégia",
          "Resultados mensuráveis em indicadores ESG",
        ],
      },
      {
        intro:
          "Quando o aprendizado é gamificado, com simulações, narrativas e desafios, o conteúdo é melhor absorvido e aplicado. Pessoas treinadas tomam decisões melhores, e é aí que ESG deixa de ser slide e vira resultado.",
        items: [],
      },
    ],
  },
  {
    slug: "cidades-inteligentes-tecnologia-esg-governanca",
    title: "Cidades inteligentes: quando tecnologia, ESG e governança caminham juntas",
    date: "Fevereiro 2026",
    excerpt:
      "As cidades inteligentes deixaram de ser um conceito futurista e se tornaram uma agenda estratégica global de tecnologia, ESG e governança.",
    cta: "Saiba como integrar ESG e governança em projetos de cidades inteligentes.",
    content: [
      "As cidades inteligentes deixaram de ser um conceito futurista e se tornaram uma agenda estratégica global. Tecnologia, sustentabilidade e governança caminham juntas para responder aos desafios urbanos do século XXI: mudanças climáticas, mobilidade, inclusão, segurança e eficiência dos serviços públicos.",
      "Mas ser uma cidade inteligente vai muito além de instalar sensores e aplicativos. Exige uma visão integrada de ESG aplicada ao território, equilibrando impacto ambiental, equidade social e governança transparente.",
      "Os pilares de uma cidade inteligente sustentável incluem:",
    ],
    lists: [
      {
        items: [
          "Mobilidade urbana de baixo carbono",
          "Eficiência energética e energias renováveis",
          "Gestão inteligente de resíduos e água",
          "Inclusão digital e participação cidadã",
          "Dados abertos, transparência e governança",
        ],
      },
      {
        intro:
          "Quando tecnologia, ESG e governança caminham juntas, as cidades se tornam mais resilientes, eficientes e humanas, e geram valor para cidadãos, empresas e investidores.",
        items: [],
      },
    ],
  },
];
