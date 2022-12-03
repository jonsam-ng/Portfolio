import { component$, Slot } from "@builder.io/qwik";
import { Header, Footer, Back2Top } from "../components";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<main class="">
			<Header fixed={true} />
			<Slot />
			<Footer />
			<Back2Top />
		</main>
	);
});

export const head: DocumentHead<EndpointData> = ({ head }) => {
	return {
		title: `${head.title} | fu7ur3`,
	};
};
