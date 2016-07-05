/*
 * Get file json
 * @param url link path to file json
 */

export class Service {
	constructor(url) {
		this.url = url;
	}

	getJson(url) {
		return new Promise(function(resolve, reject) {
			var XMLHttp = new XMLHttpRequest();
			XMLHttp.open('GET', url);

			XMLHttp.onload = function() {
				if (XMLHttp.status == 200) {
					resolve(XMLHttp.response);
				}
				else {
					reject(Error(XMLHttp.statusText));
				}
			};

			XMLHttp.onerror = function() {
				reject(Error("Network Error"));
			};

			XMLHttp.send();
		});
	}
}
