import {z} from "zod";

export const projectSchema = z.object({
    name: z.string()
        .min(4, "Project name is required")
        .max(120, "Maximum characters allowed: 120"),

    description: z.string()
        .min(10, "Project description is required")
        .max(200, "Project description max chars: 200"),

    slug: z.string()
        .min(1, "Project Slug is required")
        .max(120, "Project Slug max chars: 120"),

    github_url: z.string()
        .url("Invalid GitHub URL"),

    techStack: z.string()
        .min(1, "Tags are required")
        .transform(val =>
            val.split(",").map(t => t.trim().toLowerCase())
        ),
});
