import { contents as contents_data } from "@/assets/data/contents";
import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SplitStickySection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "/images/partials/split-sticky.png",
  contents = contents_data,
  className = "",
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="sticky top-20 bottom-0 h-[calc(100vh-5rem)] w-full">
            <img
              className="size-full object-cover object-center"
              src={image}
              alt="split-sticky-image"
            />
          </div>
          <div>
            {contents?.map((content, index) => (
              <div
                key={index}
                className="flex min-h-[calc(100vh-5rem)] items-center py-8 md:py-12"
              >
                <div>
                  <SectionTitle>
                    {content?.title && <Title>{content?.title}</Title>}
                    {content?.description && (
                      <Description>{content?.description}</Description>
                    )}
                  </SectionTitle>
                  {content?.links?.length && (
                    <div>
                      {content?.links?.map((link, index) => (
                        <Link key={index} href={link?.url}>
                          <Button
                            asChild={true}
                            className="foreground"
                            variant="outline"
                            size="lg"
                          >
                            <span>{link?.text}</span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitStickySection;
