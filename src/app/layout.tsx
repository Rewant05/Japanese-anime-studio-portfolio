import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "星影アニメーション | アニメーション制作スタジオ",
  description: "東京を拠点とするアニメーション制作スタジオ。夜空に刻む、魂の物語を世界へ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="font-sans bg-studio-black text-white antialiased selection:bg-studio-neon/30 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
