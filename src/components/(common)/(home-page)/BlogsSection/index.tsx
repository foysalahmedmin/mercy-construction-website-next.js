import { blogs } from "@/assets/data/blogs";
import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const BlogsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:gap-14 lg:grid-cols-3">
          <div className="space-y-8 md:space-y-12">
            <SectionTitle className="max-w-60">
              <Title>Blog</Title>
              <Description>
                Our people are dedicated to finding solutions to every
                challenge. That spirit makes for some great stories.
              </Description>
            </SectionTitle>
            <Link href={"/leaderships"} className="inline-block">
              <Button asChild={true} size="lg">
                <span>VIEW ALL BLOGS</span>
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2">
            {blogs?.slice(0, 2)?.map((blog, index) => (
              <div
                key={blog._id}
                className="basis-1/1 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6"
              >
                <div className="group/card grid items-center gap-6">
                  <Link
                    href={"/blogs/" + blog?._id}
                    className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden"
                  >
                    <img
                      className="size-full object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
                      src={blog?.image}
                      alt={blog?.title}
                    />
                    {/* <div className="group/trigger absolute right-0 bottom-0 flex h-14 flex-row-reverse items-center">
                        <div className="peer hover:text-primary relative z-10 inline-flex aspect-square h-full items-center justify-center bg-white">
                          <Plus className="size-8" strokeWidth={1} />
                        </div>
                        <div className="hover:text-primary inline-flex h-full origin-right translate-x-100 items-center overflow-hidden bg-white px-4 transition-all duration-700 ease-in-out group-hover/trigger:translate-x-0">
                          View Details
                        </div>
                      </div> */}
                  </Link>
                  <div className="space-y-6 md:pr-12">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center divide-x">
                        {blog?.tags?.map((tag, index) => (
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
                          href={"/blogs/" + blog?._id}
                          className="primary hover:text-primary underline-effect"
                        >
                          {blog?.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
