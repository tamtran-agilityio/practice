/*
 * Get file json
 * @param url link path to file json
 */
import { EmailTo } from "./show-box";
import { ReadEmail } from "./read-email";

export class CallJson {

	constructor(url) {
		this.url = url;
	}

	getJson() {
		return new Promise((resolve, reject) => {
			let xmlHttp = new XMLHttpRequest();
			xmlHttp.open("GET", this.url, true);
			xmlHttp.setRequestHeader("Content-type", this.url);
			xmlHttp.onreadystatechange = () => {

				if (xmlHttp.readyState == 4 && xmlHttp.status === 200) {
					if (typeof callback == "function") {
						callback.apply(xmlHttp);
					}
					let data = [];
					let response = JSON.parse(xmlHttp.responseText);
					let itemEmail = response['email'];
					for (let i = 0; i < itemEmail.length; i++) {
						data[i] = {
							id: itemEmail[i]['emailId'],
							type: itemEmail[i]['type'],
							title: itemEmail[i]['title'],
							content: itemEmail[i]['content'],
							important: itemEmail[i]['important'],
							starred: itemEmail[i]['starred']
						}
					}
					resolve(data);
					for (let i = 0; i < data.length; i++) {
						let email = new EmailTo(data[i].id, data[i].type, data[i].title, data[i].content, data[i].important, data[i].starred);
							email.onEmail();
					}
					ReadEmail.viewRead();
				}
			}
			xmlHttp.send();
		});
	}
}
