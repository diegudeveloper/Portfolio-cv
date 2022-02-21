"use strict";
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

	const btnBlog01 = document.getElementById('btn_B01');
	const divB01 = document.getElementById('content_blog_01');
	const btnBlog02 = document.getElementById('btn_B02');
	const divB02 = document.getElementById('content_blog_02');


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

	btnBlog01.addEventListener('click', () => {
		open(btnBlog01,divB01 )
	});
	btnBlog02.addEventListener('click', () => {
		open(btnBlog02,divB02 )
	});
});





//Variable donde vas a recibir el dato
let data = undefined
//Variable donde vas a recibir el dato especifico
let commits = undefined
//Tu Token
let token = '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'
//Tu usuario
let username = 'diegudeveloper'
//Vamos a hacer una peticion de tipo POST y vamos a necesitar hacer una autenticación con GitHub
//Por eso en la peticion, vamos a enviar un HEADER con una llave llamada Authorization que por valor va a traer el token que nos dió GitHub
const headers = {
  'Authorization': `bearer ${token}`,
}

//Este body es un Query de GraphQL
//GraphQL es una tecnología que sirve para consultar datos básicamente
const body = {
  "query": `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                }
            }
        }
    }
}`

}
//Ahora llamamos el metodo fetch, con la URL, el metodo, el cuerpo de la peticion (body) y la cabecera (headers)
fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
  //Fetch funciona de forma asincrona y tiene por así decirlo 2 estados, uno es cuando ya se envió la peticion
  //El otro es cuando recibe la respuesta, el siguiente es el que confirma el envio de la peticion
  .then(res => res.json())
  //Verifica que no haya errores con un catch
  .catch((error) => {
    console.error("There is an error:", error)
  })
  //Si no hay errores sigue derecho al segundo estado, que vendría a ser cuando ya tenemos los datos
  //Normalmente es una respuesta ya serializada, por lo que no sería sino acceder a la propiedad data del objeto response
  .then((response) => {
	
    //Aca ya recibio la info
    console.info("Success:", response.data)
    data = response.data
    commits = response.data.user.contributionsCollection.contributionCalendar.totalContributions
  })
  .finally(() => {
    //Aca ya se terminó de procesar la promesa, en este punto, data y commits
    //ya están llenos con los valores del .then anterior
    //Aqui ya podrias hacer operaciones con esos valores

    console.log(`Hiciste ${commits} este último año`)
})