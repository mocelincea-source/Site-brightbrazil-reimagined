import { motion } from "framer-motion";
import { Shield, BarChart3, Megaphone, Gamepad2 } from "lucide-react";
import globalHeroBg from "@/assets/global-hero-bg.jpg";
import ClientsMarquee from "@/components/ClientsMarquee";

const features = [
  {
    icon: Shield,
    title: "EU-ready ESG Support",
    desc: "Strategy, implementation, governance and reporting",
  },
  {
    icon: BarChart3,
    title: "International Standards",
    desc: "Alignment with IFRS S1 & S2 and leading ESG frameworks",
  },
  {
    icon: Megaphone,
    title: "ESG Communication",
    desc: "Videos, presentations, social media, landing pages and talks",
  },
  {
    icon: Gamepad2,
    title: "Gamified Training",
    desc: "ESG & Compliance training to embed ESG into culture and decision-making",
  },
];

const GlobalHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-36 md:pt-40 pb-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={globalHeroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-[3.25rem] font-display text-secondary leading-tight mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ESG Strategy & Compliance Support for EU-Regulated Companies
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-secondary/80 max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          B.Right helps organisations align ESG strategy, reporting, governance and stakeholder engagement with EU expectations, turning compliance into credibility, value, and competitive advantage.
        </motion.p>

        {/* Feature cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-secondary/10 backdrop-blur-md border border-secondary/15 rounded-xl p-5 flex flex-col gap-3"
            >
              <f.icon className="w-7 h-7 text-accent" />
              <h3 className="text-secondary font-medium text-sm leading-snug">{f.title}</h3>
              <p className="text-secondary/65 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#meeting"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity text-center"
          >
            Schedule a free-of-charge meeting
          </a>
          <a
            href="#solutions"
            className="border border-secondary/30 text-secondary px-8 py-3.5 rounded-full font-medium text-base hover:bg-secondary/10 transition-colors text-center"
          >
            See our ESG Solutions
          </a>
        </motion.div>

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <ClientsMarquee label="Trusted by" variant="light" />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalHero;
