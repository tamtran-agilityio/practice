/*
 * Handle show email when click on slider bar
 */
import { TitleEmail } from '../compoment/content';

export class ContentHandle {
	constructor(event) {
		this.event = event;
	}

	onClickTitle() {
		let viewTitle  = new TitleEmail();
		let $tableBody = $('#view-all-email');

		$('#tableEmail').delegate('tr', 'click', function() {
			$tableBody.empty();
			viewTitle.inboxTitle(this.id);
		});
	}

	onClickTitles() {
		$('#tableEmail').delegate('tr', 'contextmenu', function(e) {
			this.remove();
		});
	}
}
