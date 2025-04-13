import { Project } from "@/assets/data/projects";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type SingleProjectSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  className?: string;
  project?: Project;
};

const SingleProjectSection = ({
  title = "",
  subtitle = "",
  description = "",
  className = "",
  project = {
    _id: "station-home",
    title: "Station Home",
    description: "",
    image: "/images/partials/single-project.png",
    tags: ["public-buildings"],
    client: "",
    sector: "Projects",
    location: "",
    link: "/projects/station-home/",
  },
}: SingleProjectSectionProps) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {(title || subtitle || description) && (
          <SectionTitle>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {description && (
              <Description className="text-xl md:text-3xl">
                {description}
              </Description>
            )}
          </SectionTitle>
        )}
        <div className="group/card grid items-center gap-6">
          <Link
            href={"/projects/" + project?._id}
            className="group/trigger relative aspect-[2/1] w-full cursor-pointer overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                className="object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
                src={project?.image}
                alt={project?.title || "Project image"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute right-0 bottom-0 flex h-20 flex-row-reverse items-center">
              <div className="peer hover:text-primary relative z-10 inline-flex aspect-square h-full items-center justify-center bg-white">
                <Plus className="size-8" strokeWidth={1} />
              </div>
              <div className="hover:text-primary inline-flex h-full origin-right translate-x-100 items-center overflow-hidden bg-white px-4 transition-all duration-700 ease-in-out group-hover/trigger:translate-x-0">
                <div>
                  <div>
                    {project.tags?.map((tag, index) => (
                      <strong
                        key={index}
                        className="text-muted-foreground inline-block px-2 text-xs font-normal capitalize first:pl-0 last:pr-0"
                      >
                        {tag}
                      </strong>
                    ))}
                  </div>
                  <h3 className="hover-effect primary hover:text-primary">
                    {project?.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleProjectSection;
