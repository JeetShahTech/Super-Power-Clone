"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import IntroSection from "@/components/labsintro";


export default function Home() {
  return (
    <>
    <Hero></Hero>
    <IntroSection></IntroSection>
    </>
  );
}
