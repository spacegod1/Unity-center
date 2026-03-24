import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AimsGrid from "@/components/AimsGrid";
import ImpactStats from "@/components/ImpactStats";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header activePage="About Us" />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 py-6 sm:gap-16 sm:py-8 lg:gap-20 lg:py-10">
          <HeroSection />
          <MissionSection />
          <AimsGrid />
          <ImpactStats />
        </div>
      </main>
      <Footer />
    </>
  );
}
