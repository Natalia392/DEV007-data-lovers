// eslint-disable-next-line no-unused-vars
import { ghibliData } from './data.js'; // importa la función...
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(ghibliData, data);

//const film = data.result; este no nos funcionó, pero lo dejo como registro

//------------SECCIÓN CONSTANTES QUE TRAEN LA DATA

//declaramos la constante que nos guarda (o accede a) las películas
const movie = data.films;
console.log(movie);

//------------SECCIÓN CONSTANTES DE INTERACCIÓN CON DOM

const dataBaseContainer = document.getElementById('database-container'); //Declaración de la variable que contendra los elementos a insertar en el hmtl

const hideWelcome = document.querySelector('.welcome'); //Declaramos constante que guarda la sección welcome
hideWelcome.style.display = 'none'; //ocultamos sección welcome



//let movieAndDirector = '';
//Usamos un ciclo for para recorrer el array de películas y agregar al dom películas y posters
for(let i = 0; i < movie.length; i++) {

  const theFilm = movie[i];//le pedimos que nos indique los títulos de las películas
  console.log(theFilm);

  const filmDirector = movie[i].director; //le pedimos que nos traiga los directores de las películas
  console.log(filmDirector);
  //movieAndDirector = 'The movie ' + movie[i].title +' is directed by '+ movie[i].director; //Concatenar la data (PENDIENTE, estructurar para presentar al usuario)
  //console.log(movieAndDirector);



  //Declaro la constante que genera el div
  const movieDiv = document.createElement('div');
  movieDiv.innerHTML += 
  `<h4 class = "movie-box" id = "${theFilm.title}"> ${theFilm.title} <h4>
  <img class="movie-poster" src="${theFilm.poster}" id = "${theFilm.id}">`

  dataBaseContainer.appendChild(movieDiv);
  
  //const movieList = document.createElement('li'); //crear constante que cree el elemento de lista

  //const moviePoster = document.createElement('img'); //crear constante que cree las imágenes

  //dataBaseContainer.classList.add("movie-list"); //Dándole una clase a la lista de películas
  //console.log(dataBaseContainer.className);

  //const posterGallery = document.createElement('div'); //creamos un div para cada película y director
  
  //posterGallery.classList.add('poster-gallery'); //Asignamos una clase para el div de película y director
  
  //moviePoster.src = movie[i].poster; //se extrae el src de movie poster de cada película

  //moviePoster.style.maxWidth = '200px'; //Configuramos tamaño de posters

  //movieList.textContent = movieAndDirector; //para mostrar en pantalla el título y director de la película

  //dataBaseContainer.appendChild(movieList); //Crea la lista de películas al DOM

  //dataBaseContainer.appendChild(moviePoster); //Agregamos los poster al DOM

  //dataBaseContainer.appendChild(posterGallery);

}



