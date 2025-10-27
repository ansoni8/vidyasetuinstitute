export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content container */}
            <div className="relative z-10 max-w-4xl px-6 text-center">
                {/* Badge or small label if present */}
                <span className="inline-block mb-4 px-3 py-1 bg-blue-600 text-white rounded-full uppercase text-sm tracking-wider">
                    New Platform
                </span>

                {/* Headline */}
                <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl">
                    Unlock Learning. Empower Growth.
                </h1>

                {/* Sub-headline */}
                <p className="mt-4 text-gray-200 text-lg sm:text-xl">
                    Build your institution’s future with VidyaSetu — the intuitive LMS for students, educators & administrators.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/signup"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                    >
                        Get Started
                    </a>
                    <a
                        href="/features"
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all"
                    >
                        Explore Features
                    </a>
                </div>
            </div>
        </section>
    );
}
