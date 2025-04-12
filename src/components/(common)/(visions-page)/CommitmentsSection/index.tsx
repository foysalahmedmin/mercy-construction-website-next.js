import { construction_values } from "@/assets/data/construction-values";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CommitmentsSection = () => {
  return (
    <section id="features" className="bg-muted py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Our Commitments</Subtitle>
          <Title>We know that every decision has an impact</Title>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {construction_values?.map((item, index) => {
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
                key={item?._id}
                className={cn(
                  "flex max-w-80 flex-col gap-y-4",
                  alignClassMD,
                  alignClassLG,
                )}
              >
                <item.icon className="inline-block size-16" strokeWidth={1} />
                <div className="space-y-2">
                  <h3 className="text-3xl">{item?.title}</h3>
                  <p className="leading-relaxed">{item?.description}</p>
                </div>

                <div className="mt-auto">
                  <Link
                    href={item?.link || "#"}
                    className="underline-effect hover:text-primary primary inline-block"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
