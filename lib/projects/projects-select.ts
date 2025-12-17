import {db} from "@/db";
import {projects} from "@/db/schema";
import {desc, eq} from "drizzle-orm";
import {connection} from "next/server"

export async function getFeaturedProjects(){
    "use cache";
    return db
        .select()
        .from(projects)
        .where(eq(projects.status, "approved"))
        .orderBy(desc(projects.voteCount));
}

export async function getAllProjects(){
    return db
        .select()
        .from(projects)
        .where(eq(projects.status, "approved"))
        .orderBy(desc(projects.voteCount));
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export async function getRecentlyProjects(){
    await connection();
    const projectData = await getAllProjects();
    console.log(projectData);
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    return projectData.filter(
        (project) =>
            project.created_at &&
            project.created_at.getTime() >= oneWeekAgo.getTime()
    );
}

export async function getProjectBySlug(slug: string){
    const project = await db.select()
        .from(projects)
        .where(eq(projects.slug, slug));
    return project?.[0] || null;
}