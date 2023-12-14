import fetchData from "./fetchPokemonAPI.js";
import displayPokemons from "./displayPokemons.js";

let pokemonTeam = [];

const addButton = document.getElementById("addPokemon");
addButton.addEventListener("click", addPokemon);
const removeButton = document.getElementById("removePokemon");
removeButton.addEventListener("click", removePokemon);
const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sort);
const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", filter);

async function addPokemon() {
  const userInput = prompt('Name of Pokemon:');
  const data = await fetchData(userInput.toLowerCase());
  const pokemonType = data.types["0"].type.name;
  let typeExist = false;
  for (let i=0; i < pokemonTeam.length; i++){
    if (pokemonTeam[i].type === pokemonType){
      typeExist = true;
    }
  }
  if (typeExist === false){
    const typeOption = document.createElement("option");
    typeOption.innerText = pokemonType;
    typeOption.value = pokemonType;
    filterSelect.append(typeOption);
  }
  
  const pokemonObj = {name: data.name,
    img: data.sprites.front_default,
    base_exp: data.base_experience,
    type: data.types["0"].type.name,
};
  pokemonTeam.push(pokemonObj);
  const pokemonList = document.getElementById("team");
  pokemonList.innerText = "";
  displayPokemons(pokemonTeam);
}

function removePokemon() {

}

function sort() {
  console.log("sort")
  pokemonTeam.sort(function(a, b) {
    return a.base_exp - b.base_exp;
  });
  displayPokemons(pokemonTeam);
}

function filter() {
  const filterType = document.getElementById("filter").value;
  if (filterType === "all") {
    displayPokemons(pokemonTeam);
  } else {
    const filterTeam = pokemonTeam.filter((pokemon) => pokemon.type === filterType);
    displayPokemons(filterTeam);
  }

}

displayPokemons(pokemonTeam);