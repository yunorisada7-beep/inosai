"use client";

import { useState, useEffect } from "react";
import { photos } from "@/data/photos";

const SLIDE_INTERVAL = 3000; // 切替間隔
const FADE_DURATION = 800;   // クロスフェード時間 (ms)

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  // 全画像をマウント時にプリロード（瞬間切替用キャッシュ作り）
  useEffect(() => {
    photos.forEach((p) => {
      const img = new Image();
      img.src = `/photo1/${encodeURIComponent(p)}`;
    });
  }, []);

  // 自動スライド
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setCurrent(i);
  };

  return (
    <div className="relative w-full h-60 bg-slate-800 overflow-hidden">
      {/* クロスフェード：全画像を重ねて、currentのみ opacity 1 */}
      {photos.map((p, i) => (
        <img
          key={p}
          src={`/photo1/${encodeURIComponent(p)}`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 pb-8">
        <h1
          className="text-2xl font-bold tracking-widest"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          千葉大学亥鼻祭
        </h1>
        <p
          className="text-xs mt-2 font-medium tracking-wider text-white/90"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
        >
          すべての人に、かけがえのない時間を
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            aria-label={`スライド ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background:
                i === current ? "white" : "rgba(255,255,255,0.4)",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
