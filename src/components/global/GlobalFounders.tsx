import { motion } from "framer-motion";
import larissa from "@/assets/larissa.webp";
import cecilia from "@/assets/cecilia.webp";

const founders = [
  {
    name: "Larissa Mocelin",
    image: larissa,
    bio: "Larissa Mocelin is a founding partner of Mocelin Advogadas, Mocelin Create and B.Right ESG Business Consulting. She is the author of the book A SAÍDA and co-author of ESG: The Green Swan and Stakeholder Capitalism and Women in ESG in Practice.\n\nShe holds postgraduate degrees in Tax Law (FGV/SP) and Criminal Sciences (FDV), and is certified in 360° Leadership (FGV/EAESP – Abílio Diniz), and ESG & Management (USP/Esalq).\n\nAlongside her role as executive director at Mocelin Advogadas and Mocelin Create, with over ten years of experience in Business Law and Corporate Governance, she also leads B.Right, where she focuses on structuring and communicating ESG indicators to stakeholders, with a focus on family-owned businesses.",
    phone: "(11) 99170-6274",
    email: "larissa@brightbrazil.co",
  },
  {
    name: "Cecilia Romero",
    image: cecilia,
    bio: "Cecilia Romero is the founding partner of C. Romero Advocacia and co-founder of B.Right ESG Business Consulting. She graduated in Law from PUC-Rio and earned her LL.M. from NYU School of Law in 2017.\n\nShe has over twelve years of professional experience in Compliance, Corporate Governance, Risk Management and Data Privacy. Before entrepreneurship, she served as Legal & Compliance Director at Britech S.A., overseeing compliance, data privacy, M&A and international partnerships in Europe and the United States.\n\nShe worked as an international associate at the U.S. law firm Jones Day (2014–2015), representing one of the largest U.S. retail companies in a multi-million dollar settlement for violation of the U.S. anti-corruption law (FCPA).",
    phone: "(11) 91315-1348",
    email: "cecilia@brightbrazil.co",
  },
];

const GlobalFounders = () => {
  return (
    <section id="founders" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Who we are</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">Founders</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="glass-card overflow-hidden">
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center"
                    decoding="async"
                    loading="eager"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-foreground mb-4">{founder.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 whitespace-pre-line">{founder.bio}</p>
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="text-muted-foreground">{founder.phone}</span>
                    <a href={`mailto:${founder.email}`} className="text-primary hover:underline">{founder.email}</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFounders;
