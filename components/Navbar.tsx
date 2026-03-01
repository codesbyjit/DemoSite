import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-gradient-to-b from-black/90 to-black/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
                <span className="text-3xl font-serif text-white tracking-widest font-bold group-hover:text-primary transition-colors">WOODHOUSE</span>
                <span className="text-[10px] text-primary/90 tracking-[0.4em] uppercase font-light pl-0.5">REALTY</span>
            </Link>

            {/* Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-light text-white tracking-wider">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                <Link href="#why-us" className="hover:text-primary transition-colors">Why Us</Link>
                <Link href="#agents" className="hover:text-primary transition-colors">Agents</Link>
                <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>

            {/* Action */}
            <div className="flex items-center gap-4">
                <Button
                    className="hidden md:flex border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300"
                >
                    Contact Us
                </Button>
            </div>
        </nav>
    )
}
