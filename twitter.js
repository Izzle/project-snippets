(function() {

	var Twitter = {
		init: function() {
			this.url = 'http://search.twitter.com/search.
				json?q=tutspremium&callback=?';
		},

		fetch: function() {
			$.getJSON(this.url, function(data) {
				console.log(data);
			});
		}
	};

})();