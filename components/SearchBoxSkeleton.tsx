import { Skeleton } from "@/components/ui/skeleton";

export default function SearchBoxSkeleton() {
    return (
        <div className="flex flex-col">
            {/* Search row */}
            <div className="px-10 py-5 flex w-screen items-center gap-4">
                <Skeleton className="h-10 flex-1 rounded-md" />

                <div className="flex gap-2">
                    <Skeleton className="h-10 w-28 rounded-md" />
                    <Skeleton className="h-10 w-28 rounded-md" />
                </div>
            </div>

            {/* Count text */}
            <div className="px-10">
                <Skeleton className="h-4 w-44 rounded-md" />
            </div>

            {/* Cards grid */}
            <div className="flex gap-x-4 gap-y-4 px-10 py-12 flex-wrap">
                {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton
                        key={i}
                        className="h-48 w-80 rounded-xl"
                    />
                ))}
            </div>
        </div>
    );
}
