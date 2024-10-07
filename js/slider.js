class Slider {
	constructor() {
		document.addEventListener('DOMContentLoaded', () => {
			this.slider = document.querySelector('.slider__wrap');
			this.sliderList = document.querySelector('.slider__list');
			this.items = document.querySelectorAll('.slider__item');
			this.count = 0;
			this.timeoutId;
			this.width;

			this.init = this.init.bind(this);
			this.rollSlider = this.rollSlider.bind(this);
			this.nextSlide = this.nextSlide.bind(this);

			window.addEventListener('resize', this.init);

			this.init();
		});
	}

	init() {
		this.width = this.slider.offsetWidth / 2 + 1;
		this.sliderList.style.width = this.width * this.items.length + 'px';

		this.items.forEach((item) => {
			item.style.width = this.width + 'px ';
		});

		this.rollSlider();

		setTimeout(() => {
			this.nextSlide();
		}, 3000);
	}

	nextSlide() {
		window.clearTimeout(this.timeoutId);
		this.count++;

		if (this.count >= this.items.length - 1) {
			this.count = 0;
		}

		this.rollSlider();

		this.timeoutId = setTimeout(() => {
			this.nextSlide();
		}, 3000);
	}

	rollSlider() {
		this.sliderList.style.transform = 'translate(-' + this.count * this.width + 'px)';
	}
}

const slider = new Slider();
