/*
 * Load email box to json
 */
import { ServiceEmail } from "../service/service-email";
export class TitleEmail {

	constructor(id) {
		this.id = id;
	}

	/*
	 * Show email on box
	 */
	inboxTitle(id) {
		let email = new ServiceEmail();
		email.titleEmail(id);
	}
}
