document.addEventListener("DOMContentLoaded", function() {

//----------------------SLIDER-----------------------
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
		document.querySelectorAll('a[href^="#"').forEach(link => {

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
	scrollTo('.scrollto');


});
