/*
 * Get file json
 * @param url link path to file json
 */

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

				if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					if (typeof callback === "function") {
						callback.apply(xmlHttp);
					}
					let data = [];
					let sym = Symbol("email");
					let obj = {[sym]: 'email'};
					let itemEmail = JSON.parse(xmlHttp.responseText)[obj[sym]];
					itemEmail.forEach(function(element, index) {
						data[index] = {
							id: element['emailId'],
							type: element['type'],
							title: element['title'],
							content: element['content'],
							important: element['important'],
							starred: element['starred']
						}
					});
					resolve(data);
				}
			}
			xmlHttp.send();
		});
	}
}
