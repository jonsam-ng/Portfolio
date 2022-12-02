/*
 * @Author: jonsam jonsam.ng@foxmail.com
 * @Date: 2022-11-30 17:11:17
 * @LastEditors: jonsam jonsam.ng@foxmail.com
 * @LastEditTime: 2022-12-02 20:11:28
 * @FilePath: /portfolio/src/components/back2top/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div
			window:onLoad$={() => {
				//  see https://github.com/vfeskov/vanilla-back-to-top/blob/v7.2.1/OPTIONS.md
				import("vanilla-back-to-top").then((m) => {
					const { addBackToTop } = m.default;
					addBackToTop({
						diameter: 30,
						backgroundColor: "var(--primary-color)",
						textColor: "#fff",
						showWhenScrollTopIs: 100,
						zIndex: 999,
						scrollDuration: 300,
					});
				});
				import("ismobilejs").then((m) => {
					const isMobile = m.default;
					if (window) {
						window.isMobile = isMobile(window.navigator);
					}
				});
			}}
		></div>
	);
});
