import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="font-jp text-3xl font-bold text-white mb-12 tracking-widest text-center border-b border-white/10 pb-6">
          プライバシーポリシー
        </h1>
        
        <div className="space-y-8 text-white/70 text-sm leading-loose">
          <section>
            <h2 className="text-white font-bold mb-3">1. 個人情報の収集について</h2>
            <p>
              株式会社星影アニメーション（以下「当社」）は、お問い合わせ、採用へのご応募等に際して、
              氏名、メールアドレス、電話番号等の個人情報を収集することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold mb-3">2. 個人情報の利用目的</h2>
            <p>
              収集した個人情報は、以下の目的のみに使用いたします。<br />
              ・お問い合わせに対するご返答<br />
              ・採用選考および結果のご連絡<br />
              ・その他、正当な事業遂行に必要な範囲での利用
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold mb-3">3. 個人情報の第三者提供</h2>
            <p>
              当社は、法令に基づく場合を除き、ご本人の同意を得ることなく、
              個人情報を第三者に提供・開示することはいたしません。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold mb-3">4. お問い合わせ窓口</h2>
            <p>
              本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。<br />
              Email: contact@hoshikage-animation.jp
            </p>
          </section>
        </div>
      </ScrollReveal>
    </div>
  );
}
