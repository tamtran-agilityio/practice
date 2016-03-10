/**
 * Support to render email to json file
 * Use class and module of ES6
 * @author Tam Tran support by Viet Phan
 */

'use strict';

import { viewEmail } from "./compoment/view-email";
import { emailTo } from "./compoment/show-box";
import { emailSend } from "./compoment/show-send-email";
import {CallJson } from "./compoment/call-api";

let callJson = new CallJson('/data/data.json');
var dataTest = window.responseTest;
callJson.getJson().then(function(data) {
	window.responseTest = data;
	console.log("Test",data );
}).catch(function() {
	window.responseTest = null;
});

class AppManager extends CallJson {
	constructor(...args) {
		super(...args);
	}

	handleClick() {
		let viewBox 		= document.getElementById('btnBox');
		let viewStarred = document.getElementById('btnStarred');
		let viewSend 		= document.getElementById('btnSend');

		viewBox.addEventListener("click", function()  {
			event.preventDefault();
				var tableBody = document.getElementById("view-all-email");
				tableBody.innerHTML = "";
				let data = window.responseTest;
				for (let i = 0; i < data.length; i++) {
					let email = new emailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
						email.onEmail();
				}
		})

		viewStarred.addEventListener("click", function()  {
			event.preventDefault();
			var tableBody = document.getElementById("view-all-email");
			tableBody.innerHTML = "";
			let data = window.responseTest;
			for (let i = 0; i < data.length; i++) {
				let email = new emailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
					email.onEmailStarred();
			}
		})

		viewSend.addEventListener("click", function()  {
			event.preventDefault();
			var tableBody = document.getElementById("view-all-email");
			tableBody.innerHTML = "";
			let data = window.responseTest;
			for (let i = 0; i < data.length; i++) {
				let emailsent = new emailSend(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
					emailsent.onEmailSend();
			}
		})
	}
}

let app = new AppManager();
app.handleClick();

