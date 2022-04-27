"use strict";

	const flagsElement = document.getElementById("flags");
	const textsToChange = document.querySelectorAll("[data-section]");
	const toggle = document.getElementById("toggle");
	const containerMain = document.querySelector(".container-main");
	const btnswitch = document.querySelector('#switch');

	btnswitch.addEventListener('click', () => {
		document.body.classList.toggle('ligth');
		btnswitch.classList.toggle('active')
	})


	const changeLanguage = async (language) => {
		const requestJson = await fetch(`./lenguages/${language}.json`);
		const texts = await requestJson.json();

		for(const textToChange of textsToChange) {
			const section = textToChange.dataset.section;
			const value = textToChange.dataset.value;

			textToChange.innerHTML = texts[section][value];

		}
	};

	flagsElement.addEventListener("click", (e) => {
		changeLanguage(e.target.parentElement.dataset.language);
	});

	
document.addEventListener('DOMContentLoaded', () => {
	const btnHome = document.getElementById('btn-home');
	const btnAbout = document.getElementById('btn-about');
	const btnResumen = document.getElementById('btn-resumen');
	const btnPortfolio = document.getElementById('btn-portfolio');
	const btnBlog = document.getElementById('btn-blog');
	const btnContact = document.getElementById('btn-contact');
	const divHome = document.getElementById('content-home');
	const divAbout = document.getElementById('content-about');
	const divResumen = document.getElementById('content-resumen');
	const divBlog = document.getElementById('content-blog');
	const divPortfolio = document.getElementById('content-portfolio');
	const divContact = document.getElementById('content-contact');

	
	function checkIfOpen() {
		let btnActive = document.querySelector('.active');
		if (btnActive) {
			btnActive.classList.remove('active');
		}
		let divOpen = document.querySelector('.open');
		if (divOpen) {
			divOpen.classList.remove('open');
			divOpen.classList.add('closed');
		}
	}

	function open(btn, div) {
		checkIfOpen();
		btn.classList.add('active');
		div.classList.remove('closed');
		div.classList.add('open');
	}

	btnHome.addEventListener('click', () => {
		open(btnHome, divHome);
		// console.log('open', btnHome, divHome);
	});

	btnAbout.addEventListener('click', () => {
		open(btnAbout, divAbout);
		// console.log('open', btnAbout, divAbout);
	});

	btnResumen.addEventListener('click', () => {
		open(btnResumen, divResumen);
		// console.log('open', btnResumen, divResumen);
	});

	btnPortfolio.addEventListener('click', () => {
		open(btnPortfolio, divPortfolio);
		// console.log('open', btnPortfolio, divPortfolio);
	});

	btnBlog.addEventListener('click', () => {
		open(btnBlog, divBlog);
		// console.log('open', btnBlog, divBlog);
	});

	btnContact.addEventListener('click', () => {
		open(btnContact, divContact);
		// console.log('open', btnContact, divContact);
	});

});

	