import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-studio-black">
      {/* Beautiful Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-studio-black">
        <Image 
          src="/images/hero-bg.png" 
          alt="Night sky background" 
          fill 
          className="object-cover opacity-40 mix-blend-screen scale-105 animate-[blob_20s_infinite_alternate]" 
          priority 
        />
        {/* Dynamic stars background */}
        <div className="absolute inset-0 stars-bg" />
        
        {/* Dynamic glowing orbs */}
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-studio-neon/30 rounded-full blur-[120px] animate-blob opacity-50" />
        <div className="absolute top-[30%] right-[10%] w-[45vw] h-[45vw] bg-studio-gold/20 rounded-full blur-[120px] animate-blob opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob opacity-50" style={{ animationDelay: '4s' }} />
        
        {/* Gradients and Grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-black/40 to-studio-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto mt-20 md:mt-0">
        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <p className="text-studio-neon tracking-[0.5em] uppercase text-xs md:text-sm mb-6 font-bold flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-studio-neon/50"></span>
            星影アニメーション制作スタジオ
            <span className="w-12 h-px bg-studio-neon/50"></span>
          </p>
        </div>
        
        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <h1 className="font-jp text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.1] tracking-widest mb-8 drop-shadow-2xl">
            夜空に刻む、<br />
            魂の<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-studio-gray to-studio-neon/80 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">物語。</span>
          </h1>
        </div>

        <div className="animate-slide-up opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
          <p className="text-white/70 text-sm md:text-lg tracking-widest max-w-3xl mx-auto leading-loose mb-14 font-light">
            妥協なきクオリティと、心を震わせるストーリー。<br className="hidden md:block" />
            星影アニメーションは、世界を魅了する次世代の映像体験を創り出します。
          </p>
        </div>

        <div className="animate-slide-up opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#works" className="group relative px-8 py-4 bg-white text-studio-black font-bold tracking-widest text-sm transition-all hover:bg-transparent hover:text-white w-full sm:w-auto overflow-hidden">
              <div className="absolute inset-0 bg-studio-neon transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                最新作を見る
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a href="#studio" className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold tracking-widest text-sm hover:bg-white/10 hover:border-white/50 transition-all w-full sm:w-auto backdrop-blur-sm">
              スタジオについて
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 animate-fade-in opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
        <span className="text-[9px] text-white/40 tracking-[0.4em] font-bold">下へスクロール</span>
        <div className="w-px h-16 bg-white/10 relative overflow-hidden">
          <div className="w-full h-1/2 bg-studio-neon absolute top-0 animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
      
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
