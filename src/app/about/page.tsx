import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="font-jp text-4xl md:text-5xl font-bold text-white mb-12 tracking-widest text-center">私たちについて</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="font-jp text-2xl text-studio-neon mb-4">星影アニメーションについて</h2>
            <p className="text-white/80 leading-loose tracking-wide">
              2018年設立。東京を拠点に活動するクリエイティブ・アニメーションスタジオ。<br />
              「夜空に刻む、魂の物語」を理念に掲げ、オリジナルアニメーションの企画・制作から、
              ハイクオリティなCG映像まで、幅広いエンターテインメントを提供しています。
            </p>
          </section>

          <section>
            <h2 className="font-jp text-2xl text-studio-neon mb-4">理念</h2>
            <div className="p-8 border border-white/10 bg-white/5 relative">
              <div className="absolute top-0 left-0 w-8 h-px bg-studio-neon" />
              <p className="font-jp text-xl text-white leading-relaxed mb-6">
                「見えない星の光を、映像として描き出す。」
              </p>
              <p className="text-white/70 leading-loose text-sm">
                私たちは、日常の影に隠れた感情や、言葉にできない想いをアニメーションという手法で世界に届けます。
                一つ一つのカットに魂を込め、観る人の人生に深く刻まれる作品を創り続けることが私たちの使命です。
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-jp text-2xl text-studio-neon mb-4">会社概要</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-8 border-t border-white/10 pt-4 text-sm">
              <dt className="text-white/50 tracking-widest">会社名</dt>
              <dd className="sm:col-span-2 text-white">株式会社 星影アニメーション</dd>
              
              <dt className="text-white/50 tracking-widest mt-4 sm:mt-0">設立</dt>
              <dd className="sm:col-span-2 text-white">2018年4月</dd>
              
              <dt className="text-white/50 tracking-widest mt-4 sm:mt-0">代表取締役</dt>
              <dd className="sm:col-span-2 text-white">橘 浩一郎</dd>
              
              <dt className="text-white/50 tracking-widest mt-4 sm:mt-0">事業内容</dt>
              <dd className="sm:col-span-2 text-white leading-relaxed">
                ・アニメーション映画・TVシリーズの企画・制作<br />
                ・3DCG映像の制作<br />
                ・キャラクターデザイン・コンセプトアート制作
              </dd>
            </dl>
          </section>
        </div>
      </ScrollReveal>
    </div>
  );
}
