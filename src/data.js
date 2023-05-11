// estas funciones son de ejemplo

export const ghibliData = () => {
  return 'ghibliData';
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

/*export const filterDirector = (data, seleccionDirector) => {
  const filtro = data.films.filter(x=>x.director.includes(seleccionDirector))
  console.log(filtro)
}


export const filterMovie = (data, propertyValue) => {
  const films = data.filter(movie => movie.title === propertyValue);
  return films;
};
*/
export const filterCharacter = (films) => {
  let characters = [];

  for (const film of Object.values(films)) {
      for (const character of film.people) {
        characters.push({ name: character.name, img: character.img });
      
    }
  }

  return characters;
};

export const filterLocalities = (films) => {
  let localities = [];

  for (const film of Object.values(films)) {
      for (const locality of film.locations) {
        localities.push({ name: locality.name, img: locality.img });
      }
  }

  return localities;
};
//Devuelve la lista de personajes
  


//funcion para mostrar personaje según película

//