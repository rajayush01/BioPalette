import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/components/home/Hero";
import StatsRibbon from "@/components/home/StatsRibbon";
import PaletteSection from "@/components/home/PalleteSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProcessSection from "@/components/home/ProcessSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SpectrumSection from "@/components/home/SpectrumSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <StatsRibbon />
      <PaletteSection />
      <FeaturesSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <SpectrumSection />
      <CTASection />
    </>
  );
}