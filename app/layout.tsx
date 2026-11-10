import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import "@/styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Tokyo Quantum Gateway",
    template: "%s | Tokyo Quantum Gateway",
  },
  description:
    "Tokyo Quantum Gateway（TQG）のトップページ。施設紹介、お知らせ、イベント、アクセス、取材・報道に関するお問い合わせ。",
  applicationName: "Tokyo Quantum Gateway",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
