/*
 * Get model email
 */
export class EmailModel {
	constructor(emailId ,type, title, content, important, starred) {
		this.type 			= type;
		this.title 			= title;
		this.content 		= content;
		this.important 	= important;
		this.starred 		= starred;
		this.emailId		= emailId;
		this.getId = function() {
			return emailId;
		};
	}

	/*
	 * Get email to DOM
	 */
	getEmail() {

		let tableBody = $("#view-all-email");
		let emailNode =
			`'<tr 	 id  =  ${this.getId()} 	>',
				'<td class = "email-id">			 ${this.getId()} 	</td>'
				'<td class = "email-important"> ${this.important} </td>'
				'<td class = "email-starred">	 ${this.starred} 	</td>'
				'<td class = "email-title">		 ${this.title} 		</td>'
				'<td class = "email-content">  ${this.content} 	</td>',
			'</tr>'`;
		tableBody.append(emailNode);
	}

	/*
	 * Get email titles
	 */
	getTitles() {

		let $viewAll = $('#view-all-email');
		let emailNode =
			`'<tr class   = "view-read"	 id = 	 ${this.id} 	>',
				'<td class = "email-id-read">			 ${this.id} 	</td>',
				'<td class = "email-type-read">	   ${this.type} 	</td>',
				'<td class = "email-title-read">	 ${this.title} 		</td>',
				'<td class = "email-content-read"> ${this.content} 	</td>',
			'</tr>'`;

		$viewAll.append(emailNode);
	}
}
