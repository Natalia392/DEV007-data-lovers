// estas funciones son de ejemplo

export const ghibliData = () => {
  return 'ghibliData';
};

// export const anotherExample = () => {
//   return 'OMG';
// };

export const filterDirector = (data, seleccionDirector) => {
  const filtro = data.films.filter(x=>x.director.includes(seleccionDirector))
  console.log(filtro)
}


export const filterMovie = (data, propertyValue) => {
  const films = data.filter(movie => movie.title === propertyValue);
  return films;
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