import Link from "next/link";
import {CompassIcon, HomeIcon, RocketIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import {Suspense} from "react";

export default function NavLinks() {
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
            <div className='flex gap-4'>
                <Suspense>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button className='bg-yellow-300 text-black'><RocketIcon/><span>Sign In</span></Button>

                        </SignInButton>
                        <SignUpButton>
                            <Button className='bg-blue-500'><RocketIcon/><span>Sign Up</span></Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/submit">
                            <Button className='bg-yellow-300 text-black'><RocketIcon/><span>Publish a Project</span></Button>
                        </Link>

                        <UserButton
                            appearance={{
                                elements:{
                                    avatarBox: 'mb-1',
                                }
                            }}
                        />

                    </SignedIn>

                </Suspense>
            </div>
        </nav>
    )
}
