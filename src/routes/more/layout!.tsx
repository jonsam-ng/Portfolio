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

export default component$(() => {
	useStyles$(styles);

	return (
		<div class="docs">
			<Header fixed={true} />
			<div class="inner ac-content">
				<main>
					<SideBar />
					<div class="docs-container">
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
