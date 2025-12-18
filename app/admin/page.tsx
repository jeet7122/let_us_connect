import { Suspense } from "react";
import AdminContent from "./AdminContext";
import SectionHeading from "@/components/SectionHeading";
import { ShieldIcon } from "lucide-react";
import AdminSkeleton from "@/components/AdminSkeleton";

export default function AdminPage() {
    return (
        <section className="px-5 py-10">
            <div className="mb-10">
                <SectionHeading
                    title="Project Administrator"
                    icon={ShieldIcon}
                    description="Review and manage submitted projects"
                />
            </div>

            <Suspense fallback={<AdminSkeleton />}>
                <AdminContent />
            </Suspense>
        </section>
    );
}