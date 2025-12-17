
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import RecentlyLaunchedProjects from "@/components/RecentlyLaunchedProjects";
import {Suspense} from "react";
import {LoaderIcon} from "lucide-react";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <FeaturedProjects />
        <Suspense fallback={<div><LoaderIcon className='animate-spin'/></div>}>
            <RecentlyLaunchedProjects/>
        </Suspense>
    </div>
  );
}
