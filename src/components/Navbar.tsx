"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "私たちについて", href: "/about" },
  { name: "作品", href: "/works" },
  { name: "スタジオ", href: "/studio" },
  { name: "採用情報", href: "/recruit" },
  { name: "お問い合わせ", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300
        h-[72px] md:h-auto
        ${
          scrolled || isOpen
            ? "bg-studio-navy/95 backdrop-blur-md border-b border-white/5"
            : "bg-studio-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
        }
        md:py-6
        ${scrolled ? "md:py-4" : ""}
      `}
    >
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2"
            aria-label="星影アニメーション ホーム"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-studio-neon/50 bg-studio-neon/20 transition-colors group-hover:bg-studio-neon/40">
              <span className="font-jp font-bold text-white">星</span>
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate font-jp text-sm font-bold leading-none tracking-wider text-white sm:text-base md:text-lg md:tracking-widest">
                星影アニメーション
              </span>

              <span className="mt-1 hidden text-[8px] leading-none tracking-[0.15em] text-studio-gray min-[380px]:block md:text-[9px] md:tracking-[0.2em]">
                アニメーション制作スタジオ
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-widest transition-colors hover:text-studio-neon ${
                    isActive
                      ? "font-bold text-studio-neon"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center text-white md:hidden"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full bg-white transition-all duration-300 ${
                  isOpen ? "top-[9px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[9px] block h-0.5 w-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute bottom-0 left-0 block h-0.5 w-full bg-white transition-all duration-300 ${
                  isOpen ? "bottom-[9px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`fixed left-0 top-[72px] z-40 h-[calc(100dvh-72px)] w-full overflow-y-auto bg-studio-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 p-6 sm:p-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`border-b border-white/10 px-1 py-5 font-jp text-xl tracking-widest transition-colors ${
                  isActive
                    ? "text-studio-neon"
                    : "text-white hover:text-studio-neon"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}