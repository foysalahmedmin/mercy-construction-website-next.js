"use client";

import { Project } from "@/assets/data/projects";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ProjectsTabSection = ({ projects = [] }: { projects: Project[] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {projects
          ?.slice(0, isShowMore ? projects?.length : 6)
          ?.map((project) => (
            <div key={project?._id}>
              <div className="group/card grid items-center gap-6">
                <Link
                  href={"/projects/" + project?._id}
                  className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-full">
                    <Image
                      className="object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
                      src={project?.image}
                      alt={project?.title || "Project image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="group/trigger absolute right-0 bottom-0 flex h-14 flex-row-reverse items-center">
                    <div className="peer hover:text-primary relative z-10 inline-flex aspect-square h-full items-center justify-center bg-white">
                      <Plus className="size-8" strokeWidth={1} />
                    </div>
                    <div className="hover:text-primary inline-flex h-full origin-right translate-x-100 items-center overflow-hidden bg-white px-4 transition-all duration-700 ease-in-out group-hover/trigger:translate-x-0">
                      View Project
                    </div>
                  </div>
                </Link>
                <div className="space-y-6 md:pr-12">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center divide-x">
                      {project.tags?.map((tag, index) => (
                        <strong
                          key={index}
                          className="text-muted-foreground inline-block px-2 text-sm font-normal capitalize first:pl-0 last:pr-0"
                        >
                          {tag?.replace("-", " ")}
                        </strong>
                      ))}
                    </div>
                    <h3 className="pb-1 text-3xl">
                      <Link
                        href={"/projects/" + project?._id}
                        className="primary hover:text-primary underline-effect"
                      >
                        {project?.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        {projects?.length > 6 && (
          <div className="mt-12 flex items-center justify-center">
            <Button onClick={() => setIsShowMore(!isShowMore)}>
              {isShowMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTabSection;
