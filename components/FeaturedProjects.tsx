"use cache";
import SectionHeading from "@/components/SectionHeading";
import {ArrowRightIcon, StarIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {getFeaturedProjects} from "@/lib/projects/projects-select";

export default async function FeaturedProjects() {
    const featuredProducts = await getFeaturedProjects();
    const data = featuredProducts?.filter(fp => fp.voteCount >= 100);
    return (
        <section>
            <div className="py-20 px-10">
                <div className='flex justify-between'>
                    <SectionHeading title="Featured Projects" icon={StarIcon}
                                    description="Top picks from community this week"/>
                    <Button variant='outline' className='bg-[#1113] w-[120px]'>
                        <Link href='/explore' className='flex gap-3'>
                            View All
                            <ArrowRightIcon className='mt-0.5'/>
                        </Link>
                    </Button>
                </div>
                <div className="flex justify-center py-12">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {data.map((prod) => (
                            <ProductCard key={prod.id} project={prod}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
