import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocIcon, ArrowRightIcon } from "~/components/icon";
import { ImagePinner } from "~/components";
import styles from "./section.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<section class="section me" id="me">
			<p class="name">Jonsam ng</p>
			<p class="career">前端开发者</p>
			<p class="tech">使用 React、Vue、TypeScript、Nodejs 技术。</p>
			<p class="slogan">开源、分享和进步</p>
			<div class="opt">
				<a class="btn btn-primary" href="/resume">
					<i class="icon">{DocIcon}</i>
					查看简历
				</a>
				<a class="btn btn-text" href="/about/detail">
					进一步了解
					<i class="icon">{ArrowRightIcon}</i>
				</a>
			</div>
			<ImagePinner src="/asset/image/computer.jpeg" />
		</section>
	);
});
