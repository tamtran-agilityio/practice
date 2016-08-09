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


class EmailUI {
	renderTemplate(emails) {
		return renderList(emails)
	}

	renderList(emails) {
		emails.forEach
			renderRow(email)
	}

	renderRow(email) {
		return html
	}
}

InboxEmail extends EmailUI {
	render() {
		Service.emailInbox(data =>
			<< array

			this.render(array)
		)
	}
}

SentEmail extends EmailUI {
	render() {
		Service.emailInbox(data =>
			<< array

			this.render(array)
		)
	}
}

button data-box="InboxEmail"
button data-box="SentEmail"

emailComp = new window[data-box]
emailComp.render()
