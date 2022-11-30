import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.less?inline";

export default component$(() => {
	useStylesScoped$(styles);
	return <div class="content">Home</div>;
});

export const head: DocumentHead = {
	title: "Home",
};
