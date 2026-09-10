export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cta: string;
  content: string[];
  lists?: { intro?: string; items: string[] }[];
}

export const globalBlogPosts: BlogPost[] = [
  {
    slug: "csrd-what-eu-companies-must-do-now",
    title: "CSRD Is Here: What EU Companies Must Do Now to Stay Compliant",
    date: "June 4, 2025",
    excerpt: "The Corporate Sustainability Reporting Directive marks a turning point in how companies must report sustainability information…",
    cta: "Want to understand how CSRD impacts your business? Talk to our ESG specialists.",
    content: [
      "The Corporate Sustainability Reporting Directive (CSRD) marks a turning point in how companies operating in or with the European Union must report sustainability information. Far beyond a regulatory update, CSRD raises the bar for transparency, accountability, and ESG integration into corporate strategy.",
      "Thousands of companies will soon be required to disclose detailed information on environmental impact, social practices, governance, risks, and opportunities. This includes structured sustainability reports, double materiality assessments, climate-related risks, transition plans, and value chain impacts.",
      "For many organisations, the biggest challenge is not reporting itself, but building the systems, governance, data processes, and internal culture needed to sustain ongoing compliance.",
      "Companies that start early gain three strategic advantages:",
    ],
    lists: [
      {
        items: [
          "Reduced regulatory and reputational risk",
          "Stronger credibility with investors, partners, and regulators",
          "The ability to transform compliance into strategic positioning",
        ],
      },
      {
        intro: "CSRD should not be treated as a last-minute obligation, but as an opportunity to strengthen resilience, transparency, and long-term value creation.",
        items: [],
      },
    ],
  },
  {
    slug: "esg-reporting-europe-competitive-advantage",
    title: "ESG Reporting in Europe: From Compliance to Competitive Advantage",
    date: "June 4, 2025",
    excerpt: "ESG reporting in Europe is evolving from a compliance-driven exercise into a strategic business tool…",
    cta: "Learn how to turn ESG reporting into strategic value.",
    content: [
      "ESG reporting in Europe is evolving from a compliance-driven exercise into a strategic business tool. With frameworks such as CSRD, IFRS S1 and S2, and EU Taxonomy shaping corporate disclosures, companies now have a chance to use ESG data as a lever for trust, efficiency, and differentiation.",
      "A strong ESG report does more than meet regulatory requirements. It can:",
    ],
    lists: [
      {
        items: [
          "Improve investor confidence",
          "Strengthen reputation and stakeholder trust",
          "Highlight operational efficiencies",
          "Support access to sustainable finance",
          "Reinforce governance and accountability",
        ],
      },
      {
        intro: "The key shift is mindset. Reporting should reflect real strategy, real execution, and real impact, not just promises or polished narratives.",
        items: [],
      },
      {
        intro: "When ESG data is reliable, structured, and connected to decision-making, it becomes a source of competitive advantage.",
        items: [],
      },
    ],
  },
  {
    slug: "double-materiality-explained",
    title: "Double Materiality Explained: How EU Companies Should Prioritize ESG Topics",
    date: "June 4, 2025",
    excerpt: "Double materiality is one of the most important, and misunderstood, pillars of European sustainability regulation…",
    cta: "Explore how to structure a robust Double Materiality Matrix.",
    content: [
      "Double materiality is one of the most important, and misunderstood, pillars of European sustainability regulation.",
      "Unlike traditional materiality, which focuses only on financial impact on the company, double materiality evaluates both:",
    ],
    lists: [
      {
        items: [
          "How ESG issues affect the company",
          "How the company impacts society and the environment",
        ],
      },
      {
        intro: "This approach helps organisations prioritize what truly matters, not based on trends, but on risk, impact, regulation, and stakeholder expectations.",
        items: [],
      },
      {
        intro: "A strong Double Materiality Matrix:",
        items: [
          "Guides ESG strategy and reporting",
          "Supports CSRD compliance",
          "Aligns leadership, investors, and operational teams",
          "Grounds decisions in evidence, not intuition",
        ],
      },
      {
        intro: "When done well, it transforms ESG from a checklist into a strategic compass.",
        items: [],
      },
    ],
  },
  {
    slug: "greenwashing-vs-greenhushing",
    title: "Greenwashing vs. Greenhushing: The ESG Communication Trap in Europe",
    date: "June 4, 2025",
    excerpt: "European regulators and consumers are increasingly vigilant about ESG communication. Two major risks now shape corporate messaging…",
    cta: "Learn how to communicate ESG with credibility and compliance.",
    content: [
      "European regulators and consumers are increasingly vigilant about ESG communication. Two major risks now shape corporate messaging: greenwashing (overstating sustainability claims) and greenhushing (under-communicating real initiatives out of fear of criticism).",
      "Both can damage trust.",
      "Greenwashing exposes companies to legal, regulatory, and reputational risk. Greenhushing wastes strategic value by hiding real progress and credibility.",
      "The solution lies in clear, evidence-based, and proportionate communication, grounded in data, governance, and transparency.",
      "Effective ESG communication should:",
    ],
    lists: [
      {
        items: [
          "Reflect verified performance",
          "Avoid exaggerated claims",
          "Be understandable to non-technical audiences",
          "Align with regulatory and disclosure standards",
        ],
      },
      {
        intro: "Trust is built not by silence or hype, but by clarity, consistency, and proof.",
        items: [],
      },
    ],
  },
  {
    slug: "esg-communication-eu-trust",
    title: "ESG Communication in the EU: How to Build Trust with Regulators, Investors and Stakeholders",
    date: "June 4, 2025",
    excerpt: "In Europe, ESG communication is no longer a branding exercise, it is part of regulatory accountability…",
    cta: "Discover how structured ESG communication strengthens credibility.",
    content: [
      "In Europe, ESG communication is no longer a branding exercise, it is part of regulatory accountability, investor due diligence, and corporate governance.",
      "Companies must communicate ESG in ways that are:",
    ],
    lists: [
      {
        items: ["Transparent", "Verifiable", "Consistent across reports, websites, media, and internal channels"],
      },
      {
        intro: "Effective ESG communication extends beyond reports. It includes:",
        items: [
          "Stakeholder presentations",
          "Employee training",
          "Social media and institutional campaigns",
          "Landing pages and digital storytelling",
          "Videos, workshops, and leadership messaging",
        ],
      },
      {
        intro: "When ESG is communicated clearly, it strengthens trust, reputation, engagement, and long-term value perception.",
        items: [],
      },
    ],
  },
  {
    slug: "ifrs-s1-s2-european-esg-reporting",
    title: "IFRS S1 and S2: What They Mean for European ESG Reporting",
    date: "June 4, 2025",
    excerpt: "IFRS S1 and IFRS S2 set a new global baseline for sustainability and climate-related disclosures…",
    cta: "Understand how IFRS S1 and S2 apply to your organisation.",
    content: [
      "IFRS S1 and IFRS S2 set a new global baseline for sustainability and climate-related disclosures. In Europe, these standards complement CSRD by strengthening financial materiality, climate risk transparency, and investor-relevant ESG data.",
      "IFRS S1 focuses on general sustainability-related risks and opportunities. IFRS S2 focuses specifically on climate-related disclosures, including transition risks, physical risks, emissions, and resilience strategies.",
      "For companies, this means:",
    ],
    lists: [
      {
        items: [
          "Stronger data governance",
          "Better integration between sustainability and finance",
          "Increased investor scrutiny",
          "Greater need for internal controls and validation",
        ],
      },
      {
        intro: "Companies that align early will benefit from stronger credibility, better access to capital, and smoother regulatory adaptation.",
        items: [],
      },
    ],
  },
  {
    slug: "esg-risk-management-europe",
    title: "ESG Risk Management: How European Companies Can Anticipate Regulatory and Climate Risks",
    date: "June 4, 2025",
    excerpt: "ESG risks in Europe now extend beyond reputation, they include regulatory enforcement, climate exposure, and more…",
    cta: "Explore how to structure ESG risk management effectively.",
    content: [
      "ESG risks in Europe now extend beyond reputation, they include regulatory enforcement, climate exposure, supply chain disruptions, and capital access constraints.",
      "Key ESG risk categories include:",
    ],
    lists: [
      {
        items: [
          "Climate transition and physical risks",
          "Regulatory non-compliance",
          "Human rights and supply chain issues",
          "Governance failures and data gaps",
          "Reputational and investor confidence risks",
        ],
      },
      {
        intro: "A mature ESG risk management approach requires:",
        items: [
          "Governance structures",
          "Data-driven risk assessment",
          "Scenario analysis",
          "Integration with enterprise risk management (ERM)",
          "Ongoing monitoring and reporting",
        ],
      },
      {
        intro: "Managing ESG risks proactively is not just defensive, it is a resilience strategy.",
        items: [],
      },
    ],
  },
  {
    slug: "esg-strategy-to-execution",
    title: "From ESG Strategy to Execution: Why Implementation Matters More Than Promises",
    date: "June 4, 2025",
    excerpt: "Many organisations publish ESG strategies. Few execute them effectively. The real differentiator is implementation…",
    cta: "Learn how to translate ESG strategy into operational reality.",
    content: [
      "Many organisations publish ESG strategies. Few execute them effectively.",
      "The real differentiator in ESG today is implementation, embedding ESG into:",
    ],
    lists: [
      {
        items: ["Operations", "Procurement", "HR and culture", "Leadership decision-making", "Incentives and KPIs"],
      },
      {
        intro: "Execution requires more than frameworks. It demands:",
        items: ["Governance", "Ownership", "Internal engagement", "Training", "Performance monitoring"],
      },
      {
        intro: "Strategy sets direction. Execution builds credibility.",
        items: [],
      },
      {
        intro: "Companies that move from intention to action gain stronger trust, measurable impact, and sustainable results.",
        items: [],
      },
    ],
  },
  {
    slug: "esg-gamified-training-europe",
    title: "ESG Training in Europe: Why Gamified Learning Drives Real Cultural Change",
    date: "June 4, 2025",
    excerpt: "Embedding ESG into corporate culture is one of the biggest challenges. Policies alone do not change behaviour…",
    cta: "Discover how gamified ESG training strengthens organisational culture.",
    content: [
      "Embedding ESG into corporate culture is one of the biggest challenges for European organisations. Policies alone do not change behaviour, people do.",
      "Gamified ESG and Compliance training increases:",
    ],
    lists: [
      {
        items: ["Engagement", "Knowledge retention", "Participation", "Real-life application", "Cultural ownership"],
      },
      {
        intro: "By combining storytelling, challenges, simulations, and measurable outcomes, gamified training helps teams internalise ESG responsibilities in a practical and motivating way.",
        items: [],
      },
      {
        intro: "Sustainable change happens when ESG becomes part of daily decisions, not just annual reports.",
        items: [],
      },
    ],
  },
  {
    slug: "sustainable-finance-europe-esg",
    title: "Sustainable Finance in Europe: ESG, Green Bonds and MiFID II in Practice",
    date: "June 4, 2025",
    excerpt: "Sustainable finance regulations in Europe are reshaping how capital flows…",
    cta: "Learn how ESG and sustainable finance intersect in Europe.",
    content: [
      "Sustainable finance regulations in Europe are reshaping how capital flows. Instruments such as Green Bonds, EU Taxonomy, and MiFID II ESG preferences now require financial institutions to integrate sustainability into product design, advisory services, and portfolio management.",
      "This affects:",
    ],
    lists: [
      {
        items: ["Banks", "Asset managers", "Corporate issuers", "Investors", "Financial advisors"],
      },
      {
        intro: "Companies must ensure ESG claims are accurate, data-backed, and aligned with investor sustainability preferences, reducing legal and reputational risk while unlocking new funding opportunities.",
        items: [],
      },
      {
        intro: "Sustainable finance is no longer optional, it is a core market expectation.",
        items: [],
      },
    ],
  },
];
