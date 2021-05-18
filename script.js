/*const btnAboutme = document.getElementById("btn-aboutme");
    btnAboutme.addEventListener("click", sliderAbautMe);
    btnHome = document.getElementById("btn-home");
    btnHome.addEventListener("click", sliderhome);
    btnResumen = document.getElementById("btn-resume");
    btnResumen.addEventListener("click", sliderresumen);

function sliderAbautMe () {
    let infoabout = document.getElementById("infabout");
    //infoabout.style.transform = "translatex(0)"
    infoabout.style.left=(0);
}

function sliderhome () {
    let infohome = document.getElementById("infohome");
    //infoabout.style.transform = "translatex(0)"
    infohome.style.left=(100);
}
function sliderresumen () {
    let inforesumen = document.getElementById("inforesumen");
    //infoabout.style.transform = "translatex(0)"
    inforesumen.style.left=(0);
}*/

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
	const divBlog = document.getElementById('content-about');
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
		console.log('open', btnHome, divHome);
	});

	btnAbout.addEventListener('click', () => {
		open(btnAbout, divAbout);
		console.log('open', btnAbout, divAbout);
	});

	btnResumen.addEventListener('click', () => {
		open(btnResumen, divResumen);
		console.log('open', btnResumen, divResumen);
	});

	btnPortfolio.addEventListener('click', () => {
		open(btnPortfolio, divPortfolio);
		console.log('open', btnPortfolio, divPortfolio);
	});

	btnBlog.addEventListener('click', () => {
		open(btnBlog, divBlog);
		console.log('open', btnBlog, divBlog);
	});

	btnContact.addEventListener('click', () => {
		open(btnContact, divContact);
		console.log('open', btnContact, divContact);
	});
});