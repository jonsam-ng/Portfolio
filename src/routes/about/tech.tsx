import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { ArrowRightIcon } from "~/component/icon";
import { Card } from "~/component";
import configs from "./config";
import styles from "./section.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<section class="section tech ac-content" id="tech">
			<p class="title">有几把“刷子”？</p>
			<ul class="tech-list">
				{configs.techGroup.map((props) => (
					<Card key={props.title} {...props}></Card>
				))}
			</ul>
			<div class="opt">
				<a class="btn btn-primary" target="_blank" href="/resume">
					查看简历，了解更多
					<i class="icon">{ArrowRightIcon}</i>
				</a>
				<a class="btn btn-text chat" href="/project">
					查看项目
					<i class="icon">{ArrowRightIcon}</i>
				</a>
			</div>
		</section>
	);
});
