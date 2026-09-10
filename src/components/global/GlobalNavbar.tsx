import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/bright-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Founders", href: "#founders" },
  { label: "Our Passion", href: "#passion" },
  { label: "Social Media", href: "#social" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

const GlobalNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <a href="#masterclass" className="text-sm font-medium hover:underline">
          Join our Masterclass: ESG & Communication in Practice →
        </a>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/global" className="flex-shrink-0">
          <img src={logo} alt="B.Right Logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#meeting"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a meeting
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#meeting"
                onClick={() => setOpen(false)}
                className="text-base font-medium bg-primary text-primary-foreground px-5 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
              >
                Schedule a meeting
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default GlobalNavbar;
