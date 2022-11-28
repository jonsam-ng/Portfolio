import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { ArrowRightIcon } from "~/component/icon";
import styles from "./index.less?inline";

interface Props {
	imageSrc: string;
	imageHeight?: number;
	width?: number;
	title: string;
	detail: string;
	link: string;
	linkText?: string;
	LinkProps?: any;
	githubLink?: string;
}

export default component$((props: Props) => {
	const {
		imageSrc,
		imageHeight = 167,
		width = 300,
		title,
		detail,
		LinkProps = {},
		linkText = "去了解",
		link,
		githubLink,
	} = props;
	useStylesScoped$(styles);

	return (
		<div class="card" style={{ width: `${width}px` }}>
			<a
				class="album"
				style={{
					backgroundImage: `url(${imageSrc})`,
					height: `${imageHeight}px`,
				}}
				href={link}
				target="_blank"
				{...LinkProps}
			/>
			<div class="content">
				<h2>{title}</h2>
				<p>{detail}</p>
				<div class="opt">
					<a class="btn btn-primary" target="_blank" {...LinkProps} href={link}>
						{linkText}
						<i class="icon">{ArrowRightIcon}</i>
					</a>
					{githubLink && (
						<a class="btn btn-text" target="_blank" href={githubLink}>
							Github
							<i class="icon">{ArrowRightIcon}</i>
						</a>
					)}
				</div>
			</div>
		</div>
	);
});
