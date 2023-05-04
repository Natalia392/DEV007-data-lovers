// eslint-disable-next-line no-unused-vars
import { ghibliData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(ghibliData, data);

//const film = data.result; este no nos funcionó, pero lo dejo como registro

//declaramos la constante que nos guarda (o accede a) las películas
const movie = data.films;

//declaramos la constante que nos guarda (o accede), desde las películas, al director
// eslint-disable-next-line no-unused-vars
const director = data.films.director;

const dataBaseContainer = document.getElementById('database-container'); //Declaración de la variable que contendra los elementos a insertar en el hmtl

let movieAndDirector = '';
//Usamos un ciclo for para recorrer el array de películas 
for(let i = 0; i < movie.length; i++) {
//le pedimos que nos indique los títulos de las películas
  movie[i].title;

  movieAndDirector = 'The movie ' + movie[i].title +' is directed by '+ movie[i].director;
  console.log(movieAndDirector);
  
  const movieList = document.createElement('li'); //crear constante que cree el elemento de lista

  const moviePoster = document.createElement('img'); //crear constante que cree las imágenes

  moviePoster.src = movie[i].poster;

  movieList.textContent = movieAndDirector;

  dataBaseContainer.appendChild(movieList);
  dataBaseContainer.appendChild(moviePoster);

}



