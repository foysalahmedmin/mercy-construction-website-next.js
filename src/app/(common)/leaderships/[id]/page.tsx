import { leaderships } from "@/assets/data/leaderships";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};
const LeadershipsDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const leader = leaderships.find((service) => service._id === id);
  const {
    name,
    designation,
    short_description,
    description,
    image,
    linkedin,
  } = leader || {};

  return (
    <main>
      <section className="pt-16">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-3 xl:gap-24">
            <div className="w-ful relative aspect-[5/4] lg:-mb-24">
              <div className="relative w-full h-full">
                <Image 
                  src={image || ""} 
                  alt={name || "Leadership image"} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="space-y-8 pb-16 md:space-y-12 lg:py-12">
              <Link
                href="/leaderships"
                className="hover:text-primary flex items-center gap-4"
              >
                <div className="text-2xl md:text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="m6 8l-4 4l4 4m-4-4h20"
                    />
                  </svg>
                </div>
                <div>
                  <span className="underline-effect leading-none">
                    Back to All Leadership
                  </span>
                </div>
              </Link>
              <div className="">
                <SectionTitle className="mb-0 md:mb-0">
                  <Title>{name}</Title>
                  <Description>{designation}</Description>
                  <Description>{short_description}</Description>
                </SectionTitle>
              </div>
              {linkedin && (
                <div>
                  <Link target="_blank" href={linkedin || "#"}>
                    <Button className="foreground" size="lg">
                      <span>CONNECT TO LINKEDIN</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-muted py-16 md:py-24 lg:pt-48">
          <div className="container max-w-5xl">
            {description
              ?.split("\n")
              .map((paragraph, index) =>
                paragraph ? <p key={index}>{paragraph}</p> : <br key={`br-${index}`} />
              )}
          </div>
        </div>
      </section>
      <FollowUpSection />
    </main>
  );
};

export default LeadershipsDetailsPage;
