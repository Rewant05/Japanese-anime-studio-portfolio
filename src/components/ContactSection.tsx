"use client";

import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section className="py-24 bg-studio-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="font-jp text-3xl font-bold text-white tracking-widest mb-4">お問い合わせ</h2>
              <p className="text-studio-gray text-sm mb-12">
                作品制作のご依頼、取材、採用に関するお問い合わせは、<br className="hidden sm:block" />
                こちらのフォームよりお願いいたします。
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white/60 text-xs tracking-widest mb-2">所在地</h4>
                  <p className="text-white font-jp text-sm leading-relaxed">
                    〒150-0000<br />
                    東京都渋谷区神宮前X-X-X<br />
                    星影ビルディング 4F
                  </p>
                </div>
                <div>
                  <h4 className="text-white/60 text-xs tracking-widest mb-2">一般お問い合わせ</h4>
                  <p className="text-white font-mono text-sm">contact@hoshikage-animation.jp</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-6 glass-panel p-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest text-white/60 mb-2">貴社名・お名前</label>
                <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-studio-neon transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest text-white/60 mb-2">メールアドレス</label>
                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-studio-neon transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest text-white/60 mb-2">お問い合わせ内容</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-studio-neon transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-white text-studio-black font-bold tracking-widest text-sm py-4 hover:bg-studio-neon hover:text-white transition-colors">
                送信する
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
