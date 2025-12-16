import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
    return (
        <div className="bg-[#7f5539] sticky top-0 backdrop-blur supports-backdrop-filter:bg-[#7f5539]/60 px-2 py-4 flex justify-between">
            <Logo />
            <NavLinks />
        </div>
    )
}