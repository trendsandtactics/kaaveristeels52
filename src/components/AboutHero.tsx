import React from "react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <div className="w-full bg-white">
            {/* Hero Background Section - Maroon Gradient */}
            <div className="w-full bg-gradient-to-r from-[#800000] via-[#a52a2a] to-[#800000] pt-32 pb-20 relative overflow-hidden shadow-sm">
                
                {/* Depth Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-20" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    
                    {/* Welcome Section */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="font-body text-white/90 uppercase tracking-[0.2em] font-bold text-sm mb-4">
                            About Us
                        </h2>

                        <h1 className="font-heading text-5xl md:text-7xl text-white mb-8 leading-tight drop-shadow-lg">
                            Welcome to <span className="font-extrabold">KAAVERI</span><br />
                            <span className="text-white font-extrabold text-4xl md:text-5xl block mt-2">
                                TMT & STRUCTURAL
                            </span>
                        </h1>

                        <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                            At KAAVERI, we are passionate about steel and dedicated to excellence. Our company is a leading manufacturer of TMT bars and structural steel products, committed to providing the construction industry with the highest quality materials that ensure strength, safety, and sustainability.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 bg-white">
                
                {/* Mission Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                        
                        <div className="absolute inset-0 bg-[#800000]/10 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>

                        <Image
                            src="/image/about1.png"
                            alt="Industrial Teamwork"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-body text-[#800000] uppercase tracking-[0.2em] font-bold text-sm mb-4">
                            Our Mission
                        </h2>

                        <h3 className="font-heading text-4xl md:text-5xl text-black mb-6 leading-tight drop-shadow-sm font-extrabold">
                            Building a Stronger, Sustainable Future
                        </h3>

                        <p className="font-body text-black/80 text-lg leading-relaxed font-medium">
                            At KAAVERI, our mission is to manufacture and supply superior TMT bars and structural steel products that contribute to the safety, durability, and sustainability of construction projects worldwide. We are dedicated to maintaining the highest standards of quality in all our products.
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                        
                        <div className="absolute inset-0 bg-[#800000]/10 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>

                        <Image
                            src="/image/about2.png"
                            alt="Industrial Factory"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-body text-[#800000] uppercase tracking-[0.2em] font-bold text-sm mb-4">
                            Vision
                        </h2>

                        <h3 className="font-heading text-4xl md:text-5xl text-black mb-6 leading-tight drop-shadow-sm font-extrabold">
                            Leading the Steel Industry with Quality, Innovation, and Trust
                        </h3>

                        <p className="font-body text-black/80 text-lg leading-relaxed font-medium">
                            Our vision is to be the most trusted and respected manufacturer in the steel industry, renowned for our unwavering commitment to quality, innovation, and customer satisfaction. We aim to set new standards in steel manufacturing by embracing cutting-edge technology.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
