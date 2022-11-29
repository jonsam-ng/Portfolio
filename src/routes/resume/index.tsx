import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.less?inline";

/**
 * Page of Resume
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStylesScoped$(styles);

	return <div class="content">Resume</div>;
});

export const head: DocumentHead = {
	title: "Resume",
};
