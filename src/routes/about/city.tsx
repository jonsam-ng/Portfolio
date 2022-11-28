import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
	AlbumIcon,
	ArrowRightIcon,
	FamilyIcon,
	FootIcon,
	WorkIcon,
} from "~/component/icon";
import { ImagePinner } from "~/component";
import styles from "./section.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<section class="section city" id="city">
			<p class="name">城市足迹</p>
			<p class="future">未来与远方</p>
			<ul class="from">
				<li>
					<i class="icon">{FamilyIcon}</i>
					<span>信阳</span>
				</li>
				<li>
					<i class="icon">{WorkIcon}</i>
					<span>西安</span>
				</li>
				<li>
					<i class="icon">{FootIcon}</i>
					<span>成都</span>
				</li>
			</ul>
			<p class="slogan">未来？遇见哪座城市？</p>
			<div class="opt">
				<a
					class="btn btn-primary"
					target="_blank"
					href="https://www.jonsam.site/album/"
				>
					<i class="icon">{AlbumIcon}</i>
					查看图库
				</a>
				<a class="btn btn-text chat" href="/about/contact">
					与我交流
					<i class="icon">{ArrowRightIcon}</i>
				</a>
			</div>
			<ImagePinner src="/asset/image/skyline.png" />
		</section>
	);
});
