import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
	IdeaIcon,
	ThinkIcon,
	TeaIcon,
	ArrowRightIcon,
	GithubIcon,
} from "~/component/icon";
import styles from "./section.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<section class="section writing" id="writing">
			<div class="inner">
				<p class="w1">文字与生活 • 最</p>
				<p class="w2">不可辜负</p>
				<ul class="list">
					<li>
						<i class="icon">{IdeaIcon}</i>
						<span>灵感</span>
					</li>
					<li>
						<i class="icon">{ThinkIcon}</i>
						<span>想法</span>
					</li>
					<li>
						<i class="icon">{TeaIcon}</i>
						<span>体验</span>
					</li>
				</ul>
				<div class="opt">
					<a
						class="btn btn-primary more"
						target="_blank"
						href="https://sunshine.jonsam.site/"
					>
						了解更多
						<i class="icon">{ArrowRightIcon}</i>
					</a>
					<a
						class="btn btn-text github"
						target="_blank"
						href="https://github.com/jonsam-ng/Sunshine"
					>
						<i class="icon">{GithubIcon}</i>
					</a>
				</div>
			</div>
		</section>
	);
});
