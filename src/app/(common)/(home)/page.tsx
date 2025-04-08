import FeaturesSection from "@/components/(common)/(home-page)/FeaturesSection";
import HeroSection from "@/components/(common)/(home-page)/HeroSection";
import LeadershipsSection from "@/components/(common)/(home-page)/LeadershipsSection";
import ProjectsSection from "@/components/(common)/(home-page)/ProjectsSection";
import QuickContactSection from "@/components/(common)/(home-page)/QuickContactSection";
import ServicesSection from "@/components/(common)/(home-page)/ServicesSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <QuickContactSection />
      <ServicesSection />
      <LeadershipsSection />
      <FeaturesSection />
      <ProjectsSection />
    </main>
  );
};

export default HomePage;
