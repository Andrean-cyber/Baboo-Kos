"use client";

import AboutBaboo from "@/components/sections/AboutBaboo";
import HeroKos from "@/components/sections/HeroKos";
import SocialTrust from "@/components/sections/SocialTrust";
import OurBranch from "@/components/sections/OurBranch";
import Role from "@/components/sections/Role";
import FollowOurJourney from "@/components/sections/FollowOurJourney";
import FormKos from "@/components/sections/FormKos";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Testimonial from "@/components/sections/Testimonial";
import PopUpPromo from "@/components/sections/PopUpPromo";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]")}>
      <PopUpPromo />
      <HeroKos />
      <SocialTrust />
      <AboutBaboo />
      <Role />
      <FormKos />
      <Testimonial />
      <OurBranch />
      <FollowOurJourney />
      <Faq />
      <Footer />
    </main>
  );
}