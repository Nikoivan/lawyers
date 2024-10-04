'use strict';

class CallForm {
	constructor() {
		document.addEventListener('DOMContentLoaded', () => {
			this.init();
		});
	}

	init() {
		this.body = document.body;
		this.callForm = document.querySelector('.callform');
		this.callFormWrap = document.querySelector('.callform__wrapper');
		this.openBtn = document.querySelector('.authors__btn');
		this.closeBtn = document.querySelector('.callform__btn_type_close');
		this.successCloseBtn = document.querySelector('.callform__success-btn_type_close');
		this.activeBtn = document.querySelector('.callform__btn_type_action');
		this.successWrap = document.querySelector('.callform__wrapper_type_success');

		this.handleOpenBtnClick = this.handleOpenBtnClick.bind(this);
		this.handleCloseBtnClick = this.handleCloseBtnClick.bind(this);
		this.handleActiveBtnClick = this.handleActiveBtnClick.bind(this);
		this.handleCloseSuccessWrap = this.handleCloseSuccessWrap.bind(this);
		this.handleSubmitClickBtn = this.handleSubmitClickBtn.bind(this);

		this.openBtn.addEventListener('click', this.handleOpenBtnClick);
		this.closeBtn.addEventListener('click', this.handleCloseBtnClick);
		this.activeBtn.addEventListener('click', this.handleSubmitClickBtn);
		this.successCloseBtn.addEventListener('click', this.handleCloseSuccessWrap);
	}

	handleOpenBtnClick(e) {
		e.preventDefault();

		this.callForm.classList.add('active');
		this.callFormWrap.classList.add('active');
		this.body.classList.add('noscroll');
	}

	handleCloseBtnClick(e) {
		if (e) {
			e.preventDefault();
		}

		setTimeout(() => {
			this.callForm.classList.remove('active');
			this.body.classList.remove('noscroll');
		}, 500);
		this.callFormWrap.classList.remove('active');
	}

	handleActiveBtnClick(e) {
		e.preventDefault();

		this.callFormWrap.classList.remove('active');

		setTimeout(() => {
			this.openSuccessWrap.call(this);
		}, 600);
	}

	openSuccessWrap() {
		this.successWrap.classList.add('active');

		setTimeout(() => {
			this.handleCloseSuccessWrap();
		}, 3000);
	}

	handleCloseSuccessWrap(e) {
		if (e) {
			e.preventDefault();
		}

		this.successWrap.classList.remove('active');
		this.callForm.classList.remove('active');
		this.body.classList.remove('noscroll');
	}

	handleSubmitClickBtn(e) {
		e.preventDefault();

		this.callFormWrap.classList.remove('active');

		setTimeout(() => {
			this.openSuccessWrap();
		}, 500);
	}
}

const callForm = new CallForm();
