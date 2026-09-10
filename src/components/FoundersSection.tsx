import { motion } from "framer-motion";
import larissa from "@/assets/larissa.webp";
import cecilia from "@/assets/cecilia.webp";

const founders = [
  {
    name: "Larissa Mocelin",
    image: larissa,
    bio: "Sócia-fundadora das empresas Mocelin Advogadas, Mocelin Create e B.Right ESG Consultoria Empresarial. Autora do livro A SAÍDA e co-autora dos livros ESG: o Cisne Verde e o Capitalismo de Stakeholder e Mulheres em ESG na Prática. Possui pós-graduação em Direito Tributário pela FGV/SP e certificações em Liderança 360° Abílio Diniz (FGV/EAESP) e ESG e Gestão (USP/Esalq). Mais de dez anos de experiência em Direito Empresarial e Governança Corporativa.",
    phone: "(11) 99170-6274",
    email: "larissa@brightbrazil.co",
  },
  {
    name: "Cecilia Romero",
    image: cecilia,
    bio: "Sócia Fundadora do Escritório C. Romero Advocacia e da B.Right Consultoria Empresarial. Formada em Direito pela PUC-Rio, com Master of Laws (LL.M.) pela NYU School of Law. Mais de doze anos de experiência em Compliance, Governança Corporativa, Gerenciamento de Riscos e Data Privacy. Atuou como Diretora Jurídica & de Compliance na Britech S.A. e como associada internacional no escritório americano Jones Day.",
    phone: "(11) 91315-1348",
    email: "cecilia@brightbrazil.co",
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Quem somos</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">As Fundadoras</h2>
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
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">{founder.bio}</p>
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

export default FoundersSection;
