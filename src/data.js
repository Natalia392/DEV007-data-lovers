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


export const filterDirector = (data, propertyValue) => {
  const directors = data.filter(theDirector => theDirector.director === propertyValue);
  return directors;
};

export const filterMovie = (data, propertyValue) => {
  const films = data.filter(movie => movie.title === propertyValue);
  return films;
};

//console.log(films[0].people[0].name); Esta es la ruta a un personaje 


//Función para filtrar personaje desde el array de películas.Que devuelva el array de personajes
//
export const filterCharacter = (films) => {
  
  //Indico que characters es un array
  const characters = [];

  for (const film of Object.values(films)) {
    for (const character of film.people) {
      characters.push(character.name);
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