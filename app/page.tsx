import type { Metadata } from "next";
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

export const metadata: Metadata = {
  alternates: { canonical: "https://babookos.com/" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Baboo Kos",
  alternateName: ["Baboo Kos Indonesia", "Baboo Kos Official"],
  url: "https://babookos.com/",
};

const toJsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]")}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(websiteSchema) }}
      />
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