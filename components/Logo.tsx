import Link from "next/link";
import {HardHat, LucideCrown} from 'lucide-react';
export default function Logo() {
    return (
        <Link href="/">
            <div className="flex gap-3">
                <LucideCrown fill='gold' size={50} />
                <span className='text-2xl mt-2 font-bold text-white'>Let's Connect</span>
            </div>
        </Link>
    )
}
