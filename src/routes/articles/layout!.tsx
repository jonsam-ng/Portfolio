import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import {
	Header,
	Footer,
	SideBar,
	OnThisPage,
	ContentNav,
	Back2Top,
} from "~/components";
import styles from "./index.less?inline";
import "github-markdown-css/github-markdown-light.css";

export default component$(() => {
	useStyles$(styles);

	return (
		<div class="docs">
			<Header fixed={true} />
			<div class="inner ac-content">
				<main>
					<SideBar />
					<div class="docs-container markdown-body">
						<article>
							<Slot />
						</article>
						<ContentNav />
					</div>
					<OnThisPage />
				</main>
			</div>
			<Footer />
			<Back2Top />
		</div>
	);
});
