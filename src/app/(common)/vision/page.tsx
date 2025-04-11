import LeadershipsSection from "@/components/(common)/(home-page)/LeadershipsSection";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import ProjectsSlideSection from "@/components/partials/Sections/ProjectsSlideSection";
import SingleProjectSection from "@/components/partials/Sections/SingleProjectSection";
import SplitSection from "@/components/partials/Sections/SplitSection";
import SplitStickySection from "@/components/partials/Sections/SplitStickySection";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const ServicesDetailsPage = async () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="A bold direction"
        title="Vision"
        description="We believe that when caring, ambitious people come together, anything is possible. We stand up for and do what’s right. We challenge conventions to drive meaningful, positive progress for our clients, our industry, and our communities. While we have distinct and diverse skills and perspectives, we’re united in our endless quest to redefine what’s possible."
        image="/images/partials/vision.png"
      />
      <SplitSection
        title="Delivering integrated construction services to build lasting success"
        description="When you partner with Konstruktion, you not only get innovative solutions, you get our fully vested team and a commitment to doing things right. Our relentless focus on success leads to smarter more collaborative building practices."
      />
      <section className="bg-muted my-16 md:my-24">
        <div className="container max-w-5xl">
          <SectionTitle>
            <Subtitle>Our Vision</Subtitle>
            <Title>
              To integrate the entire building lifecycle into a seamless
              platform to redefine how the world builds.
            </Title>
          </SectionTitle>
        </div>
      </section>
      <SingleProjectSection description="No matter the challenge, we build on what we know works and elevate your vision of success" />
      <SplitStickySection />
      <ProjectsSlideSection title="Explore Similar Projects" />
      <LeadershipsSection />
      <FollowUpSection />
    </main>
  );
};

export default ServicesDetailsPage;
