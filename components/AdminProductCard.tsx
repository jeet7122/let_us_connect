import { ProjectType } from "@/components/SearchBox";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "lucide-react";
import ActionButtons from "@/components/ActionButtons";
import { cn } from "@/lib/utils";
import DeleteButton from "@/components/DeleteButton";

export default function AdminProductCard({
                                             project,
                                         }: {
    project: ProjectType;
}) {
    return (
        <Card className="border rounded-lg p-6 bg-pink-500/10 max-w-130 relative mt-5">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    <Badge
                        className={cn(
                            project.status === "pending"
                                ? "bg-blue-500/80 px-2 py-1"
                                : "bg-green-500/70 px-2 py-1"
                        )}
                    >
                        {project.status}
                    </Badge>
                </div>

                <CardDescription>
                    <p>{project.description}</p>

                    {project.voteCount > 100 && (
                        <Badge>Featured</Badge>
                    )}

                    <div className="flex gap-2 mt-2">
                        {project.techStack?.map((tech) => (
                            <Badge key={tech} className="px-3 py-1">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-4">
                        <p>By: {project.submittedBy}</p>
                        <p>{project.created_at?.toDateString()}</p>
                        <p>
                            <a
                                href={project.github_url ?? ""}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Visit Repo
                            </a>
                            <ExternalLinkIcon className="inline-block w-4 mb-0.5" />
                        </p>
                    </div>
                </CardDescription>
            </div>

            <CardFooter className="flex w-full items-start">
                <DeleteButton projectId={project.id} />
            </CardFooter>

            {project.status === "pending" && (
                <ActionButtons
                    status={project.status}
                    projectId={project.id}
                />
            )}
        </Card>
    );
}
