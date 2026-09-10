import { motion } from "framer-motion";
import { TrendingUp, Award, DollarSign, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Vantagens Competitivas",
    desc: "Práticas ESG sólidas geram uma posição competitiva mais forte, engajando stakeholders e atraindo talentos, tornando a empresa mais resiliente e reduzindo custos operacionais.",
  },
  {
    icon: Award,
    title: "Aprimoramento da Reputação",
    desc: "Empresas que investem em Relatórios ESG constroem reputação positiva junto a consumidores e investidores, fortalecendo a lealdade e divulgando certificações como a ISO 14001.",
  },
  {
    icon: DollarSign,
    title: "Aumento da Lucratividade",
    desc: "Eficiências operacionais e redução de desperdícios impactam diretamente a lucratividade. A inovação sustentável pode abrir novos mercados e atrair consumidores conscientes.",
  },
  {
    icon: BarChart3,
    title: "Valorização ao Longo do Tempo",
    desc: "Empresas com performance ESG sólida são mais atraentes para investidores de longo prazo, resultando em valorização sustentável ao longo do tempo.",
  },
];

const ESGSection = () => {
  return (
    <section id="esg" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block">Nossa Paixão</span>
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-6">
            ESG é mais do que uma sigla
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            É uma abordagem estratégica que integra fatores Ambientais, Sociais e de Governança, trazendo uma série de benefícios positivos para empresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8"
            >
              <benefit.icon className="w-8 h-8 text-accent mb-5" />
              <h3 className="font-display text-xl mb-3">{benefit.title}</h3>
              <p className="text-primary-foreground/75 leading-relaxed text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
