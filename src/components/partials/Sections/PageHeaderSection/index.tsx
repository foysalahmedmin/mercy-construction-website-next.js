import { Description, Subtitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
type PageHeaderSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  className?: string;
  metrics?: {
    title?: string;
    description?: string;
  }[];
};

const PageHeaderSection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "",
  className = "",
  metrics: Metrics = [],
}: PageHeaderSectionProps) => {
  return (
    <section className={className}>
      <div className="container py-16">
        <Subtitle>{subtitle}</Subtitle>
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </div>
      {image && (
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className="h-[60vh] bg-cover bg-center bg-no-repeat"
        />
      )}
      {Metrics?.length > 0 && (
        <div className="container lg:py-16">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3">
            {Metrics?.map((metric, index) => {
              const col2 = index % 2;
              const col3 = index % 3;
              const alignClassMD = col2 === 0 ? "md:mr-auto" : "md:ml-auto";
              const alignClassLG =
                col3 === 0
                  ? "lg:mr-auto lg:ml-0 lg:border-r-2 lg:mb-18"
                  : col3 === 1
                    ? "lg:mx-auto my-auto"
                    : "lg:ml-auto lg:mr-0 lg:border-l-2 lg:mt-18";
              return (
                <div key={index} className="flex flex-col">
                  <div
                    className={cn(
                      "relative flex aspect-[6/4] w-full items-center justify-center",
                      alignClassMD,
                      alignClassLG,
                    )}
                  >
                    <div className="space-y-2">
                      <Title>{metric?.title}</Title>
                      <Description>{metric?.description}</Description>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default PageHeaderSection;
