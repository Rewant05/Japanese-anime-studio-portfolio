import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import Image from "next/image";

const works = [
  {
    id: "shadow-chronicles",
    title: "影見の少女",
    subtitle: "シャドウ・クロニクルズ",
    type: "テレビシリーズ",
    year: "2024",
    status: "放送中",
    description: "光と影が交差する街で、失われた記憶を探す少女のダークファンタジー。",
    color: "from-purple-900/40 to-studio-navy",
    image: "/images/works-shadow.png",
  },
  {
    id: "blue-horizon",
    title: "蒼色の終端",
    subtitle: "ビヨンド・ザ・ブルー",
    type: "劇場映画",
    year: "2023",
    status: "受賞作品",
    description: "果てなき空を目指した飛行士たちの、切なくも美しい群像劇。第47回日本アニメ大賞受賞作。",
    color: "from-blue-900/40 to-studio-navy",
    image: "/images/works-blue.png",
  },
  {
    id: "neon-samurai",
    title: "機巧ノ刃",
    subtitle: "ネオン・サムライ",
    type: "ウェブ配信",
    year: "2023",
    status: "完結",
    description: "サイバーパンクのネオトーキョーを舞台に、反逆のサイボーグ剣士が巨大企業に挑む。",
    color: "from-rose-900/40 to-studio-navy",
    image: "/images/works-neon.png",
  }
];

export default function WorksShowcase() {
  return (
    <section id="works" className="py-24 md:py-32 bg-studio-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-studio-neon" />
                <span className="text-studio-neon tracking-[0.3em] text-xs font-bold">注目の作品</span>
              </div>
              <h2 className="font-jp text-4xl md:text-5xl font-bold text-white tracking-widest">
                代表作
              </h2>
            </div>
            <Link href="/works" className="text-sm text-studio-gray hover:text-white transition-colors tracking-widest flex items-center gap-2">
              すべての作品 <span className="text-studio-neon">→</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {works.map((work, idx) => (
            <ScrollReveal key={work.id} delay={idx * 200}>
              <Link href={`/works#${work.id}`} className="block group">
                <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-sm mb-6">
                  <Image src={work.image} alt={work.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${work.color} mix-blend-overlay opacity-60 group-hover:opacity-20 transition-opacity duration-700`} />
                  <div className="absolute inset-0 border border-white/10 group-hover:border-studio-neon/50 transition-colors duration-500 z-10" />
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30 z-10" />
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/30 z-10" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/30 z-10" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="tag-badge border-white/20 text-white/80 mb-3 inline-block backdrop-blur-sm bg-black/20">
                      {work.status}
                    </span>
                    <p className="text-white/60 text-xs tracking-widest mb-1">{work.type} / {work.year}</p>
                  </div>
                </div>
                
                <h3 className="font-jp text-2xl font-bold text-white mb-2 group-hover:text-studio-neon transition-colors">
                  {work.title}
                </h3>
                <p className="text-xs text-studio-gray tracking-widest mb-4">{work.subtitle}</p>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                  {work.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
