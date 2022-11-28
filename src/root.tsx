import { component$, useStyles$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import globalStyles from "./global.less?inline";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	useStyles$(globalStyles);

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				></meta>
				<link rel="manifest" href="/manifest.json" />
				<link href="/favicon.png" rel="icon" sizes="any"></link>
				<RouterHead />
			</head>
			<body lang="zh-CN">
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
