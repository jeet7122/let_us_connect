import {getFeaturedProjects} from "@/lib/projects/projects-select";

export default async function Projects({params}: {params: Promise<{id: string}>}){
    const {id} = await params;
    return (
        <div>Project {id}</div>
    )

}


export const generateStaticParams = async () => {
    const projects = await getFeaturedProjects();
    return projects.map((project) => ({
        id: project.id.toString()
    }));

}