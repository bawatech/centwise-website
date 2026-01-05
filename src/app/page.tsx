import DemoCTA from "@/components/landing/components/DemoCTA";
import ContactForm from "@/components/landing/ContactForm";
import ContinuousWorkflow from "@/components/landing/ContinuousWorkflow";
import CurvedSection from "@/components/landing/CurvedSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FeaturesSectionCompact from "@/components/landing/FeaturesSectionCompact";
import FirmBenefitsSection from "@/components/landing/FirmBenefitsSection";
import HeroSectionV1 from "@/components/landing/HeroSectionV1";
import HowItWorks from "@/components/landing/HowItWorks";
import Integrations from "@/components/landing/Integrations";
import PayrollFlow from "@/components/landing/PayrollFlow";
import PayrollPipeline from "@/components/landing/PayrollPipeLine";
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
        <FirmBenefitsSection imageUrl="/centwise-account-team-d.png"/>
        <DemoCTA/>
        {/* <PayrollPipeline/> */}
        {/* <PayrollFlow/> */}
        {/* <AnimatedPayrollFlow/> */}
        {/* <AnimatedSystemFlow/> */}
        {/* <ContinuousWorkflow/> */}
        {/* <FeaturesSection/> */}
                {/* <FirmBenefitsSection imageUrl="/centwise-account-team-b.png"/> */}
        <ProductOverview/>
        <HowItWorks/>
                {/* <FirmBenefitsSection imageUrl="/centwise-account-team-d.png"/> */}
        {/* <Integrations/> */}
        {/* <CurvedSection/> */}
        <WhyChooseUs/>
        <ContactForm/>
      </main>
    </>
  );
}
