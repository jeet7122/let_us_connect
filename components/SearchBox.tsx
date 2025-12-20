"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, SearchIcon, SparklesIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { InferSelectModel } from "drizzle-orm";
import { projects as projectsTable } from "@/db/schema";
import ProductCard from "@/components/ProductCard";

export type ProjectType = InferSelectModel<typeof projectsTable>;

export default function SearchBox({
                                      projects,
                                  }: {
    projects: ProjectType[];
}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] =
        useState<"trending" | "newest">("trending");

    const filteredProjects = useMemo(() => {
        let result = [...projects]; // ✅ never mutate props

        // 🔍 Search filter
        if (searchQuery.trim()) {
            result = result.filter((project) =>
                project.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            );
        }

        // 🔀 Sorting
        if (sortBy === "trending") {
            result.sort((a, b) => b.voteCount - a.voteCount);
        }

        if (sortBy === "newest") {
            result.sort(
                (a, b) =>
                    new Date(b.created_at ?? 0).getTime() -
                    new Date(a.created_at ?? 0).getTime()
            );
        }

        return result;
    }, [projects, searchQuery, sortBy]); // ✅ correct deps

    return (
        <div className="flex flex-col">
            <div className="px-10 py-5 flex flex-col gap-4 sm:flex sm:flex-row w-full items-center">
                <div className="flex relative w-full">
                    <SearchIcon className="absolute left-3 top-1" />
                    <Input
                        className="border-gray-700 w-full pl-10"
                        placeholder="Search For Projects....."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex gap-2">
                    <Button
                        variant={sortBy === "trending" ? "default" : "outline"}
                        onClick={() => setSortBy("trending")}
                    >
                        <SparklesIcon /> Trending
                    </Button>

                    <Button
                        variant={sortBy === "newest" ? "default" : "outline"}
                        onClick={() => setSortBy("newest")}
                    >
                        <Clock /> Recent
                    </Button>
                </div>
            </div>

            <div className="px-10 font-light">
                <p className="text-slate-700">
                    Showcasing {filteredProjects.length} projects
                </p>
            </div>

            {filteredProjects.length > 0 ? (
                <div className="flex gap-x-4 gap-y-4 px-10 py-12 flex-wrap">
                    {filteredProjects.map((project) => (
                        <ProductCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="bg-white/60 mt-2 rounded-lg flex items-center gap-x-4 gap-y-4 px-10 py-12">
                    <h1>No data to showcase</h1>
                </div>
            )}
        </div>
    );
}
