import { Service } from './service';

export class ServerNews {
	constructor(id) {
		this.id = id;
	}
	getListNews() {
		let service = new Service();
		return service.getJson('https://hacker-news.firebaseio.com/v0/topstories.json');

	}

	getItemNews(id) {

		let string = 'https://hacker-news.firebaseio.com/v0/item/'+ id +'.json';
		let service = new Service();
		 return service.getJson(string);
	}
}
