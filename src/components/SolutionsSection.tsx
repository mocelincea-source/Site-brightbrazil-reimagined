import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Solution = { num: string; title: string; desc: string };

const categories: { key: string; label: string; intro: string; items: Solution[] }[] = [
  {
    key: "governanca",
    label: "Governança",
    intro: "Conselhos, estratégia e controles internos para sustentar o crescimento da sua organização com integridade.",
    items: [
      { num: "01", title: "Conselho consultivo e de administração", desc: "Estruturamos e participamos ativamente de conselhos, trazendo visão estratégica, ética e foco em crescimento sustentável." },
      { num: "02", title: "Consultoria de gestão e estratégia", desc: "Fortalecemos gestão, estratégia e controles internos com foco em inovação, compliance e governança." },
    ],
  },
  {
    key: "relatorios",
    label: "Relatórios",
    intro: "Reportes claros, auditáveis e alinhados aos principais frameworks globais de sustentabilidade.",
    items: [
      { num: "03", title: "Relatórios de Sustentabilidade", desc: "IFRS S1, S2, GRI, SASB, completos, transparentes e em conformidade com padrões globais." },
      { num: "09", title: "Implementação IFRS S1 e S2", desc: "Adequação completa da estrutura de reporte aos novos padrões internacionais." },
      { num: "10", title: "Consolidação de Indicadores ESG", desc: "Organizamos, validamos e consolidamos indicadores estratégicos da sua empresa." },
    ],
  },
  {
    key: "materialidade",
    label: "Materialidade",
    intro: "Identificação dos temas e públicos que realmente movem valor para o negócio.",
    items: [
      { num: "04", title: "Matriz de Materialidade e Dupla Materialidade", desc: "Mapeamos os temas ESG mais relevantes para o negócio e seus stakeholders." },
      { num: "05", title: "Mapeamento de Stakeholders", desc: "Identificamos e categorizamos públicos estratégicos, interesses, expectativas e riscos." },
    ],
  },
  {
    key: "clima",
    label: "Clima",
    intro: "Da medição de emissões aos planos de transição para uma economia de baixo carbono.",
    items: [
      { num: "06", title: "Inventário de emissões, GHG Protocol e CDP", desc: "Inventários completos seguindo os principais protocolos internacionais." },
      { num: "07", title: "Planos de transição climática", desc: "Riscos físicos, de transição e oportunidades na rota para baixo carbono." },
    ],
  },
  {
    key: "regulacao",
    label: "Regulação",
    intro: "Adequação a exigências regulatórias nacionais e internacionais e certificações reconhecidas.",
    items: [
      { num: "08", title: "Adequação a regulações", desc: "CVM, Susep, Bacen, IFRS, União Europeia e EUA, sem zonas cinzentas." },
      { num: "11", title: "Certificação Sistema B (B Lab)", desc: "Assessoria completa para obter a certificação Empresa B pelo B Lab Brasil." },
      { num: "12", title: "ISO 14001 e Selo Pró-Ética", desc: "Caminho estruturado para certificações de sustentabilidade e governança." },
    ],
  },
  {
    key: "comunicacao",
    label: "Comunicação",
    intro: "Capacitação dos times e narrativas que comunicam de forma estratégica seu compromisso ESG.",
    items: [
      { num: "13", title: "Workshops e Cursos In-Company", desc: "Programas exclusivos, baseados em cases reais, com certificação e relatório." },
      { num: "14", title: "Vídeo Institucional de Sustentabilidade", desc: "Traduzimos seu compromisso ESG em vídeo, gravado em estúdio próprio." },
      { num: "15", title: "Campanhas para mídias sociais e TV", desc: "Comunicação consistente para fortalecer a imagem sustentável da marca." },
    ],
  },
];

const SolutionsSection = () => {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-foreground leading-[1.05] tracking-tight max-w-3xl">
            Soluções ESG sob medida para cada estágio da sua jornada.
          </h2>
        </motion.div>

        {/* Pill tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all border ${
                active === c.key
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Intro paragraph */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`${current.key}-intro`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10"
          >
            {current.intro}
          </motion.p>
        </AnimatePresence>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {current.items.map((item, i) => {
              const highlight = i === 0;
              return (
                <div
                  key={item.num}
                  className={`group rounded-3xl p-7 flex flex-col justify-between min-h-[260px] border transition-all ${
                    highlight
                      ? "bg-accent border-accent text-accent-foreground"
                      : "bg-secondary/60 border-border hover:border-foreground/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className={`text-xs font-mono tracking-wider ${
                        highlight ? "text-accent-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {item.num}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${
                        highlight ? "bg-accent-foreground text-accent" : "bg-foreground text-background"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-xl md:text-2xl font-display font-bold leading-tight mb-3 tracking-tight ${
                        highlight ? "text-accent-foreground" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        highlight ? "text-accent-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SolutionsSection;
