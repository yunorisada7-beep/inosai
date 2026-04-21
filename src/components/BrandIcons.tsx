import type { SVGProps } from "react";

/* 公式ロゴ（公式ブランドガイド準拠の簡易SVG） */

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="ig-grad" cx="0.3" cy="1" r="1">
        <stop offset="0" stopColor="#FED576" />
        <stop offset="0.26" stopColor="#F47133" />
        <stop offset="0.61" stopColor="#BC3081" />
        <stop offset="1" stopColor="#4C63D2" />
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#ig-grad)" />
    <rect x="11" y="11" width="26" height="26" rx="7" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="32" cy="16" r="1.7" fill="#fff" />
  </svg>
);

/* Facebook 公式ロゴ — 円形 #1877F2 + 白 "f" */
export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="24" fill="#1877F2" />
    <path
      d="M33.4 24h-6.1v17h-7v-17h-4.4v-6h4.4v-3.6c0-3.5 2.1-7 7.5-7h4.5v5.7h-3.3c-1 0-2.2.5-2.2 2.2V18h5.7l-.5 6z"
      fill="#fff"
    />
  </svg>
);

/* YouTube 公式ロゴ — 白カード + 赤丸角四角 + 白再生三角 */
export const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="12" fill="#fff" />
    <path
      d="M42.6 17.4c-.45-1.7-1.78-3.04-3.47-3.5C36.07 13.1 24 13.1 24 13.1s-12.07 0-15.13.8c-1.7.46-3.02 1.8-3.47 3.5C4.6 20.5 4.6 24 4.6 24s0 3.5.8 6.6c.45 1.7 1.78 3.04 3.47 3.5 3.06.8 15.13.8 15.13.8s12.07 0 15.13-.8c1.7-.46 3.02-1.8 3.47-3.5.8-3.1.8-6.6.8-6.6s0-3.5-.8-6.6z"
      fill="#FF0000"
    />
    <path d="M20.1 30.1 30.5 24l-10.4-6.1v12.2z" fill="#fff" />
  </svg>
);

/* X (Twitter) 公式ロゴ — 黒カード + 白Xマーク */
export const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="12" fill="#000" />
    <path
      d="M28.94 12h4.49l-9.81 11.21L35.2 36h-9.04l-7.07-9.24L10.85 36H6.36l10.49-11.99L6 12h9.27l6.39 8.45L28.94 12zm-1.58 21.31h2.49L13.74 14.55H11.07l16.29 18.76z"
      fill="#fff"
    />
  </svg>
);

export const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="12" fill="#0EA5A4" />
    <circle cx="24" cy="24" r="11" fill="none" stroke="#fff" strokeWidth="2.4" />
    <ellipse cx="24" cy="24" rx="5" ry="11" fill="none" stroke="#fff" strokeWidth="2.4" />
    <line x1="13" y1="24" x2="35" y2="24" stroke="#fff" strokeWidth="2.4" />
  </svg>
);
