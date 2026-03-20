import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturedWork from "@/components/FeaturedWork";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="PlusMinus Studio — Design & Development Agency in Mumbai"
        description="Strategy-led design and development for brands that refuse to blend in. We build high-converting websites for ambitious brands worldwide."
        path="/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <FeaturedWork />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
