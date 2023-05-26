// eslint-disable-next-line no-unused-vars
import { filterCharacter, filterLocalities, filterDirector, orderDataAZ, searchByTitle } from '../src/data.js';


// eslint-disable-next-line no-unused-vars
const data = [
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
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      },
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
        "climate": "Dry",
        "terrain": "Hill",
        "surface_water": "0",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      {
        "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "name": "Satsuki Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
        "gender": "Female",
        "age": "11",
        "eye_color": "Dark Brown/Black",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
        "name": "Mei Kusakabe",
        "img": "https://i.pinimg.com/736x/53/17/7d/53177dd12c09b9ce9f2afffebe760b14--cartoon.jpg",
        "gender": "Female",
        "age": "4",
        "eye_color": "Brown",
        "hair_color": "Light Brown",
        "specie": "Human"
      },
    ],
    "locations": [
      {
        "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
        "name": "Kusakabe's House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
        "name": "Matsugo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      },
    ],
    "vehicles": []
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    "release_date": "1989",
    "rt_score": "96",
    "people": [
      {
        "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
        "name": "Kiki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Witch"
      },
      {
        "id": "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
        "name": "Jiji",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Cat"
      },

    ],
    "locations": [
      {
        "id": "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
        "name": "Ursula's Log Cabin",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
        "name": "Koriko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
        "climate": "Mild",
        "terrain": "Hill",
        "surface_water": "50",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "62346d33-caa0-4c17-8016-0aca56f3066b",
        "name": "Karikiya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e3/Majo002.jpg",
        "climate": "Mild",
        "terrain": "City",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "64a996aa-481e-4627-9624-ab23f59a05a9",
        "name": "Guchokipanya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "50",
        "residents": [
          {
            "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
            "name": "Osono"
          },
          {
            "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
            "name": "Fukuo"
          }
        ]
      }
    ],
    "vehicles": []
  }
]
// eslint-disable-next-line no-unused-vars
const dataCharacters = [
  {
    "name": "Pazu",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
    "gender": "Male",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Brown",
    "specie": "Human"
  },// [object Object] 
  {
    "name": "Lusheeta Toel Ul Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
    "gender": "Female",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Black",
    "specie": "Human"
  },// [object Object] 
  {
    "name": "Dola",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
    "gender": "Female",
    "age": "60",
    "eye_color": "Black",
    "hair_color": "Peach",
    "specie": "Human"
  },// [object Object] 
  {
    "name": "Satsuki Kusakabe",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
    "gender": "Female",
    "age": "11",
    "eye_color": "Dark Brown/Black",
    "hair_color": "Dark Brown",
    "specie": "Human"
  },// [object Object] 
  {
    "name": "Mei Kusakabe",
    "img": "https://i.pinimg.com/736x/53/17/7d/53177dd12c09b9ce9f2afffebe760b14--cartoon.jpg",
    "gender": "Female",
    "age": "4",
    "eye_color": "Brown",
    "hair_color": "Light Brown",
    "specie": "Human"
  },// [object Object] 
  {
    "name": "Kiki",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
    "gender": "Female",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Brown",
    "specie": "Witch"
  },// [object Object] 
  {
    "name": "Jiji",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
    "gender": "Male",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Black",
    "specie": "Cat"
  }]

const dataLocations = [
  {
    "name": "Gondoa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
    "climate": "TODO",
    "terrain": "TODO",
    "surface_water": "40"
  },// [object Object] 
  {
    "name": "Pazu's Mines",
    "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
    "climate": "Dry",
    "terrain": "Hill",
    "surface_water": "0"
  },// [object Object] 
  {
    "name": "Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
    "climate": "Continental",
    "terrain": "City",
    "surface_water": "40"
  },// [object Object] 
  {
    "name": "Kusakabe's House",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
    "climate": "Mild",
    "terrain": "River",
    "surface_water": "40"
  },// [object Object] 
  {
    "name": "Matsugo",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
    "climate": "Continental",
    "terrain": "River",
    "surface_water": "60"
  },// [object Object] 
  {
    "name": "Ursula's Log Cabin",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
    "climate": "TODO",
    "terrain": "TODO",
    "surface_water": "40"
  },// [object Object] 
  {
    "name": "Koriko",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
    "climate": "Mild",
    "terrain": "Hill",
    "surface_water": "50"
  },// [object Object] 
  {
    "name": "Karikiya",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e3/Majo002.jpg",
    "climate": "Mild",
    "terrain": "City",
    "surface_water": "30"
  },// [object Object] 
  {
    "name": "Guchokipanya",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
    "climate": "Continental",
    "terrain": "Hill",
    "surface_water": "50"
  }]

describe('filterCharacter', () => {

  it('es una función', () => {
    expect(typeof filterCharacter).toBe('function');
  });

  it("Debería retornar un array", () => {
    expect(Array.isArray(filterCharacter(data, "Pazu"))).toStrictEqual(true);
  });

  it("Debería retornar el array que contiene a un personaje", () => {
    expect(filterCharacter(data, "Pazu")).toEqual(dataCharacters);
  })

});


describe('filterLocalities', () => {
  it('es una función', () => {
    expect(typeof filterLocalities).toBe('function');
  });

  it("Debería retornar un array", () => {

    expect(Array.isArray(filterLocalities(data, "Gondoa"))).toStrictEqual(true);
  });
  it('Debería retornar un array con las localidades de todas las películas', () => {
    expect(filterLocalities(data)).toEqual(dataLocations);
  });
});

/*
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
  });
});
*/

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
    const array = [
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
    expect(result).toEqual([
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
    const array = [
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
    expect(result).toEqual([
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