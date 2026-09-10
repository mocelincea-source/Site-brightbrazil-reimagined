import { motion } from "framer-motion";
import { TrendingUp, Award, DollarSign, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Competitive Advantages",
    desc: "Strong ESG practices can strengthen competitive positioning, considering stakeholder engagement, especially end consumers. In addition, when a company implements energy efficiencies and promotes an inclusive culture, it attracts more talent, becomes more resilient to changes in the business environment, and reduces operational costs and turnover.",
  },
  {
    icon: Award,
    title: "Reputation Enhancement",
    desc: "Companies that invest in an ESG Report mapping their social and environmental initiatives can build a positive reputation with consumers and investors. For companies with environmental impact, an ESG Report can also be an opportunity to communicate ISO 14001 certification to the market, demonstrating commitment to sustainable practices across the supply chain.",
  },
  {
    icon: DollarSign,
    title: "Increased Profitability",
    desc: "Effective ESG practices can directly impact profitability. Companies that improve operational efficiency and reduce waste, whether in natural resource management or the supply chain, may reduce costs. Sustainable innovation can open new markets and attract consumers who value environmentally responsible products and services.",
  },
  {
    icon: BarChart3,
    title: "Long-term Value Appreciation",
    desc: "Companies with strong ESG performance are often more attractive to long-term investors. A company that consistently demonstrates governance, environmental management and social responsibility can attract investors committed to ethical values, leading to sustainable long-term appreciation.",
  },
];

const GlobalPassion = () => {
  return (
    <section id="passion" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block">Our Passion</span>
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-6">
            Our Passion
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            ESG is more than an acronym, it is a strategic approach that integrates Environmental, Social and Governance factors. And it is no longer news that this perspective brings a range of positive benefits to a company, such as:
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

export default GlobalPassion;
