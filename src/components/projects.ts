import logoImg from "../assets/rei-green.png";
import selectraImg from "../assets/selectra.png";
import artImg from "../assets/art.png";

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
		id: "artful",
		title: "Artfull",
		image: artImg,
		description: "アートギャラリーのためのモバイルアプリ",
		link: "/artful",
		slideLink:
			"https://docs.google.com/presentation/d/e/2PACX-1vRMIEGfJQ1kB78RkgIkb4CMvSkwrH4vOvHc_ZGb0CITCZrb6j-fJbaQ5Gfbrbcw2Ttw6TRkqWcmo_b7/pub?start=false&loop=false&delayms=3000",
		tags: [
			{ name: "UI Design", mode: "primary" },
			{ name: "UX Design", mode: "secondary" },
		],
	},
	{
		id: "logo",
		title: "グラフィック制作",
		image: logoImg,
		description: "Blenderで3Dロゴタイプを作成",
		link: "/logo",
		tags: [{ name: "Graphics", mode: "primary" }],
	},
] satisfies Project[];
