import { GetData } from '../service/get-data';
import { ModelNew } from '../model/model';
export class NewWest {
	constructor() {

	}
	newHacker() {
		var collectData = new GetData();
		collectData.getDataItem('8863').then(function(data) {
			console.log(data)
			console.log(data["kids"]);
			let modelNews = new ModelNew();
			modelNews.renderItem(JSON.parse(data));
			console.log(data);
		});
	}
}
