import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSectionV4 from "@/components/landing/HeroSectionV4";
import ProductOverview from "@/components/landing/ProductOverview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSectionV4/>
        <FeaturesSection/>
        <ProductOverview/>
        <WhyChooseUs/>
      </main>
    </>
  );
}
