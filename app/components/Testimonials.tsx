"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

type Testimonial = {
  name: string;
  avatar: string;
  text: string;
  rating: number;
  date: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const visibleTestimonials = Array.from(
    { length: Math.min(3, testimonials.length) },
    (_, offset) => testimonials[(activeIndex + offset) % testimonials.length]
  );

  return (
    <section id="testimonials" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.28em] text-[#4b7a66]">Đánh giá</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#24463a] md:text-4xl">Khách nói gì về NHÀ TÔI</h2>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-4 md:grid-cols-3">
            {visibleTestimonials.map((testimonial) => (
              <article key={`${testimonial.name}-${testimonial.date}`} className="rounded-2xl bg-[#f4f9f6] p-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <SmartImage src={testimonial.avatar} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#24463a]">{testimonial.name}</p>
                    <p className="text-xs text-[#56796d]">{testimonial.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#3f6356]">{testimonial.text}</p>
                <div className="mt-3 flex items-center gap-1 text-[#f4b83b]">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={previous}
            className="rounded-full border border-[#cfe2d9] bg-[#f3f9f6] p-2 text-[#2f6151]"
            aria-label="Trước"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-[#cfe2d9] bg-[#f3f9f6] p-2 text-[#2f6151]"
            aria-label="Sau"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
