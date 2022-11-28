import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { ArrowRightIcon } from "~/component/icon";
import styles from "./index.less?inline";

interface Props {
	src: string;
	imageHeight?: number;
	width?: number;
	title: string;
	detail: string;
	link: string;
	linkText?: string;
	LinkProps?: any;
}

export default component$((props: Props) => {
	const {
		src,
		imageHeight = 167,
		width = 323,
		title,
		detail,
		LinkProps = {},
		linkText = "去了解",
		link,
	} = props;
	useStylesScoped$(styles);

	return (
		<div class="card" style={{ width: `${width}px` }}>
			<a
				class="album"
				style={{
					backgroundImage: `url(${src})`,
					height: `${imageHeight}px`,
				}}
				href={link}
				target="_blank"
				{...LinkProps}
			/>
			<div class="content">
				<h2>{title}</h2>
				<p>{detail}</p>
				<a class="btn btn-primary" target="_blank" {...LinkProps} href={link}>
					{linkText}
					<i class="icon">{ArrowRightIcon}</i>
				</a>
			</div>
		</div>
	);
});
