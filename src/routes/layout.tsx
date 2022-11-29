import { component$, Slot } from "@builder.io/qwik";
import Header from "../component/header";

export default component$(() => {
	return (
		<main>
			<Header fixed={true} />
			<Slot />
		</main>
	);
});
