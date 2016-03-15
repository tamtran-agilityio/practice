import { Service } from './service';

export class GetData {
	constructor(id) {
		this.id = id;
	}
	getData() {
		let service = new Service();
		service.getJson('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(response) {
			console.log("Success!", response);
		}, function(error) {
			console.error("Failed!", error);
		});
	}

	getDataItem(id) {

		let string = 'https://hacker-news.firebaseio.com/v0/item/'+ id +'.json';
		let service = new Service();
		 return service.getJson(string);
	}
}
