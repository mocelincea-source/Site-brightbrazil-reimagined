import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/b.right_esg/", color: "hover:text-pink-500" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/bright-esg/", color: "hover:text-blue-600" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@BRightESG", color: "hover:text-red-500" },
];

const GlobalSocialMedia = () => {
  return (
    <section id="social" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Follow us</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-12">Social Media</h2>
        </motion.div>

        <div className="flex justify-center gap-8">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col items-center gap-4 text-muted-foreground transition-colors ${s.color}`}
            >
              <s.icon className="w-10 h-10" />
              <span className="font-medium text-foreground">{s.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSocialMedia;
