import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header";

export default component$(() => {
	return (
		<main>
			<Header fixed={true} />
			<Slot />
		</main>
	);
});
