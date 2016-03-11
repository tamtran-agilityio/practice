


export class TitleEmail {

	constructor(id) {
		this.id = id;
	}

	static TitleRead() {

		let table = $("tableEmail");
		let rows = table.find("tr");

		rows.forEach(element, index) {

			let row = table.rows[i];

			row.on('click', => {
				let data = window.responseTest;

				ViewEmail.getViewNull();

				data.forEach(element, index) {

					if (element.id === this.id) {

					}
				};
			})
		}
	}
}
