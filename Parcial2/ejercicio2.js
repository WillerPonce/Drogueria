const data = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: ""
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2"
      },
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      type: "Genetic experiment",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Testicle Monster Dimension",
        url: "https://rickandmortyapi.com/api/location/21"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
    },
    {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: ""
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
    },
    {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
    },
    {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      type: "Superhuman (Ghost trains summoner)",
      gender: "Male",
      origin: {
        name: "unknown",
        url: ""
      },
      location: {
        name: "Worldender's lair",
        url: "https://rickandmortyapi.com/api/location/4"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
    }
  ];

  const characters = [];
let currentIndex = 0;

function getData() {
  console.log("Validar la Data");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2500);
  });
}

function requestData() {
  getData().then((data) => {
    console.log(data);
    processData(data);
    renderizar(currentIndex);
    currentIndex = (currentIndex + 1) % characters.length;
  });
}

  function processData(data) {
    data.map((item) => {
      const character = {
        name: item.name,
        location: item.location.name,
        img: item.image,
        specie: item.species
      };
      characters.push(character);
    });
  }

  function renderizar(index) {
    console.log("Entro en renderizar", characters[index]);
    let character = characters[index];
  
    document.getElementById("name").innerHTML = character.name;
    document.getElementById("location").innerHTML = character.location;
    document.getElementById("especie").innerHTML = character.specie;
    let img = document.getElementById("img");
    img.src = character.img;
  }