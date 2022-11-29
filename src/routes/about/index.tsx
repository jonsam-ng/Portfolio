import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { MessageIcon, DownloadIcon } from "~/component/icon";
import MeSection from "./me";
import CitySection from "./city";
import TechSection from "./tech";
import ReadingSection from "./reading";
import WritingSection from "./writing";
import { Quote } from "~/component";
import styles from "./index.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="content">
			<div class="banner">
				<div class="inner ac-content">
					<a class="avatar" href="https://github.com/jonsam-ng" target="_blank">
						<img
							art="avatar"
							src="https://avatars.githubusercontent.com/u/39360338?v=4"
						/>
						<span class="name">Jonsam NG</span>
					</a>
					<ul class="banner-right">
						<li class="download-resume">
							<a class="btn btn-default" href="/resume/download">
								<i class="icon">{DownloadIcon}</i> 下载简历
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
				bgSrc="https://reactresume.com/_next/static/media/testimonial.727a457a.webp"
				text="让有意义的事变得有趣，让有趣的事变得有意义！"
			/>
			<WritingSection />
			{/* <ImagePinner src="/asset/image/sfumo-nero.png" blurDeg="5px" /> */}
		</div>
	);
});

export const head: DocumentHead = {
	title: "About",
};
