"use server";
import {auth, currentUser} from "@clerk/nextjs/server";
import {projectSchema} from "@/lib/projects/validations";
import {db} from "@/db";
import {projects} from "@/db/schema";
import Undici from "undici-types";
import errors = Undici.errors;

type FormState = {
    success: boolean,
    errors: Record<string, string[]>
    message: string

};

export const addProjectAction = async (prevState: FormState, formdata: FormData) => {
    try {
        const {userId} = await auth();
        const user = await currentUser();
        const userEmail = user?.emailAddresses[0].emailAddress || "anonymous";
        if(!userId) {
            return {
                success: false,
                message: "You must sign in to the add project",
                errors: {}
            }
        }

        const rawFormData = Object.fromEntries(formdata.entries());
        const validateData = projectSchema.safeParse(rawFormData);
        if(!validateData.success) {
            return {
                success: false,
                message: "Invalid Data Format",
                errors: validateData.error.flatten().fieldErrors,
            }
        }
        const {name, slug, github_url, techStack, description} = validateData.data;

        const techStackArr = techStack ? techStack.filter((ts) => typeof ts === "string") : []
        await db.insert(projects).values({name, slug, github_url, techStack: techStackArr, description, status: "pending", submittedBy: userEmail, userId: userId});
        return {
            success: true,
            message: "Project Added Successfully! It will be reviewd shortly!",
        }


    }
    catch (error) {
        console.error(error);
    }
    return {
        success: false,
        message: "Failed to add project",
        errors: {}
    }
}