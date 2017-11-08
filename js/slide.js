$('.smooth').on('click', function() {
				$.smoothScroll({
					scrollElement: $('body'),
					scrollTarget: '#' + this.id
				});
				
				return false;
			});
			
			$(document).ready(function(){
				var headerHeight = $('menu').outerHeight();
				
				$('.slide-section').click(function(e){
					var linkHref = $(this).attr('href');
					
					$('html, body').animate({
						scrollTop: $(linkHref).offset().top - headerHeight
					}, 1000);
					e.preventDefault();
				});
			});