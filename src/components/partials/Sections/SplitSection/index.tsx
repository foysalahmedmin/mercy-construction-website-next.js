import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const SplitSection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "/images/partials/split.png",
  className = "",
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionTitle className="mb-0">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </SectionTitle>
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
