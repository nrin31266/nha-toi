"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

type FaqProps = {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export default function Faq({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#f6fbf8] p-8 md:p-12">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.28em] text-[#4b7a66]">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#24463a] md:text-4xl">Câu hỏi thường gặp</h2>
        </Reveal>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delayMs={index * 70}>
                <article className="rounded-2xl border border-[#d5e6dd] bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-medium text-[#2a5044]">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {isOpen && <p className="px-5 pb-4 text-sm leading-6 text-[#46675b]">{faq.answer}</p>}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
