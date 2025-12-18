// components/ProjectDetails.tsx
import { getProjectBySlug } from "@/lib/projects/projects-select";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeftIcon,
    CalendarIcon,
    HeartIcon,
    StarIcon,
    User2Icon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";

export default async function ProjectDetails({
                                                 slug,
                                             }: {
    slug: string;
}) {
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <section className="flex flex-col gap-2 py-10 px-10">
            <div className="flex justify-between">
                <Link
                    href="/explore"
                    className="flex gap-2 hover:underline hover:text-blue-800"
                >
                    <ArrowLeftIcon className="mt-1 h-5 w-5" />
                    <span className="text-lg">Back to explore</span>
                </Link>

                <div className="flex gap-2 mt-1">
                    <HeartIcon />
                    <span className="font-serif font-semibold">Total Votes</span>
                    <span className="font-light">{project.voteCount}</span>
                </div>
            </div>

            <div className="mt-8">
                <SectionHeading
                    title={project.name}
                    description={project.github_url}
                    icon={StarIcon}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-col gap-2 mt-5">
                            <span className="font-semibold">Tech Stack</span>
                            <div className="flex gap-2">
                                {project.techStack?.map((tech) => (
                                    <Badge key={tech} className="bg-green-900 px-4 py-1.5">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="font-semibold">Description</span>
                            <div className="bg-[#f3f3f3] lg:w-[800px] px-4 py-1.5 h-[140px] rounded-md">
                                <p className="text-slate-700 font-light">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        <div>
                            <span className="font-semibold mb-2">Additional Info</span>
                            <div className="bg-[#f3f3f3] lg:w-[800px] px-4 py-1.5">
                                <User2Icon className="inline-block w-5 mr-2" />
                                <span className="font-semibold">Published By</span>
                                <p className="text-slate-700 font-light">
                                    {project.submittedBy}
                                </p>

                                <hr className="border-b-2 border-gray-200 my-4" />

                                <CalendarIcon className="inline-block w-5 h-5 mr-2" />
                                <span className="font-semibold mr-2">Published On:</span>
                                <span className="font-light">
                  {project.created_at?.toDateString()}
                </span>
                            </div>
                        </div>

                        {project.voteCount > 100 && (
                            <Badge>
                                <StarIcon fill="yellow" /> Featured Project
                            </Badge>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
