import ContinuousWorkflow from "@/components/landing/ContinuousWorkflow";
import CurvedSection from "@/components/landing/CurvedSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FeaturesSectionCompact from "@/components/landing/FeaturesSectionCompact";
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
        <PayrollPipeline/>
        {/* <PayrollFlow/> */}
        {/* <AnimatedPayrollFlow/> */}
        {/* <AnimatedSystemFlow/> */}
        {/* <ContinuousWorkflow/> */}
        <FeaturesSection/>
        <ProductOverview/>
        <HowItWorks/>
        <Integrations/>
        {/* <CurvedSection/> */}
        <WhyChooseUs/>
      </main>
    </>
  );
}
