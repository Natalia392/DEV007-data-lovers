// eslint-disable-next-line no-unused-vars
import {filterDirector, filterMovie, filterCharacter} from './data.js'; // importa la función...
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);



//------------SECCIÓN CONSTANTES de LA DATA

const ghibliData = data;

const films = data.films; //declaramos la constante que nos guarda (o accede a) las películas
console.log(films[0].people[0].name);

console.log(ghibliData);
console.log(filterDirector(films, 'Hayao Miyazaki')); //sigue sin funcionarnos 
console.log(filterMovie(films,'Castle in the Sky'));


const characters = filterCharacter(films);
console.log(characters);


//------------SECCIÓN CONSTANTES DE INTERACCIÓN CON DOM

const dataBaseContainer = document.getElementById('database-container'); //Declaración de la variable que contendra los elementos a insertar en el hmtl

const searchButton = document.getElementById('search-button'); //Constante del botón de búsqueda

// eslint-disable-next-line no-unused-vars
const filmButton = document.getElementById('film-button'); //constante del botón de películas

// eslint-disable-next-line no-unused-vars
const charButton = document.getElementById('character-button'); //Constante del botón de personajes

// eslint-disable-next-line no-unused-vars
const directorButton = document.getElementById('director-button'); //Constante del botón de directores


//------------LA CONSTANTE PARA OCULTAR LA SECCIÓN DE BIENVENIDA
const hideWelcome = document.querySelector('.welcome'); //Declaramos constante que guarda la sección welcome
hideWelcome.style.display = 'none'; //ocultamos sección welcome



//Se inicializa con el click
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  //console.log('hihihi');



});

//botón de personajes
charButton.addEventListener('click', (event) => {
  event.preventDefault();
  const characters = filterCharacter(films);
  console.log(characters);

});

//-----------------USAR FOREACH PARA IMPLEMENTAR DATA DE LAS PELÍCULAS EN EL CONTENEDOR DE DATABASE

//Meter este forEach dentro de una función (que hay que crear), por ejemplo 
// function moviesDisplay () => 

films.forEach(movie => {

  //Se crea el div que contendrá el título de cada película y su respectiva portada
  const movieDiv = document.createElement('div');

  //Se usar innerHTML para crear la estructura hmtl
  movieDiv.innerHTML += 
  `<h4 class="movie-title" id="${movie.title}">${movie.title}<h4>
  <img class="movie-poster" src="${movie.poster}" id = "${movie.id}">`

  //se usa la función appendChild sobre el dataBaseContainer para introducir en éste el div recién creado
  dataBaseContainer.appendChild(movieDiv);

});

