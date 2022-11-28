import { GithubIcon, HomeIcon } from "~/component/icon";

interface HeaderLink {
	text: string;
	to: string;
	icon?: string;
}

const configs: {
	links: HeaderLink[];
	socialLinks: HeaderLink[];
} = {
	links: [
		{
			text: "关于",
			to: "/about",
		},
		{
			text: "项目",
			to: "/project",
		},
		{
			text: "简历",
			to: "/resume",
		},
		{
			text: "联系",
			to: "/contact",
		},
	],
	socialLinks: [
		{
			text: "Github",
			to: "https://github.com/jonsam-ng/portfolio",
			icon: GithubIcon,
		},
		{
			text: "Blog",
			to: "https://www.jonsam.site",
			icon: HomeIcon,
		},
	],
};
export default configs;
