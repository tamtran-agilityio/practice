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
		// let viewItem		= document.getElementById('item');

		viewBox.addEventListener("click", function()  {
			event.preventDefault();
			let count = document.getElementById("view-all-email").rows.length;
			for (var i = 0; i <= count -1; i++) {
				document.getElementById("table").deleteRow(i);
				if (count === 0) {
					return;
				}
			}
			let data = window.responseTest;
			localStorage.clear();
			for (let i = 0; i < data.length; i++) {
				let email = new emailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
					email.onEmail();
			}
		})

		viewStarred.addEventListener("click", function()  {
			event.preventDefault();
			let data = window.responseTest;
			let count = document.getElementById("view-all-email").rows.length;
			while (count > 0) {
				document.getElementById("table").deleteRow(0);
				if (count === 0) {
					return;
				}
			}
			for (let i = 0; i < data.length; i++) {
				let email = new emailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
					email.onEmailStarred();
			}
		})

		viewSend.addEventListener("click", function()  {
			event.preventDefault();
			let data = window.responseTest;
			let count = document.getElementById("view-all-email").rows.length;
			while (count > 0) {
				document.getElementById("table").deleteRow(0);
				if (count === 0) {
					return;
				}
			}
			for (let i = 0; i < data.length; i++) {
				let emailsent = new emailSend(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
					emailsent.onEmailSend();
			}
		})
	}
}

let app = new AppManager();
app.handleClick();

