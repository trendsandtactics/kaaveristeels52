import React from "react";
import { submitContactForm } from "./actions";

export const metadata = {
    title: "Request a Quote | KAAVERI TMT Bars & Structural",
    description: "Request a custom quote for KAAVERI TMT Bars, Structural Steel, and Billets for your next construction project.",
};

export default function RequestQuotePage() {
    return (
        <main className="flex min-h-screen flex-col w-full relative pt-24 bg-background">
            {/* Hero Section */}
            <div className="w-full py-16 md:py-20 bg-accent-yellow text-black relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
                <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold drop-shadow-sm mb-4">
                        Request a Quote
                    </h1>
                    <p className="font-body text-black/70 font-medium max-w-xl mx-auto">
                        Fill out the form below with your project requirements, and our sales team will get back to you with a tailored proposal.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-20">
                <div className="bg-white p-8 md:p-12 border border-gray-100 rounded-sm shadow-2xl">
                    <form action={submitContactForm} className="flex flex-col gap-8">
                        
                        {/* Personal/Company Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Name *</label>
                                <input type="text" name="name" required placeholder="Full Name" className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Company Name</label>
                                <input type="text" name="company" placeholder="Organization" className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Phone *</label>
                                <input type="tel" name="phone" required placeholder="Contact Number" className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Email *</label>
                                <input type="email" name="email" required placeholder="Email Address" className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors" />
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Product Requirements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Product Type *</label>
                                <select name="productType" required className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors appearance-none">
                                    <option value="">Select a Product</option>
                                    <option value="tmt-bars">TMT Bars</option>
                                    <option value="structural-steel">Structural Steel</option>
                                    <option value="billets">Billets</option>
                                    <option value="other">Multiple / Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Estimated Quantity *</label>
                                <input type="text" name="quantity" required placeholder="e.g., 50 Metric Tons" className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Project Location</label>
                            <input type="text" name="location" placeholder="City / State" className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-body text-xs font-bold uppercase tracking-widest text-black/70">Additional Notes</label>
                            <textarea name="notes" rows={4} placeholder="Specific grades, sizes, or timeline requirements..." className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-accent-red bg-[#f8f9fa] focus:bg-white transition-colors resize-none"></textarea>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button type="submit" className="w-full md:w-auto px-16 py-5 bg-black text-white font-body text-sm uppercase tracking-[0.2em] font-bold hover:bg-accent-red transition-colors duration-300 shadow-xl rounded-sm">
                                Submit Request
                            </button>
                        </div>
                        <p className="text-center font-body text-xs text-black/50 mt-2">
                            Your details are safe with us. We will respond within 24 hours.
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}