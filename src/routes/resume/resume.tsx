import { component$, useStyles$ } from "@builder.io/qwik";
import { ExternalLinkIcon } from "~/components/icon";
import styles from "./resume.less";

export const LearnMore = component$(
	({
		link,
		self = false,
		text = "了解更多",
	}: {
		link: string;
		self?: boolean;
		text?: string;
	}) => {
		return (
			<a
				class="btn btn-text more"
				href={link}
				target={self ? "_self" : "_blank"}
			>
				{text}
				<i class="icon">{ExternalLinkIcon}</i>
			</a>
		);
	}
);

export default component$(() => {
	useStyles$(styles);

	return (
		<div class="content __resume_content__">
			<section id="common">
				<div class="album"></div>
				<div class="info">
					<h1>吴青山</h1>
					<p>
						<span>男</span>|<span>25岁</span>|<span>前端开发工程师</span>|
						<span>2年经验</span>|
						<span>
							<a href="https://portfolio.jonsam.site/resume/" target="_blank">
								线上简历
							</a>
						</span>
					</p>
				</div>
			</section>

			<h2 id="basic">
				<span>基本资料</span>
			</h2>
			<section>
				<ul>
					<li>
						<span class="key">姓名</span>吴青山
					</li>
					<li>
						<span class="key">出生年月</span>1997.09.23
					</li>
					<li>
						<span class="key">民族</span>汉族
					</li>
					<li>
						<span class="key">政治面貌</span>党员
					</li>
					<li>
						<span class="key">籍贯</span>
						<a
							href="https://map.baidu.com/@12701610.16,3760486.61,13z"
							target="_blank"
						>
							河南省信阳市
						</a>
					</li>
					<li>
						<span class="key">学历</span>本科
					</li>
					<li>
						<span class="key">电话</span>
						<a href="tel:15829313329" target="_blank">
							15829313329
						</a>
					</li>
					<li>
						<span class="key">邮箱</span>
						<a href="mailto:jonsam.ng@foxmail.com" target="_blank">
							jonsam.ng@foxmail.com
						</a>
					</li>
				</ul>
			</section>

			<h2 id="links">
				<span>个人链接</span>
			</h2>
			<section>
				<ul class="vertical mark">
					<li>
						<span class="key">主页</span>
						<a href="https://portfolio.jonsam.site/" target="_blank">
							https://portfolio.jonsam.site/
						</a>
					</li>
					<li>
						<span class="key">博客</span>
						<a href="https://www.jonsam.site" target="_blank">
							https://www.jonsam.site
						</a>
					</li>
					<li>
						<span class="key">GitHub</span>
						<a href="https://github.com/jonsam-ng" target="_blank">
							https://github.com/jonsam-ng
						</a>
					</li>
				</ul>
			</section>

			<h2 id="edu">
				<span>教育背景</span>
			</h2>
			<section>
				<div class="block">
					<p class="title">
						<span>
							<a href="https://www.xpu.edu.cn/" target="_blank">
								西安工程大学
							</a>
						</span>
						<span>软件工程（本科）</span>
						<span>2016.09-2020.07</span>
						{/* <span>
							<LearnMore link="https://portfolio.jonsam.site/about/edu" />
						</span> */}
					</p>
					<p>
						主修课程：Java语言程序设计、C语言程序设计、网络原理、数据库原理、数据结构、操作系统、算法设计、计算机组成原理、软件工程等。
					</p>
				</div>
			</section>

			<h2 id="career">
				<span>工作经历</span>
			</h2>
			<section id="working">
				<div class="block">
					<p class="title">
						<span>
							<a href="https://www.xylink.com/" target="_blank">
								小鱼易连
							</a>
						</span>
						<span>前端开发（业务部）</span>
						<span>2020.07-2022.10</span>
					</p>
					<ul class="vertical mark">
						<li>
							负责客户端产品内嵌H5公有云、私有云中部分模块的开发、重构、改版和维护工作。
						</li>
						<li>
							负责教育平台、CRM平台、企培平台等平台项目中部分模块的开发和维护工作。
						</li>
						<li>
							负责开发者平台、日志分析平台等内部平台项目中项目搭建、开发和上线工作。
						</li>
						<li>
							负责教育业务WebRTC巡课、监课业务的开发、重构和维护工作；参与Web
							Meeting和WebRTC SDK的开发。
						</li>
						<li>负责内部组件库、工具库的搭建、开发、推动工作。</li>
					</ul>
				</div>
			</section>

			<h2 id="skills">
				<span>专业技能</span>
			</h2>
			<section>
				<div class="block">
					<p class="title">
						<span>专业基础</span>
						<span>
							<LearnMore link="https://100js.jonsam.site" />
						</span>
					</p>
					<ul class="vertical mark">
						<li>
							掌握计算机组成原理、数据库、网络原理、浏览器渲染原理、数据结构与算法等专业知识。
						</li>
						<li>熟练掌握HTML5、CSS3和JavaScript和ES6。</li>
						<li>熟练使用Git、VSCode、NPM等开发工具。</li>
						<li>
							熟悉企业开发、测试、部署、上线流程和多环境部署，熟悉CI/CD流程。
						</li>
					</ul>
				</div>

				<div class="block">
					<p class="title">
						<span>框架与工具链</span>
						<span>
							<LearnMore link="https://source.jonsam.site" />
						</span>
					</p>
					<ul class="vertical mark">
						<li>
							熟练使用React和Vue视图框架，熟悉框架相关的工具和生态。曾精读React和Vue3响应式源代码。
							<span>
								<LearnMore
									link="https://source.jonsam.site/react/tour/index/"
									text="了解《React源码漂流记》"
								/>
							</span>
						</li>
						<li>熟悉Webpack、TypeScript等工具链。</li>
					</ul>
				</div>

				<div class="block">
					<p class="title">
						<span>更多技能</span>
					</p>
					<ul class="vertical mark">
						<li>
							熟悉微前端框架，曾阅读过Single-SPA和QianKun的源代码。
							<span>
								<LearnMore link="https://source.jonsam.site/qiankun/index/" />
							</span>
						</li>
						{/* <li>熟悉Hybrid H5、小程序、Electron应用开发。</li> */}
						<li>
							具有WebRTC音视频相关经验，曾参与巡课、Web Meeting等相关业务。
							<span>
								<LearnMore link="https://webrtc.jonsam.site/" />
							</span>
						</li>
						<li>
							具有工具库、组件库搭建和开发经验。
							<span>
								<LearnMore link="http://100js.jonsam.site/WEB/03-%E6%9E%84%E5%BB%BA%E7%BB%84%E4%BB%B6%E5%BA%93" />
							</span>
						</li>
						{/* <li>熟悉EggJS、NextJS框架等NodeJS框架应用。</li> */}
						<li>
							有团队协同、Code Review、团队分享的相关经验。
							<span>
								<LearnMore
									link="https://source.jonsam.site/slides/#/3"
									text="查看我的一次分享"
								/>
							</span>
						</li>
					</ul>
				</div>
			</section>

			<h2 id="projects">
				<span>项目经验</span>
			</h2>
			<section>
				<div class="block">
					<p class="title">
						<span>平台项目</span>
					</p>
					<ul class="vertical mark">
						<li>
							<span class="key">小鱼易连CRM平台</span>
							CRM平台是公司内部自研的客户关系管理系统，用于管理产品销售、客户代理等业务。我在项目中负责产品管理、报备预检、总代订单、直销订单等模块的开发以及可编辑表格等组件的维护。
						</li>
						<li>
							<span class="key">小鱼易连教育管理平台</span>
							教育管理平台是公司教育业务中面向教育课堂场景的平台产品。我在项目中负责教师评价、视频剪辑、巡课监课等模块的开发和维护。其中巡课监课模块使用WebRTC技术巡视、轮询课堂终端。我对巡课的重构工作解决了旧架构中存在的维护难、新功能兼容性差、线上事故多等诸多问题。
						</li>
						<li>
							<span class="key">小鱼易连企培平台</span>
							企培平台是公司推出的用于企业客户培训的项目。我在项目中负责重构证书管理模块。我对证书管理模块的重构工作使得模块在功能上支持了更复杂的证书编辑任务，如文本、图片、占位变量的编辑操作。
						</li>
						<li>
							<span class="key">小鱼易连开发者平台</span>
							开发者平台是公司的产品文档中心。我在项目中负责整个开发者中心后台管理项目的搭建、开发、部署与维护工作，其功能支持注册用户、权限、产品、场景、平台和文档管理等。同时也参与前台页面（NextJS）下载模块、旧文档内链迁移等工作。
						</li>
						<li>
							<span class="key">小鱼易连日志分析平台</span>
							日志分析平台是团队自驱项目，用于对WebRTC、Electron、CPP Meeting
							SDK多环境的日志文件提供会议信息分析支持。我在项目中负责Node服务器（EggJS）的开发和维护。同时也参与到会议详情等前台页面模块的开发。
						</li>
					</ul>
				</div>

				<div class="block">
					<p class="title">
						<span>基础设施</span>
					</p>
					<ul class="vertical mark">
						<li>
							<span class="key">小鱼易连客户端内嵌H5</span>
							客户端软终端H5是面向公有云、私有云等多云场景的云视频会议、会议周边的项目。我在项目中负责Hybrid
							H5多模块的风格改版升级和通讯录的开发与维护。其中我对通讯录模块的重构升级，解决了旧项目技术陈旧、结构混乱、性能瓶颈等问题。同时我也参与到软终端直播项目的重构工作，以及硬终端内嵌H5中文件夹等模块的开发。
						</li>
						<li>
							<span class="key">小鱼易连内部组件库、工具库</span>
							组件库和工具库是公司团队间推动的基础设施项目。组件库和工具库的项目搭建工作由我负责，其中针对DX体验支持了组件模板、组件预览、文档生成、单元测试、CI/CD等功能。同时，我也参与到一些基础业务组件、工具的开发。
						</li>
					</ul>
				</div>

				<div class="block">
					<p class="title">
						<span>音视频会议</span>
					</p>
					<ul class="vertical mark">
						<li>
							<span class="key">小鱼易连会议UI SDK Electron 版本</span>
							Electron UI SDK是公司推出的会议UI
							SDK的Electron版本。在项目中，我参与了账号登录、入会、会中等模块的开发，支持画面分页、画面布局等功能。同时在SDK层面，我曾参与到Electron
							SDK中CPP与JavaScript兼容层的部分接口开发，以及WebRTC
							SDK中巡课相关业务开发。
						</li>
						<li>
							<span class="key">小鱼易连教育巡课、监课业务</span>
							巡课、监课业务是教育场景与会议场景强关联的业务，在项目中我接手了项目的维护和巡课业务的重构工作。其中，巡课业务重构将旧架构和代码全部废弃，采用的全新的架构进行重写。重构项目上线后，线上故障减少，性能提升巨大，同时新功能的兼容性大大增强。
						</li>
					</ul>
				</div>
				<p>
					<span>
						<LearnMore
							link="https://portfolio.jonsam.site/project/"
							text="了解更多我参与的企业项目和个人项目"
						/>
					</span>
				</p>
			</section>

			<h2 id="cert">
				<span>证书荣誉</span>
			</h2>
			<section>
				<ul class="vertical mark">
					<li>大学英语四六级证书。</li>
				</ul>
			</section>

			<h2 id="me">
				<span>自我评价</span>
			</h2>
			<section>
				<ul class="vertical mark">
					<li>对新技术具有强烈的好奇心和敏锐力。</li>
					<li>善于提出问题，相比于“是什么”，更想知道“为什么”。</li>
				</ul>
			</section>

			<h2 id="future">
				<span>职业规划</span>
			</h2>
			<section>
				<ul class="vertical mark">
					<li>持续阅读源代码，提升技术的深度。</li>
					<li>参与社区与开源，分享与总结。</li>
				</ul>
			</section>
		</div>
	);
});
