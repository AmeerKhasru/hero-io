import React from 'react';
import { Play, Apple } from 'lucide-react'; // Import the icons

const Hero = () => {
    return (
        <section className="relative bg-base-200/50 pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-base-content mb-6 tracking-tight">
                    We Build <br className="md:hidden" />
                    <span className="text-primary"> Productive</span> Apps
                </h1>

                {/* Sub-headline */}
                <p className="max-w-2xl mx-auto text-base-content/70 text-lg md:text-xl leading-relaxed mb-10">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                {/* App Store Buttons using Lucide React */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">

                    {/* Google Play Button */}
                    <button className="btn btn-outline btn-lg bg-base-100 border-base-300 hover:bg-base-200 h-auto py-3 px-6 shadow-sm group">
                        <Play
                            className="size-8 text-success fill-success transition-transform group-hover:scale-110"
                        />
                        <div>
                            <span className="text-lg font-bold">Google Play</span>
                        </div>
                    </button>

                    {/* App Store Button */}
                    <button className="btn btn-outline btn-lg bg-base-100 border-base-300 hover:bg-base-200 h-auto py-3 px-6 shadow-sm group">
                        <Apple
                            className="size-8 fill-current transition-transform group-hover:scale-110"
                        />
                        <div>
                            <span className="text-lg font-bold">App Store</span>
                        </div>
                    </button>

                </div>

                {/* Hero Image Container */}
                <div className="relative max-w-[900px] mx-auto">
                    <img
                        src="/src/assets/hero.png"
                        alt="Hero Mockup"
                        className="w-full h-auto drop-shadow-xl"
                    />
                </div>
            </div>
            {/* Stats Section */}
            <div className="mt-0 bg-[#7e22ce] text-white py-24 px-4  mx-4 md:mx-0 shadow-2xl">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-20">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
                        {/* Total Downloads */}
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-medium opacity-80 uppercase mb-2">Total Downloads</span>
                            <span className="text-5xl md:text-6xl font-black mb-2">29.6M</span>
                            <span className="text-xs opacity-70">21% More Than Last Month</span>
                        </div>

                        {/* Total Reviews */}
                        <div className="flex flex-col items-center  border-white/20 py-8 md:py-0">
                            <span className="text-sm font-medium opacity-80 uppercase mb-2">Total Reviews</span>
                            <span className="text-5xl md:text-6xl font-black mb-2">906K</span>
                            <span className="text-xs opacity-70">46% More Than Last Month</span>
                        </div>

                        {/* Active Apps */}
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-medium opacity-80 uppercase mb-2">Active Apps</span>
                            <span className="text-5xl md:text-6xl font-black mb-2">132+</span>
                            <span className="text-xs opacity-70">31 More Will Launch</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;