import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { CircleLeftIcon, CircleRightIcon } from "~/component/icon";
// import Glider from "glider-js";
import configs from "./config";
import styles from "./index.less";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="content working" id="working-projects">
			<h3 class="ac-content">现在，了解一下我参与的项目。</h3>
			<div
				class="cards"
				// window:onLoad$={() => {
				// 	// see https://nickpiscitelli.github.io/Glider.js/#usage
				// 	new Glider(document.querySelector(".glider"), {
				// 		slidesToShow: 5,
				// 		slidesToScroll: 2,
				// 		draggable: true,
				// 		dots: ".dots",
				// 		arrows: {
				// 			prev: ".glider-prev",
				// 			next: ".glider-next",
				// 		},
				// 	});
				// }}
			>
				<div class="glider-contain">
					<div class="glider">
						{configs.WorkingsTopics?.map(({ src, text, desc, link }) => (
							<a class="card" key={text} href={link} target="_blank">
								<img src={src}></img>
								<h3>{text}</h3>
								{desc && <p>{desc}</p>}
							</a>
						))}
					</div>

					<button aria-label="Previous" class="glider-prev btn">
						{CircleLeftIcon}
					</button>
					<button aria-label="Next" class="glider-next btn">
						{CircleRightIcon}
					</button>
					<div role="tablist" class="dots"></div>
				</div>
			</div>
		</div>
	);
});
