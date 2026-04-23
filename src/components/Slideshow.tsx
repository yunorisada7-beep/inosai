"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { photos } from "@/data/photos";

const SLIDE_INTERVAL = 4000; // 切替間隔
const FADE_DURATION = 600;   // クロスフェード時間 (ms)
const SWIPE_THRESHOLD = 40;  // スワイプ判定の最小距離 px

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 全画像をマウント時にプリロード
  useEffect(() => {
    photos.forEach((p) => {
      const img = new Image();
      img.src = `/photo2/${encodeURIComponent(p.file)}`;
    });
  }, []);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % photos.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + photos.length) % photos.length),
    []
  );
  const goTo = (i: number) => setCurrent(i);

  // 自動スライド（再生中のみ）
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [isPlaying, next]);

  // タッチスワイプ（スマホ）
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full">
      {/* 写真エリア（オーバーレイ・テキストなし） */}
      <div
        className="relative w-full h-60 bg-slate-100 overflow-hidden select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {photos.map((p, i) => (
          <img
            key={p.file}
            src={`/photo2/${encodeURIComponent(p.file)}`}
            alt={p.caption}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === current ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* キャプション（写真より少し遅れて浮かび上がる） */}
      <div className="px-4 pt-4 pb-2 text-center min-h-[3.5rem]">
        <h3
          key={current}
          className="text-base font-bold text-slate-800 leading-snug"
          style={{
            opacity: 0,
            animation: "captionFadeIn 0.7s ease-out 0.5s forwards",
          }}
        >
          {photos[current].caption}
        </h3>
      </div>

      {/* コントロール：矢印 / ドット / 再生 */}
      <div className="flex items-center justify-center gap-4 pb-4 px-4">
        <button
          aria-label="前のスライド"
          onClick={prev}
          className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:bg-rose-100 active:bg-rose-200 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
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
                  i === current ? "#e11d48" /* rose-600 */ : "rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          aria-label="次のスライド"
          onClick={next}
          className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:bg-rose-100 active:bg-rose-200 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          aria-label={isPlaying ? "停止" : "再生"}
          onClick={() => setIsPlaying((p) => !p)}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-slate-200 text-rose-500 hover:bg-rose-50 active:bg-rose-100 transition-colors shadow-sm"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes captionFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
