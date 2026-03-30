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
    <div className="fixed inset-0 z-[100] bg-black/60 p-2 sm:p-4 flex items-center justify-center">
      <div className="w-full max-w-5xl max-h-[95vh] rounded-2xl bg-white shadow-2xl overflow-y-auto relative">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black text-white text-lg sm:text-xl leading-none flex items-center justify-center"
        >
          ✕
        </button>

        <div className="w-full bg-black/90 flex items-center justify-center p-2 sm:p-4 md:p-6">
          <div className="w-[92vw] sm:w-[78vw] md:w-full max-w-[720px] bg-white max-h-[72vh]" style={{ aspectRatio: "210 / 297" }}>
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
        <div className="p-4 sm:p-6">
          <h3 className="font-heading text-2xl sm:text-3xl text-black pr-10">{popup.title}</h3>
          <p className="text-sm sm:text-base text-black/70 mt-2">{popup.short_description ?? popup.content ?? ""}</p>
          <div className="mt-4 flex items-center gap-3">
            {popup.file_url ? <a href={popup.file_url} target="_blank" rel="noreferrer" className="rounded-lg bg-black text-white px-4 py-2 text-sm">Open File</a> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
