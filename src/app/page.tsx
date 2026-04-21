import Image from "next/image";
import Slideshow from "@/components/Slideshow";
import MapCard from "@/components/MapCard";
import ContactForm from "@/components/ContactForm";
import { links } from "@/data/links";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden py-10 px-4
                     bg-gradient-to-b from-rose-50 via-amber-50 to-white">
      {/* 背景のキャラクター装飾（小さめ・本文寄り） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-[100%] top-[34%] w-20 h-20 opacity-40 sm:opacity-55 rotate-[-8deg]"
      >
        <Image
          src="/kyara/character1.jpg"
          alt=""
          fill
          sizes="80px"
          className="object-contain mix-blend-multiply"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 translate-x-[20%] top-[42%] w-20 h-20 opacity-40 sm:opacity-55 rotate-[10deg]"
      >
        <Image
          src="/kyara/character2.jpg"
          alt=""
          fill
          sizes="80px"
          className="object-contain mix-blend-multiply"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-[110%] top-[72%] w-16 h-16 opacity-35 rotate-[6deg]"
      >
        <Image
          src="/kyara/character2.jpg"
          alt=""
          fill
          sizes="64px"
          className="object-contain mix-blend-multiply"
        />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-sm mx-auto">

        {/* Hero Slideshow */}
        <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-rose-200/60">
          <Slideshow />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center px-2 mt-2">
          <div
            className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-lg bg-white"
            style={{ marginTop: "-48px" }}
          >
            <Image
              src="/icon/inohana-icon.png"
              alt="亥鼻祭アイコン"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>

          <h2 className="mt-3 text-2xl font-bold text-rose-900 tracking-wide">
            千葉大学亥鼻祭
          </h2>
          <p className="mt-1 text-xs text-rose-600 font-semibold tracking-wide">
            2026年10月31日（土）・11月1日（日）予定
          </p>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            千葉大学亥鼻祭のリンクとお問い合わせフォームです！
            <br />
            2026年の開催に向けて準備中！
            <br />
            千葉大学関係者の方、受験生、地域の方、医療に関心のある方など
            すべての来場者の皆さんにとってかけがえのないイベントになるよう準備を進めています！
          </p>
          <div className="mt-3 flex gap-2 flex-wrap justify-center">
            {["#亥鼻祭", "#千葉大学", "#2026"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Link Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center w-full bg-white/90 backdrop-blur border border-rose-100 rounded-2xl pl-3 pr-5 py-2.5 text-slate-800 font-semibold text-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <link.icon className="w-10 h-10 shrink-0" />
              <span className="flex-1 text-center pr-10">{link.label}</span>
              <span className="absolute right-4 text-slate-300 group-hover:text-rose-400 transition-colors">
                ⋮
              </span>
            </a>
          ))}

          {/* Map Card */}
          <MapCard />
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <footer className="mt-10 mb-2 text-center text-xs text-slate-500">
          © 2026 千葉大学亥鼻祭実行委員会
        </footer>

      </div>
    </main>
  );
}
