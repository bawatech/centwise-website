import ContinuousWorkflow from "@/components/landing/ContinuousWorkflow";
import CurvedSection from "@/components/landing/CurvedSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSectionV1 from "@/components/landing/HeroSectionV1";
import HowItWorks from "@/components/landing/HowItWorks";
import Integrations from "@/components/landing/Integrations";
import PayrollFlow from "@/components/landing/PayrollFlow";
import PayrollPipeline from "@/components/landing/PayrollPipeLine";
import ProductOverview from "@/components/landing/ProductOverview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSectionV1/>
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
