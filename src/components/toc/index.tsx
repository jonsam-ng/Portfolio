import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./index.less?inline";

export default component$(({ tocProps = {} }: { tocProps: any }) => {
	useStyles$(styles);

	return (
		<nav
			class="toc toc-wrapper toc-right"
			window:onLoad$={() => {
				// see http://tscanlin.github.io/tocbot/#get-started
				import("tocbot").then((m) => {
					const tocbot = m.default;
					tocbot.init({
						tocSelector: ".toc",
						hasInnerContainers: false,
						ignoreHiddenElements: false,
						orderedList: false,
						...tocProps,
					});
				});
			}}
		></nav>
	);
});
