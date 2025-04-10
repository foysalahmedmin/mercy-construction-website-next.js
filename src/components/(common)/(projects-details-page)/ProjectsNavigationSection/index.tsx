import { projects } from "@/assets/data/projects";
import Link from "next/link";

const ProjectsNavigationSection = ({ id }: { id: string }) => {
  const index = projects.findIndex((project) => project._id === id);
  const nextProject =
    index < projects.length - 1 ? projects[index + 1] : projects[0];
  const prevProject =
    index > 0 ? projects[index - 1] : projects[projects.length - 1];
  return (
    <section className="hover:bg-muted py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="flex justify-between">
          <Link className="flex-1" href={"projects" + prevProject?._id || "/"}>
            <div className="hover:text-primary flex w-full items-center justify-start gap-6 text-left">
              <div className="text-foreground text-4xl md:text-6xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="m6 8l-4 4l4 4m-4-4h20"
                  />
                </svg>
              </div>
              <div className="my-2">
                <span className="text-muted-foreground block text-sm">
                  Previous
                </span>
                <h4 className="underline-effect md:text-xl">
                  {prevProject?.title}
                </h4>
              </div>
            </div>
          </Link>
          <div className="bg-muted-foreground w-0.5 self-stretch" />
          <Link className="flex-1" href={"projects" + nextProject?._id || "/"}>
            <div className="hover:text-primary flex w-full items-center justify-end gap-6 text-right">
              <div className="my-2">
                <span className="text-muted-foreground block text-sm">
                  Next
                </span>
                <h4 className="underline-effect md:text-xl">
                  {nextProject?.title}
                </h4>
              </div>
              <div className="text-foreground text-4xl md:text-6xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="m18 8l4 4l-4 4M2 12h20"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsNavigationSection;
