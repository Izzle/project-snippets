(function() {

	var arr = [
		{
			first: 'Ron',
			last: 'Martin'
		},
		{
			first: 'John',
			last: 'Doe'
		},
		{
			first: 'Sarah',
			last: 'Martin'
		},
		{
			first: 'Jane',
			last: 'Doer'
		}
	];

	arr = $.grep( arr, function( obj, index ){
		return obj.last === 'Martin';
	});

	console.log(arr);
	
})();