document.addEventListener("DOMContentLoaded", function() {

	var mySwiper = new Swiper('.hero__slider', {
		loop: true,
		pagination: {
			el: '.hero__pagination',
			clickable: 'true',
		},
		navigation: {
			nextEl: '.hero__next',
			prevEl: '.hero__prev',
		},
	});

});
