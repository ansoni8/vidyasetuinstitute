import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#F5F5F7] text-[#1C2534]">

            {/* Top Section */}
            <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* About + VSI Logo */}
                <div className="space-y-4">
                    <Image
                        src="/vsiLogo.svg"
                        alt="VSI Logo"
                        width={160}
                        height={48}
                        className="object-contain"
                    />
                    <p className="text-sm text-gray-600 leading-relaxed">
                        VidyaSetu is a modern LMS designed to empower institutes with
                        seamless course management, smart student tracking, and a powerful
                        digital learning experience.
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Services</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-[#0084FF] cursor-pointer transition">Student Management</li>
                        <li className="hover:text-[#0084FF] cursor-pointer transition">Course Administration</li>
                        <li className="hover:text-[#0084FF] cursor-pointer transition">Performance Analytics</li>
                        <li className="hover:text-[#0084FF] cursor-pointer transition">Online Classrooms</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Contact Us</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>📞 +91 98765 43210</li>
                        <li>✉️ contact@vidyasetu.in</li>
                        <li>📍 Pune, Maharashtra, India</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Quick Links</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-[#0084FF] cursor-pointer transition">Home</li>
                        <li><Link href="/about" className="hover:text-[#0085FF] transition">About</Link></li>
                        <li><Link href="/courses" className="hover:text-[#0084FF] transition">Courses</Link></li>
                        <li className="hover:text-[#0084FF] cursor-pointer transition">Privacy Policy</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="bg-white border-t border-[#E5E7EB] py-4 text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} VidyaSetu. All Rights Reserved.
            </div>
        </footer>
    );
}
