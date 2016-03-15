import { GetData } from '../service/get-data';
import { ModelNew } from '../model/model';
export class NewWest {
	constructor() {

	}
	newHacker() {
		var collectData = new GetData();
		collectData.getDataItem('8863').then(function(data) {
			// Object.keys(data).forEach(function (key) {
			// 	let obj = data["by"];
			// 	console.log(obj);
			// 	// do something with obj
			// });
			console.log(data)
			console.log(data['by']);
			// let item = $.makeArray(data);
			// let item = $.each(data, function(keys) {
			// 	return [value];
			// });

			// console.log(item);

			let modelNews = new ModelNew();
			modelNews.renderItem(data);
			console.log(data);
		});
	}
}
