import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSectionV3 from "@/components/landing/HeroSectionV3";
import ProductOverview from "@/components/landing/ProductOverview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSectionV3/>
        <FeaturesSection/>
        <ProductOverview/>
        <WhyChooseUs/>
      </main>
    </>
  );
}
