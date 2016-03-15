/*
 * Handle show email when click on slider bar
 */
import { TitleEmail } from '../compoment/content';

export class ContentHandle {
	constructor(event) {
		this.event = event;
	}

	static sortTable(tbody, col, asc) {
		let rows  = document.getElementById('view-all-email').rows,
		cells  = document.getElementById('view-all-email').cells,
		rowLength = document.getElementById('view-all-email').rows.length,
		arr 			= new Array(),
		i, j, cell, clen;
		for (i = 0; i < rowLength; i++) {
			cell = rows[i].cells;
			clen = cell.length;
			arr[i] = new Array();
		for (j = 0; j < clen; j++) {
			arr[i][j] = rows[i].cells[j].innerHTML;
		}
	}
	console.log(arr);
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

		$('#tableEmail').delegate('tr', 'click', function(event) {
			$tableBody.empty();
			viewTitle.inboxTitle(this.id);
		});
	}

  onClickTitles() {
  	let $aside = $('.wapper-aside');
		$('#tableEmail').delegate('tr', 'contextmenu', function(event) {
			let rowDelete = this;
			$aside.show();
			$aside.css('top', event.pageY);
			$aside.css('left', event.pageX);
			let checkbox = $(this).find("input[type='checkbox']");
			checkbox.attr('checked', !checkbox.attr('checked'));

			$('#deleteTitle').click( function() {
				rowDelete.remove();
				$aside.hide();
			})

			$('#sortTitle').click(function() {

					let tbody = $('#view-all-email');

					ContentHandle.sortTable( tbody,  0 , 1);
					$aside.hide();
			})

			$('.linkBox').click( function() {
				rowDelete.remove();
				if (rowDelete.type === 'box') {
					rowDelete.type = $('email-type').html('<td class = "email-type"> send	</td>');
				}
				$aside.hide();
			})

			$('.linkSend').click( function() {
				rowDelete.remove();
				if (rowDelete.type === 'send') {
					rowDelete.type = $('email-type').html('<td class = "email-type"> box </td>');
				}
				$aside.hide();
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

	onChangeImportant() {
		$("#btnImportant").click(function(event) {
			return false;
		});
	}
}
