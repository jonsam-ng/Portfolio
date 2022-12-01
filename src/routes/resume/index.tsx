import { component$, useStyles$, $ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { TOC } from "~/components";
import { DownloadIcon } from "~/components/icon";
import Resume from "./resume";
import html2pdf from "html2pdf.js";
import styles from "./index.less?inline";

/**
 * Page of Resume
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStyles$(styles);

	const onDownload = $(() => {
		const element = document.getElementById("__resume_content_wrapper__");
		if (!element) return;
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
					// logging: false,
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
						<a class="btn btn-primary" onClick$={onDownload}>
							<i class="icon">{DownloadIcon}</i>
							下载简历
						</a>
					</div>
				</div>
			</div>
			<TOC
				tocProps={{
					contentSelector: ".__resume__",
					headingSelector: "h2, h3",
					headingsOffset: 44,
					scrollSmoothOffset: -48,
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
	title: "Resume",
};
