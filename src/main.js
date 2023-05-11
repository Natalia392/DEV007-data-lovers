// eslint-disable-next-line no-unused-vars
import { ghibliData, filterCharacter, filterLocalities, filterDirector, filterMovie } from './data.js'; // importa la función...
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);



//------------SECCIÓN CONSTANTES de LA DATA


const films = data.films; //declaramos la constante que nos guarda (o accede a) las películas
console.log(films[0].people[0].name);

console.log(ghibliData);
console.log(filterDirector(films, 'Hayao Miyazaki')); //sigue sin funcionarnos 
console.log(filterMovie(films, 'Castle in the Sky'));

//const film = data.result; este no nos funcionó, pero lo dejo como registro


//------------SECCIÓN CONSTANTES DE INTERACCIÓN CON DOM

const dataBaseContainer = document.getElementById('database-container'); //Declaración de la variable que contendra los elementos a insertar en el hmtl

// eslint-disable-next-line no-unused-vars
const searchButton = document.getElementById('search-button'); //Constante del botón de búsqueda

// eslint-disable-next-line no-unused-vars
const localityButton = document.getElementById('locality-button'); //constante del botón de localidades

// eslint-disable-next-line no-unused-vars
const charButton = document.getElementById('character-button'); //Constante del botón de personajes

// eslint-disable-next-line no-unused-vars
const directorButton = document.getElementById('director-button'); //Constante del botón de directores


//------------LA CONSTANTE PARA OCULTAR LA SECCIÓN DE BIENVENIDA
const hideWelcome = document.querySelector('.welcome'); //Declaramos constante que guarda la sección welcome
hideWelcome.style.display = 'none'; //ocultamos sección welcome


//INTERMINADO

//Se inicializa con el click
charButton.addEventListener('click', (event) => {
  event.preventDefault();
  //Vaciar contenedor
  dataBaseContainer.innerHTML = "";
  //Declara funcion con parametro
  const characters = filterCharacter(films);
  //Recorre los characters
  characters.forEach((character) => {
    // Crear un div para cada personaje
    const charDiv = document.createElement('div');

    // Inyectar el HTML para mostrar el nombre y la imagen del personaje
    charDiv.innerHTML = `
        <h4 class="character-name" id="${character.name}">${character.name}</h4>
        <img class="character-img" src="${character.img}" alt="${character.img}">
      `;

    // Agregar el div del personaje al databaseContainer
    dataBaseContainer.appendChild(charDiv);
  });
});

localityButton.addEventListener('click', (event) => {
  event.preventDefault(event);

  //Vaciar contenedor
  dataBaseContainer.innerHTML = "";
  //Declara funcion con parametro
  const localities = filterLocalities(films);
  //Recorre los characters
  localities.forEach((location) => {
    //Crea el div
    const localDiv = document.createElement('div');
    //Inyecta html name + img
    localDiv.innerHTML = `
          <h4 class="local-name" id="${location.name}">${location.name}</h4>
          <img class="local-img" src="${location.img}" id=${location.name}>
        `;
    //Se envía al div
    dataBaseContainer.appendChild(localDiv);
  });
  //se muestra en consola
  console.log(filterLocalities(films.location))
});
//_---------------------------------------------------------------------------------------------

directorButton.addEventListener('click', (event) => {
  event.preventDefault();
  const directoresFilter = filterDirector(films, 'Hayao Miyazaki')
  console.log(directoresFilter);

});


//-----------------USAR FOREACH PARA IMPLEMENTAR DATA DE LAS PELÍCULAS EN EL CONTENEDOR DE DATABASE


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
