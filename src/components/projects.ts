import logoImg from "../assets/rei-green.png";
import selectraImg from "../assets/selectra/top2.png";
import artImg from "../assets/artful/hero.png";
import portfolioImg from "../assets/portfolio/hero.png";
import localizationImg from "../assets/localization/ab-testing.png";

type Project = {
  id: string;
  title: string;
  image: ImageMetadata;
  description: string[];
  link: string;
  tags: { mode: "primary" | "secondary"; name: string }[];
  slideLink?: string;
  hide?: boolean;
};

export const projects = [
  {
    id: "selectra",
    title: "Selectra.jp サービストップのリデザイン",
    image: selectraImg,
    description: [
      "ユーザビリティ向上のためにサービストップページのリデザインを実施",
      "回遊率アップを実現",
    ],
    link: "/projects/selectra",
    tags: [{ name: "Professional Work", mode: "primary" }],
  },
  {
    id: "portfolio",
    title: "ポートフォリオ",
    image: portfolioImg,
    description: [
      "UXデザインポートフォリオのためのUXデザイン",
      "デザインシステム作成およびアートディレクション",
    ],
    link: "/projects/portfolio",
    tags: [{ name: "Side Project", mode: "primary" }],
  },
  {
    id: "artful",
    title: "Artfull",
    image: artImg,
    description: ["アートギャラリーのためのモバイルアプリ"],
    link: "/projects/artful",
    tags: [{ name: "Side Project", mode: "primary" }],
  },
  {
    id: "localization",
    title: "日本語サイト向けリデザイン実例",
    image: localizationImg,
    description: [
      "日本語サイト向けにページのデザインを変更",
      "主に欧文・和文における行間の視覚的差異に着目しリサーチ・A/Bテストを実施",
    ],
    link: "/projects/localization",
    tags: [{ name: "Professional Work", mode: "primary" }],
  },
  {
    id: "logo",
    title: "グラフィック制作",
    image: logoImg,
    description: ["Blenderで3Dロゴタイプを作成"],
    link: "/projects/logo",
    tags: [{ name: "Graphics", mode: "primary" }],
    hide: true,
  },
] satisfies Project[];
