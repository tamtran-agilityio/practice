/**
 * Support to render email to json file
 * Use class and module of ES6
 * @author Tam Tran support by Viet Phan
 */

import { InboxEmail } from "./compoment/inbox-email";
import { ContentHandle } from "./event/content-handle";
import { SlideBar } from './event/slider-bar';


class App {
	constructor(type) {
		this.type = type;
	}
	emailView() {
		let inboxEmail = new InboxEmail();
		let slideBar 	 = new SlideBar();
		let content 	 = new ContentHandle();
		inboxEmail.inbox();
		slideBar.handleClick();
		content.onClickTitle();
		content.onClickTitles();
		content.onFilter();
	}
}

{
	let app = new App();
	app.emailView();
}
