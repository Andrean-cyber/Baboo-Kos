"use client";

import AboutBaboo from "@/components/sections/AboutBaboo";
import HeroKos from "@/components/sections/HeroKos";
import MeetOurTeam from "@/components/sections/MeetOurTeam";
import OurBranch from "@/components/sections/OurBranch";
import OurTeam from "@/components/sections/OurTeam";
import VillaDetail from "@/components/sections/VillaDetail";
import PricingPackages from "@/components/sections/PricingPackages";
import Role from "@/components/sections/Role";
import FollowOurJourney from "@/components/sections/FollowOurJourney";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]", "pb-16")}>
      <HeroKos />
      <AboutBaboo />
      <OurTeam />
      <MeetOurTeam />
      <VillaDetail />
      <OurBranch />
      <PricingPackages />
      <Role />
      <FollowOurJourney />
      <Faq />
      <Footer />
    </main>
  );
}
