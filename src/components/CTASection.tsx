import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="section-dark" style={{ padding: "140px 0" }}>
      <div className="container-site text-center">
        <h2 className="text-heading-lg mb-10 max-w-2xl mx-auto">
          Let's Build Something Exceptional
        </h2>
        <Button variant="hero" size="lg">
          Start a Project
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
