"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[#7f5539] sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-[#7f5539]/60 px-2 py-4">
            <div className="flex justify-between items-center">
                <Logo />

                {/* Desktop */}
                <div className="hidden md:flex">
                    <NavLinks />
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden mt-4">
                    <NavLinks mobile closeMenu={() => setOpen(false)} />
                </div>
            )}
        </header>
    );
}
