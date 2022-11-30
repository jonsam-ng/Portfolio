import { component$, Slot } from "@builder.io/qwik";
import { Header, Footer, Back2Top } from "../components";

export default component$(() => {
	return (
		<main>
			<Header fixed={true} />
			<Slot />
			<Footer />
			<Back2Top />
		</main>
	);
});
