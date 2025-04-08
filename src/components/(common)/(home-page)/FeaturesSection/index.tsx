import { features } from "@/assets/data/features";
import { Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-4">
          <div>
            <Title>
              Why <br />
              choose us
            </Title>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:col-span-3 lg:grid-cols-3">
            {features?.map((feature, index) => {
              const col2 = index % 2;
              const col3 = index % 3;
              const alignClassMD = col2 === 0 ? "md:mr-auto" : "md:ml-auto";
              const alignClassLG =
                col3 === 0
                  ? "lg:mr-auto lg:ml-0"
                  : col3 === 1
                    ? "lg:mx-auto"
                    : "lg:ml-auto lg:mr-0";
              return (
                <div
                  key={feature?._id}
                  className={cn(
                    "max-w-60 space-y-4",
                    alignClassMD,
                    alignClassLG,
                  )}
                >
                  <feature.icon
                    className="text-primary inline-block size-16"
                    strokeWidth={1}
                  />
                  <div className="space-y-2">
                    <h3 className="text-3xl">{feature?.title}</h3>
                    <p className="leading-relaxed">{feature?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
