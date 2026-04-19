import { Phone } from "lucide-react";

type FloatingCallButtonProps = {
  phone: string;
};

export default function FloatingCallButton({ phone }: FloatingCallButtonProps) {
  const phoneLink = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <a
      href={phoneLink}
      className="fixed bottom-5 right-4 z-60 inline-flex items-center gap-2 rounded-full bg-[#1f6f5f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1f6f5f]/35 transition hover:-translate-y-0.5 hover:bg-[#1a5d50]"
    >
      <Phone size={16} />
      Gọi ngay
    </a>
  );
}
