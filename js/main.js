document.querySelector('#forHouse').addEventListener('click', () => {
	document.querySelector('.header__forHouse').classList.toggle('active');
  });

document.querySelector('#forOffice').addEventListener('click', () => {
	document.querySelector('.header__forOffice').classList.toggle('active');
  });

document.querySelector('#forCar').addEventListener('click', () => {
	document.querySelector('.header__forCar').classList.toggle('active');
  });

  // Слайдер swiper

  var mySwiper = new Swiper('.swiper-container', {
	
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	grabCursor: true,

	// Navigation arrows
	navigation: {
	  nextEl: '.slider__next',
	  prevEl: '.slider__prev',
	}
  })