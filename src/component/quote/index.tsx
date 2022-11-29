import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QuoteIcon, HornIcon } from "~/component/icon";
import styles from "./index.less?inline";

interface Props {
	bgSrc?: string;
	text: string;
	height?: number;
}

export default component$((props: Props) => {
	const { bgSrc, text, height = 280 } = props;

	useStylesScoped$(styles);
	return (
		<div
			class="quote"
			style={{
				backgroundImage: bgSrc ? `url(${bgSrc})` : undefined,
				height: `${height}px`,
			}}
		>
			<div class="content">
				<i class="quote-icon up">{QuoteIcon}</i>
				<i class="icon horn-icon">{HornIcon}</i>
				{text}
				<i class="quote-icon down">{QuoteIcon}</i>
			</div>
		</div>
	);
});
