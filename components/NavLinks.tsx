import Link from "next/link";
import {CompassIcon, HomeIcon, RocketIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function NavLinks() {
    let isSignedIn = false;
    return (
        <nav className='flex gap-110 self-center'>
            <div className='flex items-center justify-center gap-5'>
                <Link href="/">
                    <Button variant='secondary'><HomeIcon/><span>Home</span></Button>

                </Link>
                <Link href="/explore">
                    <Button variant='secondary' className='bg-indigo-300'><CompassIcon/><span>Explore</span></Button>
                </Link>

            </div>

            <div className='flex justify-end gap-3'>
                {isSignedIn ? (
                    <Link href="/submit">
                        <Button className='bg-blue-500'><RocketIcon/><span>Publish a Project</span></Button>
                    </Link>
                ) : (
                    <>
                        <Link href="/login">
                            <Button className='bg-blue-500'><RocketIcon/><span>Sign In</span></Button>
                        </Link>
                        <Link href="/signup">
                            <Button className='bg-blue-500'><RocketIcon/><span>Sign Up</span></Button>
                        </Link>
                    </>
                )}

            </div>
        </nav>
    )
}
