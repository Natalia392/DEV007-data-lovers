// eslint-disable-next-line no-unused-vars
import { filterCharacter, filterLocalities, filterDirector, orderDataAZ, searchByTitle } from '../src/data.js';


describe('filterCharacter', () => {
  it('es una función', () => {
    expect(typeof filterCharacter).toBe('function');
  });


  it("Debería retornar un array", () => {
    const result = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        "release_date": "1986",
        "rt_score": "95",
        "people": [
          {
            "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
            "name": "Pazu",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
            "gender": "Male",
            "age": "13",
            "eye_color": "Black",
            "hair_color": "Brown",
            "specie": "Human"
          },]
      }]
    expect(Array.isArray(filterCharacter(result, "Pazu"))).toStrictEqual(true);
  });

  /*it('no es null', () => {
    const result = filterCharacter()
    expect(result).not.toBeNull();
  });*/
});


describe('filterLocalities', () => {
  it('es una función', () => {
    expect(typeof filterLocalities).toBe('function');
  });

  it("Debería retornar un array", () => {
    const result = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        "release_date": "1986",
        "rt_score": "95",
        "locations": [
          {
            "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
            "name": "",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
            "climate": "TODO",
            "terrain": "TODO",
            "surface_water": "40",
            "residents": [
              "TODO"
            ]
          },
        ]
      }]
    expect(Array.isArray(filterLocalities(result, "Gondoa"))).toStrictEqual(true);
  });
  /*it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/
});


describe('filterDirector', () => {
  it('es una función', () => {
    expect(typeof filterDirector).toBe('function');
  });

  it("Debería retornar un array", () => {
    const result = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",

      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        "director": "Hayao Miyazaki",
      }
    ]
    expect(Array.isArray(filterDirector(result, "Hayao Miyazaki"))).toStrictEqual(true);
  });
  /*it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/
});


describe('searchByTitle', () => {
  it('es una función', () => {
    expect(typeof searchByTitle).toBe('function');
  });

  it("Debería retornar un array", () => {
    const result = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",

      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        "director": "Hayao Miyazaki",
      }
    ]
    expect(Array.isArray(filterDirector(result, "My Neighbor Totoro"))).toStrictEqual(true);
  });
  /*it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/
});


describe('orderDataAZ', () => {
  it('es una función', () => {
    expect(typeof orderDataAZ).toBe('function');
  });

  it("Debería retornar un array", () => {
    const result = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",

      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        "director": "Hayao Miyazaki",
      }
    ]
    expect(Array.isArray(filterDirector(result, "My Neighbor Totoro"))).toStrictEqual(true);

  });

  it('el orden retorna algo', () => {
    const result = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",

      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        "director": "Hayao Miyazaki",
      }
    ];
    expect(orderDataAZ(result)).toBeDefined();
  });

  it('debe ordenar un array de objetos de manera ascendente de acuerdo a su título', () => {
    const array =  [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
      },
      {
        "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        "title": "Princess Mononoke",
      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
      },
    ];
    const result = orderDataAZ(array, 'a-z');
    expect(result).toEqual( [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
      },
      {
        "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        "title": "Princess Mononoke",
      }
    ]);

  });

  it('debe ordenar un array de objetos de manera descendente de acuerdo a su título', () => {
    const array =  [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
      },
      {
        "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        "title": "Princess Mononoke",
      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
      },
    ];
    const result = orderDataAZ(array, 'z-a');
    expect(result).toEqual( [
      {
        "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        "title": "Princess Mononoke",

      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
      },
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
      }
    ]);
  });
});

describe('searchByTitle', () => {
  it('es una función', () => {
    expect(typeof searchByTitle).toBe('function');
  });

  it("Debería retornar un array", () => {
    const result = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",

      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        "director": "Hayao Miyazaki",
      }
    ]
    expect(Array.isArray(searchByTitle(result, "My Neighbor Totoro"))).toStrictEqual(true);
  });

  it("Debería devolver la película si le paso su título", () => {
    const arrayMovies = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",

      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        "director": "Hayao Miyazaki",
      }
    ]
    const result = searchByTitle(arrayMovies, 'Castle in the Sky');
    expect(result).toEqual( 
      [{
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",

      }]);
  });

});