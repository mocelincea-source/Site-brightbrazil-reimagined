import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const solutions = [
  { num: "01", title: "Structuring and participation in advisory and board councils", desc: "We support companies in creating and structuring Advisory and Board Councils that ensure strong corporate governance practices. We also offer active participation in these councils, bringing strategic perspective, ethics, and a focus on sustainable growth." },
  { num: "02", title: "Business consulting in management, strategy, innovation, policies and internal controls", desc: "We deliver tailored consulting to strengthen your company's management, strategy and internal controls, with a focus on innovation, compliance and governance. We work side-by-side with leadership to structure processes and policies aligned with best market practices." },
  { num: "03", title: "Sustainability Reports (IFRS S1, S2, GRI, SASB and others)", desc: "We prepare complete Sustainability Reports aligned with the main global standards, IFRS S1, S2, GRI, SASB, ensuring transparency, regulatory alignment and effective stakeholder communication." },
  { num: "04", title: "Materiality and Double Materiality Matrix", desc: "We develop Materiality and Double Materiality Matrices to map the ESG topics most relevant to the business and its stakeholders, strengthening corporate strategy and investor communication." },
  { num: "05", title: "Stakeholder Mapping", desc: "We identify and categorise your company's strategic stakeholders, mapping interests, expectations and potential risks to strengthen relationships and institutional communication." },
  { num: "06", title: "Climate transition plans: physical and transition risks", desc: "We build strategic climate transition plans by identifying physical and transition risks, as well as opportunities on the path toward a low-carbon economy." },
  { num: "07", title: "Regulatory alignment: CVM, Susep, Bacen, IFRS, EU, USA", desc: "We ensure your company aligns with key national and international ESG-related regulatory requirements, including CVM, Bacen, Susep, IFRS, the European Union and the United States." },
  { num: "08", title: "Implementation and alignment with IFRS S1 and S2 reporting standards", desc: "We support the full implementation and alignment of your reporting structure with IFRS S1 and S2, strengthening governance and transparency." },
  { num: "09", title: "ESG indicator consolidation", desc: "We organise, validate and consolidate your company's key ESG indicators, enabling strategic tracking and reporting for stakeholders and regulators." },
  { num: "10", title: "B Corp Certification (Sistema B Brasil / B Lab)", desc: "We provide end-to-end advisory support for achieving B Corp certification through B Lab Brazil, from diagnosis to implementation of required practices." },
  { num: "11", title: "ISO 14001 Certification and Pró-Ética Seal", desc: "We guide your company in obtaining recognised sustainability and governance certifications such as ISO 14001 and the Pró-Ética Seal, strengthening reputation and ethical commitment." },
  { num: "12", title: "Tailored in-company workshops and courses", desc: "We develop exclusive workshops and courses based on real cases, adapted to your teams' needs. Practical, certified training designed to apply ESG strategically in daily operations." },
  { num: "13", title: "Institutional video about your sustainability strategy", desc: "We produce institutional videos that translate your ESG and sustainability commitment clearly and strategically, recorded in our own studio with a specialised team." },
  { num: "14", title: "Campaigns for social media and television", desc: "We create communication campaigns to strengthen your brand's sustainability positioning. From planning to final content, we ensure strategic coherence, an ethical narrative, and impact across the right channels." },
  { num: "15", title: "Gamification of ESG & Compliance training", desc: "Bring ESG culture and compliance practices to the centre of your organisation in an engaging, didactic and effective way. With B.Right's exclusive methodology, we transform corporate training into gamified experiences tailored for mid-size and large companies. We combine storytelling, interactive challenges and results measurement to increase engagement, reinforce values and ensure adherence to regulatory guidelines. Innovative solutions that strengthen organisational culture and position your company ahead in sustainability and corporate ethics practices." },
];

const SolutionItem = ({ solution }: { solution: typeof solutions[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-6 py-5 text-left group"
      >
        <span className="text-sm font-mono text-primary font-semibold min-w-[2rem]">{solution.num}</span>
        <span className="flex-1 text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
          {solution.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pl-14 pb-5 text-muted-foreground leading-relaxed max-w-2xl">
              {solution.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GlobalSolutions = () => {
  return (
    <section id="solutions" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">What we do</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">ESG Solutions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {solutions.map((s) => (
            <SolutionItem key={s.num} solution={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalSolutions;
