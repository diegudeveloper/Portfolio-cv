"use strict";

	const flagsElement = document.getElementById("flags");
	const textsToChange = document.querySelectorAll("[data-section]");
	const toggle = document.getElementById("toggle");
	const containerMain = document.querySelector(".container-main");

	const containerabout = document.getElementById("content-about");
	const containerLine = document.getElementById("container_title");
	const interes = document.querySelector(".interes");
	const interesLine = document.querySelector(".titleLine");
	const inte = document.querySelector(".inte");
	const inte1 = document.querySelector(".inte1");
	const inte2 = document.querySelector(".inte2");

	const containerResumen = document.getElementById("content-resumen");
	const titleLineEstudios = document.querySelector(".titleLineEstudios");
	const titleEstudios = document.querySelector(".titleEstudios");
	const titleCursos = document.querySelector(".titleCursos");
	const titleLineCursos = document.querySelector(".titleLineCursos");
	const university = document.querySelector(".university");
	const university1 = document.querySelector(".university1");
	const university2 = document.querySelector(".university2");
	const university3 = document.querySelector(".university3");
	const university4 = document.querySelector(".university4");
	const university5 = document.querySelector(".university5");
	const university6 = document.querySelector(".university6");
	const where = document.querySelector(".where");
	const description = document.querySelector(".description");
	const certifi = document.querySelector(".certifi");
	
	


	
	const containerPortafolio = document.getElementById("content-portfolio");
	const containerBlog = document.getElementById("content-blog");
	const containerContact = document.getElementById("content-contact");
	const title = document.querySelector("#title");
	const textAbout = document.querySelector(".text-about");
	const infMe = document.querySelector(".infMe");
	const infMe1 = document.querySelector(".infMe1");
	const infMe2 = document.querySelector(".infMe2");
	
	toggle.onclick = function() {
		toggle.classList.toggle("active"),
		containerMain.classList.toggle("active");
		containerabout.classList.toggle("active");
			containerLine.classList.toggle("active");
			interes.classList.toggle("active");
			interesLine.classList.toggle("active");
			inte.classList.toggle("active");
			inte1.classList.toggle("active");
			inte2.classList.toggle("active");
			
		containerResumen.classList.toggle("active");
			titleLineEstudios.classList.toggle("active");
			titleEstudios.classList.toggle("active");
			titleCursos.classList.toggle("active");
			titleLineCursos.classList.toggle("active");
			university.classList.toggle("active");
			where.classList.toggle("active");
			description.classList.toggle("active");
			certifi.classList.toggle("active");
			university.classList.toggle("active");
			university1.classList.toggle("active");
			university2.classList.toggle("active");
			university3.classList.toggle("active");
			university4.classList.toggle("active");
			university5.classList.toggle("active");
			university6.classList.toggle("active");
			

		containerPortafolio.classList.toggle("active");
		containerBlog.classList.toggle("active");
		containerContact.classList.toggle("active");
		title.classList.toggle("active");
		textAbout.classList.toggle("active");
		infMe.classList.toggle("active");
		infMe1.classList.toggle("active");
		infMe2.classList.toggle("active");
		
	}

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

	