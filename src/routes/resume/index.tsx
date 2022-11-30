import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.less?inline";

/**
 * Page of Resume
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="content">
			<div class="inner ac-content">
				<div
					class="cover pager"
					style={{ backgroundImage: `url(/asset/image/cover.png)` }}
				>
					<div></div>
				</div>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Resume",
};
