import { leaderships } from "@/assets/data/leaderships";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const LeadershipsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-3">
          <div className="space-y-8 md:space-y-12">
            <Title>Meet our leadership</Title>
            <Link href={"/leaderships"} className="inline-block">
              <Button
                asChild={true}
                className="foreground"
                variant="outline"
                size="lg"
              >
                <span>LEARN MORE</span>
              </Button>
            </Link>
          </div>
          <div className="lg:col-span-2">
            <Carousel className="group">
              <CarouselContent>
                {leaderships?.map((leader, index) => (
                  <CarouselItem key={leader._id}>
                    <div className="group/card grid grid-cols-2 items-center gap-6 md:px-6">
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
                        <p className="leading-relaxed">
                          {leader?.short_description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                <CarouselPreviousTrigger className="-left-2 hidden h-14 text-4xl md:inline-flex" />
                <CarouselNextTrigger className="-right-2 hidden h-14 text-4xl md:inline-flex" />
                <CarouselPagination className="foreground -bottom-6 md:px-6" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipsSection;
