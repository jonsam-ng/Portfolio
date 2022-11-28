import { component$ } from "@builder.io/qwik";

interface Props {
	src: string;
	height?: number;
	width?: number;
	blurDeg?: number;
}

export default component$((props: Props) => {
	const { src, height = 180, width = 100, blurDeg = 0 } = props;
	return (
		<div
			style={{
				background: `url(${src})`,
				height: `${height}px`,
				backgroundSize: "cover",
				width: `${width}vw`,
				backgroundRepeatX: "repeat",
				filter: `blur(${blurDeg})`,
			}}
		></div>
	);
});
