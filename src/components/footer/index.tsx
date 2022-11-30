import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { GithubIcon, HomeIcon } from "../icon";
import styles from "./index.less";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<footer class="footer">
			<div class="inner ac-content">
				<ul>
					<li title="github">
						<a
							class="btn tbn-text"
							target="_blank"
							href="https://github.com/jonsam-ng/"
						>
							<i class="icon">{GithubIcon}</i>
						</a>
					</li>
					<li title="blog">
						<a
							class="btn tbn-text"
							target="_blank"
							href="https://www.jonsam.com"
						>
							<i class="icon">{HomeIcon}</i>
						</a>
					</li>
				</ul>
				<p class="copyright">
					Made by
					<a class="btn btn-text" href="https://www.jonsam.com" target="_blank">
						@jonsam-ng
					</a>
					with ❤️ license at MIT.
				</p>
			</div>
		</footer>
	);
});
