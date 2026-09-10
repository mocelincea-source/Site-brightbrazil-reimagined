import GlobalNavbar from "@/components/global/GlobalNavbar";
import GlobalHero from "@/components/global/GlobalHero";
import GlobalAbout from "@/components/global/GlobalAbout";
import GlobalSolutions from "@/components/global/GlobalSolutions";
import GlobalFounders from "@/components/global/GlobalFounders";
import GlobalMeetingForm from "@/components/global/GlobalMeetingForm";
import GlobalPassion from "@/components/global/GlobalPassion";
import GlobalBlog from "@/components/global/GlobalBlog";
import GlobalPodcast from "@/components/global/GlobalPodcast";
import GlobalSocialMedia from "@/components/global/GlobalSocialMedia";
import GlobalNewsletter from "@/components/global/GlobalNewsletter";
import GlobalContact from "@/components/global/GlobalContact";
import GlobalFooter from "@/components/global/GlobalFooter";

const Global = () => {
  return (
    <div className="min-h-screen bg-background">
      <GlobalNavbar />
      <GlobalHero />
      <GlobalAbout />
      <GlobalSolutions />
      <GlobalFounders />
      <GlobalMeetingForm />
      <GlobalPassion />
      <GlobalBlog />
      <GlobalPodcast />
      <GlobalSocialMedia />
      <GlobalNewsletter />
      <GlobalContact />
      <GlobalFooter />
    </div>
  );
};

export default Global;
