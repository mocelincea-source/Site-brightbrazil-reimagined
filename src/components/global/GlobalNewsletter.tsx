import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";

const GlobalNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:larissa@brightbrazil.co?subject=Newsletter Subscription&body=Please subscribe me: ${email}`, "_self");
    setEmail("");
  };

  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-muted-foreground mb-8">Fill in your details to subscribe:</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-secondary border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNewsletter;
