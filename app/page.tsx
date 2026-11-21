import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import AboutPreview from "@/components/home/AboutPreview";
import WhatWeDo from "@/components/home/WhatWeDo";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutPreview />
      <WhatWeDo/>
      <FeaturedPrograms/>
      {/* Upcoming sections */}
    </>
  );
}
