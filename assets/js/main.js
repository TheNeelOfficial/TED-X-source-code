/*
Author : AkhilHector
Jquery: 1.10.2
Bootstrap: 3.2
*/
jQuery(function($){

var akhil = window.akhil || {};


			// The Display UI of the speakers
			
			$(window).load(function(){
					var assign;
					$speakers = $('.speakers-list >li>a');
					$unit = $('.speakers-displays');

				if($speakers != 'undefined') {
					$unit.isotope({
						itemSelecter: 'li',
						layoutMode: 'fitRows'
					});

					$speakers.on('click',function(){
						$speakers.removeClass('active');
						$(this).addClass('active');
						assign = $(this).attr('TEDlist');
						$unit.isotope({ filter: assign });
						return false;
					});
				}
			});


				$("a[rel^='prettyPhoto']").prettyPhoto({
					social_tools: false
				});
			
			// Speakers Fancy Box UI 
		akhil.filter = function (){
		if($('#projects').length > 0){		
		var $container = $('#projects');
		
		$container.imagesLoaded(function() {
			$container.isotope({
			 
			  animationEngine: 'best-available',
			  itemSelector : '.item-thumbs',
			  layoutMode : 'fitRows'
			});
		});
	
		
		
		var $optionSets = $('#options .option-set'),
			$optionLinks = $optionSets.find('a');
	
		  $optionLinks.click(function(){
		  	
			var $this = $(this);
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');			
			$this.addClass('selected');
			
	 
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
	
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			 
			  changeLayoutMode( $this, options );
			
			} else {
			  $container.isotope( options );
			}
			
			return false;
		});
	}
}
			
akhil.fancyBox = function(){
	if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0){
		
		$(".fancybox").fancybox({				
				padding : 0,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});
			
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
	}
}

		// The Fancy Box for the About Page


akhil.utils = function(){
	
	$('.item-thumbs').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('.image-wrap').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	
}


		$(document).ready(function(){
			akhil.filter();
			akhil.fancyBox();
			akhil.utils();
		});
});


                            
                            
                            
                            
                            