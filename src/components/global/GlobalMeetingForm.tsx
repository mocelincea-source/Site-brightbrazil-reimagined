import { motion } from "framer-motion";
import { useState } from "react";

const GlobalMeetingForm = () => {
  const [formData, setFormData] = useState({ name: "", company: "", esg: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/5511945916886?text=Hello! My name is ${formData.name}, from ${formData.company}. I'd like to know more about ${formData.esg}.`,
      "_blank"
    );
  };

  return (
    <section id="meeting" className="section-padding bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-3">
            Schedule your <span className="text-primary italic">free-of-charge</span> meeting
          </h2>
          <p className="text-muted-foreground">Fill in your details and we'll get in touch.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" required />
          <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <input type="text" placeholder="ESG" value={formData.esg} onChange={(e) => setFormData({ ...formData, esg: e.target.value })} className="bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" required />
          <button type="submit" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity mt-2 w-fit mx-auto">
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default GlobalMeetingForm;
