/*
 * Class Email show email to
 * @param emaiId id of email
 * @param type of email
 * @param title name title of email
 * @param content of email
 * @param important there are email to important label
 * @param starred there are email to Starred label
 */

'use strict';

import { viewEmail } from "./view-email";

export class emailSend extends viewEmail {
	constructor(...args) {
		super(...args);
	}

	onEmailSend() {
		if (this.type === 'send') {
			let viewItem = new viewEmail(this.emailId, this.type, this.title, this.content, this.important, this.starred);
			return viewItem.getEmail();
		}
	}
}
