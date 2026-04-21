import { MapPin } from "lucide-react";
import { mapUrl } from "@/data/links";

export default function MapCard() {
  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* 埋め込みマップ */}
      <div className="relative w-full h-48">
        <iframe
          title="千葉大学亥鼻キャンパス"
          src="https://www.google.com/maps?q=35.6046657,140.130481&hl=ja&z=17&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* 住所情報 */}
      <div className="px-5 py-4 text-center">
        <p className="font-semibold text-slate-800 text-sm">
          千葉大学亥鼻キャンパス
        </p>
        <p className="mt-1 text-xs text-slate-500 flex items-center justify-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-rose-500" />
          〒260-0856 千葉県千葉市中央区亥鼻1-8-1
        </p>
        <span className="inline-block mt-3 text-xs font-medium text-white bg-rose-500 hover:bg-rose-600 transition-colors px-4 py-1.5 rounded-full">
          ルートを表示
        </span>
      </div>
    </a>
  );
}
