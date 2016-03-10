/*
 * Class manager email
 */

'use strict';

import { ViewEmail } from "./view-email";

export class Manager extends ViewEmail {
	constructor(...args) {
		super(...args);
	}

	static deleteEmail() {
		setTimeout(function() {
			let table = document.getElementById("tableEmail");
			let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
			for (let i = 0; i < rows.length; i++) {
				let row = table.rows[i];
				row.onkeypress = function(event){
					row.remove();
				};
			}
		}, 1000);
	}
}
