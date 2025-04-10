import { Button } from "@/components/ui/Button";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SplitSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  image?: string;
  className?: string;
  links?: {
    text: string;
    url: string;
  }[];
};

const SplitSection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "/images/partials/split.png",
  className = "",
  links = [],
}: SplitSectionProps) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle className="mb-0">
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              {title && <Title>{title}</Title>}
              {description && <Description>{description}</Description>}
            </SectionTitle>
            {links?.length && (
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
          <div className="aspect-[4/5] w-full">
            <img
              className="size-full object-cover object-center"
              src={image}
              alt="hero-split-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
