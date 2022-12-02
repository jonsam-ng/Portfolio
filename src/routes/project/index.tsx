import {
	component$,
	useStylesScoped$,
	useClientEffect$,
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
	ArrowRightIcon,
	ResumeIcon,
	CallIcon,
	CircleLeftIcon,
	CircleRightIcon,
} from "~/components/icon";
import configs from "./config";
import { ProjectList, ADBanner } from "~/components";
import styles from "./index.less?inline";
/**
 * Page of Project
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStylesScoped$(styles);

	useClientEffect$(() => {
		// see https://nickpiscitelli.github.io/Glider.js/#usage
		if (!window) return;
		import("glider-js").then((m) => {
			const Glider = m.default;
			const { phone = false, tablet = false } = window.isMobile ?? {
				phone: false,
				tablet: false,
			};
			const [slidesToShow, slidesToScroll, scrollLock] = phone
				? [2, 1, true]
				: tablet
				? [4, 2, true]
				: [5, 2, false];
			new Glider(document.querySelector(".glider-topic"), {
				slidesToShow,
				slidesToScroll,
				draggable: true,
				scrollLock,
				dots: ".dots-topic",
				arrows: {
					prev: ".glider-prev-topic",
					next: ".glider-next-topic",
				},
			});
		});
	});

	return (
		<div class="content">
			<div class="banner">
				向开源与共享生长。
				<a class="btn btn-text" href="/project/open-source-plan">
					了解我的开源计划
					<i class="icon">{ArrowRightIcon}</i>
				</a>
			</div>
			<div class="ac-content">
				<div class="projects">
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
									<i class="icon-h call">{CallIcon}</i>
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
					<div class="topics" id="tech-tags">
						<div class="glider-contain">
							<div class="glider glider-topic">
								{configs.topics.map(({ src, text, desc, link }) => (
									<a class="card" key={text} href={link} target="_blank">
										<img src={src}></img>
										<p>{text}</p>
										{desc && <p>{desc}</p>}
									</a>
								))}
							</div>

							<button
								aria-label="Previous"
								class="glider-prev glider-prev-topic btn"
							>
								{CircleLeftIcon}
							</button>
							<button
								aria-label="Next"
								class="glider-next glider-next-topic btn"
							>
								{CircleRightIcon}
							</button>
							<div role="tablist" class="dots dots-topic"></div>
						</div>
					</div>
				</div>
				<ProjectList
					className="sections"
					list={configs.projects}
					gliderProps={{ draggable: true }}
				/>
				<ADBanner />
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "我的项目",
};
