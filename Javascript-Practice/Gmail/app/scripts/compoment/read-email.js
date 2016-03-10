/*
 * Class read email
 * @param emaiId id of email
 * @param type of email
 * @param title name title of email
 * @param content of email
 * @param important there are email to important label
 * @param starred there are email to Starred label
 */

'use strict';

import { ViewEmail } from "./view-email";
import { CallJson } from "./call-api";

let callJson = new CallJson('/data/data.json');
callJson.getJson().then(function(data) {
	window.responseTest = data;
}).catch(function() {
	window.responseTest = null;
});

export class ReadEmail {
	static viewRead() {
		let table = document.getElementById("tableEmail");
		let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
		setTimeout(function() {
			for (let i = 0; i < rows.length; i++) {
				let row = table.rows[i];
				row.onclick = function(event){
					let data = window.responseTest
					ViewEmail.getViewNull();
					for (let i = 0; i < data.length; i++) {
						if (data[i].id === this.id) {
							let viewAll = '#view-all-email';
							let emailNode = $([
								'<tr class   = "view-read"	 id = '		, this.id, 	'>',
									'<td class = "email-id-read">'			, this.id, 	'</td>',
									'<td class = "email-type-read">'	, data[i].type, 	'</td>',
									'<td class = "email-title-read">'		, data[i].title, 		'</td>',
									'<td class = "email-content-read">'	, data[i].content, 	'</td>',
								'</tr>'
								].join(''));

							emailNode.appendTo($(viewAll));
						}
					}
				};
			}
		}, 1000);
	}
}
