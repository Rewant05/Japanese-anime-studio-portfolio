import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const team = [
  {
    name: "橘 浩一郎",
    role: "創設者・総監督",
    sub: "たちばな こういちろう",
    image: "/images/team-1.png",
  },
  {
    name: "藤原 咲",
    role: "キャラクターデザイナー",
    sub: "ふじわら さき",
    image: "/images/team-2.png",
  },
  {
    name: "黒崎 健太",
    role: "CGI ディレクター",
    sub: "くろさき けんた",
    image: "/images/team-3.png",
  },
  {
    name: "水瀬 凛",
    role: "アートディレクター",
    sub: "みなせ りん",
    image: "/images/team-4.png",
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-studio-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-jp text-3xl font-bold text-white tracking-widest">クリエイター</h2>
            <div className="h-px bg-white/10 flex-1 ml-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <ScrollReveal key={member.name} delay={idx * 150}>
              <div className="group cursor-pointer">
                <div className="aspect-square bg-studio-navy border border-white/5 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-black/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-0 h-px bg-studio-neon group-hover:w-8 transition-all duration-300 mb-2" />
                  </div>
                </div>
                
                <h4 className="font-jp text-lg font-bold text-white mb-1 group-hover:text-studio-neon transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-studio-gray tracking-widest mb-1">{member.sub}</p>
                <p className="text-sm text-white/50">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
