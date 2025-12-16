import SectionHeading from "@/components/SectionHeading";
import {ArrowRightIcon, StarIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProjects() {
    return (
        <section>
            <div className="py-20 px-10">
                <div className='flex justify-between'>
                    <SectionHeading title="Featured Projects" icon={StarIcon}
                                    description="Top picks from community this week"/>
                    <Button variant='outline' className='bg-[#1113] w-[120px]'>
                        <Link href='/projects' className='flex gap-3'>
                            View All
                            <ArrowRightIcon className='mt-0.5'/>
                        </Link>
                    </Button>
                </div>
                <div className="flex justify-center py-12">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {featuredProducts.map((prod) => (
                            <ProductCard key={prod.id} project={prod}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const featuredProducts = [
    {
        id: 1,
        name: "Resume Analyzer",
        description: "A resume analyzer web app for analyzing ats scores on resume based on job description",
        techStack: ["Python", "Laravel", "PHP", "CSS", "HTML"],
        votes: 615,
        isFeatured: true,
    },
    {
        id: 2,
        name: "Campus Navigation AR",
        description: "Augmented Reality campus guide using phone camera to overlay directions and building info for new students",
        techStack: ["Unity", "C#", "ARKit", "React Native", "Firebase"],
        votes: 892,
        isFeatured: true,
    },
    {
        id: 3,
        name: "Study Buddy Match",
        description: "AI-powered matching system that connects students with complementary study habits and course schedules for optimal group study sessions",
        techStack: ["Node.js", "Express", "MongoDB", "TensorFlow.js", "Socket.io"],
        votes: 437,
        isFeatured: true,
    },
    {
        id: 4,
        name: "EcoTrack Carbon Calculator",
        description: "Mobile app that tracks daily carbon footprint with campus-specific recommendations for sustainable student living",
        techStack: ["Flutter", "Dart", "Google Maps API", "Python", "SQLite"],
        votes: 1243,
        isFeatured: true,
    },
    {
        id: 5,
        name: "Virtual Lab Assistant",
        description: "Interactive 3D simulations for science labs with real-time data collection and analysis tools for remote/hybrid learning",
        techStack: ["Three.js", "JavaScript", "WebGL", "Chart.js", "Node.js"],
        votes: 567,
        isFeatured: true,
    },
    {
        id: 6,
        name: "Campus Marketplace",
        description: "Peer-to-peer platform for students to buy, sell, and trade textbooks, furniture, electronics, and other campus essentials",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL"],
        votes: 2108,
        isFeatured: true,
    }
];