"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import IntroSection from "@/components/labsintro";
import HowItWorks from "@/components/howitworks";
import MembershipSection from "@/components/membership/membershipsection";
import ProductsSection from "@/components/products/ProductsSection";


export default function Home() {
  return (
    <>
    <Hero></Hero>
    <IntroSection></IntroSection>
    <HowItWorks></HowItWorks>
    <ProductsSection />
    <MembershipSection />
    </>
  );
}
