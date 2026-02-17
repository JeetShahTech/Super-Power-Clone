import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import IntroSection from "@/components/labsintro";
import HowItWorks from "@/components/howitworks";
import MembershipSection from "@/components/membership/membershipsection";
import ProductsSection from "@/components/products/ProductsSection";
import TestimonialsSection from "@/components/testimonials/testimonialsection";
import FaqSection from "@/components/faq/faqSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Superpower | Optimize Your Health with Personalized Lab Testing",
  description:
    "Superpower helps you understand your body through advanced lab testing, personalized insights, and expert guidance. Start your health journey today.",
  openGraph: {
    title: "Superpower | Optimize Your Health with Personalized Lab Testing",
    description:
      "Superpower helps you understand your body through advanced lab testing, personalized insights, and expert guidance.",
    url: "https://main.d3mcl4t2n25ylc.amplifyapp.com/",
    siteName: "Superpower-Clone",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
    <Hero></Hero>
    <IntroSection></IntroSection>
    <HowItWorks></HowItWorks>
    <ProductsSection />
    <MembershipSection />
    <TestimonialsSection />
    <FaqSection />
    </>
  );
}
