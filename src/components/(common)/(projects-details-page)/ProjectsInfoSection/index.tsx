import { Project } from "@/assets/data/projects";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";

const ProjectInfoSection = ({ project }: { project?: Project }) => {
  const { title, description, client, sector, location } = project || {};
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            {client && (
              <div className="space-y-2">
                <h3 className="">Client</h3>
                <p className="text-3xl">{client}</p>
              </div>
            )}
            {sector && (
              <div className="space-y-2">
                <h3 className="">Sector</h3>
                <p className="text-3xl">{sector}</p>
              </div>
            )}
            {location && (
              <div className="space-y-2">
                <h3 className="">Location</h3>
                <p className="text-3xl">{location}</p>
              </div>
            )}
          </div>
          <div>
            <SectionTitle>
              <Title>{title}</Title>
              <Description className="text-xl">{description}</Description>
            </SectionTitle>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
