$(function(){
				 var shrinkHeader = 100;
				  $(window).scroll(function() {
					var scroll = getCurrentScroll();
					  if ( scroll >= shrinkHeader ) {
						   $('#menu').addClass('shrink');
						   $('#left_menu nav').addClass('shrink');
						   $('#right_menu nav').addClass('shrink');
						   $('.home').addClass('shrink');
						   $('.project').addClass('shrink');
						   $('.contact').addClass('shrink');
						   $('.blink').addClass('shrink');
						}
						else {
							$('#menu').removeClass('shrink');
							$('#left_menu nav').removeClass('shrink');
							$('#right_menu nav').removeClass('shrink');
							$('.home').removeClass('shrink');
							$('.project').removeClass('shrink');
							$('.contact').removeClass('shrink');
							$('.blink').removeClass('shrink');
							
						}
				  });
				function getCurrentScroll() {
					return window.pageYOffset || document.documentElement.scrollTop;
					}
				});
				
				var scrollY = 0;
				var distance = 40;
				var speed = 10;
				function resetScroller(el){
					var currentY = window.pageYOffset;
					var targetY = document.getElementById(el).offsetTop;
					var animator = setTimeout('resetScroller(\''+el+'\')',speed);
					if(currentY > targetY){
					  scrollY = currentY-distance;
					  window.scroll(0, scrollY);
					}
					else {
						clearTimeout(animator);
					}
				}