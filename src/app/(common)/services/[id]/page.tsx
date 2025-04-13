import { contents_services_details } from "@/assets/data/contents";
import { services } from "@/assets/data/services";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import ProjectsSlideSection from "@/components/partials/Sections/ProjectsSlideSection";
import SingleProjectSection from "@/components/partials/Sections/SingleProjectSection";
import SplitSection from "@/components/partials/Sections/SplitSection";
import SplitStickySection from "@/components/partials/Sections/SplitStickySection";

type Props = {
  params: Promise<{ id: string }>;
};
const ServicesDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const service = services.find((service) => service._id === id);
  const { title, description, image } = service || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Service"
        title={title}
        description={description}
        image={image}
      />
      <SplitSection
        title="Delivering integrated construction services to build lasting success"
        description="When you partner with Konstruktion, you not only get innovative solutions, you get our fully vested team and a commitment to doing things right. Our relentless focus on success leads to smarter more collaborative building practices."
      />
      <SingleProjectSection description="No matter the challenge, we build on what we know works and elevate your vision of success" />
      <SplitStickySection
        image="/images/partials/split-sticky.png"
        contents={contents_services_details}
      />
      <ProjectsSlideSection title="Explore Similar Projects" />
      <FollowUpSection />
    </main>
  );
};

export default ServicesDetailsPage;
