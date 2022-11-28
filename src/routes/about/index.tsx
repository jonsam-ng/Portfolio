import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { MessageIcon } from "~/components/icons";
import styles from "./index.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="ac-content">
			<div class="banner">
				<a class="avatar">
					<img
						art="avatar"
						src="https://avatars.githubusercontent.com/u/39360338?v=4"
					/>
					<span class="name">Jonsam NG</span>
				</a>
				<ul class="banner-right">
					<li class="contact">
						<button class="btn btn-primary">
							<i class="icon">{MessageIcon}</i> 联系我
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "About",
};
