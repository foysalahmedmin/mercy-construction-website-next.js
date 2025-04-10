import { leaderships as leaderships_data } from "@/assets/data/leaderships";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const LeadershipsSlideSection = ({
  title = "",
  subtitle = "",
  description = "",
  leaderships = leaderships_data,
  className = "",
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="mb-6 sm:px-4 md:px-6">
          <SectionTitle className="">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </SectionTitle>
        </div>
        <div>
          <Carousel className="group">
            <CarouselContent>
              {leaderships?.map((leader, index) => (
                <CarouselItem
                  key={leader._id}
                  className="basis-1/1 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6 lg:basis-1/4"
                >
                  <div className="group/card grid items-center gap-6">
                    <div className="aspect-[4/5] w-full cursor-pointer overflow-hidden">
                      <img
                        className="size-full object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
                        src={leader?.image}
                        alt={leader?.name}
                      />
                    </div>
                    <div className="space-y-6 md:pr-12">
                      <div className="space-y-2">
                        <h3 className="text-3xl">
                          <Link
                            href={"/leaderships/" + leader?._id}
                            className="primary hover:text-primary underline-effect"
                          >
                            {leader?.name}
                          </Link>
                        </h3>
                        <strong className="inline-block">
                          {leader?.designation}
                        </strong>
                      </div>
                      <p className="line-clamp-2 leading-relaxed">
                        {leader?.short_description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
              <CarouselPreviousTrigger className="left-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselNextTrigger className="right-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselPagination className="foreground -bottom-6 md:basis-1/3 md:px-6" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LeadershipsSlideSection;
