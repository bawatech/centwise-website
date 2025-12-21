import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import ProductOverview from "@/components/landing/ProductOverview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection/>
        <FeaturesSection/>
        <ProductOverview/>
        <WhyChooseUs/>
      </main>
    </>
  );
}
