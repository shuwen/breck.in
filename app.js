$(document).ready(function() {

	var colors = ['red', 'orange', 'yellow', 'limegreen', 'blue', 'magenta'];

	$('#scene').parallax();

	$.each($('li'), function() {
		$(this).css('position', 'absolute');
		$(this).css('top', Math.random() * $('body').height()-100);
		$(this).css('left', Math.random() * $('body').width()-100);
		$(this).css('color', colors[ Math.floor(Math.random() * colors.length) ]);
		$(this).css('font-size', Math.random() * 80);
	});

});