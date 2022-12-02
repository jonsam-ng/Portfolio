import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ArrowRightIcon } from "~/components/icon";
import styles from "./index.less?inline";

export const Section = component$(
	({
		title,
		desc,
		img,
		containerStyles = {},
		dark = false,
		fullImg = false,
		imageStyles = {},
	}: {
		title: string;
		desc: string;
		img: string;
		containerStyles?: CSSStyleSheet;
		dark?: boolean;
		fullImg?: boolean;
		imageStyles?: any;
	}) => {
		useStylesScoped$(styles);

		return (
			<div
				class={`home-section ${dark ? "dark" : "light"}`}
				style={{ ...containerStyles }}
			>
				<p class="title">{title}</p>
				<p class="desc">{desc}</p>
				<div class="opt">
					<a class="btn btn-primary" href="/about">
						进一步了解
						<i class="icon">{ArrowRightIcon}</i>
					</a>
					<a class="btn btn-text chat" href="/resume">
						查看简历
						<i class="icon">{ArrowRightIcon}</i>
					</a>
					<a class="btn btn-text chat" href="/contact">
						联系我
						<i class="icon">{ArrowRightIcon}</i>
					</a>
				</div>
				<img
					alt="home banner"
					style={{ ...imageStyles }}
					class={`${fullImg ? "full" : ""}`}
					src={img}
				/>
			</div>
		);
	}
);

/**
 * Page of Home
 * @desc Inspirations from https://www.apple.com.cn/
 */
export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="content">
			<Section
				title="开拓"
				desc="向上生长，向下扎根"
				img="/asset/image/tree.webp"
				containerStyles={{ backgroundColor: "#fff" }}
			/>
			<Section
				title="延伸"
				desc="路漫漫，其修远兮"
				img="/asset/image/road.webp"
				dark={true}
				containerStyles={{ backgroundColor: "#000" }}
				fullImg={true}
			/>
			<Section
				title="分享"
				desc="开源开放，打破桎梏"
				img="/asset/image/egg.webp"
				containerStyles={{ backgroundColor: "#fff" }}
				imageStyles={{ width: "22%" }}
			/>
			<Section
				title="内省"
				desc="积水为溪，厚积薄发"
				img="/asset/image/river.webp"
				dark={true}
				containerStyles={{ backgroundColor: "#000" }}
				fullImg={true}
			/>
		</div>
	);
});

export const head: DocumentHead = {
	title: "首页",
};
