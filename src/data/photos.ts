export type PhotoItem = {
  /** /public/photo2/ 配下のファイル名 */
  file: string;
  /** スライド下に表示するキャプション */
  caption: string;
};

export const photos: PhotoItem[] = [
  { file: "ステージ.jpg", caption: "ステージ" },
  { file: "ステージ企画 亥鼻ダンスサークル.jpg", caption: "ステージ企画 亥鼻ダンスサークル" },
  { file: "医学部企画 心エコー体験.png", caption: "医学部企画 心エコー体験" },
  { file: "大人気！ 縫合体験.png", caption: "大人気！ 縫合体験" },
  { file: "委員会VR・AR企画.jpg", caption: "委員会VR・AR企画" },
  { file: "委員会屋台.jpg", caption: "委員会屋台" },
  { file: "救命体験 C-TAT.jpg", caption: "救命体験 C-TAT" },
  { file: "縁日.jpg", caption: "縁日" },
];
