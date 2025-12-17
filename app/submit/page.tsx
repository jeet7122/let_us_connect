import SectionHeading from "@/components/SectionHeading";
import {SparklesIcon} from "lucide-react";
import ProjectSubmitForm from "@/components/ProjectSubmitForm";

export default function SubmitPage() {
    return (
        <section className='py-20 px-10'>
            <div>
                <SectionHeading title="Submit Your Project" icon={SparklesIcon}
                                description="Share your ideas and thoughts to community, and find like minded teammates"/>
            </div>
            <div>
                <ProjectSubmitForm/>
            </div>
        </section>
    )
}