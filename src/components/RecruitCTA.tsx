import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function RecruitCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-studio-navy">
      <div className="absolute inset-0 bg-[url('/abstract-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-r from-studio-black via-transparent to-studio-black" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <span className="tag-badge tag-badge-gold mb-6 inline-block">採用募集 2025</span>
          <h2 className="font-jp text-3xl md:text-5xl font-bold text-white tracking-widest leading-tight mb-6">
            新しい才能を、<br className="md:hidden" />
            世界が待っている。
          </h2>
          <p className="text-white/70 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-loose">
            星影アニメーションでは、共に次世代の映像表現を追求するクリエイターを募集しています。
            あなたの描く線が、誰かの心に消えない星を残すかもしれない。
          </p>
          <Link href="/recruit" className="inline-flex items-center justify-center px-10 py-4 bg-white text-studio-black font-bold tracking-widest text-sm hover:bg-studio-gold hover:text-white transition-all hover:scale-105">
            採用情報を見る
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
