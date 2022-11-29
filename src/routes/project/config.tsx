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
	projects: [
		{
			id: "working-project",
			title: ["现在", "了解一下我参与的项目"],
			items: [
				{
					feature: "端内、H5",
					title: "小鱼客户端内嵌H5开发与维护",
					desc: "负责客户端视觉改版、组件开发维护；负责端内多个项目升级重构",
					img: "/asset/image/p-xy-client.png",
					style: {},
					key: "project-xy-client",
				},
				{
					feature: "111",
					title: "222",
					desc: "333",
					img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-14-202209_GEO_CN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1661890731676",
					style: {},
					key: "2",
				},
				{
					feature: "111",
					title: "222",
					desc: "333",
					img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-14-202209_GEO_CN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1661890731676",
					style: {},
					key: "3",
				},
				{
					feature: "111",
					title: "222",
					desc: "333",
					img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-14-202209_GEO_CN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1661890731676",
					style: {},
					key: "4",
				},
			],
		},
	],
};

export default configs;
