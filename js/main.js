jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

	//Isotope
	$(window).on('load', function(){
		$project = $('.project-items');
		$project.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});

		$type_selectors = $('.type-filter>li>a');
		$type_selectors.on('click', function(){
			$type_selectors.removeClass('active');
			$(this).addClass('active');
			var type_selector = $('.type-filter>li>a.active').attr('data-filter');
			var language_selector = $('.language-filter>li>a.active').attr('data-filter');
			var area_selector = $('.area-filter>li>a.active').attr('data-filter');
			console.log(type_selector + language_selector + area_selector);
			$project.isotope({ filter: type_selector + language_selector + area_selector });
			return false;
		});

		$language_selectors = $('.language-filter>li>a');
		$language_selectors.on('click', function(){
			$language_selectors.removeClass('active');
			$(this).addClass('active');
			var type_selector = $('.type-filter>li>a.active').attr('data-filter');
			var language_selector = $('.language-filter>li>a.active').attr('data-filter');
			var area_selector = $('.area-filter>li>a.active').attr('data-filter');
			console.log(type_selector + language_selector + area_selector);
			$project.isotope({ filter: type_selector + language_selector + area_selector });
			return false;
		});

		$area_selectors = $('.area-filter>li>a');
		$area_selectors.on('click', function(){
			$area_selectors.removeClass('active');
			$(this).addClass('active');
			var type_selector = $('.type-filter>li>a.active').attr('data-filter');
			var language_selector = $('.language-filter>li>a.active').attr('data-filter');
			var area_selector = $('.area-filter>li>a.active').attr('data-filter');
			$project.isotope({ filter: type_selector + language_selector + area_selector });
			return false;
		});
	});
});