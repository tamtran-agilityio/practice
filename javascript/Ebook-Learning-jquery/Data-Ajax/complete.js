// load data with html file
$(document).ready(function() {
	$('#letter-a a').click(function(event) {
		event.preventDefault();
		$('#dictionary').load('a.html');
		alert('Loaded!');
	});
});

// load data with json file
$(document).ready(function() {
	$('#letter-b a').click(function() {
		$.getJSON('b.json', function(data) {
			$('#dictionary').empty();
			$.each(data, function(entryIndex, entry) {
				var html = '<div class="entry">';
				html += '<h3 class="term">' + entry['term'] + '</h3>';
				html += '<div class="part">' + entry['part'] + '</div>';
				html += '<div class="definition">';
				html += entry['definition'];
				if (entry['quote']) {
					html += '<div class="quote">';
					$.each(entry['quote'], function(lineIndex, line) {
						html += '<div class="quote-line">' + line + '</div>';
					});
					if (entry['author']) {
						html += '<div class="quote-author">' + entry['author'] + '</div>';
					}
					html += '</div>';
				}
				html += '</div>';
				html += '</div>';
				$('#dictionary').append(html);
			});
		});
		return false;
	});
});