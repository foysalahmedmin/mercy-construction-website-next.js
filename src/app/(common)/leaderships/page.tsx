import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import LeadershipsSlideSection from "@/components/partials/Sections/LeadershipsSlideSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import SplitSection from "@/components/partials/Sections/SplitSection";

const metrics = [
  {
    title: "100+",
    description: "Projects done",
  },
  {
    title: "20+",
    description: "Years of experience",
  },
  {
    title: "30+",
    description: "Team members",
  },
];

const LeadershipsPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Leaderships"
        title="The champions of a construction revolution"
        description="Mercy’s leaders come from all walks of life and business. What they share: a persistent drive to explore and change the way the world builds. Meet the people who lead our quest for better."
        metrics={metrics}
      />
      <SplitSection
        className="bg-muted"
        title="Abul Kalam"
        description={
          <div className="text-xl">
            Chief People Officer
            <br /> <br />
            Abul Kalam embarked on his journey in the construction industry in
            New York in 1991 with a clear vision to create enduring structures
            and contribute meaningfully to the built environment. From humble
            beginnings, he worked diligently to establish himself as a leading
            figure in the field, gaining the trust and respect of clients,
            collaborators, and the wider community. His work was characterized
            by an unwavering dedication to quality, meticulous attention to
            detail, and a commitment to exceeding expectations.
          </div>
        }
        image="/images/leaderships/1.png"
        links={[
          {
            text: "Read More",
            url: "/leaderships/abul-kalam",
          },
        ]}
      />
      <LeadershipsSlideSection title="Our leaderships" />
      <FollowUpSection />
    </main>
  );
};

export default LeadershipsPage;
