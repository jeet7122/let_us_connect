import SectionHeading from "@/components/SectionHeading";
import {CompassIcon} from "lucide-react";
import SearchBox from "@/components/SearchBox";
import {getAllProjects} from "@/lib/projects/projects-select";

export default async function Explore(){

    const projects = await getAllProjects();

    return (
        <section className='py-5 px-5'>
            <div>
                <SectionHeading title="Explore More Projects" icon={CompassIcon} description='Browse and discover amazing projects to collaborate'/>
                <SearchBox projects={projects} />

            </div>
        </section>
    )
}