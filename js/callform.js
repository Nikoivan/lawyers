'use strict';

class CallForm {
	constructor() {
		document.addEventListener('DOMContentLoaded', () => {
			this.init();
		});
	}

	init() {
		this.callForm = document.querySelector('.callform');
		this.openBtn = document.querySelector('.authors__btn');
		this.closeBtn = document.querySelector('.callform__btn_type_close');
		this.activeBtn = document.querySelector('.callform__btn_type_action');

		this.handleOpenBtnClick = this.handleOpenBtnClick.bind(this);
		this.handleCloseBtnClick = this.handleCloseBtnClick.bind(this);
		this.handleActiveBtnClick = this.handleActiveBtnClick.bind(this);

		this.openBtn.addEventListener('click', this.handleOpenBtnClick);
		this.closeBtn.addEventListener('click', this.handleCloseBtnClick);
		this.activeBtn.addEventListener('click', this.handleActiveBtnClick);
	}

	handleOpenBtnClick(e) {
		e.preventDefault();

		this.callForm.classList.add('active');
		body.classList.add('noscroll');
	}

	handleCloseBtnClick(e) {
		if (e) {
			e.preventDefault();
		}

		this.callForm.classList.remove('active');
		body.classList.remove('noscroll');
	}

	handleActiveBtnClick(e) {
		e.preventDefault();

		setTimeout(() => {
			this.handleCloseBtnClick.call(this);
		}, 500);
	}
}

const callForm = new CallForm();
