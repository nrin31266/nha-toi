"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Coffee, Home, Image as ImageIcon, Map, Menu, Phone, X } from "lucide-react";

type NavbarProps = {
  siteName: string;
};

const sections = [
  { id: "intro", label: "Giới thiệu", icon: Home },
  { id: "corners", label: "Góc nhà", icon: Map },
  { id: "menu", label: "Thức uống", icon: Coffee },
  { id: "gallery", label: "Thư viện", icon: ImageIcon },
  { id: "contact", label: "Liên hệ", icon: Phone },
] as const;

export default function Navbar({ siteName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  const goToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#d8e7df] bg-[#f8fbf8]/85 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-semibold tracking-[0.3em] transition ${
            isScrolled ? "text-[#20473b]" : "text-[#f5f4eb]"
          }`}
        >
          {siteName}
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {sections.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className={`relative pb-1 text-sm font-medium transition ${
                activeSection === item.id
                  ? isScrolled
                    ? "text-[#1f6f5f]"
                    : "text-[#f5f4eb]"
                  : isScrolled
                    ? "text-[#33544a] hover:text-[#1f6f5f]"
                    : "text-[#ecf2ee] hover:text-white"
              }`}
            >
              <span className="mr-1.5 inline-flex align-middle">
                <item.icon size={14} />
              </span>
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-[#d8f2d5] transition-transform duration-300 ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0"
                } ${isScrolled ? "bg-[#1f6f5f]" : "bg-[#f5f4eb]"}`}
              />
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition md:hidden ${
            isScrolled
              ? "border-[#9ac5b1] text-[#1f6f5f]"
              : "border-[#deefe7] text-[#f5f4eb]"
          }`}
          aria-label="Mở menu"
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/25 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-label="Đóng menu"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-[#f7fbf8] p-5 shadow-2xl md:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="font-semibold tracking-[0.18em] text-[#24463a]">{siteName}</p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-[#b5d2c3] p-2 text-[#1f6f5f]"
                  aria-label="Đóng menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className={`rounded-xl px-3 py-2 text-left text-sm transition ${
                      activeSection === item.id
                        ? "bg-[#d4ebde] text-[#1f6f5f]"
                        : "text-[#33544a] hover:bg-[#edf5f0]"
                    }`}
                  >
                    <span className="mr-2 inline-flex align-middle">
                      <item.icon size={15} />
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
