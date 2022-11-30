import { component$, useStyles$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Resume from "./resume";
import styles from "./index.less?inline";

/**
 * Page of Resume
 * @desc Inspirations from https://www.apple.com.cn/store/
 */
export default component$(() => {
	useStyles$(styles);

	return (
		<div class="content __resume__">
			<div class="inner ac-content">
				<div class="cover pager">
					<div class="info">
						<p>
							<span>姓名：</span>吴青山
						</p>
						<p>
							<span>电话：</span>15829313329
						</p>
						<p>
							<span>邮箱：</span>jonsam.ng@foxmail.com
						</p>
					</div>
				</div>
				<div class="pager content">
					<Resume />
				</div>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Resume",
};
