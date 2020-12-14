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


	//Показ меню для ширины экрана более 992px

	$('#forHouse').click(function(event) {
		$('.header__forHouse').toggleClass('show');
	});

	$('#forOffice').click(function(event) {
		$('.header__forOffice').toggleClass('show');
	});

	$('#forCar').click(function(event) {
		$('.header__forCar').toggleClass('show');
	});

	$('#about').click(function(event) {
		$('.header__about').toggleClass('show');
	});

	// Скрытие меню
	
	$('#forOffice, #forCar, #about, #price, #contacts').click(function(event) {
		$('.header__forHouse').removeClass('show');
	});
	
	$('#forHouse, #forCar, #about, #price, #contacts').click(function(event) {
		$('.header__forOffice').removeClass('show');
	});
	
	$('#forHouse, #forOffice, #about, #price, #contacts').click(function(event) {
		$('.header__forCar').removeClass('show');
	});
	
	$('#forHouse, #forOffice, #forCar, #price, #contacts').click(function(event) {
		$('.header__about').removeClass('show');
	});


	// удаление фокуса

	$('.header__navLink').click(function(event) {
		$('.header__navLink').blur();
	});

	

	// Меню для ширины экрана менее 992px

	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('.header__forHouse, .header__forOffice, .header__forCar, .header__about, .header__menuMobile, .header__menuItem').removeClass('active');
		$('.header__forHouse, .header__forOffice, .header__forCar, .header__about').removeClass('show');
		$('body').toggleClass('lock');
	});



	// Следующие уровни меню для экрана менее 992px

	if (( $(window).width() < 992 ) && ( $(window).width() >= 576 )) {
		$('#forHouse').click(function(event) {
			$('.header__forHouse').addClass('active');	
		});

		$('.header__forHouseBack').click(function(event) {
			$('.header__forHouse').removeClass('active');	
		});
	};

	$(window).resize(function() {  
		if (( $( this ).width() < 992) && ( $( this ).width() >= 576)) {
			$('#forHouse').click(function(event) {
				$('.header__forHouse').addClass('active');	
			});
	
			$('.header__forHouseBack').click(function(event) {
				$('.header__forHouse').removeClass('active');	
			});
		} else {
			$('#forHouse').click(function(event) {
				$('.header__forHouse').removeClass('active');
			});
		}
	});

	if ( $(window).width() < 576 ) {

		// 2й уровень меню (для дома)
		$('#forHouse').click(function(event) {
			$('.header__menuMobile').addClass('active');	
		});

		$('.header__forHouseBack').click(function(event) {
			$('.header__menuMobile').removeClass('active');	
		});
		
		//3й уровень меню(для дома)
		$('.forApartmentMobile').click(function(event) {
			$('.forApartmentList').addClass('active');	
		});	

		$('.forHouseMobile').click(function(event) {
			$('.forHouseList').addClass('active');	
		});	

		$('.additionalMobile').click(function(event) {
			$('.additionalList').addClass('active');	
		});

		$('.header__mobileBack').click(function(event) {
			$('.forApartmentList, .forHouseList, .additionalList').removeClass('active');	
		});		
	};

	$(window).resize(function() {  
		if ( $( this ).width() < 576) {
			$('#forHouse').click(function(event) {
				$('.header__menuMobile').addClass('active');	
			});
	
			$('.header__forHouseBack').click(function(event) {
				$('.header__menuMobile').removeClass('active');	
			});
		} else {
			$('#forHouse').click(function(event) {
				$('.header__menuMobile').removeClass('active');
			});
		}
	});
	


	$('#forOffice').click(function(event) {
		$('.header__forOffice').addClass('active');	
	});

	$('.header__forOfficeBack').click(function(event) {
		$('.header__forOffice').removeClass('active');	
	});

	$('#forCar').click(function(event) {
		$('.header__forCar').addClass('active');	
	});

	$('.header__forCarBack').click(function(event) {
		$('.header__forCar').removeClass('active');	
	});

	$('#about').click(function(event) {
		$('.header__about').addClass('active');	
	});

	$('.header__aboutBack').click(function(event) {
		$('.header__about').removeClass('active');	
	});

//========================================
	// if ( $(window).width() < 768 ) {
	// 	$('.header__title').addClass('red');
	// };
			
	// $(window).resize(function() {  
	// 	if ( $( this ).width() < 768){
	// 		$('.header__title').addClass('red');
	// 	} else {
	// 		$('.header__title').removeClass('red');
	// 	}
	// });

//========================================











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

});

//Слайдер для services для max-width 767px

var servicesSwiper = new Swiper('.services__container', {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	spaceBetween: 20
});

if (document.documentElement.clientWidth > 767) {
	servicesSwiper.destroy(false, true);
}

window.addEventListener('resize', function() {
	if (document.documentElement.clientWidth > 767) {
		servicesSwiper.destroy(false, true);
	}
});

//Слайдер для services для max-width 767px

var generalSwiper = new Swiper('.general__container', {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	spaceBetween: 20
});

if (document.documentElement.clientWidth > 767) {
	generalSwiper.destroy(false, true);
}

window.addEventListener('resize', function() {
	if (document.documentElement.clientWidth > 767) {
		generalSwiper.destroy(false, true);
	}
});



