import { component$, useStyles$ } from "@builder.io/qwik";
import { ExternalLinkIcon } from "~/components/icon";
import styles from "./resume.less";

export const LearnMore = component$(
	({ link, self = false }: { link: string; self?: boolean }) => {
		return (
			<a
				class="btn btn-text more"
				href={link}
				target={self ? "_self" : "_blank"}
			>
				了解更多<i class="icon">{ExternalLinkIcon}</i>
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
						<span>男</span>|<span>22岁</span>|<span>前端开发工程师</span>|
						<span>2年经验</span>
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
						<span class="key">GitHub</span>
						<a href="https://github.com/jonsam-ng" target="_blank">
							https://github.com/jonsam-ng
						</a>
					</li>
					<li>
						<span class="key">博客</span>
						<a href="https://www.jonsam.site" target="_blank">
							https://www.jonsam.site
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
						<span>
							<LearnMore link="/about/edu" />
						</span>
					</p>
					<p>
						主修课程：Java语言程序设计、C语言程序设计、网络原理、数据库原理、数据结构、操作系统、算法设计、计算机组成原理、软件工程等。
					</p>
				</div>
			</section>

			<h2>
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
						<span>2020.07-至今</span>
						<span>
							<LearnMore link="/project/?#working-project" />
						</span>
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
						<li>负责教育业务WebRTC巡课、监课业务的开发、重构和维护工作。</li>
						<li>负责内部组件库、工具库的搭建、开发、推动工作。</li>
					</ul>
				</div>
			</section>

			<h2 id="project">
				<span>专业技能</span>
			</h2>
			<section></section>

			<h2 id="project">
				<span>项目经验</span>
			</h2>
			<section></section>

			<h2 id="me">
				<span>自我评价</span>
			</h2>
			<section></section>
		</div>
	);
});
