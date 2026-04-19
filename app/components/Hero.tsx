"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";

type HeroProps = {
  name: string;
  slogan: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
};

export default function Hero({ name, slogan, images }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const go = () => {
    const gallery = document.getElementById("intro");
    gallery?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full w-full">
              <SmartImage
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-[#11362f]/20 via-[#0f2f2a]/40 to-[#10201d]/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-[#f7f6f0]">
        <p className="mb-4 text-sm tracking-[0.45em] uppercase">Chào mừng bạn đến với</p>
        <h1 className="text-4xl font-semibold md:text-6xl">{name}</h1>
        <p className="mt-4 max-w-2xl text-base text-[#ebf5ef] md:text-xl">{slogan}</p>
        <button
          type="button"
          onClick={go}
          className="mt-8 rounded-full bg-[#e8c468] px-6 py-3 text-sm font-semibold text-[#2f3d2f] transition hover:-translate-y-0.5 hover:bg-[#f2d786]"
        >
          Khám phá ngay
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        <button
          type="button"
          onClick={previous}
          className="h-10 w-10 rounded-full border border-[#f5f0e6] bg-[#102622]/45 text-xl text-[#f5f0e6] backdrop-blur transition hover:bg-[#1f4a42]/70"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="mx-auto" size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          className="h-10 w-10 rounded-full border border-[#f5f0e6] bg-[#102622]/45 text-xl text-[#f5f0e6] backdrop-blur transition hover:bg-[#1f4a42]/70"
          aria-label="Ảnh tiếp"
        >
          <ChevronRight className="mx-auto" size={20} />
        </button>
      </div>
    </section>
  );
}
