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
						<a href="/"></a>
					</li>
					{headerConfigs.links.map(({ text, to }) => (
						<li key={text}>
							<a href={to}>{text}</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
});
