import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.less";

interface Props {
	src: string;
	height?: number;
	width?: number;
	blurDeg?: number;
}

export default component$((props: Props) => {
	const { src, height = 180, width = 100, blurDeg = 0 } = props;
	useStylesScoped$(styles);

	return (
		<div
			class="pinner"
			style={{
				background: `url(${src})`,
				height: `${height}px`,
				width: `${width}vw`,
				filter: `blur(${blurDeg})`,
			}}
		></div>
	);
});
