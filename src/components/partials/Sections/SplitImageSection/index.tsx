import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

type SplitImageSectionProps = {
  className?: string;
  items?: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
  }[];
};

const SplitImageSection = ({
  items = [],
  className = "",
}: SplitImageSectionProps) => {
  return (
    <section
      className={cn(
        "container grid grid-cols-1 items-center gap-8 py-16 md:gap-12 md:py-24 lg:grid-cols-2 lg:gap-16",
        className,
      )}
    >
      {items?.map((item, index) => {
        const { title, description, subtitle, image } = item;
        return (
          <div key={index} className="w-full">
            {(title || subtitle || description) && (
              <SectionTitle>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {title && <Title>{title}</Title>}
                {description && (
                  <Description className="text-xl">{description}</Description>
                )}
              </SectionTitle>
            )}
            <div className="aspect-[4/5] w-full">
              <img
                className="size-full object-cover object-center"
                src={image}
                alt="hero-split-image"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SplitImageSection;
