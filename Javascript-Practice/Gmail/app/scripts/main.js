/*global */
"use strict";

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
 * Class Email show email to DOM
 * @param emaiId id of email
 * @param type of email
 * @param title name title of
 */
class Email {
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

	getEmail() {
		console.log("DAAAAAAA", this.type);
		console.log("AAAAAAAAAA",this.emailId);
		let viewAll = '#view-all-email';
		let emailNode = $([
			'<tr data-id="', this.getId(), '">',
				'<td class = "email-id">', this.getId(), '</td>',
				'<td class = "type-name">', this.type, '</td>',
				'<td class = "email-title">', this.title, '</td>',
				'<td class = "email-content">', this.content, '</td>',
			'</tr>'
		].join(''));

		emailNode.appendTo($(viewAll));
	}
}

function getJSON(url) {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, true );
	xmlHttp.setRequestHeader("Content-type", url);

	xmlHttp.onreadystatechange = function() {
		if( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
			response = JSON.parse(xmlHttp.responseText);
			console.log(response);
			let data = [];
			let itemEmail = response['email'];
			for (var i = 0; i < itemEmail.length; i++) {
				data[i] = {
					id        : itemEmail[i]['emailId'],
					type 			: itemEmail[i]['type'],
					title 		: itemEmail[i]['title'],
					content 	: itemEmail[i]['content'],
					important : itemEmail[i]['important'],
					starred 	: itemEmail[i]['starred']
				}
			}
			console.log(data);
			for (var i = 0; i < itemEmail.length; i++) {
				let email = new Email(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
				email.getEmail();
			}
		}
	}
	xmlHttp.send();
}

run(function*() {
	getJSON('/data/data.json');
});

