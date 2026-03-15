"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
    {
        name: "TMT Bars",
        image: "/tmtbar.png‎",
        description: "High-strength ribbed TMT bars built for maximum durability, flexibility, and earthquake resistance. The foundation of modern construction.",
    },
    {
        name: "Structural Beams",
        image: "/structuralbar 1.png",
        description: "Premium structural steel beams crafted for heavy-duty load bearing. Ensuring structural integrity and flawless execution for mega-projects.",
    },
    {
        name: "Billets",
        image: "/squarebar.png",
        description: "High-quality steel billets manufactured with precision. The perfect raw material for forging superior steel products.",
    }
];

export default function HomeProducts() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[2px] bg-accent-red" />
                        <h2 className="font-body text-accent-red uppercase tracking-[0.2em] font-bold text-sm">Our Products</h2>
                        <div className="w-12 h-[2px] bg-accent-red" />
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl text-foreground mb-6"
                    >
                        Masterpieces of <span className="text-accent-red">Steel</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-body text-foreground/70 max-w-2xl text-lg"
                    >
                        Engineered to perfection, our diverse range of steel products forms the resilient core of iconic structures worldwide.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="group relative bg-white border border-gray-100 shadow-xl overflow-hidden rounded-sm"
                        >
                            <div className="relative w-full h-[400px] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Hover overlay effects */}
                                <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent-red/20 transition-colors duration-500 z-20 pointer-events-none" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-10 h-1 bg-accent-red mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform -translate-x-4 group-hover:translate-x-0" />
                                <h4 className="font-heading text-3xl text-white mb-2 drop-shadow-md">
                                    {product.name}
                                </h4>
                                <p className="font-body text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
