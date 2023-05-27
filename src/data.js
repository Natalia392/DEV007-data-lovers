// estas funciones son de ejemplo
//-----------------------------FILTRAR CHARACTERS
export const filterCharacter = (films) => {
  //se declara character como array vacío para pushearle los que vaya encontrando
  const characters = [];
  //Recorre el array films extrae su llave-valor y lo almacena en film
  for (const film of Object.values(films)) {
    //Recorre cada character contenido en people
    for (const character of film.people) {
      //Añade al array de characters un objeto con las propiedades solicitadas
      characters.push({ name: character.name, img: character.img, gender: character.gender, age: character.age, eye_color: character.eye_color, hair_color: character.hair_color, specie: character.specie });

    }
  }
  //Devuelve el array de characters
  return characters;
};
//------------------------------FILTRAR LOCALIDADES
//Devuelve la lista de localidades en la película (name + img)
export const filterLocalities = (films) => {
  const localities = [];
  //Recorre el array films extrae su llave-valor y lo almacena en film
  for (const filmObjects of Object.values(films)) {
    //recorre array locations almacena su llave-valor en localityObjects
    for (const localityObjects of filmObjects.locations) {
      //Se va sumando al array localities los datos que encuentra segun lo solicitado (name + img)
      localities.push({ name: localityObjects.name, img: localityObjects.img, climate: localityObjects.climate, terrain: localityObjects.terrain, surface_water: localityObjects.surface_water });
    }
  }
  //console.log(localities);
  return localities;
};
//------------------------------FILTRAR DIRECTORES
//Para obtener array de nombres de directores no repetidos
export const filterDirector = (films) => {
  // Se declara array vacio
  const directors = [];
  //Se recorre el array films para ubicar cada film
  for (const film of films) {
    //Accedemos al valor de director entrando a la constante film.director
    const director = film.director;
    //Preguntamos por la existencia dek director en el array, si no lo encuentra en el índice entonces lo añade al array
    if (directors.indexOf(director) === -1) {
      //Si lo anterior se cumple entonces lo añade al array
      directors.push(director);
    }
  }
  //Devuelve el array con los nombres sin repetir
  return directors;
};


//------------------------------------Ordenar alfabéticamente
export function orderDataAZ(data, order) {
  const orderedData = data.sort(function (a, b) {
    //Convirtiendo a mayúsculas los title por sensibilidad de unicode
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    //Si el title a es menor al b devuelve -1 para ordenar titleA primero
    if (titleA < titleB) {
      return -1;
    } else {//Si el title b es menor al a devuelve 1 para ordenar titleA despúes de b
      return 1;
    }
  });
  if (order === 'a-z') {
    //si select option es = a-z ordena ascendentemente
    return orderedData
  } else {
    //si select option es = z-a ordena descendentemente

    return orderedData.reverse();
  }
}
//-----------------------------------------FILTRO DE BÚSQUEDA PARA EL INPUT, TÍTULOS
export const searchByTitle = (data, propertyValue) => {
  //filtra según título encontrado sin importar mayusculas ni espacios. 
  const films = data.filter(movie => movie.title.toLowerCase().includes(propertyValue.toLowerCase()));
  //devuelve su encuentración
  return films;
};
//----------------------------------------CÁLCULO HUMANOS VS OTRAS ESPECIES
export const calcData = (films) => {
  //se llama a la funcion filterCharacter y se guarda su resultado en allCharacters
  const allCharacter = filterCharacter(films);
  //se crea humans para filtrar todos los characters con la propiedad specie valor 
  const humans = allCharacter.filter(character => character.specie === "Human")

  const noHumans = allCharacter.filter(character => character.specie !== "Human")
  const calcResult = "Existen " + humans.length + " personajes humanos y " + noHumans.length + " de otras especies";

  return calcResult
}

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



//Mostrar personaje según búsqueda
/*export const searchCharacterByName = (data, propertyValue) => {
  const characterByName = data.filter(characterName => characterName.name.toLowerCase() === propertyValue.toLowerCase());
  return characterByName;
};

//Mostrar localidad al buscar por nombre en input
export const searchLocationByName = (data, propertyValue) => {
  const locationByName = data.filter(locationName => locationName.name.toLowerCase() === propertyValue.toLowerCase());
  return locationByName; 
} */


//