import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import AboutPreview from "@/components/home/AboutPreview";
import WhatWeDo from "@/components/home/WhatWeDo";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import MemberShowcase from "@/components/home/MemberShowcase";
import DevelopmentPartners from "@/components/home/DevelopmentPartners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutPreview />
      <WhatWeDo/>
      <FeaturedPrograms/>
      <FeaturedEvents />
      <MemberShowcase />
      <DevelopmentPartners />
    </>
  );
} 