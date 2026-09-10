import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(id);
  }, []);

  const close = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("newsletter-signup", {
        body: { name, email },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast({
        title: "Inscrição confirmada",
        description: "Obrigada! Você receberá as novidades da B.Right.",
      });
      close();
    } catch (err) {
      console.error("newsletter signup failed:", err);
      toast({
        title: "Não foi possível inscrever",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={close} />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-md bg-background border border-border rounded-3xl p-8 shadow-2xl"
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest text-muted-foreground mb-4">
              <Mail className="w-4 h-4 text-accent" />
              Newsletter B.Right
            </span>

            <h2
              id="newsletter-title"
              className="text-3xl font-display font-light text-foreground leading-tight mb-3"
            >
              Receba nossos <span className="italic">insights</span> sobre ESG
            </h2>
            <p className="text-sm text-muted-foreground font-light mb-6">
              Conteúdos sobre regulação, relatórios e sustentabilidade direto no seu e-mail.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <button
                type="submit"
                disabled={loading}
                className="group mt-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-full py-3 text-sm font-medium hover:brightness-95 transition-all disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Quero me inscrever"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
