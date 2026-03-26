"use client";

import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";

export default function PhotoGalleryPage() {
  return (
    <GenericPlaceholderPage
      title="Photo Gallery"
      subtitle="Gallery"
      description="Browse photos and visual highlights from plants, products, and project applications."
      icon="🖼️"
      color="accent-yellow"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="h-52 bg-gray-100 border border-gray-200 flex items-center justify-center text-black/50 font-body">
            Gallery Item {idx + 1}
          </div>
        ))}
      </div>
    </GenericPlaceholderPage>
  );
}
