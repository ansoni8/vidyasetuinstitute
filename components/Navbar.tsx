"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
            <header className="w-full  bg-white shadow-sm fixed top-0 left-0 z-30">

            {/* ✅ Main Navbar */}
            <nav className="max-w-[1920px] h-[100px] mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/vsiLogo.svg"
                        alt="VidyaSetu Logo"
                        width={179}
                        height={54}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-10 text-[#1C2534] font-medium">
                    <li><Link href="/" className="hover:text-[#0084FF] transition">Home</Link></li>
                    <li><Link href="/courses" className="hover:text-[#0084FF] transition">Courses</Link></li>
                    <li><Link href="/about" className="hover:text-[#0085FF] transition">About</Link></li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl text-[#1C2534]"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </nav>

            {/* ✅ Mobile Menu Slide */}
            {open && (
                <div className="md:hidden bg-white border-t w-full text-center py-4 text-[#1C2534]">
                    <Link href="/" className="block py-2" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/courses" className="block py-2" onClick={() => setOpen(false)}>Courses</Link>
                    <Link href="/about" className="block py-2" onClick={() => setOpen(false)}>About</Link>
                    {/* Mobile Contact */}
                    <div className="mt-3 text-sm text-gray-600">
                        <p>📞 +91 98765 43210</p>
                        <p>✉️ contact@vidyasetu.in</p>
                    </div>
                </div>
            )}

        </header>
    );
}
