import ContactSection from "@/components/(common)/(contact-page)/ContactSection";
import ProjectApplySection from "@/components/(common)/(contact-page)/ProjectApplySection";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";

const ContactPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Contact"
        title="We’d love to hear from you"
        description="From four cities, with a team of industry professionals, we work for businesses all over the world."
      />
      <ContactSection />
      <ProjectApplySection />
      <FollowUpSection />
    </main>
  );
};

export default ContactPage;
