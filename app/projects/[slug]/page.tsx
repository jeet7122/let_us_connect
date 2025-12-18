// app/projects/[slug]/page.tsx
import { Suspense } from "react";
import ProjectDetails from "@/components/ProjectDetails";
import {getFeaturedProjects} from "@/lib/projects/projects-select";
import ProjectDetailsSkeleton from "@/components/ProjectDetailSkeleton";

export default function ProjectsPage({
                                         params,
                                     }: {
    params: { slug: string };
}) {
    return (
        <Suspense fallback={<ProjectDetailsSkeleton />}>
            <ProjectDetails slug={params.slug} />
        </Suspense>
    );
}

export const generateStaticParams = async () => {
    const projects = await getFeaturedProjects();
    return projects.map((project) => ({
        slug: String(project.slug),
    }));
};

