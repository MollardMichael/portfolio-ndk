import logoImg from "../assets/rei-green.png";
import selectraImg from "../assets/selectra.png";
import artImg from "../assets/artful/art.png";

type Project = {
  id: string;
  title: string;
  image: ImageMetadata;
  description: string;
  link: string;
  tags: { mode: "primary" | "secondary"; name: string }[];
  slideLink?: string;
};

export const projects = [
  {
    id: "artful",
    title: "Artfull",
    image: artImg,
    description: "アートギャラリーのためのモバイルアプリ",
    link: "/projects/artful",
    tags: [
      { name: "UI Design", mode: "primary" },
      { name: "UX Design", mode: "secondary" },
    ],
  },
  {
    id: "portfolio",
    title: "ポートフォリオ",
    image: artImg,
    description:
      "UXデザインポートフォリオのためのUXデザイン・デザインシステム作成およびアートディレクション",
    link: "/projects/portfolio",
    tags: [{ name: "UI Design", mode: "primary" }],
  },
  {
    id: "localization",
    title: "日本語サイト向けリデザイン実例",
    image: artImg,
    description:
      "日本語サイト向けにページのデザインを変更・主に欧文・和文における行間の視覚的差異に着目しリサーチ・A/Bテストを実施",
    link: "/projects/localization",
    tags: [{ name: "UX Design", mode: "primary" }],
  },
  {
    id: "selectra",
    title: "料金比較のセレクトラ",
    image: selectraImg,
    description: "料金比較サイト「セレクトラ」のUI/UX改善",
    link: "/pdf/selectra.pdf",
    slideLink:
      "https://docs.google.com/presentation/d/e/2PACX-1vT33otSCt5AzZBM_MrFUYPOizabb0WLMtgY8ksN2ELSJW93j0Xpnl3WPIm-Ge1lwjFuBLC999h5NMEu/pub?start=false&loop=false&delayms=3000",
    tags: [{ name: "UX Design", mode: "secondary" }],
  },
  {
    id: "logo",
    title: "グラフィック制作",
    image: logoImg,
    description: "Blenderで3Dロゴタイプを作成",
    link: "/projects/logo",
    tags: [{ name: "Graphics", mode: "primary" }],
  },
] satisfies Project[];
