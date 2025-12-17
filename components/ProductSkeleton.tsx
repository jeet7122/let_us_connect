
import {Skeleton} from "@/components/ui/skeleton";
import SectionHeading from "@/components/SectionHeading";
import {RocketIcon} from "lucide-react";


export default function ProductSkeleton() {
    return (
        <section className='py-20 px-10 bg-[#f2f2f2]'>
            <div>
                <div className="flex items-start gap-3 border-gray-700 border-b-2">
                    <SectionHeading title='Recently Launched Projects' icon={RocketIcon} description='Discover recently published projects'/>
                </div>
            </div>
            <div className="flex justify-center py-12">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className='border rounded-lg p-6'>
                            <Skeleton className='h-40 w-64 flex flex-col gap-6'>
                                <Skeleton className='h-10 w-64 bg-slate-300' />
                                <Skeleton className='h-10 w-20 bg-slate-300' />
                                <Skeleton className='h-40 w-64 bg-slate-300 flex gap-3'>
                                    <Skeleton className='h-10 w-5 bg-slate-300' />
                                    <Skeleton className='h-10 w-5 bg-slate-300' />
                                    <Skeleton className='h-10 w-5 bg-slate-300' />
                                </Skeleton>
                            </Skeleton>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}