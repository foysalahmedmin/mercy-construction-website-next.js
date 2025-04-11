import { blogs } from "@/assets/data/blogs";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Insights"
        title="Blogs"
        description="Our people are dedicated to finding solutions to every challenge. That spirit makes for some great stories."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-muted">
            <div className="group grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              <div className="bg-muted flex flex-col justify-center space-y-8 self-stretch p-8 md:space-y-12 md:p-12 md:px-24">
                <h3 className="text-4xl">
                  The Ultimate Guide to Choosing Durable and Stylish Stucco
                  Finishes
                </h3>
                <p className="font-light">
                  In design, sustainability, and programming, the Boston
                  University Center for Computing & Data Sciences marks the
                  future of construction in higher education. The 19-story,
                  350,000-square-foot building is a testament to the
                  university's commitment to innovation and excellence.
                </p>
              </div>
              <div className="aspect-[5/4] w-full">
                <img
                  className="size-full object-cover object-center"
                  src="/images/partials/blog-thumbnail.png"
                  alt="blog thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:col-span-3">
            {blogs?.map((blog, index) => (
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
      </section>
      <FollowUpSection />
    </main>
  );
};

export default BlogsPage;
