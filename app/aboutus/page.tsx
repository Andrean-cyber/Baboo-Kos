import MeetOurTeam from "@/components/sections/MeetOurTeam";
import Aboutus from "@/components/sections/Aboutus";
import OurTeam from "@/components/sections/OurTeam";
import FollowOurJourneyAboutus from "@/components/sections/FollowOurJorneyAboutus";
import OurBranch from "@/components/sections/OurBranch";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]")}>
      <div className="pt-10 md:pt-10">
        <Aboutus />
        <MeetOurTeam />
        <OurTeam />
        <OurBranch />
        <FollowOurJourneyAboutus />
      </div>
      <Footer />
    </main>
  );
}
