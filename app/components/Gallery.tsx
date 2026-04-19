"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

type GalleryProps = {
  title: string;
  description: string;
  images: GalleryImage[];
};

export default function Gallery({ title, description, images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const next = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  const previous = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) {
        return;
      }
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, lightboxIndex, next, previous]);

  const onTouchEnd = (currentX: number) => {
    if (touchStartX === null) {
      return;
    }
    const distance = currentX - touchStartX;
    if (distance > 45) {
      previous();
    } else if (distance < -45) {
      next();
    }
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.28em] text-[#4b7a66]">Thư viện</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#24463a] md:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-[#42685a]">{description}</p>
        </Reveal>

        <div className="mt-10 columns-1 gap-4 md:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <Reveal key={`${image.src}-${index}`} className="mb-4 break-inside-avoid" delayMs={index * 35}>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block w-full overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: index % 3 === 0 ? "4 / 5" : index % 3 === 1 ? "5 / 4" : "1 / 1",
                }}
              >
                <div className="relative h-full w-full">
                  <SmartImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-[#0f2a24]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-left text-[#f4f7f5] opacity-0 transition group-hover:opacity-100">
                  <div>
                    <p className="text-sm font-semibold">{image.alt}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#d5ebe2]">{image.category}</p>
                  </div>
                  <span className="rounded-full bg-[#173e35]/80 p-2 text-xs">
                    <ZoomIn size={14} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/85 px-3"
          onClick={close}
          onTouchStart={(event) => setTouchStartX(event.changedTouches[0]?.clientX ?? null)}
          onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            className="absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-[#153a32]/80 text-2xl text-white"
            aria-label="Ảnh trước"
          >
            ‹
          </button>

          <div
            className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <SmartImage
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-[#153a32]/80 text-2xl text-white"
            aria-label="Ảnh tiếp"
          >
            ›
          </button>

          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-[#153a32]/80 p-2 text-white"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
