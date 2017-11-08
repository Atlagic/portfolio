$(document).ready(function(){
	$('a[href*=#]').bind('click', function(e) {
		e.preventDefault(); 
		var target = $(this).attr("href"); 
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function() {
			location.hash = target;
		});
		return false;
	});
});
$(window).scroll(function(){
	var scrollDistance = $(window).scrollTop();
	$('.page-section').each(function(i) {
		if ($(this).position().top <= scrollDistance) {
			$('.activate img.active').removeClass('active');
			$('.activate img').eq(i).addClass('active');
		}
	});
}).scroll();	