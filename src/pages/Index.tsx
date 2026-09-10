import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import FoundersSection from "@/components/FoundersSection";
import ESGSection from "@/components/ESGSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ClientsMarquee from "@/components/ClientsMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section className="pt-20 md:pt-28 pb-0 px-6">
        <div className="max-w-7xl mx-auto">
          <ClientsMarquee label="Clientes que confiam na B.Right" variant="dark" />
        </div>
      </section>
      <AboutSection />
      <SolutionsSection />
      <FoundersSection />
      <ESGSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
