// components/ProjectDetailsSkeleton.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailsSkeleton() {
    return (
        <section className="flex flex-col gap-4 py-10 px-10 animate-pulse">
            {/* Header */}
            <div className="flex justify-between items-center">
                <Skeleton className="w-48 h-6" /> {/* Back link */}
                <div className="flex gap-2 items-center">
                    <Skeleton className="w-6 h-6 rounded-full" /> {/* Heart icon */}
                    <Skeleton className="w-20 h-5" /> {/* Vote count */}
                </div>
            </div>

            {/* Title */}
            <div className="mt-8">
                <Skeleton className="w-1/3 h-8 mb-2" /> {/* Project title */}
                <Skeleton className="w-1/2 h-4" /> {/* GitHub URL */}
            </div>

            {/* Tech Stack */}
            <div className="mt-6 flex gap-2 flex-wrap">
                <Skeleton className="w-20 h-6 rounded-full" />
                <Skeleton className="w-24 h-6 rounded-full" />
                <Skeleton className="w-16 h-6 rounded-full" />
            </div>

            {/* Description */}
            <div className="mt-6">
                <Skeleton className="w-full lg:w-[800px] h-32 rounded-md" />
            </div>

            {/* Additional Info */}
            <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <Skeleton className="w-6 h-6 rounded-full" />
                    <Skeleton className="w-32 h-4" />
                </div>

                <div className="flex items-center gap-2">
                    <Skeleton className="w-6 h-6 rounded-full" />
                    <Skeleton className="w-32 h-4" />
                </div>

                <Skeleton className="w-full h-4" />
            </div>

            {/* Featured badge */}
            <div className="mt-4">
                <Skeleton className="w-40 h-6 rounded-full" />
            </div>
        </section>
    );
}
