/*
 * Load email box to json
 */
import { ServiceEmail } from "../service/service-email";
export class InboxEmail {

	constructor(type) {

		this.type = type;
	}

	/*
	 * Show email on box
	 */
	inbox() {
		let email = new ServiceEmail();
		email.emailInbox();
	}

	/*
	 * Show email starred on box
	 */
	starred() {
		let email = new ServiceEmail();
		email.emailStar();
	}
}
