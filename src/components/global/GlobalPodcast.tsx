import { motion } from "framer-motion";
import { Play } from "lucide-react";

const GlobalPodcast = () => {
  return (
    <section id="podcast" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Listen</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-6">
            Talking About ESG Podcast
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join our conversations about ESG strategy, sustainability, and governance with industry leaders and experts.
          </p>
          <a
            href="https://www.youtube.com/@BRightESG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
          >
            <Play className="w-5 h-5" />
            Discover our podcast
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPodcast;
