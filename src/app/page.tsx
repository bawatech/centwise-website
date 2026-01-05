import DemoCTA from "@/components/landing/components/DemoCTA";
import ContactForm from "@/components/landing/ContactForm";
import FirmBenefitsSection from "@/components/landing/FirmBenefitsSection";
import HeroSectionV1 from "@/components/landing/HeroSectionV1";
import HowItWorks from "@/components/landing/HowItWorks";
import ProductOverview from "@/components/landing/ProductOverview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import UltimatePartnerSection from "@/UltimatePartnerSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSectionV1/>
        {/* <FeaturesSectionCompact/> */}
        <UltimatePartnerSection/>
        <FirmBenefitsSection imageUrl="/centvise-account-team.png"/>
        <DemoCTA/>
        <ProductOverview/>
        <HowItWorks/>
        {/* <Integrations/> */}
        {/* <CurvedSection/> */}
        <WhyChooseUs/>
        <ContactForm/>
      </main>
    </>
  );
}
