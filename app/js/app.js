document.addEventListener("DOMContentLoaded", function() {

//----------------------SLIDER-hero----------------------
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

//----------------------SLIDER-hero----------------------
	var mySwiper = new Swiper('.engineering__slider', {
		slidesPerView: 1,
		spaceBetween: 15,
		pagination: {
			el: '.engineering__slider_pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.engineering__slider_next',
			prevEl: '.engineering__slider_prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 40
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 40
			},
		}
	});


//----------------------MODAL-----------------------
	const modals = (triggerSelector, modalSelector, closeSelector) => {
		const trigger = document.querySelectorAll(triggerSelector),
					modal = document.querySelector(modalSelector),
					close = document.querySelector(closeSelector);

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = 'flex';
				document.body.classList.add('modal--open')
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.classList.remove('modal--open');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.classList.remove('modal--open');
			}
		});

	};
	modals('.order__open', '.modal--order', '.modal--order .modal__close');
	modals('.consultation__open', '.modal--consultation', '.modal--consultation .modal__close');
	modals('.services__open', '.modal--services', '.modal--services .modal__close');
	modals('.investor__open', '.modal--investor', '.modal--investor .modal__close');
	modals('.thanks__open', '.modal--thanks', '.modal--thanks .modal__close');

//----------------------SCROLL-----------------------
	const scrollTo = (scrollTo) => {
		let list = document.querySelector(scrollTo);
		list = '.' + list.classList[0]  + ' li a[href^="#"';

		document.querySelectorAll(list).forEach(link => {

			link.addEventListener('click', function(e) {
					e.preventDefault();
					const scrollMenu = document.querySelector(scrollTo);

					let href = this.getAttribute('href').substring(1);

					const scrollTarget = document.getElementById(href);

					// const topOffset = scrollMenu.offsetHeight;
					const topOffset = 70;
					const elementPosition = scrollTarget.getBoundingClientRect().top;
					const offsetPosition = elementPosition - topOffset;

					window.scrollBy({
							top: offsetPosition,
							behavior: 'smooth'
					});

					
					let button = document.querySelector('.hamburger'),
							nav = document.querySelector('.header__nav'),
							header = document.querySelector('.header');

					button.classList.remove('hamburger--active');
					nav.classList.remove('header__nav--active');
					header.classList.remove('header--menu');
			});
		});
	};
	scrollTo('.header__nav');
	scrollTo('.footer__nav');

//----------------------FIXED-HEADER-----------------------
	const headerFixed = (headerFixed, headerActive) => {
		const header =  document.querySelector(headerFixed),
					active = headerActive.replace(/\./, '');

		window.addEventListener('scroll', function() {
			const top = pageYOffset;
			
			if (top >= 90) {
				header.classList.add(active);
			} else {
				header.classList.remove(active);
			}

		});

	};
	headerFixed('.header', '.header--active');

//----------------------HAMBURGER-----------------------
	const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
		const button = document.querySelector(hamburgerButton),
					nav = document.querySelector(hamburgerNav),
					header = document.querySelector(hamburgerHeader);

		button.addEventListener('click', (e) => {
			button.classList.toggle('hamburger--active');
			nav.classList.toggle('header__nav--active');
			header.classList.toggle('header--menu');
		});

	};
	hamburger('.hamburger', '.header__nav', '.header');


});
