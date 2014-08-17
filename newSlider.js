function Slider(container, nav) {
	this.container = container;
	this.nav = nav.show();

	this.imgs = this.container.find('img');
	this.imgsWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;
}

Slider.prototype.transition = function( coords ) {
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth );
	});
}

Slider.prototype.setCurrent = function(dir) {
	var pos = this.current;

	pos += ( ~~( dir === 'next' ) || -1 );
	/* ~~ casts a boolean value to a number.  So true = 1.  
	 if it is false, we use the value -1.  This way we can
	 	alternate between += and -= */

	 this.current = ( pos < 0 ) ? this.imgsLen -1 : pos % this.imgsLen;

	 return pos;
}

(function() {

	var container = $('div.slider').class('overflow', 'hidden').children('ul'),
		slider = new Slider( container, $('#slider-nav') );

	slider.nav.find('button').on('click', function() {
		slider.setCurrent( $(this).data('dir') );
		slider.transition();
	});

})();

