import fetchData from "./fetchPokemonAPI.js";
import addPokemon from "./addPokemon.js";
import removePokemon from "./removePokemon.js";
import displayPokemons from "./displayPokemons.js";
import sort from "./sort.js";
import filter from "./filter.js";

let pokemonTeam = [];

const addButton = document.getElementById("addPokemon");
addButton.addEventListener("click", function() {
  addPokemon(pokemonTeam);
});
const removeButton = document.getElementById("removePokemon");
removeButton.addEventListener("click", function() {
  pokemonTeam = removePokemon(pokemonTeam);
});
const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", function() {
  sort(filter(pokemonTeam));
});
const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", function() {
  filter(pokemonTeam);
});

displayPokemons(pokemonTeam);