import { Content } from "@/assets/data/contents";
import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type SplitStickySectionProps = {
  image?: string;
  contents?: Content[];
  className?: string;
};

const SplitStickySection = ({
  image = "",
  contents = [],
  className = "",
}: SplitStickySectionProps) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="sticky top-20 bottom-0 h-[calc(100vh-5rem)] w-full relative">
            <Image
              className="object-cover object-center"
              src={image}
              alt="split-sticky-image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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
                        <Link key={index} href={link?.url || "#"}>
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
