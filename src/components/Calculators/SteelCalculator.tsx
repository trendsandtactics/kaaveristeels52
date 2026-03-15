"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SteelCalculator() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "" });

    const [activeTab, setActiveTab] = useState<"construction" | "weight">("construction");

    // Construction State
    const [structureType, setStructureType] = useState("residential");
    const [area, setArea] = useState("");
    const [floors, setFloors] = useState("1");
    const [estimatedSteel, setEstimatedSteel] = useState<number | null>(null);

    // Weight State
    const [diameter, setDiameter] = useState("8");
    const [length, setLength] = useState("12"); // Standard 12m
    const [quantity, setQuantity] = useState("");
    const [estimatedWeight, setEstimatedWeight] = useState<number | null>(null);
    const [bundleCount, setBundleCount] = useState<number | null>(null);

    const calculateConstruction = () => {
        const multiplier = structureType === "residential" ? 4 : 5;
        const totalArea = Number(area) * Number(floors);
        if (totalArea > 0) {
            setEstimatedSteel(totalArea * multiplier);
        }
    };

    const calculateWeight = () => {
        const d = Number(diameter);
        const l = Number(length);
        const q = Number(quantity);
        if (d > 0 && l > 0 && q > 0) {
            const weightPerBar = (d * d) / 162 * l;
            const totalWeight = weightPerBar * q;
            setEstimatedWeight(totalWeight);

            const barsPerBundle = d <= 10 ? 10 : d <= 16 ? 5 : 3;
            setBundleCount(Math.ceil(q / barsPerBundle));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.phone) {
            // Optional: Here you can hook up an API to save the lead to your database
            console.log("Lead captured:", formData);
            setIsUnlocked(true);
        }
    };

    if (!isUnlocked) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl mx-auto bg-white shadow-2xl rounded-sm border border-gray-100 overflow-hidden relative"
            >
                {/* Aesthetic Background Overlays */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="p-8 md:p-12 relative z-10">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto bg-accent-red/5 flex items-center justify-center rounded-full mb-6 border border-accent-red/20 shadow-sm">
                            <span className="text-accent-red text-2xl">🔒</span>
                        </div>
                        <h3 className="font-heading text-3xl md:text-4xl text-black mb-4">
                            Access the <span className="text-accent-red">Calculator</span>
                        </h3>
                        <p className="font-body text-black/60 font-medium max-w-sm mx-auto">
                            Enter your details to unlock our premium engineering suite and calculate your precise steel requirements.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2 text-left">
                            <label htmlFor="name" className="font-body text-xs uppercase tracking-widest text-black/80 font-bold">Full Name</label>
                            <input 
                                type="text" 
                                id="name"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent-red focus:ring-1 focus:ring-accent-red outline-none transition-all font-body text-black"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                            <label htmlFor="phone" className="font-body text-xs uppercase tracking-widest text-black/80 font-bold">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent-red focus:ring-1 focus:ring-accent-red outline-none transition-all font-body text-black"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="mt-4 relative px-8 py-4 bg-accent-red text-white font-body text-sm uppercase tracking-[0.2em] font-bold overflow-hidden group border-2 border-accent-red shadow-lg w-full"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-accent-red">Unlock Calculator</span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
                        </button>
                    </form>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-5xl mx-auto bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10 transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)]">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <div className="w-full max-w-5xl mx-auto bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10 transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)]">

            {/* Top Branding Accent Line */}
            <div className="w-full h-1.5 bg-gradient-to-r from-accent-red via-accent-yellow to-accent-red"></div>
                {/* Top Branding Accent Line */}
                <div className="w-full h-1.5 bg-gradient-to-r from-accent-red via-accent-yellow to-accent-red"></div>

            <div className="flex w-full bg-gray-50/50 border-b border-gray-100 p-2 gap-2">
                <button
                    className={`flex-1 py-4 px-6 text-center font-heading text-sm sm:text-lg font-bold transition-all duration-300 rounded-xl relative ${activeTab === 'construction' ? 'bg-white text-foreground shadow-sm ring-1 ring-gray-900/5' : 'text-gray-500 hover:text-foreground hover:bg-white/60'}`}
                    onClick={() => setActiveTab("construction")}
                >
                    Construction Steel
                </button>
                <button
                    className={`flex-1 py-4 px-6 text-center font-heading text-sm sm:text-lg font-bold transition-all duration-300 rounded-xl relative ${activeTab === 'weight' ? 'bg-white text-foreground shadow-sm ring-1 ring-gray-900/5' : 'text-gray-500 hover:text-foreground hover:bg-white/60'}`}
                    onClick={() => setActiveTab("weight")}
                >
                    Weight & Bundle
                </button>
            </div>

            <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                    {activeTab === "construction" && (
                        <motion.div key="construction" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="space-y-10">

                            <div className="text-center md:text-left mb-8">
                                <h4 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Estimate TMT Bar Requirement</h4>
                                <p className="font-body text-gray-500 mt-2">Get an approximate steel estimate based on your construction area.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col group">
                                    <label className="text-xs uppercase tracking-[0.15em] mb-3 text-gray-500 font-bold group-focus-within:text-foreground transition-colors">Structure Type</label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-foreground appearance-none focus:bg-white focus:border-accent-yellow focus:ring-4 focus:ring-accent-yellow/10 outline-none transition-all cursor-pointer font-medium"
                                            value={structureType} onChange={(e) => setStructureType(e.target.value)}
                                        >
                                            <option value="residential">Residential Building</option>
                                            <option value="commercial">Commercial Complex</option>
                                            <option value="infrastructure">Infrastructure</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            ▼
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col group">
                                    <label className="text-xs uppercase tracking-[0.15em] mb-3 text-gray-500 font-bold group-focus-within:text-foreground transition-colors">Built-up Area (sq. ft)</label>
                                    <input
                                        type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-foreground focus:bg-white focus:border-accent-yellow focus:ring-4 focus:ring-accent-yellow/10 outline-none transition-all font-medium placeholder-gray-400"
                                        placeholder="e.g. 1500" value={area} onChange={(e) => setArea(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col md:col-span-2 group">
                                    <label className="text-xs uppercase tracking-[0.15em] mb-3 text-gray-500 font-bold group-focus-within:text-foreground transition-colors">Number of Floors</label>
                                    <input
                                        type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-foreground focus:bg-white focus:border-accent-yellow focus:ring-4 focus:ring-accent-yellow/10 outline-none transition-all font-medium placeholder-gray-400"
                                        placeholder="e.g. 2" value={floors} onChange={(e) => setFloors(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={calculateConstruction}
                                className="w-full relative group overflow-hidden bg-foreground text-white py-5 rounded-xl font-bold tracking-[0.2em] transition-all uppercase text-sm shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Calculate Requirement
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </button>

                            {estimatedSteel !== null && (
                                <motion.div initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mt-12 p-10 rounded-2xl border border-gray-100 bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

                                    <div className="relative z-10 text-center">
                                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-foreground uppercase tracking-[0.2em] mb-6 font-bold shadow-sm">
                                            Estimated Requirement
                                        </div>
                                        <div className="text-6xl md:text-7xl font-heading text-foreground font-black tracking-tight mb-4">
                                            {estimatedSteel.toLocaleString()} <span className="text-3xl text-gray-400 font-body font-normal">kg</span>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-6 max-w-md mx-auto leading-relaxed border-t border-gray-200 pt-6">
                                            <span className="font-semibold text-foreground">Note:</span> This is an approximate value based on standard industrial ratios. Please consult your structural engineer for exact requirements.
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {activeTab === "weight" && (
                        <motion.div key="weight" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="space-y-10">

                            <div className="text-center md:text-left mb-8">
                                <h4 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Calculate Weight & Bundling</h4>
                                <p className="font-body text-gray-500 mt-2">Determine accurate weights and bundle sizes for logistical planning.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col group">
                                    <label className="text-xs uppercase tracking-[0.15em] mb-3 text-gray-500 font-bold group-focus-within:text-foreground transition-colors">Diameter (mm)</label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-foreground appearance-none focus:bg-white focus:border-accent-yellow focus:ring-4 focus:ring-accent-yellow/10 outline-none transition-all cursor-pointer font-medium"
                                            value={diameter} onChange={(e) => setDiameter(e.target.value)}
                                        >
                                            {[8, 10, 12, 16, 20, 25, 32].map(d => (
                                                <option key={d} value={d}>{d} mm</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            ▼
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col group">
                                    <label className="text-xs uppercase tracking-[0.15em] mb-3 text-gray-500 font-bold group-focus-within:text-foreground transition-colors">Length (m)</label>
                                    <input
                                        type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-foreground focus:bg-white focus:border-accent-yellow focus:ring-4 focus:ring-accent-yellow/10 outline-none transition-all font-medium placeholder-gray-400"
                                        value={length} onChange={(e) => setLength(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col group">
                                    <label className="text-xs uppercase tracking-[0.15em] mb-3 text-gray-500 font-bold group-focus-within:text-foreground transition-colors">Quantity (Bars)</label>
                                    <input
                                        type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-foreground focus:bg-white focus:border-accent-yellow focus:ring-4 focus:ring-accent-yellow/10 outline-none transition-all font-medium placeholder-gray-400"
                                        placeholder="e.g. 100" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={calculateWeight}
                                className="w-full relative group overflow-hidden bg-foreground text-white py-5 rounded-xl font-bold tracking-[0.2em] transition-all uppercase text-sm shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Calculate Weight & Bundles
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </button>

                            {estimatedWeight !== null && bundleCount !== null && (
                                <motion.div initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
                                        <div className="relative z-10 w-full text-center">
                                            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2 font-bold">Total Weight</div>
                                            <div className="text-5xl md:text-6xl font-heading text-foreground font-black tracking-tight mt-2">
                                                {estimatedWeight.toFixed(2)} <span className="text-2xl text-gray-400 font-body font-normal">kg</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center">
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-red/5 rounded-full blur-3xl pointer-events-none"></div>
                                        <div className="relative z-10 w-full text-center">
                                            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2 font-bold">Estimated Bundles</div>
                                            <div className="text-5xl md:text-6xl font-heading text-foreground font-black tracking-tight mt-2">
                                                {bundleCount} <span className="text-2xl text-gray-400 font-body font-normal">units</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
        </motion.div>
    );
}
