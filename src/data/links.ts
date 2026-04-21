import type { ComponentType, SVGProps } from "react";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  XIcon,
  GlobeIcon,
} from "@/components/BrandIcons";

export type LinkItem = {
  label: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const links: LinkItem[] = [
  { label: "公式HP", url: "https://inohanafes.com/", icon: GlobeIcon },
  { label: "Instagram", url: "https://www.instagram.com/inosaipr", icon: InstagramIcon },
  {
    label: "X（旧Twitter）",
    url: "https://x.com/inosaiPR",
    icon: XIcon,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/inohanasai",
    icon: FacebookIcon,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@%E5%8D%83%E8%91%89%E5%A4%A7%E5%AD%A6%E4%BA%A5%E9%BC%BB%E7%A5%AD2025",
    icon: YouTubeIcon,
  },
];

/* Google マップは独立カードで表示するためここには含めない */
export const mapUrl =
  "https://www.google.com/maps/place/%E5%8D%83%E8%91%89%E5%A4%A7%E5%AD%A6+%E4%BA%A5%E9%BC%BB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9/@35.6046657,140.130481,17z";
