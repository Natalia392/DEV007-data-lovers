// estas funciones son de ejemplo

export const ghibliData = () => {
  return 'ghibliData';
};


export const filterCharacter = (films) => {
  const characters = [];

  for (const film of Object.values(films)) {
    for (const character of film.people) {
      characters.push({ name: character.name, img: character.img, gender: character.gender, age: character.age, eye_color: character.eye_color, hair_color: character.hair_color, specie: character.specie});
      
    }
  }

  return characters;
};

//Devuelve la lista de localidades en la película (name + img)
export const filterLocalities = (films) => {
  const localities = [];
  //Recorre el array films extrae su llave-valor y lo almacena en film
  for (const filmObjects of Object.values(films)) {
    //recorre array locations almacena su llave-valor en localityObjects
    for (const localityObjects of filmObjects.locations) {
    //Se va sumando al array localities los datos que encuentra sefun lo solicitado (name + img)
      localities.push({ name: localityObjects.name, img: localityObjects.img, climate: localityObjects.climate, terrain: localityObjects.terrain, surface_water: localityObjects.surface_water });
    }
  }
  console.log(localities);
  return localities;
};

//Para obtener array de nombres de directores no repetidos
export const filterDirector = (films) => {
  // Se declara array vacio
  const directors = [];
  //Se recorre el array films para ubicar cada film
  for (const film of films) {
    //Accedemos al valor de director entrando a la constante film.director
    const director = film.director;
    //Preguntamos si el director no está en el array preguntando por su índice. 
    if (directors.indexOf(director) === -1) {
      //Si lo anterior se cumple entonces lo añade al array
      directors.push(director);
    }
  }
  //Devuelve el array con los nombres sin repetir
  return directors;
};

//Ordenar alfabéticamente
export const orderMovies = (order) =>{
  films.sort(function (a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (order === "asc") {
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
    } else if (order === "desc") {
      if (titleA > titleB) return -1;
      if (titleA < titleB) return 1;
    }
    return 0;
  });
}
/*export const orderData = (films) =>{
  function orderA-Z(order) {
    films.sort(function (a, b) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (order === "asc") {
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
      } else if (order === "desc") {
        if (titleA > titleB) return -1;
        if (titleA < titleB) return 1;
      }
      return 0;
    });
  }
}
*/
/*export const filterDirector = (films) => {
 const directorNames = 
 films.filter((directors) => directors.indexOf(films[director]) === -1) 
 console.log(directorNames);
};*/

/*export const anotherExample = () => {
  return 'OMG';
};
*/
/*export const filterMovie = (data, propertyValue) => {
  const films = data.filter(movie => 
    movie.title === propertyValue);
    return films;
  
};
console.log(filterMovie, propertyValue);*/

/*export const filtrarDirector = (data, seleccionDirector) => {
  const filtro = data.ghibli.filter(x=>x.director.toLowerCase().includes(seleccionDirector))
  console.log(filtrarDirector)
}*/

//films[0].people[0].name
//búsqueda de película por título
export const searchByTitle = (data, propertyValue) => {
  const films = data.filter(movie => movie.title.toLowerCase() === propertyValue.toLowerCase());
  return films;
};


//Mostrar personaje según búsqueda
export const searchCharacterByName = (data, propertyValue) => {
  const characterByName = data.filter(characterName => characterName.name.toLowerCase() === propertyValue.toLowerCase());
  return characterByName;
};

//Mostrar localidad al buscar por nombre en input
export const searchLocationByName = (data, propertyValue) => {
  const locationByName = data.filter(locationName => locationName.name.toLowerCase() === propertyValue.toLowerCase());
  return locationByName; 
}
