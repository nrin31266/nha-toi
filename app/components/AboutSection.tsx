import { CheckCircle2, Coffee, Heart, Refrigerator, Sun, TreePine, Waves } from "lucide-react";
import Reveal from "./Reveal";

type AboutFeature = {
  name: string;
  icon: string;
};

type AboutSectionProps = {
  label: string;
  title: string;
  intro: string;
  calmLine: string;
  features: AboutFeature[];
  establishedYear: number;
  hours: string;
  services: string[];
  notes: string[];
};

const featureIconMap = {
  Trees: TreePine,
  Waves,
  Coffee,
  Refrigerator
} as const;

export default function AboutSection({
  label,
  title,
  intro,
  calmLine,
  features,
  establishedYear,
  hours,
  services,
  notes,
}: AboutSectionProps) {
  return (
    <section id="intro" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-linear-to-br from-[#f5fbf7] via-[#eef7f1] to-[#f9fcfa] p-7 ring-1 ring-[#d8e8de] md:p-12">
        <div>
          <Reveal delayMs={100}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a8e84]">
              {label}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#1f3f34] md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-9 text-[#3c6052] md:text-xl">{intro}</p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6f867b]">
                Điểm nổi bật
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon =
                    featureIconMap[feature.icon as keyof typeof featureIconMap] ?? CheckCircle2;
                  return (
                    <article
                      key={feature.name}
                      className="group rounded-2xl border border-[#d8e8de] bg-[#f9fcfa] p-4 transition hover:-translate-y-0.5 hover:border-[#b8d8c8] hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e3f1e8] text-[#2f6654]">
                          <Icon size={18} />
                        </span>
                        <p className="text-base font-medium text-[#2f5a4c]">{feature.name}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-t border-[#dcebe2] pt-7" delayMs={160}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a8e84]">{calmLine}</p>
          <h3 className="mt-2 text-3xl font-semibold text-[#24463a] md:text-4xl">Nhịp sống tại NHÀ TÔI</h3>

          <div className="mt-6 space-y-4">
            <p className="text-sm text-[#768c82]">Thành lập năm {establishedYear}</p>
            <p className="text-base text-[#3c6052]">Giờ mở cửa: {hours}</p>
            <div>
              <p className="text-base font-medium text-[#2f5f50]">Dịch vụ</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-[#e4f0ea] px-3 py-1 text-sm text-[#345d50]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 border-t border-[#dcebe2] pt-6" delayMs={220}>
          <h4 className="text-base font-semibold text-[#2f5f50]">Lưu ý</h4>
          <ul className="mt-3 space-y-2 text-base text-[#3c6052]">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
