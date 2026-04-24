"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

const media: MediaItem[] = [
  { type: "image", src: "/images/unity_centre_hall.jpeg", alt: "Main Hall — front view" },
  { type: "image", src: "/images/unity_centre_hall_1.jpeg", alt: "Main Hall — wider angle" },
  { type: "image", src: "/images/unity_center_hall_2.jpeg", alt: "Main Hall — stage view" },
  { type: "video", src: "/images/unity_hall.mp4", alt: "Main Hall video tour" },
];

export default function SpaceCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? media.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === media.length - 1 ? 0 : c + 1));

  const item = media[current];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-xl bg-heading">
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.alt || ""}
            width={1200}
            height={900}
            className="w-full object-contain"
            priority={current === 0}
          />
        ) : (
          <video
            key={item.src}
            src={item.src}
            controls
            playsInline
            className="w-full"
          />
        )}

        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition hover:bg-white"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5 text-heading" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5 text-heading" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {media.map((m, i) => (
            <button
              key={m.src}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {media.map((m, i) => (
          <button
            key={m.src}
            type="button"
            onClick={() => setCurrent(i)}
            className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              i === current ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            {m.type === "image" ? (
              <Image
                src={m.src}
                alt={m.alt || ""}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-heading">
                <Play className="h-5 w-5 text-white" fill="white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
