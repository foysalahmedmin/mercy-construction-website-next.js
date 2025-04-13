import { projects } from "@/assets/data/projects";
import ProjectInfoSection from "@/components/(common)/(projects-details-page)/ProjectsInfoSection";
import ProjectsNavigationSection from "@/components/(common)/(projects-details-page)/ProjectsNavigationSection";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import SplitImageSection from "@/components/partials/Sections/SplitImageSection";
import SplitSection1 from "@/components/partials/Sections/SplitSection1";

type Props = {
  params: Promise<{ id: string }>;
};
const ProjectsDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((project) => project._id === id);
  const { title, description } = project || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Project"
        title={title}
        description={description}
        image={"/images/(projects-details-page)/page-header.png"}
      />
      <ProjectInfoSection project={project} />
      <SplitImageSection
        className="lg:[&>_:nth-child(even)]:mt-24 lg:[&>_:nth-child(odd)]:mb-24"
        items={[
          {
            image: "/images/(projects-details-page)/1.png",
          },
          {
            image: "/images/(projects-details-page)/2.png",
          },
        ]}
      />
      <SplitSection1 description="Offering 1.2 million square feet of office space, over 12,000 square feet of retail space and 339 parking stalls, 160 Front Street West is slated for completion in late 2023." />
      <SplitImageSection
        className="lg:[&>_:nth-child(even)]:-mb-0 lg:[&>_:nth-child(odd)]:-mt-0"
        items={[
          {
            image: "/images/(projects-details-page)/3.png",
          },
          {
            image: "/images/(projects-details-page)/4.png",
            description:
              "Engaging customized SMART building and construction technologies developed by PCL, we are implementing our award-winning Job Site Insights™ (JSI) and Eddy Solutions™ sensor technologies on this project including, for example, concrete curing sensors that accelerate pour cycle times and reduce project costs. Together with Cadillac Fairview, PCL is constructing to LEED® Platinum and WELL Building Standards and – once operational – 160 Front will embrace Cadillac Fairview’s award-winning “Green at Work” program that harnesses leading global practices to integrate sustainability into property management and operations.",
          },
        ]}
      />
      <ProjectsNavigationSection id={id} />
      <FollowUpSection />
    </main>
  );
};

export default ProjectsDetailsPage;
