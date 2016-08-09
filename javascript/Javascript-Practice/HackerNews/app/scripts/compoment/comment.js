/*
 * Show list comment
 */
import { ServerNews } from '../service/get-data';
import { ModelComment } from '../model/model-comments';

export class Comment {

	constructor(id, commentItem) {
		this.id 				 = id;
		this.commentItem = commentItem;
	}

	static renderItemComent(commentItem) {

		let time 				= (((commentItem['comment'].time)/60)%60).toFixed(0);
		let htmlComment =
		`<tr>
			<td class="ind">
				<a href="${commentItem['comment'].by}"> ${commentItem['comment'].by} </a>
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
					<span class="c00">${commentItem['comment'].text}</span>
				</span>
			</td>
		</tr>`;
		return htmlComment;
	}

	static itemComment(id) {

		let collectData = new ServerNews();

			collectData.getItemComment(id).then(function(dataComment) {

			let dataNews 		 = JSON.parse(dataComment);
			let modelNews 	 = new ModelComment(dataNews);
			let itemtComment = Comment.renderItemComent(modelNews);
			let $tableBody 	 = $("#view-all-comment");

			$tableBody.append(itemtComment);
		});
	}
}
