import Link from "next/link";
import { CompassIcon, HomeIcon, RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import { Suspense } from "react";

type Props = {
    mobile?: boolean;
    closeMenu?: () => void;
};

export default function NavLinks({ mobile = false, closeMenu }: Props) {
    const handleClick = () => {
        if (mobile) closeMenu?.();
    };

    return (
        <nav
            className={`flex ${
                mobile ? "flex-col gap-4 items-start" : "items-center gap-10"
            }`}
        >
            {/* Left links */}
            <div className={`flex ${mobile ? "flex-col gap-3 w-full" : "gap-5"}`}>
                <Link href="/" onClick={handleClick}>
                    <Button
                        variant="secondary"
                        className={mobile ? "w-full justify-start" : ""}
                    >
                        <HomeIcon />
                        <span>Home</span>
                    </Button>
                </Link>

                <Link href="/explore" onClick={handleClick}>
                    <Button
                        variant="secondary"
                        className={`bg-indigo-300 ${
                            mobile ? "w-full justify-start" : ""
                        }`}
                    >
                        <CompassIcon />
                        <span>Explore</span>
                    </Button>
                </Link>
            </div>

            {/* Auth */}
            <div className={`flex ${mobile ? "flex-col gap-3 w-full" : "gap-4"}`}>
                <Suspense>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button
                                onClick={handleClick}
                                className={`bg-yellow-300 text-black hover:text-white ${
                                    mobile ? "w-full justify-start" : ""
                                }`}
                            >
                                <RocketIcon />
                                <span>Sign In</span>
                            </Button>
                        </SignInButton>

                        <SignUpButton>
                            <Button
                                onClick={handleClick}
                                className={`bg-blue-500 ${
                                    mobile ? "w-full justify-start" : ""
                                }`}
                            >
                                <RocketIcon />
                                <span>Sign Up</span>
                            </Button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <Link href="/submit" onClick={handleClick}>
                            <Button
                                className={`bg-yellow-300 text-black hover:text-white ${
                                    mobile ? "w-full justify-start" : ""
                                }`}
                            >
                                <RocketIcon />
                                <span>Publish a Project</span>
                            </Button>
                        </Link>

                        <UserButton />
                    </SignedIn>
                </Suspense>
            </div>
        </nav>
    );
}
