import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NHÀ TÔI | Giữa thiên nhiên, có nhà, có hồ",
  description:
    "NHÀ TÔI là không gian sinh thái yên bình tại Nghệ An với hồ nước, vườn cây, góc check-in và thức uống từ thiên nhiên.",
  keywords: [
    "NHÀ TÔI",
    "du lịch sinh thái",
    "địa điểm check-in Nghệ An",
    "quán sân vườn TP Vinh",
  ],
  openGraph: {
    title: "NHÀ TÔI",
    description: "Giữa thiên nhiên, có nhà, có hồ.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
