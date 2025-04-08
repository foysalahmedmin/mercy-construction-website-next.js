import { projects } from "@/assets/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle className="max-w-3xl lg:ml-12">
          <Subtitle>Projects</Subtitle>
          <Title>
            Delivering our clients more project clarity, greater insight, and
            less chaos.
          </Title>
        </SectionTitle>
        <div>
          <Carousel className="group">
            <CarouselContent>
              {projects?.map((project, index) => (
                <CarouselItem
                  key={project._id}
                  className="basis-1/1 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6"
                >
                  <div className="group/card grid items-center gap-6">
                    <div className="aspect-[4/5] w-full cursor-pointer overflow-hidden">
                      <img
                        className="size-full object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
                        src={project?.image}
                        alt={project?.title}
                      />
                    </div>
                    <div className="space-y-6 md:pr-12">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center divide-x">
                          {project.tags?.map((tag, index) => (
                            <strong
                              key={index}
                              className="text-muted-foreground inline-block px-2 text-sm font-normal capitalize first:pl-0 last:pr-0"
                            >
                              {tag}
                            </strong>
                          ))}
                        </div>
                        <h3 className="text-3xl">
                          <Link
                            href={"/projects/" + project?._id}
                            className="primary hover:text-primary underline-effect inline-block"
                          >
                            {project?.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
              <CarouselPreviousTrigger className="left-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselNextTrigger className="right-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselPagination className="foreground -bottom-6 md:basis-1/3 md:px-6" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
