import FaqSection from "@/components/faq/faqSection";
import ActionPlan from "@/components/HIWPage/ActionPlan";
import GetClarityIntro from "@/components/HIWPage/getclarity";
import GuideSection from "@/components/HIWPage/GuideSection";
import HeroHIW from "@/components/HIWPage/HeroHIW";
import StepsProcess from "@/components/HIWPage/StepsProcess";
import MembershipSection from "@/components/membership/membershipsection";
import TestimonialsSection from "@/components/testimonials/testimonialsection";

export default function HowItWorksPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroHIW />
      <GetClarityIntro />
      <StepsProcess />
      <GuideSection />
      <ActionPlan />
      <MembershipSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
