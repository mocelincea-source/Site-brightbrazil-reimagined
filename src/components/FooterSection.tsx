import logo from "@/assets/bright-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-secondary py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="B.Right" className="h-8 brightness-0 invert" />
        <p className="text-secondary/60 text-sm text-center">
          © {new Date().getFullYear()} B.Right Consultoria em ESG. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/b.right_esg/" target="_blank" rel="noopener noreferrer" className="text-secondary/60 hover:text-secondary text-sm transition-colors">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/bright-esg/" target="_blank" rel="noopener noreferrer" className="text-secondary/60 hover:text-secondary text-sm transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
