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
		slidesPerView: 3,
		pagination: {
			el: '.engineering__slider_pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.engineering__slider_next',
			prevEl: '.engineering__slider_prev',
		},
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
				document.body.classList.add('modal__open')
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.classList.remove('modal__open');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.classList.remove('modal__open');
			}
		});

	};
	modals('.order__open', '.modal__order', '.modal__order .modal__close');
	modals('.click__open', '.modal__click', '.modal__click .modal__close');

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

					const topOffset = scrollMenu.offsetHeight;
					const elementPosition = scrollTarget.getBoundingClientRect().top;
					const offsetPosition = elementPosition - topOffset;

					window.scrollBy({
							top: offsetPosition,
							behavior: 'smooth'
					});
			});
		});
	};
	scrollTo('.header__nav');

//----------------------FIXED-HEADER-----------------------
	const headerFixed = (headerFixed, headerActive) => {
		const header =  document.querySelector(headerFixed),
					active = headerActive.replace(/\./, '');

		window.addEventListener('scroll', function() {
			const top = pageYOffset;
			
			if (top >= 700) {
				header.classList.add(active);
			} else {
				header.classList.remove(active);
			}

		});

	};
	headerFixed('.header', '.header--active');

});
