import { Button } from "@/components/ui/Button";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const FollowUpSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/partials/followup-bg.png')" }}
      className="dark text-foreground bg-cover bg-center bg-no-repeat"
    >
      <div className="background/50 border-primary border-b-8 py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Title>
              <span className="inline-block">Ready to</span>
              <br />
              <span className="ml-14 inline-block">together?</span>
            </Title>
          </SectionTitle>
          <div className="flex items-center gap-6">
            <Link href="/contact">
              <Button
                asChild={true}
                className="hover:bg-primary uppercase"
                size="lg"
              >
                <span>Build a project with us</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                asChild={true}
                className="hover:bg-primary uppercase"
                size="lg"
              >
                <span>Build a project with us</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUpSection;
