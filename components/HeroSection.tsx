import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRightIcon, EyeIcon, RocketIcon, SparklesIcon, UsersIcon} from "lucide-react";
import StatsCard from "@/components/StatsCard";

export default function HeroSection () {

    const statsData = [
        {
            icon: RocketIcon,
            value: "100+",
            label: "Projects Shared"
        },
        {
            icon: UsersIcon,
            value: "40+",
            label: "Active Users"
        },
        {
            icon: EyeIcon,
            value: "1000+",
            label: "Monthly Visitors"
        },
    ]
    //#F4D35E
    return (
        <section className="flex flex-col items-center justify-center gap-20 bg-[#f2f2f2] px-10 py-20">
            <Badge variant="outline" className='text-blue-700 px-5 py-2 mt-5 border-gray-700'>Join tons of students sharing there working projects</Badge>
            <h1 className="text-5xl text-shadow-primary">Share your project ideas for career development</h1>
            <h3>Leverage the talent within St. Clair. Find like-minded students to combine skills, share the workload, and create impressive collaborative projects that accelerate your career development.</h3>
            <div className="flex items-center justify-center gap-10">
                <Button variant="outline" className="hover:bg-green-400 h-[50px]">
                    <Link href="/submit" className="flex items-center justify-center gap-3"><SparklesIcon /> Share Your Project Idea</Link>
                </Button>
                <Button variant="outline" className="hover:bg-blue-300 h-[50px]">
                    <Link href="/explore" className="flex items-center justify-center gap-3">
                        Explore Idea
                        <ArrowRightIcon />
                    </Link>
                </Button>
            </div>
            <div className="flex items-center gap-10 flex-wrap">
                {
                    statsData.map((stat) => (
                        <StatsCard key={stat.label} {...stat} />
                    ))
                }
            </div>
        </section>
    )
}