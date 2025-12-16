import {LucideIcon} from "lucide-react";

export default function StatsCard(
    {
        icon: Icon,
        value,
        label
    }:
    {
        icon: LucideIcon,
        label: string,
        value: string
    }) {

    return (
        <div className="flex flex-col justify-center rounded-md items-center gap-4 bg-[#F4B183] w-md h-[120px]">
            <div className='flex gap-4 font-bold text-3xl'>
                <Icon className='mt-2'/>
                <h1>{value}</h1>
            </div>
            <p>{label}</p>
        </div>
    )

}