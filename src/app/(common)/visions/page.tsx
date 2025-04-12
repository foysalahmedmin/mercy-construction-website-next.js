import { construction_visions } from "@/assets/data/contents";
import CommitmentsSection from "@/components/(common)/(visions-page)/CommitmentsSection";
import LeadershipsSection from "@/components/(common)/(visions-page)/LeadershipsSection";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import SplitStickySection from "@/components/partials/Sections/SplitStickySection";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const VisionsPage = async () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="A bold direction"
        title="Vision"
        description="We believe that when caring, ambitious people come together, anything is possible. We stand up for and do what’s right. We challenge conventions to drive meaningful, positive progress for our clients, our industry, and our communities. While we have distinct and diverse skills and perspectives, we’re united in our endless quest to redefine what’s possible."
        image="/images/(visions-page)/page-header.png"
      />
      <section className="bg-muted py-16 md:py-24">
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
      <SplitStickySection
        image="/images/partials/split-sticky-1.png"
        contents={construction_visions}
      />
      <CommitmentsSection />
      <PageHeaderSection
        subtitle="Our Core Values"
        title="Passion. Integrity. Hard work. Professionalism. Caring."
        description="These core values have been with us since the beginning, and they’ve infused who we are and how we build. Nothing brings us more excitement than transforming the skyline — and we do it by setting our standards high, striving for the best, building trust, and lifting up the people around us."
        image="/images/(visions-page)/core-values.png"
      />
      <LeadershipsSection />
      <FollowUpSection />
    </main>
  );
};

export default VisionsPage;
