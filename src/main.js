/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { filterCharacter, filterLocalities, filterDirector, searchCharacterByName, orderDataAZ } from './data.js'; // importa la función...
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

//----------SECCIÓN CONSTANTES DE INTERACCIÓN CON DOM

//------------------------------ELEMENTOS HTML DEL DOM

const dataBaseContainer = document.getElementById('database-container'); //Declaración de la variable que contendra los elementos a insertar en el hmtl
const directorBox = document.getElementById('director-box'); //Declaracion caja directores para lista
// eslint-disable-next-line no-unused-vars
const detailedInfo = document.getElementById('detailed-info'); //Para las tarjetas con info sobre películas, personajes y localidades

//------------------------------BOTONES

// eslint-disable-next-line no-unused-vars
const searchButton = document.getElementById('search-button'); //Constante del botón de búsqueda
const localityButton = document.getElementById('locality-button'); //constante del botón de localidades
const charButton = document.getElementById('character-button'); //Constante del botón de personajes
// eslint-disable-next-line no-unused-vars
const directorButton = document.getElementById('director-button'); //Constante del botón de directores
const moviesButton = document.getElementById('movies-button');
const welcomeButton = document.getElementById('welcome-button');
const searchInput = document.getElementById('search-input');
const musicButton = document.getElementById('sincara-button');
const orderButton = document.getElementById('order-select');


//------------OCULTAR Y MOSTRAR SECCIONES 
const welcomeSection = document.getElementById("welcome-page"); //Declaramos constante que guarda la sección welcome TENEMOS QUE MOVERLA AL BOTON QUE CORRESPONDA

const sortAreaSection = document.getElementById('sortArea');


//----------------------SECCIÓN FUNCIONES

//---- OCULTAR Y MOSTRAR
function hideWelcome() {
  sortAreaSection.style.display = 'block';
  welcomeSection.style.display = 'none';
}

function hideSortArea() {
  welcomeSection.style.display = 'block';
  sortAreaSection.style.display = 'none';
}
function hideDirector() {
  directorBox.style.display = 'none'
  dataBaseContainer.style.display = 'flex'
}
function showDirector() {
  dataBaseContainer.style.display = 'none'
  directorBox.style.display = 'block'
}

function playMusic() {
  const audio = new Audio("./img/music/ghiplipedia-song.mp3");
  audio.play()
}
//showDirector();
//Llamamos enseguida a función ocultar sort area, para que sólo muestre el welcome
hideSortArea();


//---- FUNCIONES MOSTRADORAS 


//Función para mostrar películas
function moviesDisplay() {
  hideWelcome();
  hideDirector();
  //Vaciamos el contenedor de contenido 

  dataBaseContainer.innerHTML = '';

  films.forEach(movie => {

    //Se crea el div que contendrá el título de cada película y su respectiva portada
    const movieDiv = document.createElement('div');

    //Se usar innerHTML para crear la estructura html
    movieDiv.innerHTML +=
      `<h4 class="movie-title" id="${movie.title}">${movie.title}<h4>
    <img class="movie-poster" src="${movie.poster}" id = "${movie.id}">`

    //se usa la función appendChild sobre el dataBaseContainer para introducir en éste el div recién creado
    dataBaseContainer.appendChild(movieDiv);

    //Constante para que se generen las imágenes como 
    const movieCard = document.getElementById(movie.id);
    console.log(movieCard);
    movieCard.addEventListener('click', () => {
      const cardInfo = document.createElement('div');
      dataBaseContainer.innerHTML = '';
      cardInfo.innerHTML = `
      <div class="movie-div1">
      <img class="movie-poster-card" src="${movie.poster}" alt="${movie.title}"><br>
      <div class="movie-info">
      <h3>${movie.title}</h3><br>
      <p>Director: ${movie.director}</p>
      <p>Producer: ${movie.producer}</p>
      <p>Release_date: ${movie.release_date}</p>
      <p>rt_score: ${movie.rt_score}</p>
      </div>
      </div>
      <div class="movie-div3">
      <p>Description: ${movie.description}</p>
    `
      dataBaseContainer.appendChild(cardInfo);

    })
  })

  //selector de orden AZ
  orderButton.addEventListener('change', () => {

    const orderType = orderButton.value;

    //dataBaseContainer.innerHTML = '';


    const resultOrderData = orderDataAZ(films, orderType);
    // console.log(orderDataAZ(films, orderType));
    // console.log(resultOrderData);

    dataBaseContainer.innerHTML = '';

    resultOrderData.forEach(movie => {

      //Se crea el div que contendrá el título de cada película y su respectiva portada
      const movieDiv = document.createElement('div');

      //Se usar innerHTML para crear la estructura html
      movieDiv.innerHTML +=
        `<h4 class="movie-title" id="${movie.title}">${movie.title}<h4>
          <img class="movie-poster" src="${movie.poster}" id = "${movie.id}">`

      //se usa la función appendChild sobre el dataBaseContainer para introducir en éste el div recién creado
      dataBaseContainer.appendChild(movieDiv);
      //Constante para que se generen las imágenes como 
      const movieCard = document.getElementById(movie.id);
      console.log(movieCard);
      movieCard.addEventListener('click', () => {
        const cardInfo = document.createElement('div');
        dataBaseContainer.innerHTML = '';
        cardInfo.innerHTML = `
      <div class="movie-div1">
      <img src="${movie.poster}" alt="${movie.title}">
      </div>
      <div class="movie-div2">
      <h3>${movie.title}</h3>
      <p>Director: ${movie.director}</p>
      <p>Producer: ${movie.producer}</p>
      <p>Release date: ${movie.release_date}</p>
      <p>Rating score: ${movie.rt_score}</p>
      </div>
      <div class="movie-div3">
      <p>Description: ${movie.description}</p>
    `
        dataBaseContainer.appendChild(cardInfo);

      })

    });
  })
}


