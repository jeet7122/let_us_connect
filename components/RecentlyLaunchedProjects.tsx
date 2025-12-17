
import SectionHeading from "@/components/SectionHeading";
import {RocketIcon} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import EmptyCard from "@/components/EmptyCard";
import {getRecentlyProjects} from "@/lib/projects/projects-select";
import VotingButton from "@/components/VotingButton";

export default async function RecentlyLaunchedProjects() {

    const featuredProducts = await getRecentlyProjects();
    return (

        <section className='py-20 px-10 bg-[#f2f2f2]'>
            <SectionHeading title="Recently Added Projects" icon={RocketIcon}/>
            <p>Discover the recently published projects</p>
            <div className="flex justify-center py-12">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {featuredProducts.length > 0 ? (
                        featuredProducts.map((product) => (
                            <ProductCard key={product.id} project={product} />
                        ))
                    ) : (
                        <EmptyCard />
                    )}
                </div>

            </div>
        </section>
    )
}
