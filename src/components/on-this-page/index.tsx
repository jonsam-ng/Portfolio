import { useContent } from "@builder.io/qwik-city";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./index.less?inline";

const OnThisPage = component$(() => {
	useStyles$(styles);

	const { headings } = useContent();
	const contentHeadings =
		headings?.filter((h) => h.level === 2 || h.level === 3) || [];

	return (
		<aside class="on-this-page">
			{contentHeadings.length > 0 ? (
				<>
					<h6>本页内容</h6>
					<ul>
						{contentHeadings.map((h) => (
							<li key={h.id}>
								<a
									href={`#${h.id}`}
									class={{
										block: true,
										indent: h.level > 2,
									}}
								>
									{h.text}
								</a>
							</li>
						))}
					</ul>
				</>
			) : null}
		</aside>
	);
});

export default OnThisPage;
