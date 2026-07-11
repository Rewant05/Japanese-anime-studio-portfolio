import ScrollReveal from "@/components/ScrollReveal";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="font-jp text-3xl font-bold text-white mb-12 tracking-widest text-center border-b border-white/10 pb-6">
          利用規約
        </h1>
        
        <div className="space-y-8 text-white/70 text-sm leading-loose">
          <section>
            <h2 className="text-white font-bold mb-3">1. 適用範囲</h2>
            <p>
              本規約は、株式会社星影アニメーション（以下「当社」）が運営する
              ウェブサイト（以下「本サイト」）の利用条件を定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold mb-3">2. 著作権について</h2>
            <p>
              本サイトに掲載されているすべてのコンテンツ（テキスト、画像、動画、ロゴ等）の
              著作権は、当社または正当な権利を有する第三者に帰属します。
              無断での複製、転載、改変、商業利用を固く禁じます。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold mb-3">3. 免責事項</h2>
            <p>
              当社は、本サイトの情報の正確性および完全性について、いかなる保証も行うものではありません。
              本サイトの利用によって生じたいかなる損害についても、当社は一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold mb-3">4. 規約の変更</h2>
            <p>
              当社は、事前の予告なく本規約を変更できるものとします。
              変更後の規約は、本サイトに掲載された時点から効力を生じるものとします。
            </p>
          </section>
        </div>
      </ScrollReveal>
    </div>
  );
}
