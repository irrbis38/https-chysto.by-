// Слайдер swiper

var advantagesSwiper = new Swiper('.advantages__sliderWrapper', {

	loop: true,
	slidesPerView: 1,
	// spaceBetween: 20,
	grabCursor: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider__next',
		prevEl: '.slider__prev',
	},
	breakpoints: {
		768: {
		slidesPerView: 3,
		spaceBetween: 20
		}
	}
});


// menu

$(document).ready(function(){


	//Показ меню

	$('#forHouse').click(function(event) {
		$('.header__forHouse').toggleClass('active');
	});

	$('#forOffice').click(function(event) {
		$('.header__forOffice').toggleClass('active');
	});

	$('#forCar').click(function(event) {
		$('.header__forCar').toggleClass('active');
	});

	//Скрытие меню
	
	$('.header__forHouse, header__menuItem, .header__firstMenuLink, .header__menuLink, #forOffice, #forCar, #about, #price, #contacts').click(function(event) {
		$('.header__forHouse').removeClass('active');
	});
	
	$('.header__forOffice, header__menuItem, .header__firstMenuLink, .header__menuLink, #forHouse, #forCar, #about, #price, #contacts').click(function(event) {
		$('.header__forOffice').removeClass('active');
	});
	
	$('.header__forCar, header__menuItem, .header__firstMenuLink, .header__menuLink, #forHouse, #forOffice, #about, #price, #contacts').click(function(event) {
		$('.header__forCar').removeClass('active');
	});

	// удаление фокуса

	$('.header__navLink').click(function(event) {
		$('.header__navLink').blur();
	});

	// Бургер-меню

	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__navLink, .header__menu').click(function(event) {
		$('.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});



	// Аккордеон в history

	$('.history__show').click(function(event) {
		$('.history__text').addClass('active');
		$('.history__show').addClass('hidden');
		$('.history__hide').removeClass('hidden');
	});

	$('.history__hide').click(function(event) {
		$('.history__text').removeClass('active');
		$('.history__show').removeClass('hidden');
		$('.history__hide').addClass('hidden');
	});

	// Аккордеон в principles

	$('.principles__show').click(function(event) {
		$('.principles__text').addClass('active');
		$('.principles__show').addClass('hidden');
		$('.principles__hide').removeClass('hidden');
	});

	$('.principles__hide').click(function(event) {
		$('.principles__text').removeClass('active');
		$('.principles__show').removeClass('hidden');
		$('.principles__hide').addClass('hidden');
	});
	
	// Аккордеон в principles

	$('.advantages__show').click(function(event) {
		$('.advantages__item .advantages__text').addClass('active');
		$('.advantages__show').addClass('hidden');
		$('.advantages__hide').removeClass('hidden');
	});

	$('.advantages__hide').click(function(event) {
		$('.advantages__item .advantages__text').removeClass('active');
		$('.advantages__show').removeClass('hidden');
		$('.advantages__hide').addClass('hidden');
	});
	
	// Аккордеон в eco

	$('.eco__show').click(function(event) {
		$('.eco__description').addClass('active');
		$('.eco__show').addClass('hidden');
		$('.eco__hide').removeClass('hidden');
	});

	$('.eco__hide').click(function(event) {
		$('.eco__description').removeClass('active');
		$('.eco__show').removeClass('hidden');
		$('.eco__hide').addClass('hidden');
	});
	
	// Аккордеон в minset

	//1й элемент
	$('.first .minset__show').click(function(event) {
		$('.first .minset__info').addClass('active');
		$('.first .minset__show').addClass('hidden');
		$('.first .minset__hide').removeClass('hidden');
	});

	$('.first .minset__hide').click(function(event) {
		$('.first .minset__info').removeClass('active');
		$('.first .minset__show').removeClass('hidden');
		$('.first .minset__hide').addClass('hidden');
	});
	
	//2й элемент
	$('.second .minset__show').click(function(event) {
		$('.second .minset__info').addClass('active');
		$('.second .minset__show').addClass('hidden');
		$('.second .minset__hide').removeClass('hidden');
	});

	$('.second .minset__hide').click(function(event) {
		$('.second .minset__info').removeClass('active');
		$('.second .minset__show').removeClass('hidden');
		$('.second .minset__hide').addClass('hidden');
	});

	//3й элемент
	$('.third .minset__show').click(function(event) {
		$('.third .minset__info').addClass('active');
		$('.third .minset__show').addClass('hidden');
		$('.third .minset__hide').removeClass('hidden');
	});

	$('.third .minset__hide').click(function(event) {
		$('.third .minset__info').removeClass('active');
		$('.third .minset__show').removeClass('hidden');
		$('.third .minset__hide').addClass('hidden');
	});

	//4й элемент
	$('.fourth .minset__show').click(function(event) {
		$('.fourth .minset__info').addClass('active');
		$('.fourth .minset__show').addClass('hidden');
		$('.fourth .minset__hide').removeClass('hidden');
	});

	$('.fourth .minset__hide').click(function(event) {
		$('.fourth .minset__info').removeClass('active');
		$('.fourth .minset__show').removeClass('hidden');
		$('.fourth .minset__hide').addClass('hidden');
	});


	//Слайдер для services для max-width 765px

	// $( window ).resize(function() { 
	//     if ( $( this ).width() < 765 ) {
	//       $( ".services__container" ).addClass( "swiper-container" );
	//       $( ".services__wrapper" ).addClass( "swiper-wrapper" );
	// 	  $( ".services__item" ).addClass( "swiper-slide" );
		  
	// 	  var servicesSwiper = new Swiper('.services__container', {

	// 		loop: true,
	// 		slidesPerView: 1,
	// 		// spaceBetween: 20,
	// 		grabCursor: true
	// 	  });

	//     } else {
	// 		$( ".services__container" ).removeClass( "swiper-container" );
	// 		$( ".services__wrapper" ).removeClass( "swiper-wrapper" );
	// 		$( ".services__item" ).removeClass( "swiper-slide" );
	//     }
	//   });

});

// var servicesSwiper = new Swiper('.services__container', {
// loop: true,
// slidesPerView: 1,
// grabCursor: true
// // breakpoints: {
// // 	768: {
// // 	slidesPerView: 9
// // 	}
// });


