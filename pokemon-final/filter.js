import displayPokemons from "./displayPokemons.js";

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