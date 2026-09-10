import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const contacts = [
  { name: "Larissa Mocelin", phone: "(11) 99170-6274", email: "larissa@brightbrazil.co", wa: "5511991706274" },
  { name: "Cecilia Romero", phone: "(11) 91315-1348", email: "cecilia@brightbrazil.co", wa: "5511913151348" },
];

const GlobalContact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Get in touch</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">Contact</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-xl text-foreground mb-5">{person.name}</h3>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  {person.phone}
                </div>
                <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  {person.email}
                </a>
              </div>
              <a
                href={`https://wa.me/${person.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                Send a message
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalContact;
