import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { MUIButton } from "~/integrations/react/mui";
import styles from "./index.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="ac-content">
			<div class="banner">
				<a class="name">Jonsam ng</a>
				<ul>
					<li>
						<MUIButton variant="contained">联系我</MUIButton>
					</li>
				</ul>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "About",
};
