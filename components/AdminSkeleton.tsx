import { Skeleton } from "@/components/ui/skeleton";
import SectionHeading from "@/components/SectionHeading";
import { ShieldIcon } from "lucide-react";

export default function AdminSkeleton() {
    return (
        <section className="px-5 py-10">
            {/* Heading */}
            <div className="mb-10">
                <SectionHeading
                    title="Project Administrator"
                    icon={ShieldIcon}
                    description="Review and manage submitted projects"
                />
            </div>

            {/* Stats cards */}
            <div className="w-full flex justify-center">
                <div className="max-w-[1080px] flex flex-wrap gap-y-4 gap-x-5">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-[450px] h-[120px] rounded-lg px-4 py-2 border"
                        >
                            <Skeleton className="h-6 w-24 mb-4" />
                            <Skeleton className="h-10 w-20" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pending section */}
            <div className="mt-10">
                <Skeleton className="h-6 w-64 mb-6" />
                <div className="px-10 py-5 space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <AdminProjectRowSkeleton key={i} />
                    ))}
                </div>
            </div>

            {/* All projects section */}
            <div className="mt-10">
                <Skeleton className="h-6 w-40 mb-6" />
                <div className="px-10 py-5 space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <AdminProjectRowSkeleton key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AdminProjectRowSkeleton() {
    return (
        <div className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex flex-col gap-2 w-full">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex gap-2 mt-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                </div>
            </div>

            <div className="flex gap-2 ml-4">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
            </div>
        </div>
    );
}
