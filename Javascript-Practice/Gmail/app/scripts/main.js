/*global */
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

class Email {
	constructor(type, title, content, important, starred) {
		this.type 			= type;
		this.title 			= title;
		this.content 		= content;
		this.important 	= important;
		this.starred 		= starred;
	}

	showEmail() {
		console.log(type);
		console.log(title);
		console.log(content);
		console.log(important);
		console.log(starred);
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
			let itemEmail = response['email']
			for (var i = 0; i < itemEmail.length; i++) {
				data[i] = {
					type 			: itemEmail[i]['type'],
					title 		: itemEmail[i]['title'],
					content 	: itemEmail[i]['content'],
					important : itemEmail[i]['important'],
					starred 	: itemEmail[i]['starred']
				}
			}
			console.log(data);
		}
	}
	xmlHttp.send();
}

run(function*() {
	getJSON('/data/data.json');
});

