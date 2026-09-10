import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", company: "", esg: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("meeting-request", {
        body: formData,
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast({
        title: "Solicitação recebida",
        description: "Obrigada! Entraremos em contato em breve para agendar sua reunião.",
      });
      setFormData({ name: "", company: "", esg: "", email: "" });
    } catch (err) {
      console.error("meeting request failed:", err);
      toast({
        title: "Não foi possível enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Contato</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-3">
              Agende sua reunião <span className="text-primary italic">free of charge</span>
            </h2>
            <p className="text-muted-foreground mb-8">Preencha seus dados e entraremos em contato.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
              <input
                type="text"
                placeholder="Empresa"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-secondary border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
              <input
                type="text"
                placeholder="Interesse em ESG"
                value={formData.esg}
                onChange={(e) => setFormData({ ...formData, esg: e.target.value })}
                className="bg-secondary border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                title="Informe um e-mail válido"
                className="bg-secondary border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity mt-2 w-fit disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar"}

              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            {[
              { name: "Larissa Mocelin", phone: "(11) 99170-6274", email: "larissa@brightbrazil.co", wa: "5511991706274" },
              { name: "Cecilia Romero", phone: "(11) 91315-1348", email: "cecilia@brightbrazil.co", wa: "5511913151348" },
            ].map((person) => (
              <div key={person.name} className="glass-card p-6">
                <h3 className="font-display text-xl text-foreground mb-4">{person.name}</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    {person.phone}
                  </div>
                  <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    {person.email}
                  </a>
                  <a
                    href={`https://wa.me/${person.wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-primary font-medium hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar mensagem
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
