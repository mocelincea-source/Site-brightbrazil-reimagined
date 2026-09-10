import { motion } from "framer-motion";
import { Leaf, Users, Shield } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Environmental", desc: "Responsible environmental practices integrated across operational areas." },
  { icon: Users, title: "Social", desc: "Corporate social responsibility that generates real positive impact." },
  { icon: Shield, title: "Governance", desc: "Transparent and ethical governance at every stage of operations." },
];

const GlobalAbout = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">About us</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6 leading-tight">About</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            B.Right specialises in ESG (Environmental, Social and Governance), providing comprehensive services to create positive impact for organisations. Our consultancy integrates responsible environmental practices, corporate social responsibility, and transparent governance across operational areas.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Our goal is to drive organisations toward sustainable excellence and the achievement of the Sustainable Development Goals (SDGs) of the United Nations Global Compact, exceeding conventional expectations.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Committed to a mission of meaningful reach, we seek to contribute substantially to organisations by raising awareness of ESG's essential pillars. Guided by core values such as Sustainable Innovation, Consistent Results, and Integrity, our consultancy weaves sustainability and social responsibility into every stage of our operations, providing a safe and smooth path toward an ethical and sustainable business future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalAbout;
