import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { CircleLeftIcon, CircleRightIcon } from "~/components/icon";
import styles from "./index.less";

interface Props {
	list: Section[];
	gliderProps: any;
}

interface Section {
	items: ProjectItem[];
	id: string;
	title: string[];
}

interface ProjectItem {
	feature: string;
	title: string;
	desc: string;
	img: string;
	style: any;
	key: string;
}

export default component$((props: Props) => {
	const { list = [], gliderProps = {} } = props;
	useStylesScoped$(styles);

	return (
		<div class={`content`}>
			{list.map((section) => {
				const { items, id, title = [] } = section;
				return (
					<div class={`section ${id}`} id={id}>
						<p class="title">
							<span>{title[0]}</span>，{title[1]}。
						</p>
						<div
							class="cards"
							window:onLoad$={() => {
								import("glider-js").then((m) => {
									const Glider = m.default;
									new Glider(document.querySelector(`.glider-${id}`), {
										dots: `.dots-${id}`,
										arrows: {
											prev: `.glider-prev-${id}`,
											next: `.glider-next-${id}`,
										},
										...gliderProps,
									});
								});
							}}
						>
							<div class="glider-contain">
								<div class={`glider-${id}`}>
									{items.map(
										({ feature, title, desc, img, style = {}, key }) => (
											<div>
												<a
													class="card"
													key={key}
													href={`/project/${key}`}
													target="_self"
													style={{ ...style, backgroundImage: `url(${img})` }}
												>
													<div class="info">
														<p class="feat">{feature}</p>
														<p class="title">{title}</p>
														{desc && <p class="desc">{desc}</p>}
													</div>
												</a>
											</div>
										)
									)}
								</div>

								<button
									aria-label="Previous"
									class={`glider-prev glider-prev-${id} btn`}
								>
									{CircleLeftIcon}
								</button>
								<button
									aria-label="Next"
									class={`glider-next glider-next-${id} btn`}
								>
									{CircleRightIcon}
								</button>
								<div role="tablist" class={`dots dots-${id}`}></div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
});
