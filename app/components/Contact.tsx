import Reveal from "./Reveal";
import { Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

type SocialData = {
  facebook: string;
  instagram: string;
  zalo: string;
  tiktok: string;
};

type ContactProps = {
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
  social: SocialData;
};

export default function Contact({
  address,
  phone,
  email,
  hours,
  mapEmbedUrl,
  social,
}: ContactProps) {
  const mapsUrl = "https://www.google.com/maps/place/Nh%C3%A0+T%C3%B4i+-+Kem+D%E1%BB%ABa+Nh%C3%A0+T%C3%B4i/@15.8347381,108.3327962,1297m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31420d4f67be1dab:0x8bd99f22fb500467!8m2!3d15.8347381!4d108.3353711!16s%2Fg%2F11z49ssztq?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.28em] text-[#4b7a66]">Liên hệ</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#24463a] md:text-4xl">Tìm đường đến NHÀ TÔI</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl bg-[#f4f8f1] p-6">
              <span className="inline-flex items-center rounded-full bg-[#ffd67d] px-3 py-1 text-xs font-semibold text-[#684b0f]">
                Hotline 24/7
              </span>

              <div className="mt-5 space-y-4">
                <p className="flex items-start gap-2 text-[#24463a]">
                  <MapPin size={18} className="mt-1 shrink-0 text-[#2c6858]" />
                  <span>{address}</span>
                </p>
                <p className="flex items-center gap-2 text-[#24463a]">
                  <Phone size={18} className="text-[#2c6858]" />
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="text-[#1f6f5f]">
                    {phone}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-[#24463a]">
                  <Mail size={18} className="text-[#2c6858]" />
                  <a href={`mailto:${email}`} className="text-[#1f6f5f]">
                    {email}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-[#24463a]">
                  <Clock3 size={18} className="text-[#2c6858]" />
                  <span>{hours}</span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="rounded-full bg-[#1f6f5f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#19584b]"
                >
                  Gọi ngay
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#7da894] px-5 py-2.5 text-sm font-semibold text-[#285849] transition hover:bg-[#dcece3]"
                >
                  Chỉ đường
                </a>
              </div>

              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="mt-8 grid gap-3"
              >
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#2f5f50]">
                  <MessageCircle size={16} />
                  Gửi lời nhắn nhanh
                </p>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ tên"
                  className="rounded-xl border border-[#cadfd4] bg-white px-3 py-2.5 text-sm text-[#24463a] outline-none transition focus:border-[#79a791]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  className="rounded-xl border border-[#cadfd4] bg-white px-3 py-2.5 text-sm text-[#24463a] outline-none transition focus:border-[#79a791]"
                />
                <textarea
                  name="message"
                  placeholder="Lời nhắn"
                  rows={4}
                  className="rounded-xl border border-[#cadfd4] bg-white px-3 py-2.5 text-sm text-[#24463a] outline-none transition focus:border-[#79a791]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#264f43] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1c3e35]"
                >
                  <Send size={16} />
                  Gửi liên hệ
                </button>
              </form>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="social-pill">
                  Facebook
                </a>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="social-pill">
                  Instagram
                </a>
                <a href={social.zalo} target="_blank" rel="noopener noreferrer" className="social-pill">
                  Zalo
                </a>
                <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="social-pill">
                  TikTok
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="overflow-hidden rounded-2xl border border-[#d8e8df]">
              <iframe
                title="Bản đồ NHÀ TÔI"
                src={mapEmbedUrl}
                className="h-155 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
