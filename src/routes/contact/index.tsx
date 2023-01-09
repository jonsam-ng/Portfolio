import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { MailIcon, CallIcon } from "~/components/icon";
import styles from "./index.less?inline";

/**
 * Page of Contact
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="content">
			<div class="banner">
				<div class="left">
					<p class="title">联系我</p>
					<p class="detail">您可以通过邮件或者电话随时随地与我沟通。</p>
				</div>
				<div class="right">
					<img src="/asset/image/contact.png" />
				</div>
			</div>
			<div class="info">
				<ul>
					<li>
						<i class="icon">{MailIcon}</i>
						<a href="mailto:jonsam.ng@foxmail.com" target="_blank">
							jonsam.ng@foxmail.com
						</a>
					</li>
					<li>
						<i class="icon">{CallIcon}</i>
						<a href="tel:15829313329" target="_blank">
							15829313329
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "联系我",
};
