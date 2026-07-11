import ScrollReveal from "./ScrollReveal";

const processes = [
  {
    step: "01",
    title: "企画・脚本",
    en: "企画から脚本まで",
    desc: "核となるコンセプトを定義し、心を揺さぶる物語の骨格を構築します。オリジナル作品の創出において最も時間をかける工程です。"
  },
  {
    step: "02",
    title: "絵コンテ・演出",
    en: "絵コンテと演出設計",
    desc: "文字から映像への第一歩。カメラワーク、タイミング、キャラクターの感情の機微を緻密に計算し、映像の設計図を描きます。"
  },
  {
    step: "03",
    title: "作画・3DCG",
    en: "手描きと3DCGの融合",
    desc: "熟練の2Dアニメーターによる生命力溢れる手描きと、最先端の3DCG技術を融合させ、独自の映像美を生み出します。"
  },
  {
    step: "04",
    title: "撮影・VFX",
    en: "映像の仕上げと特殊効果",
    desc: "セル画、背景、3D、光やパーティクルなどの特殊効果を重ね合わせ、空気感や温度まで伝わる最終的な映像へと昇華させます。"
  }
];

export default function StudioProcess() {
  return (
    <section id="studio" className="py-24 md:py-32 bg-studio-navy relative border-y border-white/5">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-jp text-3xl md:text-5xl font-bold text-white tracking-widest mb-6">制作プロセス</h2>
            <p className="text-studio-gray text-sm md:text-base tracking-widest">制作パイプライン</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((p, idx) => (
            <ScrollReveal key={p.step} delay={idx * 150}>
              <div className="glass-panel p-8 h-full relative group hover:border-studio-neon/30 transition-colors duration-500">
                <span className="absolute -top-4 -left-4 text-5xl font-bold text-white/5 font-mono group-hover:text-studio-neon/10 transition-colors">
                  {p.step}
                </span>
                
                <h3 className="font-jp text-xl font-bold text-white mt-4 mb-2">{p.title}</h3>
                <p className="text-xs text-studio-neon tracking-widest mb-6">{p.en}</p>
                
                <div className="w-8 h-px bg-white/20 mb-6 group-hover:w-12 group-hover:bg-studio-neon transition-all duration-300" />
                
                <p className="text-sm text-white/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
