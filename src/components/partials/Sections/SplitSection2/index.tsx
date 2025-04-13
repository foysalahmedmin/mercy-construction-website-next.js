import { Button } from "@/components/ui/Button";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type SplitSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  image1?: string;
  image2?: string;
  className?: string;
  links?: {
    text: string;
    url: string;
  }[];
};

const SplitSection2 = ({
  title = "",
  subtitle = "",
  description = "",
  image1 = "/images/partials/split.png",
  image2 = "/images/partials/split.png",
  className = "",
  links = [],
}: SplitSectionProps) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <SectionTitle className="mb-0">
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              {title && <Title>{title}</Title>}
              {description && <Description>{description}</Description>}
            </SectionTitle>
            {links?.length > 0 && (
              <div>
                {links?.map((link, index) => (
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
          <div className="aspect-square w-full lg:order-1 relative">
            <div className="absolute inset-0 mt-auto ml-auto h-2/3 w-1/2 relative">
              <Image
                className="object-cover object-center"
                src={image1}
                alt="hero-split-image-1"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="absolute inset-0 z-10 mt-auto mr-auto h-1/2 w-2/3 relative">
              <Image
                className="object-cover object-center"
                src={image2}
                alt="hero-split-image-2"
                fill
                sizes="(max-width: 768px) 67vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection2;
