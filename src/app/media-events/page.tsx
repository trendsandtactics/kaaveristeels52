"use client";

import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";

export default function MediaEventsPage() {
  return (
    <GenericPlaceholderPage
      title="Media & Events"
      subtitle="Updates"
      description="Discover company announcements, event highlights, and industry participation from KAAVERI."
      icon="📣"
      color="accent-yellow"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Plant Expansion Update", "Dealer Meet 2026", "Industry Expo Highlights"].map((item) => (
            <article key={item} className="border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-black/50 font-bold mb-3">Media & Events</p>
              <h3 className="font-heading text-2xl text-black mb-3">{item}</h3>
              <p className="text-black/70 font-body">Content module ready. Connect this page to dynamic CMS/API data.</p>
            </article>
          ))}
        </div>
      </div>
    </GenericPlaceholderPage>
  );
}
