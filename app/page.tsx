
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import RecentlyLaunchedProjects from "@/components/RecentlyLaunchedProjects";
import {Suspense} from "react";
import {LoaderIcon} from "lucide-react";
import ProductSkeleton from "@/components/ProductSkeleton";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <FeaturedProjects />
        <Suspense fallback={<ProductSkeleton/>}>
            <RecentlyLaunchedProjects/>
        </Suspense>
    </div>
  );
}
