/*
 * Load email to json
 */
import { ServiceEmail } from "../service/service-email";
export class SentEmail {

	constructor(type) {

		this.type = type;
	}

	/*
	 * Show email send
	 */
	onSend() {
		let email = new ServiceEmail();
		email.emailSend();
	}
}
