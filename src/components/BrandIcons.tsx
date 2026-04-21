import type { SVGProps } from "react";

/* 公式ブランドアセットに基づくSVGロゴ */

/* Instagram (Meta公式 Glyph) */
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

/* Facebook 公式 "f" Logo (Meta Brand Hub準拠) */
export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M48 24C48 10.7452 37.2548 0 24 0S0 10.7452 0 24C0 35.9789 8.7754 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2246 45.908 48 35.9789 48 24Z"
      fill="#1877F2"
    />
    <path
      d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.6002 28.68 15.75 31.6613 15.75H34.6875V9.84375S31.9406 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7344 48.0972 25.2656 48.0972 27.75 47.7084V30.9375H33.3422Z"
      fill="#fff"
    />
  </svg>
);

/* YouTube 公式 Icon (YouTube Brand Resources準拠) */
export const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="12" fill="#fff" />
    <path
      d="M42.05 16.55a4.71 4.71 0 0 0-3.32-3.33C35.79 12.43 24 12.43 24 12.43s-11.79 0-14.73.79a4.71 4.71 0 0 0-3.32 3.33A49.27 49.27 0 0 0 5.16 24a49.27 49.27 0 0 0 .79 7.45 4.71 4.71 0 0 0 3.32 3.33c2.94.79 14.73.79 14.73.79s11.79 0 14.73-.79a4.71 4.71 0 0 0 3.32-3.33A49.27 49.27 0 0 0 42.84 24a49.27 49.27 0 0 0-.79-7.45z"
      fill="#FF0000"
    />
    <path d="M20.16 30.16 30.04 24l-9.88-6.16v12.32z" fill="#fff" />
  </svg>
);

/* X (旧Twitter) 公式 Logo (X Brand Toolkit準拠) */
export const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="12" fill="#000" />
    <path
      d="M27.27 21.62 37.32 10h-2.38l-8.72 10.1L19.26 10H10.8l10.54 15.27L10.8 38h2.38l9.21-10.66L29.74 38h8.46L27.27 21.62zm-3.26 3.78-1.07-1.52L14.04 11.79h3.66l6.84 9.74 1.07 1.52 8.91 12.69h-3.66l-7.25-10.34z"
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
