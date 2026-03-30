"use client";

import { useEffect, useState } from "react";
import { resolveMediaUrl } from "@/lib/media";

type PopupItem = {
  id: number;
  title: string;
  short_description?: string | null;
  content?: string | null;
  cover_image?: string | null;
  file_url?: string | null;
};

export default function PopupRenderer() {
  const [popup, setPopup] = useState<PopupItem | null>(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/image/certificate.jpg");
  const isPdf = imageSrc.toLowerCase().includes(".pdf");

  useEffect(() => {
    fetch("/api/public/content/popups?limit=1", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const item = (data.data ?? [])[0];
        if (item) {
          setPopup(item);
          setImageSrc(resolveMediaUrl(item.file_url ?? item.cover_image, "/image/certificate.jpg"));
          setOpen(true);
        }
      })
      .catch(() => undefined);
  }, []);

  if (!popup || !open) return null;

  return (
    <div className="fixed inset-0 z-[100] p-2 sm:p-4 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center justify-center">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black text-white text-lg sm:text-xl leading-none flex items-center justify-center"
        >
          ✕
        </button>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[95vw] max-w-[820px] max-h-[92vh]" style={{ aspectRatio: "210 / 297" }}>
            {isPdf ? (
              <iframe
                src={imageSrc}
                title={popup.title}
                className="h-full w-full bg-white"
              />
            ) : (
              <img
                src={imageSrc}
                alt={popup.title}
                className="h-full w-full object-contain"
                onError={() => setImageSrc("/image/certificate.jpg")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
