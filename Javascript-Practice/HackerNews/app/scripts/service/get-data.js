/*
 * Service connect api
 * Return object data
 */
import { Service } from './service';

export class ServerNews {
	constructor(id) {
		this.id = id;
	}

	/*
	 * Get data of list News
	 */
	getListNews() {

		let service = new Service();
		return service.getJson('https://hacker-news.firebaseio.com/v0/topstories.json');

	}

	/*
	 * Get data of item News
	 */
	getItemNews(id) {

		let string = 'https://hacker-news.firebaseio.com/v0/item/'+ id +'.json';
		let service = new Service();
		 return service.getJson(string);
	}

	/*
	 * Get data of list Comment
	 */
	getItemComment(id) {

		let string = 'https://hacker-news.firebaseio.com/v0/item/'+ id +'.json';
		let service = new Service();
		 return service.getJson(string);
	}
}
