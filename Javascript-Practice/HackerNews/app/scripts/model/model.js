export class ModelNew {
	constructor(id, deleted, type, by, time, text, dead, parent, kids, url, score, title, parts, descendants, newwest) {
		this.id 		 = id;
		this.deleted = deleted;
		this.type 	 = type;
		this.by 		 = by;
		this.time 	 = time;
		this.text 	 = text;
		this.dead 	 = dead;
		this.parent  = parent;
		this.kids 	 = kids;
		this.url 		 = url;
		this.score   = score;
		this.title 	 = title;
		this.parts 	 = parts;
		this.descendants = descendants;
		this.newwest = newwest;
	}
	renderItem(newwest) {
		let $tableBody = $("#view-all-email");
		let $emailNode =
		`<tr class="athing">
			<td class="title">
				<span class="rank">${newwest.descendants}</span>
			</td>
			<td class="votelinks"> ${newwest.title}
			</td>
			<td class="title">
				<span class="deadmark"> ${newwest.dead}</span>
				<a href=""></a>
				<span class="sitebit comhead">
					<a href="">${newwest.descendants}</a>
				</span>
			</td>
		</tr>
		<tr>
			<td class="subtext">
				<span class="score">
				</span>
				<a href=""></a>
				<span class="age">
					<a href=""></a>
				</span>
				<a href=""></a>
				<a href=""></a>
				<a href=""></a>
			</td>
		</tr>`;
		$tableBody.append($emailNode);
	}
}
