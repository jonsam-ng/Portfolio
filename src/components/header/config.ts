interface HeaderLink {
	text: string;
	to: string;
}

const configs: {
	links: HeaderLink[];
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
};
export default configs;
