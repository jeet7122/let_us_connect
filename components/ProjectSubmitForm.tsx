"use client";

import {Label} from "@/components/ui/label";
import {FormField} from "@/components/forms/FormField";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {SparklesIcon} from "lucide-react";
import {addProjectAction, FormState} from "@/lib/projects/project-actions";
import {useActionState} from "react";

export default function ProjectSubmitForm()
{
    const initialState: FormState = {
        success: false,
        errors: {},
        message: "",

    }

    const[state, formAction, isPending] = useActionState(addProjectAction, initialState);

    const {errors, message, success} = state;

    return (
        <form className='mt-10 py-6 px-4' action={formAction}>
            {message && (
                <p
                    className={`mb-4 text-sm ${
                        success ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {message}
                </p>
            )}
            <FormField label="Project Name" name="name" id="name" required={true} onChange={() => {}} error={errors?.name?.[0]} placeholder="My Awesome Idea"/>
            <FormField label="Slug" name="slug" id="slug" required={true} onChange={() => {}} error={errors?.slug?.[0]} placeholder='my-awesome-idea' helperText='URL friendly version of your idea'/>
            <div className='space-y-2 mb-3'>
                <Label htmlFor='description'>Description</Label>
                <Textarea id='description' name='description' required onError={() => "Description is required"} rows={5}/>
                {errors?.description?.[0] && (
                    <p className="text-sm text-destructive">
                        {errors.description[0]}
                    </p>
                )}
            </div>
            <FormField label='Github URL' name="github_url" id="github_url" required={true} onChange={() => {}}  placeholder='https://github.com/userID/{reponame}' helperText='If you have gathered ideas share github repo link for other users to view System Overview ' />
            <FormField label='Preferred Tech-Stack' name="techStack" id="tecStack" required={true} onChange={() => {}} error={errors?.techStack?.[0]} placeholder='Java, Spring-Boot, Next.js' helperText='Enter values separated by "," Example: Java, Spring-Boot, Next.js]"' />
            <div className='w-full flex justify-center'>
                <Button type="submit" className={isPending? 'w-[240px] h-[50px] bg-green-700 opacity-70' : 'w-[240px] h-[50px] bg-green-700'}>
                    <SparklesIcon/>
                    Submit
                </Button>
            </div>
        </form>
    )
}