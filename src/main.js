// eslint-disable-next-line no-unused-vars
import { ghibliData, filterCharacter, filterLocalities, filterDirector } from './data.js'; // importa la función...
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//------------SECCIÓN CONSTANTES de LA DATA


const films = data.films; //declaramos la constante que nos guarda (o accede a) las películas

const directors = filterDirector(films);
console.log(directors);
const localities = filterLocalities(films);
const characters = filterCharacter(films);

//console.log(films);

/*console.log(searchByTitle(films, 'Castle in the Sky'));
console.log(searchByTitle(films, 'castle in the sky'));*/

//------------SECCIÓN CONSTANTES DE INTERACCIÓN CON DOM

const dataBaseContainer = document.getElementById('database-container'); //Declaración de la variable que contendra los elementos a insertar en el hmtl



//------------OCULTAR Y MOSTRAR SECCIONES 
const welcomeSection = document.getElementById("welcome-page"); //Declaramos constante que guarda la sección welcome TENEMOS QUE MOVERLA AL BOTON QUE CORRESPONDA


const sortAreaSection = document.getElementById('sortArea');


function hideWelcome() {
  sortAreaSection.style.display = 'block';
  welcomeSection.style.display = 'none';
}

function hideSortArea() {
  welcomeSection.style.display = 'block';
  sortAreaSection.style.display = 'none';
}
hideSortArea();

//---------BOTONES
// eslint-disable-next-line no-unused-vars
const searchButton = document.getElementById('search-button'); //Constante del botón de búsqueda

const localityButton = document.getElementById('locality-button'); //constante del botón de localidades

const charButton = document.getElementById('character-button'); //Constante del botón de personajes

// eslint-disable-next-line no-unused-vars
const directorButton = document.getElementById('director-button'); //Constante del botón de directores

const moviesButton = document.getElementById('movies-button');

const welcomeButton = document.getElementById('welcome-button');

const searchInput = document.getElementById('search-input');

//------------------FUNCIONES MOSTRADORAS 

//FUNCIÓN PARA MOSTRAR PELÍCULAS
function moviesDisplay() {
  hideWelcome();

  //Vaciamos el contenedor de contenido 

  dataBaseContainer.innerHTML = '';

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

}
//Función para mostrar personajes
function characterDisplay() {

  hideWelcome();

  //Vaciar contenedor
  dataBaseContainer.innerHTML = "";

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

}
//---FACTORIZACIÓN PENDIENTE
localityButton.addEventListener('click', (event) => {
  event.preventDefault(event);
  hideWelcome();

  //Vaciar contenedor
  dataBaseContainer.innerHTML = "";
  //Declara funcion con parametro
  //const localities = filterLocalities(films);
  //Recorre los characters
  console.log(localities);
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
  //console.log(filterLocalities(films.location))
});
//_-----------------FILTERDIRECTOR TERMINAR Y FACTORIZAR

directorButton.addEventListener('click', (event) => {
  event.preventDefault();
  hideWelcome();

  //Vaciar contenedor
  dataBaseContainer.innerHTML = "";
  //Declara funcion con parametro
  //const arrayDir = directors.split();
  console.log(directors);

  const tituloDirector = document.getElementById('director-list');
  tituloDirector.innerHTML = "Director";
  directors.forEach((director) => {
    //Crea el div

    dataBaseContainer.innerHTML += `
    <li class="director-name" id="${director}<br>">${director}</li><br>
  `;
    //Se envía al div
    dataBaseContainer.appendChild(tituloDirector);

  });
}
);


//-----------------USAR FOREACH PARA IMPLEMENTAR DATA DE LAS PELÍCULAS EN EL CONTENEDOR DE DATABASE


//botón de personajes
/*charButton.addEventListener('click', (event) => {
  event.preventDefault();
  const characters = filterCharacter(films);
  console.log(characters);

});*/

//-----------------------------------------INICIALIZACIÓN DE BOTONES 
moviesButton.addEventListener('click', () => {
  moviesDisplay();
});

charButton.addEventListener('click', (event) => {
  event.preventDefault();
  //cambia de sección para mostrar la sección que anida el database-container
  hideWelcome();

  //Declara funcion con parametro
  //const characters = filterCharacter(films);
  characterDisplay();

});
//LOCALIDADES
//DIRECTORES

searchInput.addEventListener('input', (event) => {
  // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
  let inputValue = event.target.inputValue

  // 2. check: if input exists and if input is larger than 0
  if (inputValue && inputValue.trim().length > 0) {
    // 3. redefine 'value' to exclude white space and change input to all lowercase
    inputValue = inputValue.trim().toLowerCase()
    // 4. return the results only if the value of the search is included in the person's name
    // we need to write code (a function for filtering through our data to include the search input value)
  } else {
    // 5. return nothing
    // Mostrar un mensaje para indicar que no se encuentra la información
  }
});
//se llama a la función moviesDisplay una vez que se hace click en el botón de películas.


welcomeButton.addEventListener('click', () => {
  hideSortArea();
});



