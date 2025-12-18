"use client"

import {ProjectType} from "@/components/SearchBox";
import {Button} from "@/components/ui/button";
import {TrashIcon} from "lucide-react";
import {deleteProjectAction} from "@/lib/admin/AdminActions";

export default function DeleteButton(
    {
        projectId
    }: {projectId: ProjectType['id']}
){

    const handleDelete = async () => {
        await deleteProjectAction(projectId)
    }

    return (
        <Button onClick={handleDelete} variant='destructive'>
            <TrashIcon/>
            Delete
        </Button>
    )
}