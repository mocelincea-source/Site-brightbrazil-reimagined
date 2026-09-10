import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/bright-logo.png";

const navLinks = [
  { label: "A Empresa", href: "#about" },
  { label: "Soluções", href: "#solutions" },
  { label: "Fundadoras", href: "#founders" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto bg-foreground/85 backdrop-blur-xl border border-foreground/20 rounded-full pl-4 pr-2 py-2 flex items-center justify-between shadow-[0_8px_32px_-8px_hsl(var(--foreground)/0.4)]">
        <a href="#" className="flex-shrink-0 pl-2">
          <img src={logo} alt="B.Right" className="h-8 md:h-9 brightness-0 invert" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-background/80 hover:text-accent px-4 py-2 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/global"
            className="text-sm font-medium text-background/80 hover:text-accent px-4 py-2 rounded-full transition-colors"
          >
            Global
          </Link>
          <a
            href="#contact"
            className="ml-2 text-sm font-semibold bg-accent text-accent-foreground px-5 py-2.5 rounded-full hover:brightness-95 transition-all"
          >
            Agende reunião
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-background p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-7xl mx-auto bg-foreground/95 backdrop-blur-xl border border-foreground/20 rounded-3xl overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-background/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/global"
                onClick={() => setOpen(false)}
                className="text-base font-medium text-background/80 hover:text-accent transition-colors"
              >
                Global
              </Link>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-base font-semibold bg-accent text-accent-foreground px-5 py-3 rounded-full text-center"
              >
                Agende reunião
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
