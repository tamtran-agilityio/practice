$(document).ready(function() {
	$('div.chapter a[href*="wikipedia"]').attr({
		rel: 'external',
		title: function() {
			return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
		},
		id: function(index, oldValue) {
			return 'wikilink-' + index;
		}
	});
});

$(document).ready(function() {
	$("button").click(function() {
		$("p").addClass("square");
        $("div").addClass("important");
	});
});

