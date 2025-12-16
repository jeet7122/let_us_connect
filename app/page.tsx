import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import RecentlyLaunchedProjects from "@/components/RecentlyLaunchedProjects";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <FeaturedProjects />
        <RecentlyLaunchedProjects/>
    </div>
  );
}
