import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import IntroSection from "@/components/labsintro";
import HowItWorks from "@/components/howitworks";
import MembershipSection from "@/components/membership/membershipsection";
import ProductsSection from "@/components/products/ProductsSection";
import TestimonialsSection from "@/components/testimonials/testimonialsection";
import FaqSection from "@/components/faq/faqSection";


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
