// app/admin/AdminContent.tsx
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminCard from "@/components/AdminCard";
import AdminProductCard from "@/components/AdminProductCard";
import { getAllProjectsForAdmin } from "@/lib/projects/projects-select";
import {CalendarIcon} from "lucide-react";

export default async function AdminContent() {
    const { userId } = await auth();

    if (!userId) redirect("/sign-in");

    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    const isAdmin = user.publicMetadata?.isAdmin === true;
    if (!isAdmin) redirect("/");

    const allProjects = await getAllProjectsForAdmin();

    const approvedProjects = allProjects.filter(
        (p) => p.status === "approved"
    );
    const pendingProjects = allProjects.filter(
        (p) => p.status === "pending"
    );
    const rejectedProjects = allProjects.filter(
        (p) => p.status === "rejected"
    );

    return (
        <section>
            <div className="w-full flex justify-center">
                <div className="max-w-[1080px] flex flex-wrap gap-y-4 gap-x-5">
                    <AdminCard title="Total" className="bg-yellow-500/10 w-[450px] h-[120px] rounded-lg px-4 py-2" amount={allProjects.length} />
                    <AdminCard title="Approved" className="bg-green-500/10 w-[450px] h-[120px] rounded-lg px-4 py-2" amount={approvedProjects.length} />
                    <AdminCard title="Pending" className="bg-blue-600/10 w-[450px] h-[120px] rounded-lg px-4 py-2" amount={pendingProjects.length} />
                    <AdminCard title="Rejected" className='bg-red-500/40 w-[450px] h-[120px] rounded-lg px-4 py-2' amount={rejectedProjects.length} />
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-lg font-semibold">
                    Pending Approval ({pendingProjects.length})
                </h2>
                {pendingProjects.length > 0 && (
                    <div className="px-10 py-5 grid lg:grid-cols-2 sm:grid-col-1">
                        {pendingProjects.map((p) => (
                            <AdminProductCard key={p.id} project={p} />
                        ))}
                    </div>
                )}
                {pendingProjects.length === 0 && (
                    <div className="w-full flex justify-center">
                        <div className="m-10 py-10 w-[1080px] h-80 border border-gray-700 rounded-lg flex flex-col gap-y-10 items-center">
                            <CalendarIcon size={100} color='slategray' />
                            <p className='text-3xl'>No Request's Pending</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-10">
                <h2 className="text-lg font-semibold">All Projects</h2>
                <div className="px-10 py-5 grid lg:grid-cols-2 sm:grid-col-1">
                    {allProjects.map((p) => (
                        <AdminProductCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
