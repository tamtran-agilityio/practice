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

export class viewEmail {

	constructor(emailId ,type, title, content, important, starred) {
		this.type 			= type;
		this.title 			= title;
		this.content 		= content;
		this.important 	= important;
		this.starred 		= starred;
		let id = emailId;
		this.getId = function() {
			return id;
		};
	}

	/*
	 * Get email to DOM
	 */
	getEmail() {
		let viewAll = '#view-all-email';
		let emailNode = $([
			'<tr data-id = "'									, this.getId(), 	'">',
				'<td class = "email-id">'				, this.getId(), 	'</td>',
				'<td class = "email-important">', this.important, '</td>',
				'<td class = "email-starred">'	, this.starred, 	'</td>',
				'<td class = "email-title">'		, this.title, 		'</td>',
				'<td class = "email-content">'	, this.content, 	'</td>',
			'</tr>'
		].join(''));

		emailNode.appendTo($(viewAll));
	}
}
