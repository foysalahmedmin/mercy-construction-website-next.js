import { services } from "@/assets/data/services";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Our services</Subtitle>
          <Title>Construction on time and within your budget</Title>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
          {services?.map((service) => (
            <Link
              key={service?._id}
              href={"/services/" + service._id}
              className="group aspect-[5/4] w-full cursor-pointer overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  className="object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-110"
                  src={service.image}
                  alt={service.title || "Service image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