//Función para mostrar personajes
function characterDisplay() {

  hideWelcome();
  hideDirector();
  //Vaciar contenedor
  dataBaseContainer.innerHTML = "";

  //Recorre los characters
  characters.forEach((character) => {
    // Crear un div para cada personaje
    const charDiv = document.createElement('div');
    console.log(character);
    // Inyectar el HTML para mostrar el nombre y la imagen del personaje
    charDiv.innerHTML = `
      <h4 class="character-name">${character.name}</h4>
      <input type="image" id="${character.name}"class="character-img" src="${character.img}" alt="${character.img}">
      <p>Género: ${character.gender}</p>
      `;

    // Agregar el div del personaje al databaseContainer
    dataBaseContainer.appendChild(charDiv);
    const characterCard = document.getElementById(character.name);
    console.log(characterCard);
    characterCard.addEventListener('click', () => {
      console.log(character);
      const cardInfo = document.createElement('div');
      dataBaseContainer.innerHTML = '';
      cardInfo.innerHTML = `
      <div class="movie-div1">
      <img class="movie-poster-card" src="${character.img}" alt="${character.name}">
      <div class ="movie-info">
      <h3>${character.name}</h3>
      <p>Género: ${character.gender}</p>
      <p>Edad: ${character.age}</p>
      <p>Color de ojos: ${character.eye_color}</p>
      <p>Color de cabello: ${character.hair_color}</p>
      <p>Especie: ${character.specie}</p>
      </div>
      </div>
    `
      dataBaseContainer.appendChild(cardInfo);

    })
  });
}



//Función para mostrar localidades
function localitiesDisplay() {
  hideWelcome();
  hideDirector();
  //Vaciar contenedor
  dataBaseContainer.innerHTML = "";
  //Declara funcion con parametro
  //const localities = filterLocalities(films);
  //Recorre los characters
  console.log(localities);
  localities.forEach((location) => {
    //Crea el div
    const localDiv = document.createElement('div');//establecer su lugar desde html para darle una clase de card
    //Inyecta html name + img
    localDiv.innerHTML = `
            <h4 class="local-name">${location.name}</h4>
            <input type="image" id="${location.name}"class="local-img" src="${location.img}" id=${location.name}>
          `;
    //Se envía al div
    dataBaseContainer.appendChild(localDiv);
    const locationCard = document.getElementById(location.name);
    console.log(locationCard);
    locationCard.addEventListener('click', () => {
      const cardInfo = document.createElement('div');
      dataBaseContainer.innerHTML = '';
      cardInfo.innerHTML = `
      <div class=".movie-poster-card">
      <img src="${location.img}" alt="${location.name}">
      <div class="movie-info">
      <h3>${location.name}</h3>
      <p>Climate: ${location.climate}</p>
      <p>Terrain: ${location.terrain}</p>
      <p>Surface water: ${location.surface_water}</p>
      </div>
      </div>
    `
      dataBaseContainer.appendChild(cardInfo);

    })
    //se muestra en consola
    //console.log(filterLocalities(films.location))
  });
}

//_-----------------FILTERDIRECTOR TERMINAR Y FACTORIZAR

directorButton.addEventListener('click', (event) => {
  event.preventDefault();
  hideWelcome();
  showDirector()
  //Vaciar contenedor
  directorBox.innerHTML = "";
  //Declara funcion con parametro
  //const arrayDir = directors.split();
  console.log(directors);
  //const arrayDirectors = directors.split(',')
  const tituloDirector = document.getElementById('director-list');
  tituloDirector.innerHTML = "Director";
  directors.forEach((director) => {
    //Crea el div
    directorBox.innerHTML += `
    <li class="director-name" id="${director}<br>">${director}</li>`

    /*  dataBaseContainer.innerHTML += `
    <li class="director-name" id="${element.director}<br>">${element.director}</li>
  `;
    //Se envía al div*/
    //dataBaseContainer.appendChild(tituloDirector);

  });
});



//-----------------------------------------INICIALIZACIÓN DE BOTONES 
//Musica

musicButton.addEventListener('click', playMusic)


//Escucha botón inicio

welcomeButton.addEventListener('click', (event) => {
  event.preventDefault();
  hideSortArea();
});

//Escucha botón películas
moviesButton.addEventListener('click', (event) => {
  event.preventDefault();
  moviesDisplay();
});

//Escucha botón personajes
charButton.addEventListener('click', (event) => {
  event.preventDefault();
  characterDisplay();
});

//Escucha el botón de localidades
localityButton.addEventListener('click', (event) => {
  event.preventDefault(event);
  localitiesDisplay();
});


//DIRECTORES (botón)

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









