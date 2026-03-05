import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="section-dark min-h-[90vh] flex items-center pt-20">
      <div className="container-site w-full py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-hero mb-6">
              Minus the Noise.
              <br />
              Plus the Results.
            </h1>
            <p className="text-body max-w-md mb-10" style={{ color: "hsl(0, 0%, 60%)" }}>
              Brand-led websites designed to elevate perception and convert
              visitors into customers.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button variant="hero-outline" asChild>
                <a href="#work">View Work</a>
              </Button>
              <Button variant="hero" asChild>
                <a href="#cta">Start a Project</a>
              </Button>
            </div>
          </div>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroMockup}
              alt="Premium website displayed on a laptop mockup"
              className="w-full rounded-lg shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
