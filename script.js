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

	for (const textToChange of textsToChange) {
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

//#region juego

// CONSTANTES
const iniciar = document.getElementById("btn-juego"),
	gamePlayButton = document.getElementById('game-play'),
	player = document.getElementById('player'),
	points = document.getElementById("puntos"),
	timer = document.getElementById("tiempo"),
	closeGame = document.getElementById('close-game')
// VARIABLES
let puntos = 0,
	tiempo = 0,
	necesarios = 30,
	gameClock
// INICIALIZANDO TEXTOS
points.innerHTML = `Puntos: <b>${puntos}/ ${necesarios}</b>`
timer.innerHTML = `Tiempo: ${tiempo}`

// PLAY BUTTON
gamePlayButton.addEventListener('pointerdown', () => {
	// comenzar el juego
	StartTimer()
	puntos = 0
	tiempo = 60
	points.innerHTML = `Puntos: <b>${puntos}/ ${necesarios}</b>`
	timer.innerHTML = `Tiempo: ${tiempo}`
	player.addEventListener("pointerdown", sumarPuntos);
})

closeGame.addEventListener('pointerdown', e => {
	GameOver()
})

function sumarPuntos() {
	if (puntos >= 30) {
		console.log("ganaste");
		GameOver()
		return
	}
	puntos++;
	points.innerHTML = `Puntos: <b>${puntos}/ ${necesarios}</b>`;

}

function MoveObjective() {
	let randNum = Math.round(Math.random() * 500);
	let randNum2 = Math.round(Math.random() * 500);
	player.style.marginTop = randNum + "px";
	player.style.marginLeft = randNum2 + "px";
}

function StartTimer() {
	gameClock = setInterval(() => {
		if (tiempo <= 0) {
			console.log("perdiste maestro");
			tiempo = 0;
			puntos = 0;
			GameOver(gameClock)
			return
		}
		tiempo--;
		timer.innerHTML = `Tiempo: ${tiempo}`;
		MoveObjective()
	}, 1000);
}

function StopTimer() {
	if (gameClock) {
		clearInterval(gameClock)
	}
}

function GameOver() {
	player.removeEventListener('pointerdown', sumarPuntos, false)
	StopTimer()
}

//#endregion juego