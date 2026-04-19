import { Building2, CalendarDays, Ruler, Users } from "lucide-react";
import Reveal from "./Reveal";

type StatisticsProps = {
  establishYear: number;
  area: string;
  capacity: number;
  visitors: number;
};

export default function Statistics({
  establishYear,
  area,
  capacity,
  visitors,
}: StatisticsProps) {
  const stats = [
    { label: "Năm thành lập", value: String(establishYear), icon: CalendarDays },
    { label: "Diện tích", value: area, icon: Ruler },
    { label: "Sức chứa", value: `${capacity}+ khách`, icon: Users },
    { label: "Lượt khách", value: `${visitors.toLocaleString("vi-VN")}+`, icon: Building2 },
  ];

  return (
    <section id="statistics" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#eaf5ef] p-8 md:p-12">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.28em] text-[#4b7a66]">Thống kê</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#24463a] md:text-4xl">
            Những con số của NHÀ TÔI
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delayMs={index * 80}>
              <article className="rounded-2xl bg-[#f8fcfa] p-5 shadow-sm">
                <stat.icon size={18} className="text-[#2a6656]" />
                <p className="mt-3 text-2xl font-semibold text-[#20473b]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#4a6d61]">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
