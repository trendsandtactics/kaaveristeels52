"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SteelScroll() {
  const images = ["/1.png", "/2.png"];

  const certificates = [
    { src: "/bis.png", alt: "BIS Certificate" },
    { src: "/tvecert.png", alt: "TVE Certificate" },
    { src: "/NISST.png", alt: "NISST Certificate" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="steel-scroll-section"
      className="relative w-full min-h-screen overflow-hidden -mt-20 md:-mt-24"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Hero Background"
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/65 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-[2]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pb-36 md:pb-40 pt-36 md:pt-44">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-[0.95] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              Building India&apos;s Future
            </h2>

            <p className="mt-5 text-white/85 text-sm md:text-lg leading-relaxed max-w-lg">
              Premium TMT bars and structural steel solutions engineered for
              strength, durability, and trust in every project.
            </p>

            <button className="mt-8 px-8 py-4 bg-accent-yellow text-black font-bold text-sm md:text-lg uppercase tracking-wider rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:scale-105 transition duration-300">
              Explore Our Products
            </button>
          </div>

          {/* Right Content - fills empty space */}
          <div className="w-full flex justify-start lg:justify-end">
            <div className="w-full max-w-xl bg-black/25 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <p className="text-accent-yellow text-xs md:text-sm font-semibold uppercase tracking-[0.3em]">
                Why Kaaveri TMT
              </p>

              <h3 className="mt-3 text-white text-2xl md:text-4xl font-bold leading-tight">
                Strong Steel. Trusted Quality. Built to Last.
              </h3>

              <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
                Kaaveri TMT delivers high-performance steel products designed for
                modern construction, infrastructure, and industrial excellence.
                Our focus is on quality consistency, certified manufacturing,
                and dependable strength for every build.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-accent-yellow text-2xl md:text-3xl font-bold">
                    500+
                  </h4>
                  <p className="mt-1 text-white/75 text-xs md:text-sm">
                    Grade Strength Performance
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-accent-yellow text-2xl md:text-3xl font-bold">
                    ISO
                  </h4>
                  <p className="mt-1 text-white/75 text-xs md:text-sm">
                    Quality-Focused Manufacturing
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-accent-yellow text-2xl md:text-3xl font-bold">
                    BIS
                  </h4>
                  <p className="mt-1 text-white/75 text-xs md:text-sm">
                    Standards & Compliance
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-accent-yellow text-2xl md:text-3xl font-bold">
                    24/7
                  </h4>
                  <p className="mt-1 text-white/75 text-xs md:text-sm">
                    Reliable Supply Commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Bottom */}
        <div className="absolute bottom-4 left-0 w-full z-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="w-full rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md px-4 md:px-6 py-4 md:py-5 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-accent-yellow text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                    Certifications
                  </p>
                  <p className="text-white/80 text-xs md:text-sm mt-1">
                    Certified quality and trusted manufacturing standards
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  {certificates.map((certificate, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-white rounded-xl px-4 py-3 min-w-[100px] md:min-w-[130px] h-[70px] md:h-[84px] shadow-lg"
                    >
                      <Image
                        src={certificate.src}
                        alt={certificate.alt}
                        width={110}
                        height={55}
                        className="object-contain max-h-[50px] md:max-h-[60px] w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
