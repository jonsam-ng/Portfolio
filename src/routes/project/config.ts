interface Topic {
	src: string;
	text: string;
	desc: string;
}

const configs: {
	topics: Topic[];
} = {
	topics: [
		{
			src: "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.15wdwxiurz0g.webp",
			text: "HTML5",
		},
		{
			src: "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.2d5zl8a61uvw.webp",
			text: "CSS3",
		},
		{
			src: "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.12xgd6ebr4v4.webp",
			text: "JavaScript",
		},
		{
			src: "https://source.jonsam.site/assets/img/react.svg",
			text: "React",
			link: "https://source.jonsam.site/react/index/",
		},
		{
			src: "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.f5ephrrt4kg.webp",
			text: "Vue3",
			link: "https://source.jonsam.site/vue3/index/",
		},
		{
			src: "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.3twdhhjlglk0.webp",
			text: "TypeScript",
			link: "https://source.jonsam.site/ts/index/",
		},
		{
			src: "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.323hkg7iyjw0.webp",
			text: "QianKun",
			link: "https://source.jonsam.site/qiankun/index/",
		},
		{
			src: "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.5a0eqf7b0u40.webp",
			text: "NodeJS",
		},
	],
};

export default configs;
