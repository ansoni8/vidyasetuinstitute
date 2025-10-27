"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const slides = [
        {
            bg: "/hero-bg-3.jpg",
            badge: "New Platform",
            title: "Unlock Learning. Empower Growth.",
            desc: "Build your institution’s future with VidyaSetu — the intuitive LMS for students, educators & administrators."
        },
        {
            bg: "/hero-bg-2.jpg",
            badge: "Digital Education",
            title: "Transform the Classroom Experience",
            desc: "Manage courses, track progress, and keep students engaged like never before."
        },
        {
            bg: "/hero-bg-1.jpg",
            badge: "Smart & Scalable",
            title: "Build the Future of Learning",
            desc: "From admissions to LMS — all in one connected platform."
        }
    ];

    const [current, setCurrent] = useState(0);

    // Auto-slide every 4s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${slide.bg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6 text-center">
                <span className="inline-block mb-4 px-3 py-1 bg-blue-600 text-white rounded-full uppercase text-sm tracking-wider">
                    {slide.badge}
                </span>

                <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl">
                    {slide.title}
                </h1>

                <p className="mt-4 text-gray-200 text-lg sm:text-xl">
                    {slide.desc}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/signup"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                    >
                        Get Started
                    </a>
                    <a
                        href="/features"
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
                    >
                        Explore Features
                    </a>
                </div>
            </div>

            {/* ✅ Slider Dots */}
            <div className="absolute bottom-8 z-10 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            current === i ? "bg-white scale-110" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
