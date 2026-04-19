"use client";

import { ArrowUp, Camera, MessagesSquare, PlayCircle, RadioTower } from "lucide-react";
import { useEffect, useState } from "react";

type SocialData = {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  zalo: string;
  tiktok: string;
};

type FooterProps = {
  siteName: string;
  slogan: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  social: SocialData;
};

const footerLinks = [
  { id: "intro", label: "Giới thiệu" },
  { id: "corners", label: "Góc nhà" },
  { id: "menu", label: "Thức uống" },
  { id: "gallery", label: "Thư viện" },
  { id: "contact", label: "Liên hệ" },
];

export default function Footer({
  siteName,
  slogan,
  address,
  phone,
  email,
  mapEmbedUrl,
  social,
}: FooterProps) {
  const year = new Date().getFullYear();
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative mt-16 bg-[#17382f] px-4 py-12 text-[#e7f2ec] md:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em]">{siteName}</p>
          <p className="mt-3 text-sm leading-6 text-[#c9ded4]">{slogan}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#d6e9e0]">Liên kết nhanh</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {footerLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-left text-[#d5e7de] transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#d6e9e0]">Thông tin</p>
          <p className="mt-3 text-sm leading-6 text-[#d5e7de]">{address}</p>
          <a href={`tel:${phone.replace(/\s+/g, "")}`} className="mt-2 block text-sm text-[#e7f2ec]">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="mt-1 block text-sm text-[#e7f2ec]">
            {email}
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#d6e9e0]">Mạng xã hội</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="footer-link">
              <RadioTower size={14} className="mr-1 inline" />
              Facebook
            </a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">
              <Camera size={14} className="mr-1 inline" />
              Instagram
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="footer-link">
              <PlayCircle size={14} className="mr-1 inline" />
              YouTube
            </a>
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="footer-link">
              <MessagesSquare size={14} className="mr-1 inline" />
              Twitter
            </a>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-[#5f8f7c]">
            <iframe
              title="Bản đồ thu nhỏ"
              src={mapEmbedUrl}
              className="h-28 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-start justify-between gap-2 border-t border-[#355c4f] pt-5 text-sm text-[#d2e4dc] md:flex-row md:items-center">
        <p>© {year} {siteName}. All rights reserved.</p>
        <p>Designed with ❤️</p>
      </div>

      {showBackTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-4 z-60 inline-flex items-center gap-2 rounded-full border border-[#88b29f] bg-[#21473d] px-4 py-2 text-xs font-semibold text-[#e6f3ed] shadow-lg transition hover:bg-[#2a5a4e]"
        >
          <ArrowUp size={14} />
          Lên đầu trang
        </button>
      )}
    </footer>
  );
}
