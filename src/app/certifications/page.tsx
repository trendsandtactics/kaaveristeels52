"use client";

import React, { useCallback, useEffect, useState } from "react";

type Certification = {
  id: number;
  title: string;
  description: string;
  issuedBy: string;
  issueDate: string | null;
  createdAt: string;
};

async function readApiResponse(
  response: Response
): Promise<{ error?: string; certifications?: Certification[] }> {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  return { error: text || "Unexpected server response." };
}

function formatDate(date: string | null) {
  if (!date) return "";

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function CertificationsPage() {
  const [items, setItems] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadItems = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/certifications", {
        cache: "no-store",
      });

      const data = await readApiResponse(response);

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to fetch certificates.");
      }

      setItems(data.certifications ?? []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to fetch certificates."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <section className="min-h-screen bg-[#f8f8f8] px-4 pt-28 pb-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-black">
            Verified Certificates
          </h1>
          <p className="mt-4 text-black/70 max-w-2xl mx-auto">
            Each certification below is published from the KAAVERI admin panel
            and is visible publicly for full transparency.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-center mt-12 text-black/60">Loading...</p>
        ) : error ? (
          <p className="text-center mt-12 text-red-600">{error}</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
            {items.map((item) => {
              const fileUrl = `/api/certifications/${item.id}/file`;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center"
                >
                  {/* Title + Date */}
                  <div className="w-full flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold text-black text-left">
                      {item.title}
                    </h2>

                    {item.issueDate && (
                      <span className="text-xs text-black/60 uppercase">
                        {formatDate(item.issueDate)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-black/70 text-left mb-2">
                    {item.description}
                  </p>

                  {/* Issued */}
                  <p className="text-sm text-black/70 text-left w-full mb-4">
                    <span className="font-semibold">Issued by:</span>{" "}
                    {item.issuedBy}
                  </p>

                  {/* Certificate Image (FULL VISIBLE) */}
                  <div className="w-full bg-gray-50 p-4 rounded-2xl flex justify-center">
                    <img
                      src={fileUrl}
                      alt={item.title}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
