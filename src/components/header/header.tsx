import { component$, useStylesScoped$ } from "@builder.io/qwik";
import headerConfigs from "./config";
import classnames from "classnames";
import styles from "./header.less?inline";

interface HeaderProps {
	fixed?: boolean;
}

export default component$((props: HeaderProps) => {
	const { fixed = false } = props;
	useStylesScoped$(styles);

	return (
		<header class={classnames({ fixed })}>
			<div class="ac-content header-content">
				<ul class="content-links">
					<li class="logo">
						<a href="/">
							<img alt="logo" src="/logo.png" />
							<h1>Portfolio</h1>
						</a>
					</li>
					{headerConfigs.links.map(({ text, to }) => (
						<li key={text}>
							<a href={to}>{text}</a>
						</li>
					))}
				</ul>
				<ul class="social-links">
					{headerConfigs.socialLinks.map(({ text, to, icon }) => (
						<li key={text}>
							<a href={to} target="_blank">
								<i class="icon" title={text}>
									{icon}
								</i>
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
});
