'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#why-us", label: "Why Us" },
        { href: "#agents", label: "Agents" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 md:py-4 bg-gradient-to-b from-black/90 to-black/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
                <span className="text-2xl md:text-3xl font-serif text-white tracking-widest font-bold group-hover:text-primary transition-colors">WOODHOUSE</span>
                <span className="text-[8px] md:text-[10px] text-primary/90 tracking-[0.4em] uppercase font-light pl-0.5">REALTY</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-light text-white tracking-wider">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
                <Button className="border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-4 lg:px-8 py-4 lg:py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
                    Contact Us
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-white p-2" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40 md:hidden pt-20 px-6">
                    <button 
                        className="absolute top-4 right-4 text-white p-2" 
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>
                    
                    <div className="flex flex-col items-center gap-8 text-xl font-light text-white tracking-wider mt-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className="hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button 
                            className="mt-4 border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
