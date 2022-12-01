import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { MessageIcon, DownloadIcon } from "~/components/icon";
import MeSection from "./me";
import CitySection from "./city";
import TechSection from "./tech";
import ReadingSection from "./reading";
import WritingSection from "./writing";
import { Quote } from "~/components";
import styles from "./index.less?inline";

/**
 * Page of About
 * @desc Inspirations from https://www.apple.com.cn/mac/
 */
export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="content">
			<div class="banner">
				<div class="inner ac-content">
					<a class="avatar" href="https://github.com/jonsam-ng" target="_blank">
						<img art="avatar" src="/asset/image/avatar.gif" />
						<span class="name">Jonsam NG</span>
					</a>
					<ul class="banner-right">
						<li class="download-resume">
							<a class="btn btn-default" href="/resume/">
								<i class="icon">{DownloadIcon}</i> 查看简历
							</a>
						</li>
						<li class="contact">
							<a class="btn btn-primary" href="/contact">
								<i class="icon">{MessageIcon}</i> 联系我
							</a>
						</li>
					</ul>
				</div>
			</div>
			<MeSection />
			<CitySection />
			<TechSection />
			<ReadingSection />
			<Quote
				bgSrc="/asset/image/quote-bg.jpeg"
				text="让有意义的事变得有趣，让有趣的事变得有意义！"
			/>
			<WritingSection />
			{/* <ImagePinner src="/asset/image/sfumo-nero.png" blurDeg="5px" /> */}
		</div>
	);
});

export const head: DocumentHead = {
	title: "关于我",
};
