"use client";
import {Button} from "@/components/ui/button";
import {CheckIcon, CrossIcon} from "lucide-react";
import {approveProjectAction, rejectProjectAction} from "@/lib/admin/AdminActions";
import {ProjectType} from "@/components/SearchBox";

export default function ActionButtons(
    {
        projectId,
        status
    }: {projectId: ProjectType["id"]; status: string}
) {
    const handleApprove = async () =>{
        await approveProjectAction(projectId)
    }
    const handleReject = async () => {
        await rejectProjectAction(projectId)
    }

    return (
        <div className='flex gap-2'>
            <Button variant='outline' className='bg-green-500/70' onClick={handleApprove}><CheckIcon/>Approve</Button>
            <Button variant='destructive' onClick={handleReject}><CrossIcon/>Reject</Button>
        </div>
    )
}