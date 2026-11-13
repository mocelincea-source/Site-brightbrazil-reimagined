import { motion } from "framer-motion";
import larissa from "@/assets/larissa.jpg";
import cecilia from "@/assets/cecilia.jpeg";
import joaoVitor from "@/assets/joao-vitor.jpeg";

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

const team = [
  {
    name: "João Vitor Santos Paixão",
    image: joaoVitor,
    role: "Pesquisador e Consultor ESG",
    bio: "João Vitor Santos Paixão atua na B.Right com pesquisa, desenvolvimento de conteúdos e apoio à estruturação de projetos de sustentabilidade. É formado em Engenharia Agronômica pela ESALQ/USP, profissional no CREA e é certificado como Auditor Interno de Sistema de Gestão Integrado, com base nas normas ISO 9001, ISO 14001 e ISO 45001. Possui experiência em sustentabilidade, ESG, pesquisa, gestão de projetos e análise de dados.",
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
                    loading="lazy"
                    decoding="async"
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

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-display text-foreground leading-tight">Nossa Equipe</h3>
          </motion.div>

          <div className="flex justify-center flex-wrap gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="w-full max-w-sm"
              >
                <div className="glass-card overflow-hidden">
                  <div className="aspect-[2/3] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-xl text-foreground mb-2">{member.name}</h4>
                    <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
