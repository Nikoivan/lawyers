'use strict';

const popup = document.querySelector('#popup');
const body = document.body;
const menu = document.querySelector('#menu').cloneNode(1);
const hamb = document.querySelector('#hamb');
const popupContainer = document.querySelector('.popup__container');
const closeBtn = document.querySelector('.popup__btn');

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
	e.preventDefault();

	popup.classList.toggle('open');
	popupContainer.classList.toggle('active');
	body.classList.toggle('noscroll');
	renderPopup();
}

function renderPopup() {
	popup.appendChild(menu);
}

const links = [...menu.children];

links.forEach((link) => {
	link.addEventListener('click', closeOnClick);
});

closeBtn.addEventListener('click', (e) => {
	e.preventDefault();
	closeOnClick();
});

function closeOnClick() {
	popup.classList.remove('open');
	popupContainer.classList.remove('active');
	body.classList.remove('noscroll');
}
