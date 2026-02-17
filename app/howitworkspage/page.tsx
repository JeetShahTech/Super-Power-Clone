import FaqSection from "@/components/faq/faqSection";
import ActionPlan from "@/components/HIWPage/ActionPlan";
import GetClarityIntro from "@/components/HIWPage/getclarity";
import GuideSection from "@/components/HIWPage/GuideSection";
import HeroHIW from "@/components/HIWPage/HeroHIW";
import StepsProcess from "@/components/HIWPage/StepsProcess";
import MembershipSection from "@/components/membership/membershipsection";
import Statistics from "@/components/statistics.tsx/statisticssection";
import TestimonialsSection from "@/components/testimonials/testimonialsection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Superpower",
  description:
    "Learn how Superpower works",
  openGraph: {
    title: "How It Works | Superpower",
    description:
      "Learn how Superpower works",
    url: "https://main.d3mcl4t2n25ylc.amplifyapp.com/howitworkspage",
    siteName: "Superpower-Clone",
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroHIW />
      <GetClarityIntro />
      <StepsProcess />
      <GuideSection />
      <Statistics />
      <ActionPlan />
      <MembershipSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
