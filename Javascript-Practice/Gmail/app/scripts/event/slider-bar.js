/*
 * Handle show email when click on slider bar
 */
import { InboxEmail } from '../compoment/inbox-email';
import { SentEmail } 	from '../compoment/send-email';

export class SlideBar {
	constructor(event) {
		this.event = event;
	}

	handleClick() {
		let $viewBox 		 = $('#btnBox'),
				$viewStarred = $('#btnStarred'),
				$viewSend 	 = $('#btnSend'),
				tableBody 	 = $("#view-all-email"),
				inboxEmail 	 = new InboxEmail(),
				sendEmail 	 = new SentEmail();

		/*
		 * Show email when click button box
		 */
		$viewBox.click(function() {
			event.preventDefault();
			tableBody.empty();
			inboxEmail.inbox();
		})

		/*
		 * Show email when click button starred
		 */
		$viewStarred.click(function() {
			event.preventDefault();
			tableBody.empty();
			inboxEmail.starred();
		})

		/*
		 * Show email when click button send
		 */
		$viewSend.click(function() {
			event.preventDefault();
			tableBody.empty();
			sendEmail.onSend();
		})
	}
}
