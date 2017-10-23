$(function() {	
	$('body').removeClass('fade-out');

	$('a').smoothScroll({
		offset: 100
		});

	new WOW().init();

});