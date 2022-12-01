import { component$, useStyles$, $, useClientEffect$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { TOC } from "~/components";
import { CallIcon, DownloadIcon } from "~/components/icon";
import Resume from "./resume";
import styles from "./index.less?inline";

/**
 * Page of Resume
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStyles$(styles);

	useClientEffect$(() => {
		import("html2pdf.js").then((m) => {
			window.html2pdf = m.default;
		});
	});

	const onDownload = $(() => {
		const element = document.getElementById("__resume_content_wrapper__");
		const html2pdf = window.html2pdf;
		if (!element || !html2pdf) return;
		// see https://github.com/eKoopmans/html2pdf.js?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#options
		html2pdf()
			.set({
				margin: [12, 8],
				filename: "吴青山的简历-前端开发工程师",
				image: {
					type: "jpeg",
					quality: 0.98,
				},
				// see https://html2canvas.hertzen.com/configuration
				html2canvas: {
					allowTaint: true,
					useCORS: true,
					backgroundColor: "#fff",
					logging: false,
				},
				// see https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
				jsPDF: {
					unit: "mm",
					format: "a4",
					orientation: "portrait",
					precision: 25,
					floatPrecision: 25,
				},
				pagebreak: { mode: "css" },
			})
			.from(element)
			.save();
	});

	return (
		<div class="content __resume__">
			<div class="banner">
				<div class="inner">
					<div class="left"></div>
					<div class="right">
						<a class="btn btn-default" href="/contact">
							<i class="icon">{CallIcon}</i>
							联系我
						</a>
						<a class="btn btn-primary" onClick$={onDownload}>
							<i class="icon">{DownloadIcon}</i>
							下载简历
						</a>
						<span class="download-cache">
							下载失败？
							<a
								class="btn btn-text"
								href="https://github.com/jonsam-ng/Portfolio/blob/master/public/asset/%E5%90%B4%E9%9D%92%E5%B1%B1%E7%9A%84%E7%AE%80%E5%8E%86-%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88.pdf"
								target="_blank"
							>
								从缓存下载
							</a>
						</span>
					</div>
				</div>
			</div>
			<TOC
				tocProps={{
					contentSelector: ".__resume__",
					headingSelector: "h2, h3",
					headingsOffset: 44,
					scrollSmoothOffset: -88,
				}}
			/>
			<div class="inner ac-content">
				<h2
					id="cover"
					style={{
						visibility: "hidden",
						width: "0px",
						height: "0px",
						margin: "0px",
					}}
				>
					封面
				</h2>
				<div class="cover pager">
					<div class="info">
						<p>
							<span>姓名：</span>吴青山
						</p>
						<p>
							<span>电话：</span>15829313329
						</p>
						<p>
							<span>邮箱：</span>jonsam.ng@foxmail.com
						</p>
						<p>
							<span>博客：</span>https://www.jonsam.site
						</p>
						<p>
							<span>主页：</span>https://portfolio.jonsam.site/
						</p>
					</div>
				</div>
				<div class="pager content" id="__resume_content_wrapper__">
					<Resume />
				</div>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "我的简历",
};
