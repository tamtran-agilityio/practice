/*
 *
 */

import { ServerNews } from '../service/get-data';
import { ModelNew } from '../model/model-news';
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
		<tr id='${newItem['news'].id}' class = "itemComment">
			<td class="subtext">
				<span class="score">${newItem['news'].score} point by
				</span>
				<a href="">${newItem['news'].by}</a>
				<span class="age">
					<a href="">${time} hours ago </a>
				</span>
				<a href="#" class="itemComment"> ${newItem['news'].descendants} comment </a>
				<a href=""></a>
				<a href=""></a>
			</td>
		</tr>`;
		return html;
	}

	static renderItemComent(commentItem) {
		console.log(commentItem);
		let time = (((commentItem['news'].time)/60)%60).toFixed(0);
		let htmlComment =
		`<tr>
			<td class="ind">
				<a href="${commentItem['news'].by}"> ${commentItem['news'].by} </a>
			</td>
			<td class="votelinks">
			</td>
			<td class="default">
				<div>
					<span class="comhead">
						<span class="age"> ${time} hours ago
						</span>
					</span>
				</div>
				<span class="comment">
					<span class="c00">${commentItem['news'].text}</span>
				</span>
			</td>
		</tr>`;
		return htmlComment;
	}

	static itemNews(id) {
		let collectData = new ServerNews();
			collectData.getItemNews(id).then(function(newItem) {
			let dataNews = JSON.parse(newItem);
			let modelNews = new ModelNew(dataNews);
			let item = NewWest.renderItem(modelNews);
			let $tableBody = $("#view-all-news");
			$tableBody.append(item);
		});
	}

	static itemComment(id ) {
		let collectData = new ServerNews();
			collectData.getItemComment(id).then(function(dataComment) {
			let dataNews = JSON.parse(dataComment);
			let modelNews = new ModelNew(dataNews);
			let itemtComment = NewWest.renderItemComent(modelNews);
			let $tableBody = $("#view-all-comment");
			$tableBody.append(itemtComment);
		});
	}

	newListHacker() {
		let collectData = new ServerNews();
		collectData.getListNews().then(function(listItem) {

		let listNews = JSON.parse(listItem);

			listNews.forEach( function(element) {
				NewWest.itemNews(element);
			})
		});

		$('#tableNews').delegate('tr.itemComment', 'click', function(event) {
			$("#view-all-comment").empty();
			let idNewItem = (this.id).toString();
			collectData.getItemNews(idNewItem).then(function(data) {
				let dataNews = JSON.parse(data);
					(dataNews.kids).forEach(function(element) {
						NewWest.itemComment(element);
					})
			});
		});
	}
}
