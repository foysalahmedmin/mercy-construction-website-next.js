import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SplitSection1 = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  className?: string;
};

const SplitSection1 = ({
  title = "",
  subtitle = "",
  description = "",
  className = "",
  image = "/images/partials/split.png",
}: SplitSection1) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {(title || subtitle || description) && (
          <SectionTitle>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {description && (
              <Description className="text-xl md:text-3xl">
                {description}
              </Description>
            )}
          </SectionTitle>
        )}
        <div className="group/card grid items-center gap-6">
          <div className="group/trigger relative aspect-[2/1] w-full cursor-pointer overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                className="object-cover object-center"
                src={image}
                alt={title || "hero-split-image"}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection1;
