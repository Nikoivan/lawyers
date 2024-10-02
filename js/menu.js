'use strict';

class Menu {
	constructor() {
		document.addEventListener('DOMContentLoaded', this.init());
	}

	init() {
		this.popup = document.querySelector('#popup');
		this.body = document.body;
		this.menu = document.querySelector('#menu').cloneNode(1);
		this.hamb = document.querySelector('#hamb');
		this.popupContainer = document.querySelector('.popup__container');
		this.closeBtn = document.querySelector('.popup__btn');
		this.links = [...this.menu.children];

		this.hambHandler = this.hambHandler.bind(this);
		this.closeOnClick = this.closeOnClick.bind(this);

		this.hamb.addEventListener('click', this.hambHandler);
		this.links.forEach((link) => {
			link.addEventListener('click', this.closeOnClick);
		});
		this.closeBtn.addEventListener('click', (e) => {
			e.preventDefault();

			this.closeOnClick();
		});
	}

	hambHandler(e) {
		e.preventDefault();

		this.popup.classList.toggle('open');
		this.popupContainer.classList.toggle('active');
		this.body.classList.toggle('noscroll');
		this.renderPopup();
	}

	renderPopup() {
		this.popup.appendChild(this.menu);
	}

	closeOnClick() {
		this.popup.classList.remove('open');
		this.popupContainer.classList.remove('active');
		this.body.classList.remove('noscroll');
	}
}

const menu = new Menu();
