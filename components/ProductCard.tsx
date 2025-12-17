import Link from "next/link";
import {Card, CardTitle, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ChevronDownIcon, ChevronUpIcon, Heart} from "lucide-react";
import {Button} from "@/components/ui/button";
import {InferSelectModel} from "drizzle-orm";
import {projects} from "@/db/schema";
import VotingButton from "@/components/VotingButton";

type Project = InferSelectModel<typeof projects>

export default function ProductCard({project}: { project: Project }) {
    let hasVoted = false;
    return (
        <Link href={`/projects/${project.slug}`} className='lg:w-[450px]'>
            <Card>
                <CardHeader className='flex gap-2'>
                    <div className='flex flex-col gap-2'>
                        <CardTitle>{project.name}</CardTitle>
                        {project.voteCount > 10 && (<Badge>Featured</Badge>)}
                        <CardDescription>{project.description}</CardDescription>
                    </div>
                </CardHeader>

                <CardFooter className='flex flex-col gap-4'>
                    <div className='flex justify-center gap-1 self-start'>
                        {
                            project.techStack?.map(techStack => (
                            <Badge key={techStack} variant="outline" className='bg-indigo-300'>{techStack}</Badge>
                        ))}
                    </div>

                    <VotingButton hasVoted={hasVoted} voteCount={project.voteCount} productID={project.id}/>
                </CardFooter>
            </Card>
        </Link>
    )
}
