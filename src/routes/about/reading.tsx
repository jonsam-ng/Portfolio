import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { BookIcon, ArrowRightIcon, GithubIcon } from "~/component/icon";
import styles from "./section.less?inline";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<section class="section reading" id="reading">
			<div class="left">
				<div class="inner">
					<i class="book-icon">{BookIcon}</i>
					<h2>阅读，做更好的自己</h2>
					<div class="opt">
						<a
							class="btn btn-primary"
							target="_blank"
							href="https://ox.jonsam.site/"
						>
							查看我阅读的书籍
							<i class="icon">{ArrowRightIcon}</i>
						</a>
						<a
							class="btn btn-text"
							target="_blank"
							href="https://github.com/jonsam-ng/oxygen-space"
						>
							<i class="icon github">{GithubIcon}</i>
						</a>
					</div>
				</div>
			</div>
			<div class="right">
				<img src="https://ox.jonsam.site/img/logo.png" />
			</div>
		</section>
	);
});
