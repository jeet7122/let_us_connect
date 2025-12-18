import {getAllProjects} from "@/lib/projects/projects-select";
import SearchBox from "@/components/SearchBox";

export async function SearchBoxWrapper() {

    const projects = await getAllProjects();
    return (
        <SearchBox projects={projects} />
    )
}