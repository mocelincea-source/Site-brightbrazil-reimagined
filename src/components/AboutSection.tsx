import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about1Alt from "@/assets/about-1_1.jpg";
import about2 from "@/assets/about-2.jpg";
import about2Alt from "@/assets/about-2_2.jpg";

const card1Images = [about1, about1Alt];
const card2Images = [about2, about2Alt];
const SLIDE_INTERVAL_MS = 4000;

const tabs = [
  {
    key: "about",
    label: "Quem somos",
    eyebrow: "Quem somos na B.Right",
    headline:
      "Combinamos profundidade técnica em ESG com visão estratégica de negócio para transformar compliance em valor competitivo real.",
    description:
      "Cada projeto é desenhado para gerar impacto mensurável, ambiental, social e econômico, sustentando organizações em jornadas de longo prazo.",
  },
  {
    key: "trajetoria",
    label: "Trajetória",
    eyebrow: "Nossa trajetória",
    headline:
      "Mais de uma década apoiando empresas brasileiras e globais a estruturar estratégias ESG robustas e auditáveis.",
    description:
      "Acompanhamos a evolução dos frameworks GRI, SASB, TCFD e agora IFRS S1 e S2, sempre à frente das exigências regulatórias.",
  },
  {
    key: "visao",
    label: "Visão",
    eyebrow: "Nossa visão",
    headline:
      "Ser referência em consultoria ESG na América Latina, conectando capital, regulação e propósito em decisões corporativas.",
    description:
      "Acreditamos que sustentabilidade só gera valor quando integrada à estratégia, à governança e à cultura da organização.",
  },
  {
    key: "missao",
    label: "Missão",
    eyebrow: "Nossa missão",
    headline:
      "Elevar organizações à excelência sustentável, transformando ESG em vantagem competitiva mensurável.",
    description:
      "Apoiamos conselhos, lideranças e times executivos a tomar decisões melhores com dados, frameworks e narrativas consistentes.",
  },
];

const stats = [
  {
    value: "15+",
    title: "Anos de experiência ESG",
    desc: "Mais de uma década estruturando estratégias, relatórios e governança para empresas líderes em diversos setores.",
    highlight: false,
  },
  {
    value: "98%",
    title: "Aderência a frameworks",
    desc: "Nossos relatórios atendem integralmente a IFRS S1, S2, GRI e SASB, auditáveis e prontos para investidores.",
    highlight: true,
  },
];

const AboutSection = () => {
  const [active, setActive] = useState(tabs[0].key);
  const [slide, setSlide] = useState(0);
  const current = tabs.find((t) => t.key === active)!;

  useEffect(() => {
    const id = setInterval(
      () => setSlide((i) => (i + 1) % card1Images.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Top divider line */}
        <div className="h-px bg-border mb-10" />

        {/* Pill tabs */}
        <div className="flex flex-wrap gap-2 mb-14">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all border ${
                active === t.key
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-background text-foreground border-border hover:border-foreground/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-12 gap-10 mb-16"
          >
            <div className="md:col-span-3">
              <div className="flex items-start gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>{current.eyebrow}</span>
              </div>
            </div>

            <div className="md:col-span-9">
              <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-display font-medium text-foreground leading-[1.15] tracking-tight mb-6">
                {current.headline}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                {current.description}
              </p>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                Saiba mais
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image + stat row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-4"
        >
          <ImageCarouselCard
            images={card1Images}
            index={slide}
            alt="Profissional B.Right"
          />

          <StatCard {...stats[0]} />

          <ImageCarouselCard
            images={card2Images}
            index={slide}
            alt="Sustentabilidade corporativa"
          />

          <StatCard {...stats[1]} />
        </motion.div>
      </div>
    </section>
  );
};

const ImageCarouselCard = ({
  images,
  index,
  alt,
}: {
  images: string[];
  index: number;
  alt: string;
}) => (
  <div className="relative rounded-3xl overflow-hidden aspect-square">
    {images.map((src, i) => (
      <img
        key={src}
        src={src}
        alt={i === index ? alt : ""}
        aria-hidden={i !== index}
        loading="lazy"
        width={800}
        height={800}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          i === index ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
  </div>
);

const StatCard = ({
  value,
  title,
  desc,
  highlight,
}: {
  value: string;
  title: string;
  desc: string;
  highlight: boolean;
}) => (
  <div
    className={`rounded-3xl p-6 flex flex-col justify-between aspect-square ${
      highlight ? "bg-accent text-accent-foreground" : "bg-secondary/60 text-foreground"
    }`}
  >
    <div className="flex items-start justify-between">
      <span className="text-4xl md:text-5xl font-display font-bold tracking-tight">
        {value}
      </span>
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
          highlight ? "bg-accent-foreground text-accent" : "bg-foreground text-background"
        }`}
      >
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
    <div>
      <h3 className="text-base md:text-lg font-display font-semibold mb-2 leading-snug">
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? "text-accent-foreground/85" : "text-muted-foreground"
        }`}
      >
        {desc}
      </p>
    </div>
  </div>
);

export default AboutSection;
