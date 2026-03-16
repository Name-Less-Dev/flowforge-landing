import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Proof from "@/components/sections/proof";
import TrustedBy from "@/components/sections/trusted-by";
import CTA from "@/components/sections/cta";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/layout/footer";
import Pricing from "@/components/sections/pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Proof />
      <TrustedBy />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}