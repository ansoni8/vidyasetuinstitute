"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Define the URL for your payment page
    const PAYMENT_URL = "https://pages.razorpay.com/pl_PBaHp0MzwAENRw/view";

    // Common Tailwind classes for the button for reusability
    const buttonClasses = `
        font-bold 
        text-white 
        px-6 
        py-2.5 
        rounded-full 
        shadow-lg 
        transition-all 
        duration-300 
        ease-in-out
        transform 
        hover:scale-105 
        hover:shadow-xl
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-[#0084FF]
    `;

    // Creative gradient for the button
    // You might need to add this to your tailwind.config.js if you haven't already
    // For example:
    // extend: {
    //   backgroundImage: {
    //     'gradient-pay': 'linear-gradient(to right, #0084FF, #00C4FF)',
    //   }
    // }
    const gradientBackground = "bg-gradient-to-r from-[#0084FF] to-[#00C4FF]"; // Example: Blue to lighter blue gradient
    const hoverBackground = "hover:from-[#00C4FF] hover:to-[#0084FF]"; // Reverse gradient on hover


    return (
            <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-30">

            {/* ✅ Main Navbar */}
            <nav className="max-w-[1920px] h-[90px] mx-auto px-6 flex items-center justify-between">

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
                <ul className="hidden md:flex space-x-10 text-[#1C2534] font-medium items-center">
                    <li><Link href="/" className="hover:text-[#0084FF] transition">Home</Link></li>
                    <li><Link href="/courses" className="hover:text-[#0084FF] transition">Courses</Link></li>
                    <li><Link href="/about" className="hover:text-[#0085FF] transition">About</Link></li>
                    <li><Link href="/contact" className="hover:text-[#0085FF] transition">Contact us</Link></li>
                    
                    {/* **Updated: Desktop Pay Now Button** */}
                    <li>
                        <Link 
                            href={PAYMENT_URL} 
                            className={`${buttonClasses} ${gradientBackground} ${hoverBackground}`}
                        >
                            Pay Now
                        </Link>
                    </li>
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
                    
                    {/* **Updated: Mobile Pay Now Button** */}
                    <Link 
                        href={PAYMENT_URL} 
                        className={`
                            ${buttonClasses} 
                            ${gradientBackground} 
                            ${hoverBackground}
                            mt-4 
                            mb-2 
                            inline-block
                        `}
                        onClick={() => setOpen(false)} // Close menu on click
                    >
                        Pay Now
                    </Link>

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