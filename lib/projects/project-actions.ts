"use server";
import {auth, currentUser} from "@clerk/nextjs/server";
import {projectSchema} from "@/lib/projects/validations";
import {db} from "@/db";
import {projects} from "@/db/schema";
import Undici from "undici-types";
import {eq, sql} from "drizzle-orm";
import { revalidatePath} from "next/cache";

export type FormState = {
    success: boolean,
    errors: Record<string, string[]>
    message: string

};

export const addProjectAction = async (
    prevState: FormState,
    formData: FormData
): Promise<FormState> => {
    try {
        const { userId } = await auth();
        const user = await currentUser();
        const userEmail =
            user?.emailAddresses[0]?.emailAddress ?? "anonymous";

        if (!userId) {
            return {
                success: false,
                message: "You must sign in to add a project",
                errors: {},
            };
        }

        const rawFormData = Object.fromEntries(formData.entries());
        const parsed = projectSchema.safeParse(rawFormData);

        if (!parsed.success) {
            return {
                success: false,
                message: "Invalid data format",
                errors: parsed.error.flatten().fieldErrors,
            };
        }

        const { name, slug, github_url, techStack, description } = parsed.data;

        const techStackArr =
            techStack?.filter((ts): ts is string => typeof ts === "string") ?? [];

        await db.insert(projects).values({
            name,
            slug,
            github_url,
            techStack: techStackArr,
            description,
            status: "pending",
            submittedBy: userEmail,
            userId,
        });

        revalidatePath("/");

        return {
            success: true,
            message: "Project added successfully! It will be reviewed shortly.",
            errors: {}, // ✅ REQUIRED
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Failed to add project",
            errors: {},
        };
    }
};

export const upVoteProjectAction = async (projectId: number) => {
    try{
        const {userId} = await auth();
        if(!userId) {
            return {
                success: false,
                message: "You must sign in to the add project",
                errors: {}
            }
        }
        await db.update(projects).set({
            voteCount: sql`GREATEST(0, vote_count + 1)`,
        }).where(eq(projects.id, projectId))


        revalidatePath('/')
        return {
            success: true,
            message: "Project Voted Successfully",
            errors: {}
        }

    }
    catch(error){
        console.error(error);
        return {
            success: false,
            message: "Error voting",
            voteCount: 0,
        }
    }
}

export const downVoteProjectAction = async (projectId: number) => {
    try{
        const {userId} = await auth();
        if(!userId) {
            return {
                success: false,
                message: "You must sign in to the vote a project",
                errors: {}
            }
        }
        await db.update(projects).set({
            voteCount: sql`GREATEST(0, vote_count - 1)`,
        }).where(eq(projects.id, projectId))

        revalidatePath('/')
        return {
            success: true,
            message: "Project down Voted Successfully",
            errors: {}
        }

    }
    catch(error){
        console.error(error);
        return {
            success: false,
            message: "Error voting",
            voteCount: 0,
        }
    }
}