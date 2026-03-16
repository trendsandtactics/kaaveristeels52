"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Projects", href: "/projects" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        // Always maintain a transparent background on the home page
        setScrolled(false);
        return;
      }

      // other pages always white header
      setScrolled(true);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const isTransparentHeader = isHomePage;

  const headerBg = isTransparentHeader
    ? "bg-transparent py-6"
    : "bg-white shadow-sm py-4 border-b border-gray-200";

  const currentLogo = isTransparentHeader ? "/logo.png" : "/logo3.png";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center z-50 transition-transform hover:scale-105"
        >
          <img
            src={currentLogo}
            alt="Kaaveri TMT Bars & Structural"
            className="h-10 md:h-14 w-auto object-contain transition-all duration-500"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-body text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors group overflow-hidden font-semibold ${
                isTransparentHeader
                  ? "text-white/90 hover:text-white"
                  : "text-black hover:text-accent-red"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 ${
                  isTransparentHeader ? "bg-white" : "bg-accent-red"
                }`}
              />
            </Link>
          ))}

          <button className="ml-4 relative px-6 py-2.5 bg-accent-red text-white font-body text-[10px] uppercase tracking-[0.2em] font-bold overflow-hidden group border-2 border-accent-red">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-accent-red">
              Request Quote
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
          </button>
        </nav>

        <button
          className={`lg:hidden z-50 w-8 h-8 flex flex-col justify-center items-end gap-1 ${
            isTransparentHeader ? "text-white" : "text-black"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] transition-all duration-300 ${
              isTransparentHeader ? "bg-white" : "bg-black"
            } ${mobileMenuOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-6"}`}
          />
          <span
            className={`block h-[2px] transition-all duration-300 ${
              isTransparentHeader ? "bg-white" : "bg-black"
            } ${mobileMenuOpen ? "opacity-0 w-5" : "w-5"}`}
          />
          <span
            className={`block h-[2px] transition-all duration-300 ${
              isTransparentHeader ? "bg-white" : "bg-black"
            } ${mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-3"}`}
          />
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center p-8"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl text-black"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
