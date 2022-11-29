import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
	ArrowRightIcon,
	ResumeIcon,
	CallIcon,
	CircleLeftIcon,
	CircleRightIcon,
} from "~/component/icon";
import Glider from "glider-js";
import configs from "./config";
import WorkingSection from "./working";
import styles from "./index.less?inline";
/**
 * Page of Project
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="content">
			<div class="banner">
				向开源与共享生长。
				<a class="btn btn-text" href="/project/open-source-plan">
					了解我的开源计划
					<i class="icon">{ArrowRightIcon}</i>
				</a>
			</div>
			<div class="projects ac-content">
				<div class="detail">
					<div class="left">
						<span class="title">我的技术标签</span>
						<p class="p1">
							<span class="s1">与社区共同成长，</span>
							<span class="s2">技术终究会过时，</span>
						</p>
						<p class="p2">但思想永远不会。</p>
					</div>
					<div class="right">
						<ul>
							<li>
								<i class="icon-h">{ResumeIcon}</i>
								<div class="item">
									<p class="q">查看简历？</p>
									<a class="btn btn-text" href="/resume">
										去查看
										<i class="icon">{ArrowRightIcon}</i>
									</a>
								</div>
							</li>
							<li>
								<i class="icon-h">{CallIcon}</i>
								<div class="item">
									<p class="q">想要了解更多？</p>
									<a class="btn btn-text" href="/contact">
										联系我
										<i class="icon">{ArrowRightIcon}</i>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div
					class="topics"
					id="tech-tags"
					window:onLoad$={() => {
						// see https://nickpiscitelli.github.io/Glider.js/#usage
						if (!window) return;
						new Glider(document.querySelector(".glider"), {
							slidesToShow: 5,
							slidesToScroll: 2,
							draggable: true,
							dots: ".dots",
							arrows: {
								prev: ".glider-prev",
								next: ".glider-next",
							},
						});
					}}
				>
					<div class="glider-contain">
						<div class="glider">
							{configs.topics.map(({ src, text, desc, link }) => (
								<a class="card" key={text} href={link} target="_blank">
									<img src={src}></img>
									<h3>{text}</h3>
									{desc && <p>{desc}</p>}
								</a>
							))}
						</div>

						<button aria-label="Previous" class="glider-prev btn">
							{CircleLeftIcon}
						</button>
						<button aria-label="Next" class="glider-next btn">
							{CircleRightIcon}
						</button>
						<div role="tablist" class="dots"></div>
					</div>
				</div>
			</div>
			<WorkingSection />
		</div>
	);
});

export const head: DocumentHead = {
	title: "Project",
};
