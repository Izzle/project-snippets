//playing around with ajax on my server, ignore this

(function() {
	var main = $('div');

	// load, getJSON, get, post, getScript.... all point to $.ajax
	$('a').on('click', function(e) {
		var href = $(this).attr('href');

		$('div').load( href + '.main');

		e.preventDefault();
	});

	

});