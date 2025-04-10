import { projects } from "@/assets/data/projects";
import ProjectsTabSection from "@/components/(common)/(projects-page)/ProjectsTabSection";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";

const all_tags = projects.flatMap((project) => project?.tags);
const tags = ["all", ...new Set(all_tags)];

const ProjectsPage = () => {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Subtitle>Our Works</Subtitle>
            <Title>Projects</Title>
            <Description>
              Building the future of the construction industry, one project at a
              time.
            </Description>
          </SectionTitle>
          <div>
            <Tabs value="all">
              <TabsList className="mb-8 justify-start gap-6 md:mb-12">
                {tags?.map((tag) => (
                  <TabsTrigger key={tag} value={tag}>
                    <span className="text-xl capitalize">
                      {tag?.replace("-", " ")}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent>
                {tags?.map((tag) => {
                  const filtered_projects =
                    tag === "all"
                      ? projects
                      : projects?.filter((project) =>
                          project?.tags.includes(tag),
                        ) || [];
                  return (
                    <TabsItem key={tag} value={tag}>
                      <ProjectsTabSection projects={filtered_projects} />
                    </TabsItem>
                  );
                })}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
