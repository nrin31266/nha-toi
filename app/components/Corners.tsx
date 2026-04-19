"use client";

import { motion } from "framer-motion";
import { Camera, Clock, MapPin, Sparkles, Star } from "lucide-react";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

type Corner = {
  id: number;
  name: string;
  description: string;
  highlight: string;
  image: string;
  features: string[];
  tags: string[];
};

type CornersProps = {
  corners: Corner[];
};

export default function Corners({ corners }: CornersProps) {
  const cornerIcons = [MapPin, Camera, Clock, Star, Sparkles];

  return (
    <section id="corners" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.28em] text-[#4b7a66]">Góc đẹp</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#24463a] md:text-4xl">
            Những góc nhỏ đặc biệt tại NHÀ TÔI
          </h2>
        </Reveal>

        <div className="mt-10 space-y-8">
          {corners.map((corner, index) => (
            <Reveal key={corner.id} delayMs={index * 120}>
              <article className="grid overflow-hidden rounded-3xl border border-[#d9e8df] bg-[#f6faf7] shadow-sm md:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-72 md:h-full ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-[#0f2a24]/40 to-transparent" />
                  <div className="relative h-full w-full">
                    <SmartImage
                      src={corner.image}
                      alt={corner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <div className={`p-6 md:p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#d9ecdf] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1e4f42]">
                    <Sparkles size={14} />
                    {corner.highlight}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#24463a] md:text-3xl">{corner.name}</h3>
                  <p className="mt-3 text-base leading-7 text-[#3f6356]">{corner.description}</p>

                  <div className="mt-5 space-y-2">
                    {corner.features.map((feature, featureIndex) => {
                      const FeatureIcon = cornerIcons[featureIndex % cornerIcons.length];
                      return (
                        <p key={feature} className="flex items-center gap-2 text-sm text-[#355d4f]">
                          {/* <FeatureIcon size={16} className="text-[#2e6f5d]" /> */}
                          {feature}
                        </p>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                    {/* <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f2ec] px-3 py-1 text-[#2f5f50]">
                      <Clock size={14} />
                      {corner.bestTime}
                    </span> */}
                    {corner.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#e8f3ee] px-3 py-1 text-[#3a6154]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* <button
                    type="button"
                    className="mt-6 rounded-full bg-[#234b3f] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1b3b32]"
                  >
                    Khám phá
                  </button> */}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
