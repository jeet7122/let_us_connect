import {LucideIcon} from "lucide-react";

export default function SectionHeading({ title, icon:Icon, description }: { title: string, icon?: LucideIcon, description?: any }) {
    // @ts-ignore
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-start gap-3 border-gray-700 border-b-2">
                <Icon className='mt-2'/>
                <h2 className="text-3xl mb-2">{title}</h2>
            </div>
            <p className='font-light'>{description}</p>

        </div>
    )
}