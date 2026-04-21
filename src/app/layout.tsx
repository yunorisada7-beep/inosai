import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "千葉大学亥鼻祭 | 公式リンク",
  description:
    "千葉大学亥鼻祭の公式リンクまとめページです。2026年10月31日（土）・11月1日（日）開催予定。",
  openGraph: {
    title: "千葉大学亥鼻祭 | 公式リンク",
    description:
      "千葉大学亥鼻祭の公式リンクまとめページです。2026年10月31日（土）・11月1日（日）開催予定。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.className} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
