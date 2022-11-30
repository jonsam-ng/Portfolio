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
					feature: "小鱼易连、端内、H5",
					title: "客户端内嵌H5开发与维护",
					desc: "负责客户端视觉改版、组件、页面开发维护；负责端内通讯录、直播等项目升级重构。硬终端内部分H5页面开发。",
					img: "/asset/image/p-xy-client.png",
					key: "project-xy-client",
					link: "https://devcdn.xylink.com/xylink_website_doc/website_video/%E5%B0%8F%E9%B1%BC%E6%98%93%E8%BF%9EMac%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.pdf",
				},
				{
					feature: "小鱼易连、CRM系统、平台",
					title: "自研CRM平台",
					desc: "负责总代、直销、经销商、订单、报备预检等模块的开发和组件维护；支持高性能的表格编辑组件。",
					img: "/asset/image/p-crm.png",
					key: "project-crm",
				},
				{
					feature: "小鱼易连、教育、平台",
					title: "教育管理平台",
					desc: "负责消息通知、教师评价、巡课、监课、视频剪辑等模块的开发与维护。",
					img: "/asset/image/p-edu.png",
					key: "project-edu",
					link: "https://demo.xylinkedu.com/manage/#/Login",
				},
				{
					feature: "小鱼易连、企培、平台",
					title: "企培平台",
					desc: "负责证书管理等模块的开发与维护。",
					img: "/asset/image/p-qipei.png",
					key: "project-qipei",
				},
				{
					feature: "小鱼易连、教育、WebRTC",
					title: "课堂巡课、监课",
					desc: "巡课，即视频巡视各个课堂的上课情况，支持终端状态过滤、自动轮询、翻页、切换布局等；监课，即监察课堂会议状态，支持参与课堂、查看Content、听课轮询、翻页等。负责巡课重构工作。",
					img: "/asset/image/p-patrol.png",
					key: "project-patrol",
					link: "https://www.xylink.com/education/platform",
				},
				{
					feature: "小鱼易连、文档、平台、NextJS",
					title: "开发者平台",
					desc: "负责整个开发者平台管理后台的搭建、开发与维护工作；参与部分开发者平台前台的页面开发与维护。",
					img: "/asset/image/p-dev-platform.png",
					key: "project-dev-platform",
					link: "https://openapi.xylink.com/",
				},
				{
					feature: "小鱼易连、组件库、工具库",
					title: "内部组件库、工具库",
					desc: "负责内部组件库、工具库平台的搭建和部分模块的开发。",
					img: "/asset/image/p-component-tools.png",
					key: "project-component-tools",
				},
				{
					feature: "小鱼易连、日志、平台、EggJS",
					title: "日志分析平台",
					desc: "负责整个日志分析平台Node服务器的搭建、开发与维护工作；参与部分前台页面的开发与维护。",
					img: "/asset/image/p-dev-log.png",
					key: "project-dev-log",
				},
				{
					feature: "小鱼易连、Electron、WebRTC、SDK",
					title: "会议UI SDK Electron版本",
					desc: "负责 Electron UI SDK 开发与维护工作；参与部分WebRTC SDK的开发。",
					img: "/asset/image/p-electron-ui.png",
					key: "project-electron-ui",
					link: "https://openapi.xylink.com/common/meeting/download/description?platform=electron",
				},
			],
		},
		{
			id: "personal-project",
			title: ["接下来", "了解一下我的个人项目"],
			items: [
				{
					feature: "JavaScript、CS、DSA、Interview",
					title: "100 Days of JavaScript Enhancement",
					desc: "坚持100天，让您的JavaScript技能迈向新台阶💪！🧑‍💻👩‍💻👨‍💻",
					img: "/asset/image/p-100-day-of-js-enhance.png",
					key: "project-100-day-of-js-enhance",
					link: "https://100js.jonsam.site/",
					moreLink: "https://github.com/jonsam-ng/100-day-of-js-enhance",
				},
				{
					feature: "JavaScript、数据结构与算法、LeetCode",
					title: "Fancy DSA",
					desc: "数据结构与算法，LeetCode刷题笔记，算法成长之路。",
					img: "/asset/image/p-fancy-dsa.png",
					key: "project-fancy-dsa",
					link: "https://dsa.jonsam.site/",
					moreLink: "https://github.com/jonsam-ng/fancy-dsa",
				},
				{
					feature: "JavaScript、Web、源码",
					title: "Fancy Front End",
					desc: "前端源码精读，精读react、vue3源码。🧑‍💻👩‍💻👨‍💻",
					img: "/asset/image/p-fancy-front.png",
					key: "project-fancy-front-end",
					link: "https://source.jonsam.site/",
					moreLink: "https://github.com/jonsam-ng/fancy-front-end",
				},
				{
					feature: "个人主页",
					title: "Fu7ur3",
					desc: "Jonsam 的个人主页。🔥🔥🔥",
					img: "/asset/image/p-portfolio.png",
					key: "project-portfolio",
					link: "https://portfolio.jonsam.site/",
					moreLink: "https://github.com/jonsam-ng/Portfolio",
				},
			],
		},
	],
};

export default configs;
