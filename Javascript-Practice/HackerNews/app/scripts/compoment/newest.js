import { ServerNews } from '../service/get-data';
import { ModelNew } from '../model/model';
export class NewWest {
	constructor() {

	}
	static renderItem(newItem) {
		let time = (((newItem['news'].time)/60)%60).toFixed(0);
		let html =
		`<tr class="athing">
			<td class="title">
				<span class="rank">${newItem['news'].descendants}</span>
			</td>
			<td class="votelinks">
			</td>
			<td class="title">  ${newItem['news'].title}
				<span class="deadmark"></span>
				<a href=""></a>
				<span class="sitebit comhead">
					<a href=""></a>
				</span>
			</td>
		</tr>
		<tr>
			<td class="subtext">
				<span class="score">${newItem['news'].score} point by
				</span>
				<a href="">${newItem['news'].by}</a>
				<span class="age">
					<a href="">${time} hour ago </a>
				</span>
				<a href="">${newItem['news'].descendants} comment</a>
				<a href=""></a>
				<a href=""></a>
			</td>
		</tr>`;
		return html;
	}

	static newHacker(id) {
		var collectData = new ServerNews();
			collectData.getItemNews(id).then(function(data) {
			let dataNews = JSON.parse(data);
			let modelNews = new ModelNew(dataNews);
			let item = NewWest.renderItem(modelNews);
			let $tableBody = $("#view-all-email");
			$tableBody.append(item);
		});
	}

	newListHacker() {
		var collectData = new ServerNews();
			collectData.getListNews().then(function(data) {
			let dataNews = JSON.parse(data);
				dataNews.forEach( function(element) {
					NewWest.newHacker(element);
				})
		});
	}
}
