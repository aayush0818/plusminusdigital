import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="section-dark min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="container-site w-full py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <motion.h1
              className="text-hero mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Minus the Noise.
              <br />
              <span className="text-accent-gold">Plus the Results.</span>
            </motion.h1>
            <motion.p
              className="text-body max-w-md mb-10"
              style={{ color: "hsl(0, 0%, 55%)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Brand-led websites designed to elevate perception and convert
              visitors into customers.
            </motion.p>
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button variant="hero-outline" asChild>
                <a href="#work">View Work</a>
              </Button>
              <Button variant="hero" asChild>
                <a href="#cta">Start a Project</a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={heroMockup}
              alt="Premium website displayed on a laptop mockup"
              className="w-full rounded-lg"
              style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)" }}
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
