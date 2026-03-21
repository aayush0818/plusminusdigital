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
        title="PlusMinus Studio | Web Design & Development, Mumbai"
        description="We design and build websites that look sharp, load fast, and bring in business. Based in Mumbai, working with brands everywhere."
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
