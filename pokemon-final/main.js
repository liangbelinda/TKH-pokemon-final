import fetchData from "./fetchPokemonAPI.js";
import addPokemon from "./addPokemon.js";
import removePokemon from "./removePokemon.js";
import displayPokemons from "./displayPokemons.js";
import sort from "./sort.js";
import filter from "./filter.js";

//an array of pokemon objects, a new object will be added when user adds a pokemon to team and an object will be removed when user removes a pokemon
let pokemonTeam = [];

//clicking addButton will trigger addPokemon function
const addButton = document.getElementById("addPokemon");
addButton.addEventListener("click", function() {
  addPokemon(pokemonTeam);
});
//clicking removeButton will trigger removePokemon function
const removeButton = document.getElementById("removePokemon");
removeButton.addEventListener("click", function() {
  pokemonTeam = removePokemon(pokemonTeam);
});
//clicking one of the sort options will trigger sort function
const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", function() {
  sort(filter(pokemonTeam));
});
//clicking one of the filter options will trigger filter function
const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", function() {
  filter(pokemonTeam);
});

displayPokemons(pokemonTeam);