import RecruitCTA from "@/components/RecruitCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function RecruitPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="font-jp text-4xl md:text-5xl font-bold text-white mb-8 tracking-widest text-center">採用情報</h1>
        
        <div className="bg-studio-navy p-8 border border-white/5 mb-12">
          <h2 className="font-jp text-2xl font-bold text-white mb-6">2025年度 新卒・中途採用のご案内</h2>
          <p className="text-white/80 leading-relaxed mb-8">
            星影アニメーションでは、共に新しい映像表現を開拓していく仲間を募集しています。<br />
            アニメーションへの情熱と、妥協なきモノづくりへの姿勢を持つ方のご応募をお待ちしております。
          </p>
          
          <div className="space-y-6">
            {[
              { role: "アニメーター (2D/3D)", desc: "キャラクターアニメーション、エフェクト作画、3DCGレイアウト等" },
              { role: "背景美術・コンセプトアート", desc: "世界観の構築、背景画制作、設定画の作成" },
              { role: "制作進行・プロデューサー候補", desc: "プロジェクトの進行管理、スケジュール調整、予算管理" }
            ].map(job => (
              <div key={job.role} className="border-l-2 border-studio-neon pl-4">
                <h3 className="text-white font-bold mb-1">{job.role}</h3>
                <p className="text-sm text-white/60">{job.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-xs text-studio-gray mb-4">
              ※現在、応募フォームの準備中です。詳細についてはお問い合わせ窓口よりご連絡ください。
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-white/10 text-white text-sm hover:bg-studio-neon transition-colors">
              採用に関するお問い合わせ
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
