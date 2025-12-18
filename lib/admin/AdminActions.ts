"use server"

import {ProjectType} from "@/components/SearchBox";
import {projects} from "@/db/schema";
import {db} from "@/db";
import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

export const approveProjectAction = async (projectId: ProjectType["id"]) => {
    console.log("approve project action" + projectId);
    try {
        await db.update(projects)
            .set({status: "approved", approved_at: new Date()})
            .where(eq(projects.id, projectId))
        revalidatePath("/admin")
        return{
            success: true,
            message: "Project approved successfully"
        }
    }
    catch (error) {
        console.error("error", error);
        return {
            success: false,
            message: "Project approved failed",
            errors: error
        }
    }
}

export const rejectProjectAction = async (projectId: ProjectType["id"]) => {
    console.log("approve project action" + projectId);
    try {
        await db.update(projects)
            .set({status: "rejected"})
            .where(eq(projects.id, projectId))
        revalidatePath("/admin")
        return{
            success: true,
            message: "Project approved successfully"
        }
    }
    catch (error) {
        console.error("error", error);
        return {
            success: false,
            message: "Project approved failed",
            errors: error
        }
    }
}

export const deleteProjectAction = async (projectId: ProjectType["id"]) => {
    try {
        await db.delete(projects)
            .where(eq(projects.id, projectId))

        revalidatePath("/admin")
        return {
            success: true,
            message: "Project deleted successfully"
        }
    }
    catch (error) {
        console.error("error", error);
        return {
            success: false,
            message: "Project deleted failed",
            errors: error
        }
    }
}