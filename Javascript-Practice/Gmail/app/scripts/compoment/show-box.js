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

export class emailTo extends viewEmail {

	constructor(...args) {
		super(...args);
	}

	/*
	 * Get all email on box to email to
	 */
	onEmail() {
		if (this.type === 'box') {
			let viewItem = new viewEmail(this.emailId, this.type, this.title, this.content, this.important, this.starred);
			return viewItem.getEmail();
		}
	}

	/*
	 * Get email on box to email to get starred label
	 */
	onEmailStarred() {
		if (this.type === 'box' && this.important === 'true') {
			let viewItem = new viewEmail(this.emailId, this.type, this.title, this.content, this.important, this.starred);
			return viewItem.getEmail();
		}
	}
}

