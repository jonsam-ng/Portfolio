import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="ac-content">
			<div class="banner">
				<a class="name">Jonsam ng</a>
				<ul>
					<li>
						<button class="btn btn-primary">联系我</button>
					</li>
				</ul>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "About",
};
