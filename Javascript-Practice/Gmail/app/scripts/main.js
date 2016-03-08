/**
 * Support to render email to json file
 * Use class and module of ES6
 * @author Tam Tran
 */

'use strict';

import { emailTo } from "./compoment/show-box";
import { emailSend } from "./compoment/show-send-email";

let response = {};

function run(taskDef) {
	let task = taskDef();
	let result = task.next();

	function step() {
		if (!result.done) {
			if (typeof result.value === "function") {
				result.value(function(err, data) {
					if (err) {
						result = task.throw(err);
						return;
					}

					result = task.next(data);
					step();
				});
			} else {
				result = task.next(result.value);
				step();
			}
		}
	}

	step();
}

/*
 * Get file json
 * @param url link path to file json
 */
class callJSON {

	constructor(url) {
		this.url = url;
	}

	setJSON() {
		let xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", this.url, true );
		xmlHttp.setRequestHeader("Content-type", this.url);

		xmlHttp.onreadystatechange = function() {
			if( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
				response = JSON.parse(xmlHttp.responseText);

				let data = [];
				let itemEmail = response['email'];

				for (let i = 0; i < itemEmail.length; i++) {
					data[i] = {
						id        : itemEmail[i]['emailId'],
						type 			: itemEmail[i]['type'],
						title 		: itemEmail[i]['title'],
						content 	: itemEmail[i]['content'],
						important : itemEmail[i]['important'],
						starred 	: itemEmail[i]['starred']
					}
				}

				for (let i = 0; i < itemEmail.length; i++) {

					let email = new emailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
							email.onEmail();
				}
			}
		}
		xmlHttp.send();
	}
}

run(function*() {
	let callJson = new callJSON('/data/data.json');
	callJson.setJSON('/data/data.json');
});
