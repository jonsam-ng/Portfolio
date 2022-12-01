import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./resume.less";

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
			<section></section>

			<h2>
				<span>工作经历</span>
			</h2>
			<section id="working"></section>

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
