import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { ArrowRightIcon, CallIcon, GithubIcon } from "~/components/icon";
import styles from "./index.less";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="opt">
			<a class="btn btn-primary resume" href="/resume">
				查看简历，了解更多
				<i class="icon">{ArrowRightIcon}</i>
			</a>
			<a class="btn btn-text" href="/contact">
				<i class="icon">{CallIcon}</i>
			</a>
			<a
				class="btn btn-text"
				target="_blank"
				href="https://github.com/jonsam-ng/"
			>
				<i class="icon">{GithubIcon}</i>
			</a>
		</div>
	);
});
