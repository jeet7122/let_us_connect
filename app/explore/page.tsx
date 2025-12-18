import SectionHeading from "@/components/SectionHeading";
import {CompassIcon} from "lucide-react";
import SearchBox from "@/components/SearchBox";
import {getAllProjects} from "@/lib/projects/projects-select";
import {Suspense} from "react";
import SearchBoxSkeleton from "@/components/SearchBoxSkeleton";

export default function Explore() {

    return (
        <section className='py-5 px-5'>
            <div>
                <SectionHeading title="Explore More Projects" icon={CompassIcon}
                                description='Browse and discover amazing projects to collaborate'/>
                <Suspense fallback={<SearchBoxSkeleton/>}>
                </Suspense>
            </div>
        </section>
    )
}