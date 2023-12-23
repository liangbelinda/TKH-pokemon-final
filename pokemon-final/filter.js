import displayPokemons from "./displayPokemons.js";


//takes in pokemonTeam, an array of pokemon objects, as a paramter and filters by pokemon type
export default function filter(pokemonTeam) {
    const filterType = document.getElementById("filter").value;
    if (filterType === "all") {
      displayPokemons(pokemonTeam);
      return pokemonTeam;
    } else {
      const filterTeam = pokemonTeam.filter((pokemon) => pokemon.type === filterType);
      displayPokemons(filterTeam);
      return filterTeam;
    }
  }