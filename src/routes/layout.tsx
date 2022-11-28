import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
	return (
		<>
			<main>
				<Header fixed={true} />
				<section class="page-content">
					<Slot />
				</section>
			</main>
		</>
	);
});
