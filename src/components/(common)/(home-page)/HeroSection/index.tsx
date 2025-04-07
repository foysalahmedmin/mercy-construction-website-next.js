import { Button } from "@/components/ui/Button";
import IframeVideScreen from "@/components/ui/IframeVideoScreen";

const HeroSection = () => {
  return (
    <section className="dark text-foreground bg-background/25 relative flex min-h-screen items-center py-24">
      <IframeVideScreen className="absolute inset-0 -z-10" />
      <div className="container">
        <div className="max-w-2xl space-y-6 lg:space-y-8">
          <h1 className="text-5xl lg:text-7xl">
            Welcome to <br /> Mercy Construction
          </h1>
          <div>
            <Button size="lg">
              <span>LEARN MORE</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
