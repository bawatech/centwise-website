import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSectionV2 from "@/components/landing/HeroSectionV2";
import ProductOverview from "@/components/landing/ProductOverview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSectionV2/>
        <FeaturesSection/>
        <ProductOverview/>
        <WhyChooseUs/>
      </main>
    </>
  );
}
