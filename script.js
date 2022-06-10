"use strict";

	const flagsElement = document.getElementById("flags");
	const textsToChange = document.querySelectorAll("[data-section]");
	const toggle = document.getElementById("toggle");
	const containerMain = document.querySelector(".container-main");
	const btnswitch = document.querySelector('#switch');
	
	
	btnswitch.addEventListener('click', () => {
		document.body.classList.toggle('ligth');
		btnswitch.classList.toggle('activo')
		
		const imagenLigth = document.querySelector('.logo');
		const imagenDark = document.querySelector('.logoDark')

		if (imagenLigth.src.match("on")) {
			imagenLigth.src = 'assets/logo/Recurso33off.svg';
		} else {
			imagenLigth.src = 'assets/logo/Recurso35on.svg';
		}

		if (imagenDark.src.match("on")) {
			imagenDark.src = 'assets/logo/Recurso32off.png';
		} else {
			imagenDark.src = 'assets/logo/Recurso30on.png';
		};

	});

	const changeLanguage = async (language) => {
		const requestJson = await fetch(`lenguages/${language}.json`);
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


// juego
document.getElementById('player').addEventListener("mouseover",sumarPuntos);

let puntos = 0;
let tiempo = 60;
let necesarios = 30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    randNum =  Math.round(Math.random()*500);
    randNum2 =  Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop =randNum + "px";
    document.getElementById("player").style.marginLeft =randNum2 + "px";
    if (puntos == 30) {
 	   alert("ganaste");
    }
}


 function restarTiempo() {
 	tiempo--;
 	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
 	if (tiempo == 0) {
 		alert("perdiste maestro");
 		tiempo = 0;
 		puntos = 0;
 	}
}

setInterval(restarTiempo,1000);
// juego