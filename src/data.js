// estas funciones son de ejemplo

// export const ghibliData = () => {
//   return 'ghibliData';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// export const filterDirector = (data, seleccionDirector) => {
//   const filtro = data.films.filter(x=>x.director.includes(seleccionDirector))
//   console.log(filtro)
// }

//AÚN NO ESTÁ TERMINADO
export const filterDirector = (data, propertyValue) => {
  const directors = data.filter(theDirector => theDirector.director === propertyValue);
  return directors;
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

//console.log(films[0].people[0].name); Esta es la ruta a un personaje 


//Función para filtrar personaje desde el array de películas.Que devuelva el array de personajes
//

export const filterCharacter = (films) => {
  const characters = [];

  for (const film of Object.values(films)) {
    for (const character of film.people) {
      characters.push({ name: character.name, img: character.img });
      
    }
  }

  return characters;

};



// export const filterDirector = (data, propertyValue) => {

//   const directors = data.filter(director => {
//     data.director === propertyValue

//   })
//   return directors;
// };

// console.log()


// export const filterCharacter = (data, propertyValue) => {

//   return data.filter(people =>{
//     film.people.name === propertyValue
//   })

// }

// console.log(filterCharacter(characters, 'name'));

//Devuelve la lista de localidades en la película (name + img)
export const filterLocalities = (films) => {
  const localities = [];

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
