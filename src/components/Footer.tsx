import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-studio-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-studio-neon/20 flex items-center justify-center border border-studio-neon/50">
                <span className="font-jp font-bold text-white">星</span>
              </div>
              <div className="flex flex-col">
                <span className="font-jp font-bold text-white tracking-widest text-lg leading-none">星影アニメーション</span>
                <span className="text-[10px] text-studio-gray tracking-[0.2em] mt-1 leading-none">アニメーション制作スタジオ</span>
              </div>
            </Link>
            <p className="text-studio-gray/80 text-sm leading-relaxed max-w-sm mb-6">
              夜空に刻む、魂の物語。<br />
              東京を拠点に、世界を魅了するハイクオリティな2D/3Dアニメーションを制作しています。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest text-xs mb-6">サイトマップ</h4>
            <ul className="space-y-3">
              {[{ name: '私たちについて', href: '/about' }, { name: '作品', href: '/works' }, { name: 'スタジオ', href: '/studio' }, { name: '採用情報', href: '/recruit' }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-studio-gray hover:text-studio-neon text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-xs mb-6">法務・お問い合わせ</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-studio-gray hover:text-studio-neon text-sm transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-studio-gray hover:text-studio-neon text-sm transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-studio-gray hover:text-studio-neon text-sm transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-studio-gray/50 tracking-wider">
            &copy; {new Date().getFullYear()} 株式会社 星影アニメーション 全著作権所有。
          </p>
          <div className="flex gap-4">
            {/* Fictional social links */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-studio-gray hover:text-white hover:bg-studio-neon/50 transition-all">
              <span className="sr-only">ツイッター</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-studio-gray hover:text-white hover:bg-studio-neon/50 transition-all">
              <span className="sr-only">ユーチューブ</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
