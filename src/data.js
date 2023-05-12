// estas funciones son de ejemplo

export const ghibliData = () => {
  return 'ghibliData';
};


export const filterCharacter = (films) => {
  const characters = [];

  for (const film of Object.values(films)) {
    for (const character of film.people) {
      characters.push({ name: character.name, img: character.img });
      
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
      localities.push({ name: localityObjects.name, img: localityObjects.img });
    }
  }
console.log(localities);
  return localities;
};

export const filterDirector = (films) => {
  const directores = [];

  for (const film of Object.values(films)) {
    for (const directors of film.director) {
      directores.push({ name: directors.name});
    }
  }

  return directores;
};

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



export const filterMovie = (data, propertyValue) => {
  const films = data.filter(movie => movie.title === propertyValue);
  return films;
};

//Devuelve la lista de personajes
  


//funcion para mostrar personaje según película

//
