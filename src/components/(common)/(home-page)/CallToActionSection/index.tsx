import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/(home-page)/call-to-action-bg.png')",
      }}
      className="dark text-foreground bg-cover bg-center"
    >
      <div className="bg-background/50 py-16 md:py-24">
        <div className="container text-center">
          <SectionTitle variant="center">
            <Title>Build with us</Title>
            <Description>
              We’re ready to help you take on your most challenging projects—and
              turn great ideas into reality.
            </Description>
          </SectionTitle>
          <div>
            <Link href="/contact" className="inline-block">
              <Button asChild={true} size="lg">
                <span>CONTACT US</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
