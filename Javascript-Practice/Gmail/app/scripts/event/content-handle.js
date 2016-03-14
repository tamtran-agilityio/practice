/*
 * Handle show email when click on slider bar
 */
import { TitleEmail } from '../compoment/content';

export class ContentHandle {
	constructor(event) {
		this.event = event;
	}

	static sortTable(tbody, col, asc) {

		let rows  = tbody.length,
		rowLength = rows.length,
		arr 			= new Array(),
		i, j, cells, clen;

		for (i = 0; i < rowLength; i++) {
			cells = rows[i].cells;
			clen = cells.length;
			arr[i] = new Array();
		for (j = 0; j < clen; j++) {
			arr[i][j] = cells[j].innerHTML;
		}
	}

		arr.sort(function (a, b) {
			return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? asc : -1 * asc);
		});

		for (i = 0; i < rowLength; i++) {
			rows[i].innerHTML = "<td>" + arr[i].join("</td><td>") + "</td>";
		}
	}

	onClickTitle() {
		let viewTitle  = new TitleEmail();
		let $tableBody = $('#view-all-email');

		$('#tableEmail').delegate('tr', 'click', function() {
			$tableBody.empty();
			viewTitle.inboxTitle(this.id);
		});
	}

  onClickTitles() {
		$('#tableEmail').delegate('tr', 'contextmenu', function(event) {
			let rowDelete = this;
			$('.wapper-aside').show();
			$('.wapper-aside').css('top', event.pageY);
			$('.wapper-aside').css('left', event.pageX)
			$('#deleteTitle').click( function() {
				rowDelete.remove();
				$('.wapper-aside').hide();
			})
			$('#sortTitle').click(function() {
				let tbody = $('#view-all-email');

				ContentHandle.sortTable( tbody, 3 , 1);
				$('.wapper-aside').hide();
			})
			return false;
		});
	}

	onFilter() {
		$('#filter').keyup(function () {
			var rex = new RegExp($(this).val(), 'i');
				$('.searchable tr').hide();
				$('.searchable tr').filter(function () {
					return rex.test($(this).text());
				}).show();
		});
	}
}
