(function() {
	var content = [
		{
			title: 'Great blog post',
			thumbnail: 'img/img5.png',
		},
		{
			title: 'Second great blog post',
			thumbnail: 'img/img6.jpg',
		}
	],
		template = $.trim( $('#blogTemplate').html() );
		frag = '';
	
	$.each( content, function( index, obj) {
		frag +=
			template.replace( /{{title}}/ig, obj.title )
				    .replace( /{{thumbnail}}/ig, obj.thumbnail );
	});

	$('body').append(frag);
	
})();