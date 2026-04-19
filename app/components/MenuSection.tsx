"use client";

import { motion } from "framer-motion";
import { Apple, Coffee, CupSoda, Martini, Milk, Utensils } from "lucide-react";
import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

type MenuCategory = {
  id: string;
  name: string;
  icon: string;
  items: Array<{
    name: string;
    description: string;
    image: string;
    tags: string[];
  }>;
};

type MenuSectionProps = {
  title: string;
  subtitle: string;
  featured: string[];
  seasonal: string[];
  categories: MenuCategory[];
};

export default function MenuSection({
  title,
  subtitle,
  featured,
  seasonal,
  categories,
}: MenuSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "");

  const categoryIcons = useMemo(
    () =>
      ({
        tea: Coffee,
        juice: Apple,
        smoothie: Milk,
        food: Utensils,
        soda: CupSoda,
        cocktail: Martini,
      }) as const,
    []
  );

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  return (
    <section id="menu" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#f8f3e7] p-8 md:p-12">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.28em] text-[#816645]">Đồ ăn & thức uống</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#3e3424] md:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-[#705d45]">{subtitle}</p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const CategoryIcon =
                categoryIcons[category.id as keyof typeof categoryIcons] ?? CupSoda;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    category.id === activeCategory?.id
                      ? "bg-[#8b5a2b] text-[#f9f4ea]"
                      : "bg-[#efe4d0] text-[#6c5336] hover:bg-[#e6d8be]"
                  }`}
                >
                  <span className="mr-1.5 inline-flex align-middle">
                    <CategoryIcon size={15} />
                  </span>
                  {category.name}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {featured.map((drink) => (
              <span
                key={drink}
                className="inline-flex items-center gap-1 rounded-full bg-[#f4e6ca] px-3 py-1 text-[#6e4d27]"
              >
                <CupSoda size={13} />
                Nổi bật: {drink}
              </span>
            ))}
            {seasonal.map((drink) => (
              <span
                key={drink}
                className="inline-flex items-center gap-1 rounded-full bg-[#deefe8] px-3 py-1 text-[#2f5f50]"
              >
                <Martini size={13} />
                Theo mùa: {drink}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory?.items.map((item, index) => {
            return (
              <Reveal key={item.name} delayMs={index * 80}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl border border-[#d6c4a7] bg-[#fff9f0] p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[#e5d7be]">
                      <SmartImage
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={`${item.name}-${tag}`}
                            className="rounded-full bg-[#f0dfc2] px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-[#7a582a]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#3e3424]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#6e5d47]">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
