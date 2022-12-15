import {
	component$,
	useStyles$,
	useContextProvider,
	useStore,
} from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { GlobalStore, SiteStore } from "./context";
import globalStyles from "./global.less?inline";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	useStyles$(globalStyles);

	const store = useStore<SiteStore>({
		headerMenuOpen: false,
		sideMenuOpen: false,
	});

	useContextProvider(GlobalStore, store);

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<meta name="keywords" content="jonsam,jonsam ng,个人主页,简历" />
				<meta name="description" content="jonsam的个人主页" />
				<link rel="manifest" href="/manifest.json" />
				<link href="/favicon.ico" rel="icon" sizes="any"></link>
				<RouterHead />
			</head>
			<body
				lang="zh-CN"
				class={{
					"header-open": store.headerMenuOpen,
					"menu-open": store.sideMenuOpen,
				}}
			>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
