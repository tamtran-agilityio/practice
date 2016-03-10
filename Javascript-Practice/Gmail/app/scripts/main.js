/**
 * Support to render email to json file
 * Use class and module of ES6
 * @author Tam Tran support by Viet Phan
 */

'use strict';

import { ViewEmail } from "./compoment/view-email";
import { EmailTo } from "./compoment/show-box";
import { ReadEmail } from "./compoment/read-email";
import { CallJson } from "./compoment/call-api";
import { Manager } from "./compoment/manager-email";

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
				ViewEmail.getViewNull();
				let data = window.responseTest;
				for (let i = 0; i < data.length; i++) {
					let email = new EmailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
						email.onEmail();
				}
			ReadEmail.viewRead();
		})

		viewStarred.addEventListener("click", function()  {
			event.preventDefault();
			ViewEmail.getViewNull();
			let data = window.responseTest;
			for (let i = 0; i < data.length; i++) {
				let email = new EmailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
					email.onEmailStarred();
			}
			ReadEmail.viewRead();
		})

		viewSend.addEventListener("click", function()  {
			event.preventDefault();
			ViewEmail.getViewNull();
			let data = window.responseTest;
			for (let i = 0; i < data.length; i++) {
				let emailsent = new EmailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
					emailsent.onEmailSend();
			}
			ReadEmail.viewRead();
		})
	}
}

let app = new AppManager();
app.handleClick();

