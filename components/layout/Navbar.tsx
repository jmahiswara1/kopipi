"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import RevealButton from "../ui/RevealButton";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/about" },
    { name: "Locations", href: "/locations" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Revert solid background logic. User wants transparent nav on dark heroes (Home, Menu, Locations).
    // Navbar will be transparent at top, and solid when scrolled.
    const showSolidNav = isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${showSolidNav ? "bg-espresso/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link href="/" className="font-display text-2xl md:text-3xl text-cream font-bold relative z-50">
                        Kopipi.
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-ui text-sm uppercase tracking-widest hover:text-tobacco transition-colors ${pathname === link.href ? "text-tobacco" : "text-cream/90"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <RevealButton href="/reservation" variant="primary" className="!py-2 !px-6 text-sm">
                            Reservasi
                        </RevealButton>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-cream relative z-50 p-2"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: "circInOut" }}
                        className="fixed inset-0 bg-espresso z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-display text-4xl text-cream hover:text-tobacco transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <RevealButton href="/reservation" variant="primary" className="mt-4">
                            Buat Reservasi
                        </RevealButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
